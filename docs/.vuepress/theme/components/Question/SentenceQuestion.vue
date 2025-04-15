<template>
  <div class="container">
    <div class="wrapper">
      <div
        v-for="(item, index) in blankArr"
        :key="index"
        class="box blank"
        :class="{
          filled: userAnswers[index],
          correct: showRes && isCorrect(item, index),
          wrong: showRes && !isCorrect(item, index),
        }"
        @click="clickBox(item, index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="wrapper">
      <div
        class="box"
        v-for="(item, index) in remainOptions"
        :key="index"
        @click="clickAnswer(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 填空题组件
 * @property {string[]} answer - 正确答案数组
 * @property {string[]} options - 所有可用选项数组
 * @property {string} curAnswer - 当前答案（未使用）
 */
import { ref, computed, watchEffect, onMounted, onBeforeMount } from "vue";
import emitter from "../../utils/emitter";
// 组件参数定义
const { answer, options, curAnswer } = defineProps([
  "answer",
  "options",
  "curAnswer",
]);
// 用户答案存储（响应式数组）
const userAnswers = ref<string[]>([]);
/**
 * 初始化用户答案数组
 * 当options变化时重置为全空数组
 */
watchEffect(() => {
  userAnswers.value = new Array(options.length).fill("");
});
/**
 * 计算当前可操作的填空索引
 * @returns {number} 第一个空白位置索引，若无则返回最后位置
 */
const curIndex = computed(() => {
  const index = userAnswers.value.indexOf("");
  if (index === -1) return userAnswers.value.length - 1;
  return index;
});
// 控制结果显示状态
const showRes = ref(false);
/**
 * 生成初始填空占位符（****）
 * @returns {string[]} 占位符数组
 */
const blankTemp = computed(() => answer.map(() => "*".repeat(4)));
const blankArr = ref(blankTemp.value);
/**
 * 处理选项点击事件
 * @param {string} val - 被点击的选项值
 */
const clickAnswer = (val) => {
  blankArr.value[curIndex.value] = val;
  userAnswers.value[curIndex.value] = val;
  console.log(userAnswers.value, curIndex.value);
};
/**
 * 处理填空点击事件（清空已填答案）
 * @param {string} val - 当前填空值
 * @param {number} index - 填空索引
 */
const clickBox = (val, index) => {
  showRes.value = false;
  if (val) {
    blankArr.value[index] = blankTemp.value[index];
    userAnswers.value[index] = "";
  }
};
/**
 * 计算剩余可用选项
 * @returns {string[]} 未被选择的选项数组
 */
const remainOptions = computed(() =>
  options.filter((item) => !userAnswers.value.includes(item))
);

/**
 * 答案验证函数
 * @param {string} ans - 用户答案
 * @param {number} index - 答案索引
 * @returns {boolean} 是否正确
 */
const isCorrect = (ans, index) => ans === answer[index];

onMounted(() => {
  emitter.on("submit", () => {
    showRes.value = true;
  });
});

onBeforeMount(() => {
  emitter.off("submit");
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.wrapper {
  display: flex;
  gap: 0.5rem;
}
.box {
  transition: 0.4s;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #fffffd;
  border: 1px solid #dcdfe6;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
}
.blank {
  color: transparent;
  background-color: #e5e5e5;
  box-shadow: none;
}
.blank.filled {
  color: #3c3c43;
  background-color: #fffffd;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
}
.blank.correct {
  border-color: #4caf50;
}
.blank.wrong {
  border-color: #f44336;
}
</style>
