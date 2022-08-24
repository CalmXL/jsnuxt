<template>
  <header class="header">
    <header-back-icon
      :backIconShow="backIconShow"
    ></header-back-icon>
    <header-logo />
    <header-list-icon
      :listIconShow="listIconShow"
    ></header-list-icon>
  </header>
</template>

<script>

import HeaderBackIcon from './backIcon.vue';
import HeaderListIcon from './listIcon.vue';
import HeaderLogo from './logo.vue';

export default {
  name: 'MHeader',
  components: {
    HeaderBackIcon,
    HeaderListIcon,
    HeaderLogo
  },
  props: {
    backIconShow: {
      type: Boolean,
      default () {
        return false;
      }
    },
    listIconShow: {
      type: Boolean,
      default () {
        return true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  	.header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: .44rem;
      background-color: #fff;
      border-bottom: .01rem solid #ddd;
    }
</style>