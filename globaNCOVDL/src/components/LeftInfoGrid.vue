<template>
    <div class="content">
      <section>
        <div>较上日+{{confirmData.chinaAdd.localConfirmH5}}</div>
        <div>{{confirmData.chinaTotal.localConfirm}}</div>
        <div>本土现有确诊</div>
      </section>
      <section>
        <div>较上日+{{confirmData.chinaAdd.nowConfirm}}</div>
        <div>{{confirmData.chinaTotal.nowConfirm}}</div>
        <div>现有确诊</div>
      </section>
      <section>
        <div>较上日+{{confirmData.chinaAdd.confirm}}</div>
        <div>{{confirmData.chinaTotal.confirm}}</div>
        <div>累计确诊</div>
      </section>
      <section>
        <div>较上日+{{confirmData.chinaAdd.noInfect}}</div>
        <div>{{confirmData.chinaTotal.noInfect}}</div>
        <div>无症状感染者</div>
      </section>
      <section>
        <div>较上日+{{confirmData.chinaAdd.importedCase}}</div>
        <div>{{confirmData.chinaTotal.importedCase}}</div>
        <div>境外输入</div>
      </section>
      <section>
        <div>较上日+{{confirmData.chinaAdd.dead}}</div>
        <div>{{confirmData.chinaTotal.dead}}</div>
        <div>累计死亡</div>
      </section>
    </div>
</template>
<script  setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useStore } from '../store/index'
import { Diseaseh5Shelf } from '../store/type';


const confirmStore = useStore()
let { dataList } = storeToRefs(confirmStore)

const confirmData = ref<Diseaseh5Shelf>(dataList.value.diseaseh5Shelf)



</script>

<style lang="less" scoped>
.content {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-gap: 2px;
  padding: 40px 5px;
  section{
    border-radius: 6%;
    background-color: #22a2c3;
    div {
      text-align: center;
      padding: 8px;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
