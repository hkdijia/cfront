<template>
  <el-autocomplete
    style="width: 100%"
    size="small"
    placeholder="代码/简称"

    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    :debounce=100
    @select="updateInput"
  >

  </el-autocomplete>
</template>

<script>
export default {
  name: "CodeInput",
  data(){
    return{
      state:'',
    }
  },

  methods:{
    /**
     *
     * @param queryString 输入框输入的值
     * @param callback  回调函数
     */
    querySearchAsync(queryString, callback){
      //  模拟值
      let list = [
        {code: '000001', name: '平安银行', value:'000001-平安银行'},
        {code: '600000', name: '浦发银行', value:'600000-浦发银行'},
      ];

      // 通知自动提示框提示的内容
      callback(list);
    },

    updateInput(item){
      this.state = ('000000' + item.code).slice(-6);
      this.$bus.emit('codeinput-selectd', item);
    }
  }
}
</script>

<style lang="scss">
  .wide-dropdown{
    width: 600px !important;
  }

</style>