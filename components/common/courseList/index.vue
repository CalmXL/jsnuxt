<template>
  <div class="course-wrapper">
    <course-item
      v-for="(item, index) of courseList"
      :item="item"
      :key="index"
    ></course-item>
  </div>
</template>

<script>

import CourseItem from './courseItem.vue';

export default {
  name: 'CourseList',
  props: {
    courseList: Array
  },
  components: {
    CourseItem
  }
}
</script>

<style>

</style>