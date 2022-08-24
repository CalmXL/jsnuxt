<template>
  <div class="collection-wrapper">
    <collection-item
      v-for="(item, index) of collectionData"
      :key="index"
      :item="item"
    >
    </collection-item>
  </div>
</template>

<script>

import CollectionItem from './collectionItem.vue';

export default {
  name: 'Collection',
  components: {
    CollectionItem
  },
  props: {
    collectionData: Array
  }
}
</script>

<style>

</style>