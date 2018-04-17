<template>
  <div id="home">
        <div class="tit">
          <el-tooltip placement="top">
            <div slot="content">账户剩余金额</div>
            <el-button>1,0000,0000</el-button>
          </el-tooltip>
        </div>
        <div class="tit">
          <el-tooltip placement="top">
            <div slot="content">今日消耗</div>
            <el-button>5,400</el-button>
          </el-tooltip>
        </div>
        <el-row>
          <el-col :span="24">
            <div>
              <el-row>
                <el-col :span="12"><h2>整体情况</h2></el-col>
                <el-col :span="12">
                  <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                  </el-date-picker>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="6">
                  <el-card shadow="always">
                    点击量(次)
                    278,456
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                    点击量(次)
                    278,456
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                    点击量(次)
                    278,456
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                    点击量(次)
                    278,456
                  </el-card>
                </el-col>
              </el-row>
              <el-row class="block-col-2">
                <el-col :span="24" class="active">
                  <!-- <span class="demonstration">hover 激活</span> -->
                  <el-dropdown>
                    <span class="el-dropdown-link-left">
                      曝光数<i class="el-icon-arrow-down el-icon--left"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                      <el-dropdown-item>双皮奶</el-dropdown-item>
                      <el-dropdown-item>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-dropdown>
                    <span class="el-dropdown-link-right">
                      点击数<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                      <el-dropdown-item>双皮奶</el-dropdown-item>
                      <el-dropdown-item>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <div class="table" ref='tubiao' style="width: auto;height:400px;"></div>
  </div>
</template>

<script>
import Echarts, { init } from 'echarts'
export default {
  name: 'home',
  data () {
    return {
      days: null,
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value6: '',
      value7: ''
    }
  },
  mounted() {
        let graphInstance = init(this.$refs.tubiao)
        let option = {
                xAxis: {
                    type: 'category',
                    data: ['2016/01', '2017/01','2018/01','2019/01','2020/01','2021/01',]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };

        graphInstance.setOption(option)
    }
}

</script>

<style scoped>

</style>
