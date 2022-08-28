<template>
  <div id="main"></div>
</template>
<script  setup lang="ts">
import * as charts from 'echarts'
import { storeToRefs } from 'pinia';
import {watch } from 'vue'
import { Childrens, useStore } from '../store/index'


const datalist = useStore()
let { childrenCity } = storeToRefs(datalist)

watch(childrenCity, (cur) => {
  //卸载eChart表
  charts.dispose(document.querySelector('#main') as HTMLElement)
  //重新挂载eCharts数据表
  mountedInfo(cur)
})


const mountedInfo = (childrenCity: Childrens) => {
  const echarts = charts.init(document.querySelector('#main') as HTMLElement)
  echarts.setOption({
    color: ['#1661ab','#ee3f4d','#41b349', '#fed71a'],

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 60
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
      },
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
      },
      data: childrenCity.children.map((v) => {
        return v.name
      })
    },
    series: [
      {
        name: '新增确诊',
        type: 'bar',
        data: childrenCity.children.map((v) => {
        return v.today.confirm
      })
      },
      {
        name: '累计确诊',
        type: 'bar',
        data: childrenCity.children.map((v) => {
        return v.total.confirm
      })
      },
      {
        name: '治愈',
        type: 'bar',
        data: childrenCity.children.map((v) => {
        return v.total.heal
      })
      },
      {
        name: '死亡',
        type: 'bar',
        data: childrenCity.children.map((v) => {
        return v.total.dead
      })
      }
    ]
  })
}

</script>
<style lang="less">
#main {
  width: 100%;
  height: 100%;
}
</style>
