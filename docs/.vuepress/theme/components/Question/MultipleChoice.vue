<template>
  <el-card style="max-width: 800px">
    <!-- 题号导航 -->
    <div class="list">
      <div
        v-for="(item, index) in indexArr"
        :key="index"
        :class="['box', { active: curIndex === index }]"
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

        <!-- 选项 -->
        <div class="options-container">
          <div
            v-for="(option, index) in curQuestion.options"
            :key="index"
            :class="[
              'option',
              {
                selected: curQuestion.userAnswer === option,
                correct: curQuestion.isFinish && curQuestion.answer === option,
                incorrect:
                  curQuestion.isFinish &&
                  curQuestion.userAnswer === option &&
                  curQuestion.answer !== option,
              },
            ]"
            @click="isOptionSelectable ? selectOption(option) : null"
          >
            {{ toLetter(index) }}. {{ option }}
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
import { ref, computed, reactive } from "vue";

interface MultipleChoiceQuestion {
  stem: string | string[];
  options: string[];
  answer: string;
  explanation: string;
  isFinish?: boolean;
  isCorrect?: boolean;
  userAnswer: string | null;
}

const props = defineProps<{
  questions: MultipleChoiceQuestion[];
}>();

// 响应式存储每道题的数据
const initializedQuestions = reactive(
  props.questions.map((q) => ({
    ...q,
    isFinish: q.isFinish ?? false,
    isCorrect: q.isCorrect ?? false,
    userAnswer: q.userAnswer ?? null,
  }))
);

const curIndex = ref(0);
const curQuestion = computed(() => initializedQuestions[curIndex.value]);
const isOptionSelectable = computed(() => !curQuestion.value.isFinish);
// 导航点击
const handleNavClick = (index: number) => {
  curIndex.value = index;
};

// 选择答案
const selectOption = (option: string) => {
  curQuestion.value.userAnswer = option;
};

// 上一题
const prev = () => {
  if (curIndex.value > 0) curIndex.value--;
};

// 下一题
const next = () => {
  if (curIndex.value < initializedQuestions.length - 1) curIndex.value++;
};

// 提交答案
const submit = () => {
  const q = curQuestion.value;
  q.isFinish = true;
  q.isCorrect = q.userAnswer === q.answer;
};

// 生成索引数组用于导航
const indexArr = computed(() => {
  return Array.from({ length: initializedQuestions.length }, (_, i) => i);
});
// 转换索引为字母
const toLetter = (index: number): string => {
  return String.fromCharCode(65 + index); // ASCII 'A' 是 65
};
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.box {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.options-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.option {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
.option.selected {
  background-color: #f0f0f0;
  font-weight: bold;
  border-color: #409eff;
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
.option.correct {
  border-color: #67c23a;
  font-weight: bold;
}

.option.incorrect {
  border-color: #ff4949;
  font-weight: bold;
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
</style>
