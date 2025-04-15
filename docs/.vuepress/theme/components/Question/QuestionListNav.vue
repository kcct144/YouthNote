<template>
  <div class="list">
    <div
      :class="`box ${currentIndex === index ? 'active' : ''}`"
      v-for="(item, index) in indexArr"
      :key="index"
      @click="handleClick(index)"
    >
      <span class="index">{{ index + 1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["handleClick"]);
const { length, currentIndex } = defineProps(["length", "currentIndex"]);
const indexArr = computed(() => new Array(length).fill(0));

const handleClick = (index) => {
  emit("handleClick", index);
};
</script>

<style scoped>
.list {
  display: flex;
  gap: 0.5rem;
}
.box {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-brand-1);
}
.active {
  background-color: var(--vp-c-brand-1);
  color: #fff;
}
</style>
