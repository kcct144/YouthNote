<template>
  <el-card style="max-width: 800px">
    <!-- 题号导航 -->
    <div class="list">
      <div
        v-for="(item, index) in indexArr"
        :key="index"
        :class="['nav-box', { active: curIndex === index }]"
        @click="handleNavClick(index)"
        tabindex="0"
        role="button"
        :aria-label="`跳转到第 ${index + 1} 题`"
      >
        {{ index + 1 }}
      </div>
    </div>
    <Transition
      name="fade"
      mode="out-in"
    >
      <div
        :key="curIndex"
        class="question-content"
      >
        <!-- 题干 -->
        <div class="stem">
          <!-- <div class="number">{{ curIndex + 1 }}.</div> -->
          <div class="content">
            <template v-if="Array.isArray(curQuestion.stem)">
              <div
                v-for="(line, idx) in curQuestion.stem"
                :key="idx"
              >
                {{ line }}
              </div>
            </template>
            <template v-else>
              {{ curQuestion.stem }}
            </template>
          </div>
        </div>

        <!-- 选词造句 -->
        <!-- 答题区 -->
        <div class="sentence-area">
          <div class="wrapper">
            <div
              v-for="(word, index) in currentState.selectedWords"
              :key="index"
              class="box"
              :class="[
                { correct: currentState.showRes && isWordCorrect(word, index) },
                { wrong: currentState.showRes && !isWordCorrect(word, index) },
                { disabled: currentState.isFinish },
              ]"
              @click="!currentState.isFinish && removeWord(index)"
            >
              {{ word }}
            </div>
          </div>
        </div>

        <!-- 可选词区 -->
        <div
          class="options-area"
          style="padding-bottom: 20px"
        >
          <div
            v-for="(word, index) in currentState.remainingOptions"
            :key="index"
            class="box"
            @click="!currentState.isFinish && addWord(word)"
          >
            {{ word }}
          </div>
        </div>
      </div>
    </Transition>

    <!-- 控制按钮 -->
    <div class="control">
      <el-button @click="prev">上一题</el-button>
      <el-button
        @click="next"
        :disabled="!curQuestion.isFinish"
        >下一题</el-button
      >
      <el-button
        type="primary"
        @click="submit"
        :disabled="curQuestion.isFinish"
        >提交</el-button
      >
    </div>
    <Transition name="slide">
      <div
        v-show="curQuestion.isFinish"
        class="explain"
      >
        <!-- 解析区域 -->
        <div
          v-if="curQuestion.isFinish"
          class="explain"
        >
          <div class="content">{{ curQuestion.explanation }}</div>
        </div>
      </div>
    </Transition>
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watchEffect } from "vue";

interface MakeSentenceQuestion {
  stem: string | string[]; //题目要求
  options: string[]; //可选词
  answer: string | string[]; //最终句子
  explanation: string; //解析
  isFinish?: boolean;
  isCorrect?: boolean;
  userAnswer: string | null;
}

const props = defineProps<{
  questions: MakeSentenceQuestion[];
}>();

// 响应式存储每道题的数据
const initializedQuestions = reactive(
  props.questions.map((q) => ({
    ...q,
    isFinish: q.isFinish ?? false,
    isCorrect: q.isCorrect ?? false,
    userAnswer: q.userAnswer ?? null,
    selectedWords: [] as string[],
    remainingOptions: [...q.options],
    showRes: false,
  }))
);
// 获取当前题目的状态
const currentState = computed(() => initializedQuestions[curIndex.value]);
const curIndex = ref(0);
const curQuestion = computed(() => initializedQuestions[curIndex.value]);

// 导航点击
const handleNavClick = (index: number) => {
  curIndex.value = index;
};
// 上一题
const prev = () => {
  if (curIndex.value > 0) curIndex.value--;
};
// 下一题
const next = () => {
  if (curIndex.value < initializedQuestions.length - 1) curIndex.value++;
};

const addWord = (word: string) => {
  currentState.value.selectedWords.push(word);
  currentState.value.remainingOptions =
    currentState.value.remainingOptions.filter((w) => w !== word);
};

const removeWord = (index: number) => {
  const removed = currentState.value.selectedWords.splice(index, 1)[0];
  currentState.value.remainingOptions.push(removed);
};

// 验证词语正确性
const isWordCorrect = (word: string, index: number): boolean => {
  const correctAnswer: string[] = Array.isArray(currentState.value.answer)
    ? currentState.value.answer
    : currentState.value.answer.split(" ");

  // 如果是已提交状态，再做校验
  if (currentState.value.showRes) {
    return word === correctAnswer[index];
  }

  return false;
};

const submit = () => {
  currentState.value.showRes = true;

  // 合并所有选中的词语，用空格连接
  const userAnswerStr = currentState.value.selectedWords.join(" ");
  // 答案统一转成字符串格式
  const correctAnswerStr = Array.isArray(currentState.value.answer)
    ? currentState.value.answer.join(" ")
    : currentState.value.answer;

  currentState.value.userAnswer = userAnswerStr;
  currentState.value.isFinish = true;
  currentState.value.isCorrect = userAnswerStr === correctAnswerStr;
};

// 生成索引数组用于导航
const indexArr = computed(() => {
  return Array.from({ length: initializedQuestions.length }, (_, i) => i);
});
</script>

<style scoped>
.sentence-area {
  margin-bottom: 1rem;
  min-height: 60px;
  border: 2px dashed #e5e5e5;
  border-radius: 8px;
  padding: 12px;
}

.sentence-area .wrapper {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 8px; /* 间距调整 */
  align-items: center;
}
.options-area .box {
  background-color: #f0f4ff;
  transition: transform 0.2s;
  min-width: 40px; /* 最小宽度保证按钮可见 */
  padding: 0 8px; /* 左右内边距 */
  width: auto; /* 取消固定宽度 */
  height: auto; /* 取消固定高度 */
  line-height: 2; /* 调整行高适应内容 */
  margin: 4px; /* 增加外边距 */
  white-space: nowrap; /* 防止文字换行 */
}

.options-area .box:hover {
  transform: translateY(-2px);
}

.box.correct {
  border-color: #4caf50 !important;
}

.box.wrong {
  border-color: #f44336 !important;
}
.list {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.box {
  /* 移除原有的固定宽高 */
  min-width: 40px;
  padding: 0 8px;
  height: auto;
  line-height: 2;
  /* 保持原有其他属性 */
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-flex; /* 改为行内弹性布局 */
  justify-content: center;
  align-items: center;
}
.box.active {
  background-color: #409eff;
  color: white;
}

.stem {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.number {
  font-weight: bold;
  margin-right: 8px;
}

.control {
  margin-bottom: 16px;
}
.explain {
  margin-top: 16px;
}
.judge {
  font-weight: bold;
  color: green;
}
.judge.false {
  color: red;
}
/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 滑动动画 */
.slide-enter-active {
  transition: all 0.3s ease-out;
  transform: translateY(0);
}
.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(0px);
}
.option {
  transition: background-color 0.2s, transform 0.1s;
}
.option:active {
  transform: scale(0.98);
}
/* 添加禁用状态样式 */
.box.disabled {
  cursor: not-allowed;
  pointer-events: none; /* 彻底禁用交互 */
}
.nav-box {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.nav-box.active {
  background-color: #409eff;
  color: white;
}
</style>
