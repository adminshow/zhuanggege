<template>
  <div id="choose">
      <h1>建立广告计划</h1>
      <ul>
          <li>
              <el-dropdown>
                <span class="el-dropdown-link-left">
                    <img src="../../../static/img/jie1.png" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>推广目标:网页</el-dropdown-item>
                    <el-dropdown-item>计划名称:DD-广告测试团队-20171102-4</el-dropdown-item>
                    <el-dropdown-item>每日期限:500/天</el-dropdown-item>
                    <el-dropdown-item>
                        <input type="submit" value="下一步" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span class="el-dropdown-link-left">
                    <img src="../../../static/img/jie2.png" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        推广目标:
                        <span>网页</span>
                        <span>IOS应用</span>
                        <span>Android应用</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        计划名称:
                        <input type="text" placeholder="请设置广告名称" />
                    </el-dropdown-item>
                    <el-dropdown-item>
                        每日期限:
                        <input type="text" placeholder="请设置广告名称" />
                        元/天
                        <el-tooltip placement="top">
                            <div slot="content">最低100元，若不设置按账户金额进行投放</div>
                            <el-button>?</el-button>
                        </el-tooltip>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <input type="submit" value="下一步" />
                        <input type="submit" value="保存" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'choose'
}
</script>

<style scoped>
#choose{
    width: 100%;
    height: 100%;
}
h1{
    font-size: 36px;
    padding: 0 25px;
}
ul{
    list-style: none;
    padding: 20px;
}
ul>li{
    margin: 10px 0;
}
.el-dropdown{
    border:none;
}
.el-dropdown:nth-child(2) {
    padding:0 50px;
}
.el-dropdown:nth-child(2)>el-dropdown-menu>el-dropdown-item>span{
    padding: 5px;
    background: skyblue;
}
</style>
