<template>
  <div>

    <!--  搜索条件栏  -->
    <div class="handle-box">
      <el-row>
        <!--   自动提示框     -->
        <el-col :span = "4">
            <code-input/>
        </el-col>

        <!--  日期选择器      -->
        <div style="float: left; margin-left: 10px">
          <el-date-picker
            size="small"
            type="date"
            placeholder="选择日期"

            v-model="query.startData"
          />
          -
          <el-date-picker
              size="small"
              type="date"
              placeholder="选择日期"

              v-model="query.endData"
          />
        </div>

        <!--   搜索按钮     -->
        <el-button style="float: left; margin-left: 10px"
          size="small"
          type="primary"
          icon="el-icon-search"
          @click="handleSearch"
        >
          搜索
        </el-button>

      </el-row>
    </div>

    <!--  历史委托查询结果  -->
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
      <el-table-column prop="time" label="委托时间" align="center" sortable/>
      <!--                       sortable :sort-orders="['ascending', 'descending']"/>-->
      <el-table-column prop="code" label="股票代码" :formatter="codeFormatter" align="center"/>
      <el-table-column prop="name" label="名称" align="center"/>
      <el-table-column prop="price" label="委托价格" :formatter="priceFormatter" align="center"/>
      <el-table-column prop="ocount" label="委托数量" align="center"/>
      <el-table-column prop="direction" label="方向" :formatter="directionFormatter" align="center"/>
      <el-table-column prop="status" label="状态" :formatter="statusFormatter" align="center"/>
    </el-table>

    <!--  分页控件  -->
    <!--分页控件+刷新-->
    <div class="pagination">
      <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.currentPage"
          :page-size="query.pageSize"
          :total="pageTotal"
          @current-change="handlePageChange"/>
    </div>

  </div>
</template>

<script>

  import CodeInput from "./CodeInput";

  export default {
    name: "hisOrderList",
    components:{
      CodeInput,
    },

    data(){
      return{
        tableData:[
          {
            time:'09:55:00',
            code:'000001',
            name:'平安银行',
            price:100,
            ocount:10,
            direction:'买入',
            status:3
          },
          {
            time:'07:15:00',
            code:'600025',
            name:'华能水电',
            price:200,
            ocount:30,
            direction:'买入',
            status:3
          },
          {
            time:'17:33:00',
            code:'600000',
            name:'浦发银行',
            price:122,
            ocount:30,
            direction:'买入',
            status:3
          },

          {
            time:'15:22:00',
            code:'600886',
            name:'国投电力',
            price:33,
            ocount:30,
            direction:'买入',
            status:3
          },
        ],

        pageTotal:4,
        query:{
          currentPage:1,
          pageSize:3,
          code:'',
          startData:'',
          endData:'',
        }
      }
    },

    methods:{

      handlePageChange(val) {
        // vue 3.0写法
        this.query.currentPage = val;
        // vue 2.0写法
        //this.$set(this.query, 'currentPage', val);
      },

      updateSelectedCode(item){
        this.query.code = item.code;
      },

      handleSearch(){

      },

      cellStyle({row, column, rowIndex, columnIndex}) {
        return "padding:2px";
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


    },

    created() {
      this.$bus.on('codeinput-selectd', this.updateSelectedCode);
    },

    beforeDestroy() {
      this.$bus.off('codeinput-selectd', this.updateSelectedCode);
    },


  }
</script>

<style scoped>

</style>