<template>
  <div class="box">
    <div class="box-left">
      <LeftInfoGrid v-if="flag"></LeftInfoGrid>
      <LeftPieChart v-if="flag"></LeftPieChart>
      <LeftLineChart v-if="flag"></LeftLineChart>
    </div>
    <div class="box-centre" id="china"></div>
    <div class="box-right">
      <RightInfoTable></RightInfoTable>
    </div>
  </div>
</template>
<script  setup lang="ts">
import { City, useStore} from './store/index'
import { onMounted, ref} from 'vue';
import * as echarts from 'echarts'
import './assets/china.js'
import { geoCoordMap } from './assets/geoMap';
import RightInfoTable from './components/RightInfoTable.vue'
import LeftInfoGrid from './components/LeftInfoGrid.vue'
import LeftPieChart from './components/LeftPieChart.vue'
import LeftLineChart from './components/LeftLineChart.vue';

const datalist = useStore()
//在数据还未加载时不要挂载LeftInfoGrid组件
let flag = ref(false)

onMounted(async () => {
  //进行数据映射和数据的请求，此时store中的getData()函数会异步请求最新的疫情信息，并保存到dataList中
  await datalist.getData()
  flag.value = true
  //当数据请求完成之后执行mountedMap函数，挂载地图echarts组件
  mountedMap()
})

/* 
  地图组件的eCharts可视化
*/
const mountedMap = () => {
  //从store中获取每个市的新冠病毒感染人数
  const data: City[] = datalist.dataList.diseaseh5Shelf.areaTree[0].children.map((item) => {
    return {
      name: item.name,
      value: geoCoordMap[item.name].concat(item.total.nowConfirm),
      city: datalist.dataList.diseaseh5Shelf.areaTree[0].children
    }
  })
  
  //将北京的疫情情况设置为默认值
  let cityList: City = data.filter((cur) => {
    return cur.name == '北京'
  })[0]
  datalist.childrenCity = cityList.city.filter((item) => {
    return cityList.name == item.name 
  })[0]
  
  

  //初始化eCharts
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
        //normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        //},
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        //selectedMode: "multiple",  //多选
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 16,
        },
        itemStyle: {
          //normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          //},
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: [
          {name: '北京', selected: true}
        ],
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        //  symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          //normal: {
          show: true,
          //}
          //显示标志上的数字
          formatter(value: any) {
            return value.data.value[2]
          }
        },
        itemStyle: {
          color: '#0f79e2', //标志颜色
        },
        data: data,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        zlevel: 1
      },
    ],
  })

  //获取点击之后的城市信息并存储在仓库的city中
  charts.on('click', (e) => {
    let cityList: City = e.data as City
    //获取点击省的所有城市的疫情情况
    datalist.childrenCity = data[0].city.filter((item) => {
      return e.name == item.name 
    })[0]
  })
}

</script>

<style lang="less" scoped>
:global(#app) {
  height: 100%;
}
.box {
  display: flex;
  height: 100%;
  overflow: hidden;
  background-image: url(../public/image/iTab-285e6x.png);
  background-size: cover;
  background-position: center;

  &-left {
    flex: 1;
  }

  &-centre {
    padding: 10px;
    flex: 2 1;
    height: 70%;
  }

  &-right {
    flex: 1;
  }
}
</style>

