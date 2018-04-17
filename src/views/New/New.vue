<template>
  <div id="new">
      <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background: #ccc;">
        <el-menu :default-openeds="['1','2','3']" router>
          <el-submenu index="1">
            <template slot="title">建立广告计划</template>
            <el-menu-item index="/new/choose">选择计划</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">广告单元</template>
            <el-menu-item index="/new/jiben">基本信息</el-menu-item>
            <el-menu-item index="/new/ding">定向</el-menu-item>
            <el-menu-item index="/new/wei">广告位</el-menu-item>
            <el-menu-item index="/new/chu">出价</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">广告创意</template>
            <el-menu-item index="/new/luo">落地页</el-menu-item>
            <el-menu-item index="/new/chuang">上传创意</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
            <router-view></router-view>
    </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'new'
}
</script>

<style scoped>
#new{
    width:100%;
    height:100%;
}
.el-aside{
    width:200px;
    height:100%;
}
.el-aside>div{
    color: #000;
}
.el-header {
    background-color: pink;
    color: #000;
    line-height: 40px;
} 
.el-aside {
    background: skyblue;
    color: #000;
}
h4{
    color: #000;
    text-align: center;
}
.el-menu {
    background: skyblue;
    color: #000;
}
.el-menu li{
    color: #000;
}
.el-menu li:hover{
    background: #2873FF;
}
.el-submenu__title{
    color: #000;
}
.el-submenu__title:hover{
    background: #2873FF;
}
.el-menu-item{
    background: #ccc;
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
