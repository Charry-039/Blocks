<script setup>

defineProps({
  id: Number,
})

// 工具函数，用于获取静态资源的完整路径
function getAssetImage(imgSrc) {
  return new URL(`../assets/img/p${imgSrc}.png`, import.meta.url).href;
}
</script>

<template>
  <img :src="getAssetImage(id)" alt="">
</template>

<style scoped lang="less">
@img_size: 100px;

img {
  border: black solid 4px;
  height: @img_size;
  width: @img_size;
  line-height: 0;
  margin: 1px;
  border-radius: 15%;
}

img:hover {
  border: black dotted 4px;
}
</style>