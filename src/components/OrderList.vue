<template>

  <div>

    <!-- 委托列表 -->
    <el-table
        :data="
        tableData.slice
        (
           (query.currentPage - 1) * query.pageSize,
            query.currentPage * query.pageSize
        )
      "
        border
        :cell-style="cellStyle"
        @sort-change="changeTableSort"
    >
      <el-table-column prop="code"  label="代码" align="center" sortable/>
      <el-table-column prop="name"  label="名称" align="center"/>
      <el-table-column prop="count" label="股票数量" align="center"/>
      <el-table-column prop="cost"  label="总投入" align="center" />
      <el-table-column label="成本" align="center" />

    </el-table>

  </div>
</template>

<script>
  export default {
    name: "OrderList",
    data(){
      return{
        tableData:[
          {code: '600025', name: '华能水电', count: 100, cost: 20},
          {code: '600000', name: '浦发银行', count: 100, cost: 20},
          {code: '000001', name: '平安银行', count: 100, cost: 20},
          {code: '600886', name: '国投电力', count: 100, cost: 20},
        ],
        balance:10,

        dataTotalCount:4,
        query:{
          currentPage:1,
          pageSize:2,
        }
      }
    }

  }
</script>

<style scoped>

</style>