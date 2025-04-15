<template>
  <div class="stem">
    <h4>{{ index }}. {{ questiontype }}</h4>
    <div
      v-for="(line, lineIndex) in processedStem"
      :key="lineIndex"
    >
      <p class="stem-line">{{ line }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { index, type, stem } = defineProps<{
  index: number;
  type: string;
  stem: string | string[]; // 支持字符串和数组两种格式
}>();
// 统一处理题干为数组格式
const processedStem = computed(() => {
  return Array.isArray(stem) ? stem : [stem];
});

// 根据type的值，渲染不同的questiontype
const questiontype = computed(() => {
  switch (type) {
    case "multiple":
      return "选择题";
    case "judge":
      return "判断题";
    case "blank":
      return "填空题";
    case "sentence":
      return "造句题";
    default:
      return "未知题型";
  }
});
</script>

<style scoped>
.stem-line {
  margin: 8px 0;
  line-height: 1.6;
}
</style>
