<template>
  <div class="nav-wrapper">
    <nav-item 
      v-for="(item, index) of navData"
      :key="index"
      :item="item"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
export default {
  name: 'CourseNav', 
  components: { NavItem },
  props: {
    navData: Array
  }
}
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: solid .01rem #ddd;
    padding: .15rem .1rem .15rem 0;
  }
</style>