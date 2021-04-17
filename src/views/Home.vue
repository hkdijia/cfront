<template>
  <div>
    <!-- 引入头部导航   -->
    <v-header></v-header>

    <!--    左侧菜单-->
    <v-sidebar></v-sidebar>


    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components:{
    vHeader,
    vSidebar,
  }
}
</script>
