<template>
  <div id="lineChart"></div>
</template>

<script  setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';
import { useStore } from '../store';

const { dataList } = useStore()



onMounted(() => {
  const lineCharts = echarts.init(document.querySelector('#lineChart') as HTMLElement)
  // prettier-ignore
  const data = dataList.localCityNCOVDataList.slice(0, 100).map((v) => {
    return [v.province, v.local_wzz_add]
  })

  const dateList = data.map(function (item) {
    return item[0];
  });
  const valueList = data.map(function (item) {
    return item[1];
  });

  lineCharts.setOption({
    backgroundColor: '#15559a',
    dataZoom: {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      bottom:'18',
      start: 0,
      end: 15,
      backgroundColor: 'rgba(47,69,84,0)',
      height: '25'
    },
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
      }
    ],
    title: [
      {
        left: 'center',
        text: '本地确诊新增',
        textStyle: {
          color: '#fff',
          fontWeight: 600,
          fontSize: 20
        }
      },
    ],
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        },
        brush: {
          type: ['lineX', 'clear']
        }
      }
    },
    xAxis: {
      data: dateList,
      axisLabel: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 12
      },
    },
    yAxis: {
      axisLabel: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 12
      },
    },
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList
      }
    ]
  })
})

</script>
<style lang="less" scoped>
div {
  width: 100%;
  height: 30%;
  background-color: aliceblue;
}
</style>
