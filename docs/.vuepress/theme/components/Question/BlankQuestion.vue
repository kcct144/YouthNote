<template>
  <div class="blank">
    <el-input
      v-for="(_, index) in processedAnswer"
      :key="index"
      v-model="submissions[index]"
      @keydown.enter="handleEnter"
      :placeholder="`第 ${index + 1} 个空`"
      size="medium"
      style="width: 150px; padding-right: 10px"
      @change="handleChange"
    >
      <template #prepend>
        <span class="index-badge">{{ index + 1 }}.</span>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
interface Props {
  answer: string[] | string;
}
const props = defineProps<Props>();
// 新增emit类型
const emit = defineEmits(["handleChange", "submit"]);

// 新增Enter处理
const handleEnter = () => {
  emit("submit");
};
// 统一处理answer为数组格式
const processedAnswer = computed(() => {
  return Array.isArray(props.answer) ? props.answer : [props.answer];
});

// 初始化空值数组
const submissions = ref<string[]>(processedAnswer.value.map(() => ""));

watch(
  () => props.answer,
  (newVal) => {
    const newAnswers = Array.isArray(newVal) ? newVal : [newVal];
    // 智能合并已存在答案
    submissions.value = newAnswers.map((_, index) =>
      index < submissions.value.length ? submissions.value[index] : ""
    );
  },
  { immediate: true, deep: true }
);

const handleChange = () => {
  emit(
    "handleChange",
    submissions.value.length === 1
      ? submissions.value[0]
      : [...submissions.value]
  );
};
</script>

<style scoped>
/* 新增prepend容器样式 */
:deep(.el-input-group__prepend) {
  padding: 0 8px;
  width: 30px !important; /* 控制整个prepend区域宽度 */
}

.index-badge {
  display: block;
  text-align: center;
  font-size: 14px;
}
</style>
