import { defineStore } from "pinia";
import { getAppData } from '../server/index'
import { RootObject, Children, Today, Total,} from './type'

export interface City {
  city: Children[],
  name: string,
  value: number[]
}
//childrenCity的数据类型
export interface Childrens {
	date: string;
	today: Today;
	total: Total;
  children: Children1[];
	name: string;
	adcode: string;
}
//childrenCity中每一个城市的疫情情况
export interface Children1 {
  adcode: string,
  date: string,
  name: string,
  today: Today,
  total: Total
}

export const useStore = defineStore("bigDataStore", {
  state: () => ({
      dataList: <RootObject>{},
      childrenCity: <Childrens>{},
  }),
  getters: {

  },
  actions: {
    //异步请求服务器数据
    async getData() {
      const result = await getAppData()
      this.dataList = result
    }
  }
})