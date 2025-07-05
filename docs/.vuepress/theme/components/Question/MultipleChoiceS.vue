<template>
  <el-card style="max-width: 800px">
    <!-- 调试信息 -->
    <pre style="display:none">{{ question }}</pre>
    <Transition name="fade" mode="out-in">
      <div class="question-content" key="single">
        <!-- 题干 -->
        <div class="stem">
          <div class="content">
            <template v-if="Array.isArray(question.stem)">
              <div v-for="(line, idx) in question.stem" :key="idx">
                {{ line }}
              </div>
            </template>
            <template v-else>
              {{ question.stem }}
            </template>
          </div>
        </div>

        <!-- 选项 -->
        <div class="options-container">
          <div
            v-for="(option, index) in question.options"
            :key="index"
            :class="[
              'option',
              {
                selected: question.userAnswer === option,
                correct: question.isFinish && question.answer === option,
                incorrect:
                  question.isFinish &&
                  question.userAnswer === option &&
                  question.answer !== option,
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
      <el-button type="primary" @click="submit" :disabled="question.isFinish">
        提交
      </el-button>
    </div>

    <Transition name="slide">
      <div v-show="question.isFinish" class="explain">
        <div class="content">{{ question.explanation }}</div>
      </div>
    </Transition>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from "vue";

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
  question: MultipleChoiceQuestion;
}>();

// 响应式拷贝传入的 question 数据
const question = ref({ ...props.question });

// 是否允许选择选项
const isOptionSelectable = computed(() => !question.value.isFinish);

// 选择答案
const selectOption = (option: string) => {
  question.value.userAnswer = option;
};

// 提交答案
const submit = () => {
  const q = question.value;
  q.isFinish = true;
  q.isCorrect = q.userAnswer === q.answer;
};

// 转换索引为字母
const toLetter = (index: number): string => {
  return String.fromCharCode(65 + index); // ASCII 'A' 是 65
};
</script>

<style scoped>
/* 样式部分可复用原组件中的样式，无需修改 */
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