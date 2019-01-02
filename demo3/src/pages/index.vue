<template>
  <div class="wraps">
    <div class="headers">
      <div class="headers_ul">
        <li>产品</li>
        <li>关于我们</li>
        <li>大数据</li>
        <li>新闻</li>
        <li>招聘</li>
        <li>商城</li>
        <li>登录/注册</li>
      </div>
      <div class="headers_btn">
        <li @click="btn">+</li>
        <div class="toggle" v-if="isShow">
          <li>产品</li>
          <li>关于我们</li>
          <li>大数据</li>
          <li>新闻</li>
          <li>招聘</li>
          <li>商城</li>
          <li>登录/注册</li>
        </div>
      </div>
    </div>
    <div class="sections">
      <div class="banners">
        <img src="../static/imgs/ban.jpg" alt>
      </div>
      <div class="trend">
        <li>分析评论</li>
        <li>趋势榜单</li>
        <li>研究报告</li>
      </div>
    </div>
    <div class="footers"></div>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    btn: function() {
      if (this.isShow == false) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
  //   mounted: function() {
  //     //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
  //     let w = document.documentElement.offsetWidth || document.body.offsetWidth;
  //     if (w < 1000) {
  //       this.show = false;
  //     }
  //   }
};
</script>

<style>
@media screen and (min-width: 768px) {
  .wraps {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(245, 242, 242);
    padding: 0 0.8rem;
  }
  .headers {
    width: 100%;
    height: 1rem;
    background: url("../static/imgs/pc.jpg") no-repeat;
    background-size: cover;
    border-bottom: 0.015rem solid rgb(43, 43, 88);
  }
  .headers_ul {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10%;
    top: 0;
  }
  .headers_ul > li {
    width: 6%;
    font-size: 0.18rem;
  }
  .headers_btn {
    display: none;
  }

  .sections {
    width: 100%;
    flex: 1;
  }

  .banners {
    width: 100%;
    height: 6rem;
  }
  .banners > img {
    width: 100%;
    height: 100%;
  }

  .trend {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.trend > li {
  font-size: 0.2rem;
}

@media screen and (max-width: 768px) {
  .wraps {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .headers {
    width: 100%;
    height: 1rem;
    background: url("../static/imgs/ph.jpg") no-repeat;
    background-size: cover;
    border-bottom: 0.015rem solid rgb(43, 43, 88);
  }
  .headers_ul {
    display: none;
  }
  .headers_btn {
    width: 100%;
    text-align: right;
    line-height: 1rem;
    padding-right: 0.3rem;
    font-size: 0.5rem;
  }

  .sections {
    width: 100%;
    flex: 1;
  }
  .banners {
    width: 100%;
    height: 4.8rem;
  }
  .banners > img {
    width: 100%;
    height: 100%;
  }

  .trend {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .trend > li {
    font-size: 0.28rem;
  }

  .toggle {
    width: 100%;
    height:100%;
    background: rgb(73, 162, 245);
    position: absolute;
    top: 1rem;
    right: 0;
    padding: 0 0.5rem;
  }
  .toggle li {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 0.01rem solid #fff;
    font-size: 0.38rem;
    color: #fff;
    text-align:left;
    font-family: '楷体';
  }
}
</style>
