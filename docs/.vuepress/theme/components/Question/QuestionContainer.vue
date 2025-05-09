<template>
  <el-card>
    <div class="question-container">
      <QuestionListNav
        :length="props.questionList.length"
        :currentIndex
        @handleClick="changeQuestion"
      />
      <!-- 题干 -->
      <Stem
        :index="currentIndex + 1"
        :key="currentIndex"
        :type="currentQuestion.type"
        :stem="currentQuestion.stem"
      />
      <hr />
      <!-- 输入 -->
      <component
        :key="currentIndex"
        :is="questionComponent"
        :answer="currentQuestion.answer"
        :options="currentQuestion.options"
        :curAnswer="curAnswer"
        @handleChange="selectAnswer"
        @submit="submitAnswer"
      />
      <hr />
      <!-- 按钮 -->
      <ControlButtons
        :disable-prev="currentIndex === 0"
        :disable-next="currentIndex === questionList.length - 1"
        @submit="submitAnswer"
        @prev="prevQuestion"
        @next="nextQuestion"
      />
      <hr />
      <!-- 检验解析 -->
      <div v-show="showResult[currentIndex]">
        <span
          v-if="curAnswer !== undefined"
          class="status-icon"
        >
          {{ isAnswerCorrect ? "✅" : "❌" }}
        </span>
        【正确答案】 {{ currentQuestion.answer }}
        <div v-show="showSentence">【句子】{{ currentQuestion.sentence }}</div>
        <!-- 解析 -->
        <div>{{ currentQuestion.explanation }}</div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Stem from "./Stem.vue";
import MultipleQuestion from "../Question/MultipleQuestion.vue"; // 需创建
import SentenceQuestion from "./SentenceQuestion.vue";
import QuestionListNav from "./QuestionListNav.vue";
import ControlButtons from "./ControlButtons.vue";
import BlankQuestion from "./BlankQuestion.vue";

// 定义数据类型
interface Question {
  type: "multiple" | "judge" | "blank" | "sentence";
  stem: string | string[];
  options: string[];
  answer: string | boolean | string[];
  explanation: string;
  sentence: string;
}
// 声明props
const props = defineProps<{ questionList: Question[] }>();

const userAnswers = ref(new Array(props.questionList.length));
const curAnswer = computed(() => userAnswers.value[currentIndex.value]);

// 获取题目
const currentIndex = ref(0);
// 修改状态声明
const showResult = ref<boolean[]>(
  new Array(props.questionList.length).fill(false)
);
const showSentence = computed(() => {
  return currentQuestion.value.type === "sentence";
});
const currentQuestion = computed(() => props.questionList[currentIndex.value]);

// 添加组件映射
const componentMap = {
  multiple: MultipleQuestion,
  sentence: SentenceQuestion,
  blank: BlankQuestion,
};
// 计算当前组件类型
const questionComponent = computed(() => {
  return componentMap[currentQuestion.value.type];
});
// 切换到上一题
const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
// 切换到下一题
const nextQuestion = () => {
  if (currentIndex.value < props.questionList.length - 1) {
    currentIndex.value++;
  }
};

const selectAnswer = (val) => {
  userAnswers.value[currentIndex.value] = val;
  console.log(userAnswers.value);
};

const changeQuestion = (index) => {
  currentIndex.value = index;
};

const submitAnswer = () => {
  showResult.value[currentIndex.value] = true;
};

const isAnswerCorrect = computed(() => {
  if (!showResult.value[currentIndex.value]) return false;
  const userAnswer = curAnswer.value;
  const correctAnswer = currentQuestion.value.answer;

  // 处理多选题答案比对
  if (currentQuestion.value.type === "blank") {
    return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
  }
  if (Array.isArray(correctAnswer)) {
    return (
      JSON.stringify(userAnswer?.sort()) ===
      JSON.stringify(correctAnswer.sort())
    );
  }

  // 处理普通答案比对
  return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
});
</script>
