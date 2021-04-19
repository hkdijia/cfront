<template>
  <div>
    <!-- 引入头部导航   -->
    <v-header></v-header>

    <!--    左侧菜单-->
    <v-sidebar></v-sidebar>

<!--    <router-view></router-view>-->

    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>


  </div>

</template>

<script>

import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  data() {
    return {
      collapse: false,
    }
  },

  components:{
    vHeader,
    vSidebar,
  },

  created() {
    this.$bus.on("collapse-content",msg => {
      this.collapse = msg;
    })
  },

  beforeDestroy() {
    this.$bus.off("collapse-content", msg => {
      this.collapse = msg;
    });
  }

}
</script>
