<template>
  <span
    class="iconfont"
    :class="[data.icon]"
    :style="{ 'font-size': data.size + 'px', color: data.color }"
  >
  </span>
</template>
<script setup>
import { defineProps } from 'vue'
const data = defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: '#000'
  }
})
</script>
<style lang="scss" scoped></style>
