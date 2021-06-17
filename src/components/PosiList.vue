<template>
  <div>

    <!-- 可用资金 -->
    <el-row style="margin-inside: 2px">
      <el-col span="5" >
        可用资金:{{balance}}
      </el-col>
    </el-row>

    <!-- 持仓列表 -->
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
      <el-table-column prop="code"  label="代码" align="center" sortable :formatter="codeFormatter"/>
      <el-table-column prop="name"  label="名称" align="center"/>
      <el-table-column prop="count" label="股票数量" align="center"/>
      <el-table-column prop="cost"  label="总投入" align="center" :formatter="moneyFormatter"/>
      <el-table-column label="成本" align="center" :formatter="costFormatter"/>

    </el-table>

    <!-- 分页控件 -->
    <div class="pagination">
      <el-button
          round type="primary" size="mini"
          style="margin-top: 2px; float: right"
          icon="el-icon-refresh"
          @click="queryRefresh"
      >
        刷新
      </el-button>

      <el-pagination
          background
        layout="total, prev, pager, next"
        :current-page="query.currentPage"
        :page-size="query.pageSize"
        :total="dataTotalCount"
        @current-change="handlePageChange"
      >

      </el-pagination>

    </div>
  </div>

</template>

<script>
import {constants} from '../api/constants'
import {codeFormat, moneyFormat} from '../api/formatter'
import {queryPosi,queryBalance} from '../api/orderApi'

export default {
  name: "PosiList",
  created() {
    this.tableData = this.posiData;
    this.balance = this.balanceData;
  },
  computed:{
    posiData() {
      return this.$store.state.posiData;
    },
    balanceData() {
      return moneyFormat(this.$store.state.balance);
    }
  },
  watch: {
    posiData: function (val) {
      this.tableData = val;
      this.dataTotalCount = val.length;
    },
    balanceData: function (val) {
      this.balance = val;
    }
  },
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
  },

  methods: {
    queryRefresh(){
      queryPosi();
      queryBalance();
    },
    costFormatter(row, column) {
      return (row.cost / constants.MULTI_FACTOR / row.count).toFixed(2);
    },
    moneyFormatter(row, column) {
      return moneyFormat(row.cost);
    },
    codeFormatter(row, column) {
      return codeFormat(row.code);
    },
    cellStyle({row, column, rowIndex, columnIndex}) {
      return "padding:2px";
    },

    handlePageChange(val) {
      // vue 3.0写法
      this.query.currentPage = val;
      // vue 2.0写法
      //this.$set(this.query, 'currentPage', val);
    },

    changeTableSort(column){
      if (column.order == "descending") {
        this.tableData = this.tableData.sort(
            // 600006  600001 000001
            (a, b) => b[column.prop] - a[column.prop]
        );
      } else {
        this.tableData = this.tableData.sort(
            // 600006  600001 000001
            (a, b) => a[column.prop] - b[column.prop]
        );
      }
    },
  }

}
</script>

<style scoped>

</style>
