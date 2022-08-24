<template>
  <div class="continer">
    <m-header
      :backIconShow="true"
      :listIconShow="false"
    ></m-header>
    <error-board></error-board>
  </div>
</template>

<script>

import MHeader from '../components/common/header';
import ErrorBoard from '../components/common/error';

export default {
  props: [ 'error' ],
  components: {
    MHeader,
    ErrorBoard
  }
}
</script>

<style>

</style>