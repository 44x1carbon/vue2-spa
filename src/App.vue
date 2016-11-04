<template>
  <div>
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from './components/nav-menu.vue'

export default {
  data() {
    return {
      events:[]
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style>
  body {
    color: #35495e;
  }
</style>
