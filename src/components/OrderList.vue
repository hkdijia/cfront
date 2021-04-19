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

      <!--委托时间 股票代码 名称 委托价格 委托数量 方向 状态-->
      <el-table-column prop="time" label="委托时间" align="center"
                       sortable :sort-orders="['ascending', 'descending']"/>
      <el-table-column prop="code" label="股票代码" :formatter="codeFormatter" align="center"/>
      <el-table-column prop="name" label="名称" align="center"/>
      <el-table-column prop="price" label="委托价格" :formatter="priceFormatter" align="center"/>
      <el-table-column prop="ocount" label="委托数量" align="center"/>
      <el-table-column prop="direction" label="方向" :formatter="directionFormatter" align="center"/>
      <el-table-column prop="status" label="状态" :formatter="statusFormatter" align="center"/>

    </el-table>

    <!--分页控件+刷新-->
    <div class="pagination">
      <el-button round
                 type="primary" size="mini"
                 style="margin-top:2px;float: right"
                 icon="el-icon-refresh"
                 @click="queryOrder">
        刷新
      </el-button>
      <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.currentPage"
          :page-size="query.pageSize"
          :total="dataTotalCount"
          @current-change="handlePageChange"/>
    </div>

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
          {
            time:'09:55:00',
            code:'000001',
            name:'平安银行',
            price:100,
            ocount:10,
            direction:'买入',
            status:3
          },


        ],
        balance:10,

        dataTotalCount:5,
        query:{
          currentPage:1,
          pageSize:10,
        }
      }
    },

    methods:{
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
        //  排序字段
        let fieldName = column.prop;
        //  排序方式
        let sortingType = column.order;

        if (fieldName === 'time') {
          if (sortingType == "descending") {
            this.tableData = this.tableData.sort((a, b) => {
                  if (b[fieldName] > a[fieldName]) {
                    return 1;
                  } else if (b[fieldName] === a[fieldName]) {
                    return 0;
                  } else {
                    return -1;
                  }
                }
            );
          } else {
            this.tableData = this.tableData.sort((a, b) => {
                  if (b[fieldName] > a[fieldName]) {
                    return -1;
                  } else if (b[fieldName] === a[fieldName]) {
                    return 0;
                  } else {
                    return 1;
                  }
                }
            );
          }
        }

      },
    }

  }
</script>

<style scoped>

</style>