<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Bg from '@/assets/bg.jpg'
import {imgToBase64, uploadBase64} from '@/api/index'
export default {
  computed: {
    canvas(){
      return this.$refs.canvas;
    },
    context(){
      console.log(this.$refs.canvas);
      return this.$refs.canvas.getContext('2d');
    }
  },
  methods: {
    async init(){
      let {canvas,context} = this;
      let img = await this.loadImage(Bg);
      canvas.width = img.width;
      canvas.height = img.height;
      // 绘制背景
      context.drawImage(img, 0,0,img.width,img.height, 0,0,img.width,img.height);
      // 绘制头像
      // const avatarUrl = 'https://avatars1.githubusercontent.com/u/8192412?s=460&v=4';
      const res = await imgToBase64('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3449631764,4089729752&fm=26&gp=0.jpg');
      const avatarUrl = res.data.base64;
      // console.log('avatarUrl...', avatarUrl);
      let avatar = await this.loadImage(avatarUrl);
      context.drawImage(avatar, 0, 0, avatar.width, avatar.height, 97, 747, 86, 86);
      // 绘制文本
      context.font = '26px 微软雅黑';
      context.fillStyle = '#265f18';
      let text = context.measureText("茉莉");
      context.fillText('茉莉', 140-text.width/2, 865);
      context.save();

      // 绘制圆形边框
      context.beginPath();
      context.lineWidth=4;
      context.strokeStyle="#8db287";
      context.arc(140,790,43,0,360,false);
      context.stroke();
      context.closePath();

      // 生成图片
      let base64 = canvas.toDataURL('image/jpeg', 0.6);
      // console.log('base64...', base64);
      const upload = await uploadBase64(base64);
      console.log('upload...', upload);
    },
    loadImage(src){
      return new Promise((resolve, reject)=>{
        let img = new Image();
        img.src = src;
        img.onload = ()=>{
          resolve(img);
        }
        img.onerrpr = ()=>{
          reject();
        }
      })
    }
  },
  mounted(){
    this.init();
  }
}
</script>
<style lang="scss">
  canvas{
    width: 100%;
  }
</style>
