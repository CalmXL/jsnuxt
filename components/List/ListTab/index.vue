<template>
  <div class="list-tab">
    <div class="tab-wrapper">
      <ul 
        class="tab-list"
        ref="tabList"
        :style="{ width: tabData.length * tabWidth + 'rem'}"
      >
        <tab-item 
          v-for="(item, index) of tabData"
          :key="item.id"
          :index="index"
          :item="item"
          @onTabClick="onTabClick(item.id)"
        ></tab-item>
      </ul>
    </div>
  </div>
</template>

<script>

import TabItem from './TabItem.vue';

export default {
  name: 'ListTab',
  props: {
    tabData: Array
  },
  components: {
    TabItem
  },
  data () {
    return {
      tabWidth: 1.2
    }
  },
  methods: {
    onTabClick (id) {
      console.log(1);
      this.$store.commit('selectTab', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-tab {
    height: .35rem;
    background-color: #fff;
    border-bottom: .01rem solid #eee;
    overflow: hidden;

    .tab-wrapper {
      height: .43rem;
      overflow-x: auto;
      overflow-y: hidden;

      .tab-list {
        height: .35rem;
      }
    }
  }
</style>