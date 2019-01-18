<template>
  <div>
    <h1>当前路径：{{this.$route.path}}</h1>
    <el-tree
      :data="data"
      show-checkbox
      ref="tree"
      node-key="id"
      default-expand-all
      draggable
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.data.name }}</span>
        <span>
          <el-button
            v-permission="['staff']"
            type="text"
            size="mini"
            @click="() => append(node, data)">
            Append
          </el-button>
          <el-button
            v-permission="['staff']"
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
    <el-dialog
      title="添加职位"
      :visible.sync="dialogVisible"
      width="50%">
      <el-input placeholder="请输入你要添加的职位" v-model="temp"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      path: this.$route,
      dialogVisible: false,
      temp: '',
      current: {},
      data: [],
      // 参考某轮
      organize: [{
          id: 1, name: '***事业部', parentid: ''
        },{
          id: 2, name: '***事业部', parentid: ''
        },{
          id: 3, name: '总经办', parentid: ''
        },{
          id: 4, name: '技术研发', parentid: 1
        },{
          id: 5, name: '产品研发', parentid: 1
        },{
          id: 6, name: '市场渠道', parentid: 1
        },{
          id: 7, name: '商业合作', parentid: 1
        },{
          id: 8, name: '前端开发', parentid: 4
        },{
          id: 9, name: '后端开发', parentid: 4
        },{
          id: 10, name: 'ios开发', parentid: 4
        },{
          id: 11, name: 'android开发', parentid: 4
        },{
          id: 12, name: '测试', parentid: 4
        },{
          id: 13, name: '运维', parentid: 4
        },{
          id: 14, name: '设计', parentid: 4
        },{
          id: 15, name: '产品', parentid: 5
        },{
          id: 16, name: '运营', parentid: 5
        },{
          id: 17, name: '产品总监', parentid: 15
        },{
          id: 18, name: '产品经理', parentid: 15
        },{
          id: 19, name: '资深前端开发', parentid: 8
        },{
          id: 20, name: '高级前端开发', parentid: 8
        },{
          id: 21, name: '初级前端开发', parentid: 8
        },{
          id: 22, name: '孙月', parentid: 20
        }]
    }
  },
  methods: {
    formatData(arr){
      let newArr = [];
      arr.forEach((item, index)=>{
        if (!item.parentid){
          newArr.push(item);
        }else{
          this.findItem(newArr, item);
        }
      })
      this.data = newArr;
    },
    // 递归查找当前元素的父元素
    findItem(arr, item){
      arr.forEach((value, key)=>{
        if (item.parentid == value.id){
          if (value.children){
            value.children.push(item);
          }else{
            value.children = [item];
          }
        }else if(value.children){
          this.findItem(value.children, item);
        }
      })
    },
    // 添加元素
    append(node, data){
      console.log('node...', node, 'data...', data);
      this.dialogVisible = true;
      this.current = {
        node,
        data
      }
    },
    // 移除节点
    remove(node, data){
       this.$refs.tree.remove(node)
    },
    // 添加职位
    submitDialog(){
      if (this.temp){
        let newNode = {
          id: this.organize[this.organize.length-1].id+1,
          name: this.temp,
          parentid: this.current.data.id || ''
        }
        this.organize.push(newNode);
        console.log('organize...', this.organize);
        this.$refs.tree.append(newNode, this.current.node)
        this.dialogVisible = false;
        this.temp = '';
        // this.formatData(this.organize);
      }
    }
  },
  created() {
    this.formatData(this.organize);
  }
}
</script>