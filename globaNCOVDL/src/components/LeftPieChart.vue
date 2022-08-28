<template>
  <div id="pieChart"></div>
</template>
<script  setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';
import {useStore} from '../store/index'

onMounted(() => {
  const pieChart = echarts.init(document.querySelector('#pieChart') as HTMLElement)
  let { dataList } = useStore()

  const localData =  dataList.localCityNCOVDataList.map((v) => {
    return {
      name: v.city,
      value: v.local_confirm_add
    }
  })
  
  pieChart.setOption({
    title: {
      text: '各省确诊病例',
      left: 'center',
      textStyle: {
        color: '#000',
        fontSize: 25,
      }
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#000',
      }
    },
    legend: {
      bottom: '5',
      textStyle: {
        color: '#fff',
        fontSize: 16,
      }
    },
    series: [
      {
        name: '本省确诊病例',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'inside'
        },
        avoidLabelOverlap: false,
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
            color: '#000'
          }
        },
        labelLine: {
          show: true,
        },
        data: localData.slice(0, 10)
      }
    ]
  })
})


</script>
<style lang="less" scoped>
div{
  width: 100%;
  height: 40%;
}
</style>
