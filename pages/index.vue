<template>
  <div class="container">
    <m-header
      :backIconShow="false"
      :listIconShow="true"
    ></m-header>
    <pull-down-loading-text
      :loadingText="loadingText"
      :topPosition=".44"
    ></pull-down-loading-text>
    <scroll-wrapper
      :onPullDown="onPullDown"
    >
      <m-swiper 
        :sliderData="sliderData"
      ></m-swiper>
      <main-title
        title="前端进修班"
      ></main-title>
      <course-nav 
        :navData="navData"
      ></course-nav>

      <main-title
        title="平台合作方"
      ></main-title>
      <cooperation :linkData="linkData"></cooperation>

      <main-title
        title="官方推荐课程"
      ></main-title>
      <recom-course
        :recomCourseData="recomCourseData"
      ></recom-course>

      <collection 
        :collectionData="collectionData"
      ></collection>

      <main-title
          title="全网优秀老师"
          :linkShow=false
      ></main-title>
      <teacher 
        :teacherData="teacherData"
      ></teacher>

      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>

import MHeader from '../components/common/header';
import ScrollWrapper from '../components/common/scrollWrapper';
import MSwiper from '../components/index/swiper';
import MainTitle from '../components/common/mainTitle';
import CourseNav from '../components/index/CourseNav';
import Cooperation from '../components/index/cooperation';
import RecomCourse from '../components/index/recomCourse';
import Collection from '../components/index/collection';
import Teacher from '../components/index/teacher';
import MFooter from '../components/common/footer';
import PullDownLoadingText from '../components/common/pullDownLoadingText';

import { PULL_DOWN_TEXT } from '../config/config';

import IndexModel from '@/models';

const indexModel = new IndexModel();

export default {
  name: 'IndexPage',
  components: {
    MHeader,
    ScrollWrapper,
    MSwiper,
    MainTitle,
    CourseNav,
    Cooperation,
    RecomCourse,
    Collection,
    Teacher,
    MFooter,
    PullDownLoadingText
  },

  data () {
    return {
      sliderData: [],
      navData: [],
      linkData: [],
      recomCourseData: [],
      collectionData: [],
      teacherData: [],
      loadingText: PULL_DOWN_TEXT.PULLING
    }
  },
  
  async asyncData () {

    const { 
      sliderData, 
      navData,
      linkData,
      recomCourseData,
      collectionData,
      teacherData
    } = await indexModel.getHomeData();

    return {
      sliderData,
      navData,
      linkData,
      recomCourseData,
      collectionData,
      teacherData
    }
  },

  methods: {
    async getHomeData () {
      const {
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
        teacherData
      } = await indexModel.getHomeData();

      this.sliderData = sliderData;
      this.navData = navData;
      this.linkData = linkData;
      this.recomCourseData = recomCourseData;
      this.collectionData = collectionData;
      this.teacherData = teacherData;
    },

    onPullDown (scroll) {
      // 1. 设置下拉提示文字 -> pulling
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      this.getHomeData();

      setTimeout(() => {
        this.loadingText= PULL_DOWN_TEXT.FINISHED;

        setTimeout(() => {
          this.loadingText= PULL_DOWN_TEXT.FINISHED;
          // 下拉回弹
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
