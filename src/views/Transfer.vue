<template>
  <div>
      <!--    信息提示-->
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <i class="el-icon-baseball"></i>银证转账
          </el-breadcrumb-item>
        </el-breadcrumb>

      </div>


    <el-card shadow="hover" class="container">
      <el-row style="padding: 0 15%">
        <el-form label-width="180px">
          <el-form-item label="转账方式">
            <el-select v-model = "type" >
              <el-option v-for="item in form.type"
                         :key = "item.id"
                         :label = "item.name"
                         :value="item.id"/>
            </el-select>
          </el-form-item>

          <el-form-item label="选择银行">
            <el-select v-model = "bank" >
              <el-option v-for="item in form.bank"
                         :key = "item.id"
                         :label = "item.name"
                         :value="item.name"/>
            </el-select>
          </el-form-item>

          <el-form-item label="银行密码">
            <el-input type="'password'" v-model="form.password"/>
          </el-form-item>

          <el-form-item label="选择币种">
            <el-select v-model = "moneyType" >
              <el-option v-for="item in form.moneyType"
                         :key = "item.id"
                         :label = "item.name"
                         :value="item.id"/>
            </el-select>
          </el-form-item>

          <el-form-item label="金额">
            <el-input type="text" v-model="form.money"/>
          </el-form-item>

          <el-form-item >
            <el-button style="float:right" size="small" type="primary">转账</el-button>
          </el-form-item>

        </el-form>
      </el-row>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "Transfer",
  data(){
    return{
      form:{
        type:[{id:1, name: '银行转证券(转入)'}, {id:0, name: '证券转银行(转出)'}],
        bank:[{id:0, name: '招商银行'}, {id:0, name: '建设银行'}],
        moneyType:[{id:0, name:'人民币'}, {id:1, name:'美元'}],
        password:'',
        money:0,
      },

      type: 0,
      bank: '招商银行',
      moneyType:0,


    }
  }
}
</script>

<style scoped>

</style>