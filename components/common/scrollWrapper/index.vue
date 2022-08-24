<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollWrapper',
  props: {
    onPullDown: Function
  },
  mounted () {
    const BetterScroll = require('better-scroll').default;

    this.scroll = new BetterScroll(this.$refs.wrapper, {
      // observeDOM: true,
      mouseWheel: true, // 滚轮可以fun东
      click: true, // 鼠标点击
      tap: true, // 手机端
      pullDownRefresh: { 
        threshold: 50, // 拉下来在50px 停止
        stop: 50
      }
    });

    this.scroll.on('pullingDown', this.onPullDown.bind(null, this.scroll));

  }
}
</script>

<style>

</style>