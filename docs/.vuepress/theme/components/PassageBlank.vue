<template>
  <!-- 添加外层容器 -->
  <div class="container">
    <el-form
      class="blank-form"
      :model="form"
      label-width="auto"
    >
      <!-- 移除行内样式 -->
      <el-form-item
        v-for="(blank, index) in props.blanks"
        :key="blank.index"
        :label="`${blank.index}．`"
        class="blank-item"
        :class="{
          correct: validationResults[index]?.isCorrect,
          error:
            validationResults[index] && !validationResults[index]?.isCorrect,
        }"
      >
        <el-input
          v-model="inputAnswers[index]"
          :placeholder="props.showResult ? '已提交' : '请输入答案'"
          :disabled="props.showResult"
        />
        <span
          v-if="props.showResult"
          class="result-mark"
        >
          {{ validationResults[index]?.isCorrect ? "✓" : "✗" }}
        </span>
      </el-form-item>
    </el-form>
    <!-- 移动按钮到表单外 -->
    <el-button
      type="primary"
      @click="handleSubmit"
      >提交</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from "vue";

interface Blank {
  index: number;
  answer: string;
  point: string;
  explanation: string;
}

const props = defineProps<{
  blanks: Blank[];
  checkAnswer: (blanks: Blank[]) => void;
  showResult: boolean;
}>();

// 在 defineProps 后添加事件声明
const emit = defineEmits<{
  (
    e: "submit",
    payload: {
      blanks: (Blank & { userAnswer: string })[];
      results: ValidationResult[];
    }
  ): void;
}>();
// 新增inputAnswers响应式变量
const inputAnswers = ref<string[]>(props.blanks.map(() => ""));

// 新增校验结果类型
interface ValidationResult {
  isCorrect: boolean;
  correctAnswer: string;
}
// 添加响应式校验状态
const validationResults = ref<ValidationResult[]>([]);
const handleSubmit = () => {
  // 强制清空旧状态（触发响应式更新）
  validationResults.value = [];

  const results = props.blanks.map((b, index) => {
    const isCorrect = inputAnswers.value[index].trim() === b.answer.trim(); // 添加 trim()
    return { isCorrect, correctAnswer: b.answer };
  });

  // 使用 nextTick 确保 DOM 更新
  nextTick(() => {
    validationResults.value = results;
    emit("submit", {
      blanks: props.blanks.map((b, i) => ({
        ...b,
        userAnswer: inputAnswers.value[i],
      })),
      results,
    });
  });
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.blank-form {
  display: flex;
  flex-wrap: wrap; /* 关键换行属性 */
  gap: 20px 10px; /* 行列间距 */
}

/* 控制每个表单项宽度 */
:deep(.blank-item) {
  flex: 0 0 calc(20% - 16px); /* 5个/行计算逻辑 */
  margin: 0;
  box-sizing: border-box;

  .el-form-item__content {
    width: 100%;
  }

  .el-input {
    width: 100%;
  }
  .el-form-item__label {
    padding-right: 0px !important;
    margin-right: 0px;
    margin-left: 5px;
    min-width: 0px;
  }

  .el-form-item__content {
    flex: 1;
    min-width: 80px;
  }
}

.el-button {
  margin-top: 20px;
  width: 120px;
}

:deep(.blank-item.correct) .el-input__wrapper {
  box-shadow: 0 0 0 1px #67c23a inset !important;
}

:deep(.blank-item.error) .el-input__wrapper {
  box-shadow: 0 0 0 1px #f56c6c inset !important;
}

.result-mark {
  margin-left: 8px;
  font-weight: bold;
  color: #67c23a;
}
.error .result-mark {
  color: #f56c6c;
}
</style>
