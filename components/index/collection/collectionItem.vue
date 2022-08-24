<template>
  <div class="collection-item">
    <main-title
      :title="item.title"
    ></main-title>
    <course-list
      :courseList="item.courseDataList"
    ></course-list>
  </div>
</template>

<script>

import MainTitle from '../../common/mainTitle';
import CourseList from '../../common/courseList';

export default {
  name: 'CollectionItem',
  props: {
    item: Object
  },  
  components: {
    MainTitle,
    CourseList
  },
  mounted ()  {
    // console.log(this.item);
  }
}
</script>

<style>

</style>