<template>
  <n-space vertical :size="12">

<!--    <n-space justify="end">-->
    <template #top-right>
      <n-button strong round type="primary" @click="clickGreenImporter">引入Green</n-button>
    </template>
<!--    </n-space>-->
    <n-data-table
        :bordered="false"
        :columns="columns"
        :data="data"
        :pagination="pagination"
    />
    <ModalDialog ref="modalDialogShow" @confirm="onDataFormConfirm">
      <template #content>
        <DataForm ref="itemDataFormRef"/>
      </template>
    </ModalDialog>
  </n-space>
</template>

<script lang="ts">
import {defineComponent,ref} from "vue";
import type {DataTableColumns} from 'naive-ui'
import { DataFormType, ModalDialogType, FormItem } from '@/types/components'
import ModalDialog from "@/components/common/ModalDialog.vue";
import DataForm from "@/components/common/DataForm";

type RowData ={
  key: number
  name: string
  title: string
  controllerBy: string
  status: string
  scheduleStatus: string
  scheduledAt: string
}
const createData = (): RowData[]=>[
  {
    key:0,
    name:"asd",
    title:"a",
    controllerBy:"asda",
    status:"dada",
    scheduleStatus: "sda",
    scheduledAt: "asd",
  },
]

const createColumnData=({sendMail}:{sendMail:(rowData:RowData)=>void}):DataTableColumns<RowData>=>{
  return [
    {
      title: '名称',
      key:'name',
    },
    {
      title: '所属控制器',
      key:'controllerBy',
    },
    {
      title: '状态',
      key: 'status',
    },
    {
      title: '调度状态',
      key: 'scheduleStatus',
    },
    {
      title: '定时时间',
      key:'scheduledAt',
      render(row){

      }
    },

  ]
}



export default defineComponent({
  name: "PodList",
  components: {DataForm, ModalDialog},
  setup(){
    const modalDialogShow=ref<ModalDialogType|null>(null)
    const itemDataFormRef =ref<DataFormType|null>(null)
    //打开
    function clickGreenImporter(){
      modalDialogShow.value?.toggle()

    }
    function onDataFormConfirm(){
      modalDialogShow.value?.toggle()

    }
    return {
      data: createData(),
      columns: createColumnData({
        sendMail(rowData){

        }
      }),
      pagination: {
        pageSize:10
      },
      clickGreenImporter,
      modalDialogShow,
      onDataFormConfirm,
      itemDataFormRef
    }
  }
})
</script>

<style scoped>

</style>


<!--展示pod列表,实现kube-green的定时调度pod功能，支持按施加决定调度-->