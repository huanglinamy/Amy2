<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="userName"
        prop="username">
      </el-table-column>
       <el-table-column
        label="Phone"
        prop="phone">
      </el-table-column>
       <el-table-column
        label="Email"
        prop="email">
      </el-table-column>
       <el-table-column
        label="Address"
        prop="address">
      </el-table-column>
       <!-- <el-table-column
        label="Phone"
        prop="phone">
      </el-table-column> -->
       <el-table-column
        label="Roler"
        prop="">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :currentPage="currentPage" background :total="100" @current-change="loadData"></el-pagination>

    <el-dialog
      :title="type==edit?'修改用户信息':'为用户分配权限'"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form :model="current" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="current.date"
            type="date"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="current.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model.number="current.address"></el-input>
        </el-form-item>
        <el-form-item label="我的标签" prop="roler">
          <el-tag
            v-for="tag in myTag"
            :key="tag"
            closable
            style="marginRight: 5px"
            @close="deleteTag(tag)"
            :type="tag.type">
            {{tag}}
          </el-tag>

        </el-form-item>
        <el-form-item label="所有标签">
          <el-tag
            v-for="tag in tags"
            :key="tag"
            style="marginRight: 5px"
            :type="tag.type">
            <span  @click="selectTag">{{tag}}</span>
          </el-tag>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  export default {
    data() {
      const dateValidate = (ruler, value, callback)=>{
        console.log('value...', value);
        if (value < '2018-01-01'){
          callback(new Error('当前日期不能小于2018-01-01'))
        }else{
          callback();
        }
      }
      return {
        type: '',
        tags: ['developer','producter','boss','operator', 'designer'], 
        myTag: [],
        search: '',
        current: {},
        rules: {
          date: [{trigger:'blur', validator: dateValidate}],
          name: [{trigger:'blur', required: 'true'}],
          address: [{trigger:'blur', required: 'true'}]
        },
        dialogVisible: false
      }
    },
    computed: {
      ...mapState({
        tableData: state=>state.list.list,
        currentPage: state=>state.list.current
      })
    },
    created(){
      this.getUserList();
    },
    methods: {
      ...mapActions({
        getUserList: 'list/GetUserList'
      }),
      loadData(page){
        console.log('page...', page);
        this.getUserList([`page=${page}`])
      },
      handleEdit(index, row) {
        this.dialogVisible = true;
        this.type = 'edit';
        this.current = row;
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.dialogVisible = true;
        this.type = 'permission';
        this.current = row;
        console.log(index, row);
      },
      handleClose(){
        this.dialogVisible = false;
      },
      submitForm(){
        this.$refs.ruleForm.validate(valid=>{
          if (valid){
            console.log('校验通过');
             this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success'
            });
          }else{
             this.$notify({
              title: '成功',
              message: '修改失败',
              type: 'error'
            });
          }
        })
        console.log('current...', this.current);
      },
      selectTag(e){
        console.log('e...', e);
        let tag = e.target.innerText;
        this.myTag.push(tag);
        this.myTag = [...new Set(this.myTag)];
      },
      deleteTag(tag){
        let index = this.myTag.findIndex(item=>item==tag);
        this.myTag.splice(index,1);
      }
    },
  }
</script>
