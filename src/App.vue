<template>
  <div id='app'>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px"  height="1000px">
        <h4>广告投放系统</h4>
        <el-menu :default-openeds="['2', '3']" router>
          <el-menu-item class="createNew" index="/new"><i class="el-icon-plus"></i>新建广告</el-menu-item>
          <el-menu-item index="/home"><i class="el-icon-message"></i>首页概览</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>广告管理</template>
            <el-menu-item index="/plan">广告计划</el-menu-item>
            <el-menu-item index="/unit">广告单元</el-menu-item>
            <el-menu-item index="/creative">广告创意</el-menu-item>
          </el-submenu>
          <el-menu-item index="/center"><i class="el-icon-setting"></i>数据中心</el-menu-item>
          <el-menu-item index="/box"><i class="el-icon-loading"></i>工具箱</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-header style="text-align: right; font-size: 12px">
          <!-- <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <span>{{username}}</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "app",
  computed: {
    ...mapState(['username'])
  },
  data () {
    return {
        isCollapse: true
      }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#app{
    width:100%;
    height:100%;
}
.el-aside{
    width:200px;
    height:100%;
}
.el-header {
    background-color: pink;
    color: #333;
    line-height: 40px;
} 
.el-aside {
    background: #022050;
    color: #333;
}
h4{
    color: #fff;
    text-align: center;
}
.el-menu {
    background: #022050;
    color: #fff;
}
.el-menu li{
    color: #fff;
}
.el-menu li:hover{
    background: #2873FF;
}
.el-submenu__title{
    color: #fff;
}
.el-submenu__title:hover{
    background: #2873FF;
}
.el-menu-item{
    background: #1C2941;
}
.el-main{
  width:100%;
  height: 100%;
}
.active{
    margin: 10px 0;
    width:30px;
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.el-dropdown{
    padding: 5px;
    border: 2px solid skyblue;
    border-radius: 5px;
}
.el-menu-item createNew{
    background: #1C2941;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
}
.el-radio-group{
    position: absolute;
    left:200px;
}
</style>
