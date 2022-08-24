<template>
  <div class="container">
    <m-header
      :backIconShow="true"
      :listIconShow="false"
    ></m-header>
    <list-tab
      :tabData="tabData"
    ></list-tab>
    <pull-down-loading-text
      :loadingText="loadingText"
      :topPosition=".79"
    ></pull-down-loading-text>
    <scroll-wrapper
      :onPullDown="onPullDown"
    >
      <course-list
        :courseList="currentCourseData"
      ></course-list>
    </scroll-wrapper>
  </div>
</template>

<script>

import { mapState } from 'vuex';

import MHeader from '../components/common/header';
import MFooter from '../components/common/footer';
import ListTab from '../components/List/ListTab';
import ScrollWrapper from '../components/common/scrollWrapper';
import CourseList from '../components/common/courseList';
import PullDownLoadingText from '../components/common/pullDownLoadingText';

import ListModel from '../models';

import { PULL_DOWN_TEXT } from '../config/config';

const listModel = new ListModel();
 
export default {
  name: 'List',
  components: {
    MHeader,
    MFooter,
    ListTab,
    ScrollWrapper,
    CourseList,
    PullDownLoadingText
},
  data () {
    return {
      tabData: [],
      courseData: [],
      currentCourseData: [],
      loadingText: PULL_DOWN_TEXT.PULLING
    }
  },

  async asyncData () {
    const {
      tabData,
      courseData
    } = await listModel.getListData();

    return {
      tabData: [{ id : 0, title: '全部课程' }].concat(tabData),
      courseData,
      currentCourseData: courseData
    }
  },

  computed: {
    ...mapState(['id'])
  },

  watch: {
    id () {
      this.currentCourseData = this.courseData.filter(item => item.field === this.id);
    }
  },

  methods: {
    async getCourseData () {
      const courseData = await listModel.getCourseData();

      this.courseData = courseData;
      this.currentCourseData = courseData.filter(item => item.field === id);
    },

    onPullDown (scroll) {
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      this.getCourseData();

      setTimeout(() => {
        this.loadingText= PULL_DOWN_TEXT.FINISHED;

        setTimeout(() => {
          this.loadingText= PULL_DOWN_TEXT.FINISHED;
          scroll.finishPullDown();
        }, 500);

        setTimeout(() => {
          this.loadingText = PULL_DOWN_TEXT.ORIGIN;
        }, 1000);
      }, 1500);
    }

  }
}
</script>

<style>
</style>