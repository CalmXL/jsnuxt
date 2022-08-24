<template>
  <a
    :href="item.href"  
    target="_blank"
  >
    <img 
      :src="item.imgUrl"
      :alt="item.tile"
    />
  </a>
</template>

<script>
export default {
  name: 'SwiperItem',
  props: {
    item: Object
  }
}
</script>

<style>

</style>