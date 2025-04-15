<template>
  <!-- 小题列表 -->
  <details
    v-for="(item, idx) in multiples"
    :key="idx"
    class="multiple-item"
    :class="{ 'show-marker': showResult }"
  >
    <summary
      class="custom-summary"
      style="margin: 1px"
    >
      <span
        v-if="showResult && userSelections[idx] !== item.answer"
        class="error-mark"
        >❌</span
      >
      <span style="margin-right: 5px; font-size: 0.9rem; margin-left: 5px"
        >{{ item.index }}.
      </span>
      <el-radio-group v-model="userSelections[idx]">
        <el-radio
          v-for="(option, oIdx) in item.options"
          :label="option"
          :class="{
            'correct-option': showResult && option === item.answer,
            'wrong-selected':
              showResult &&
              userSelections[idx] === option &&
              option !== item.answer,
          }"
        />
      </el-radio-group>
    </summary>

    <!-- 答案解析 -->
    <div
      v-if="showResult"
      class="analysis"
    >
      <div class="answer-result">
        <span class="correct-tag"><b>正确答案：</b>{{ item.answer }}</span>
        <span class="explanation-tag">考点：{{ item.point }}</span>
      </div>
      <div class="explanation"><b>详细解析：</b>{{ item.explanation }}</div>
    </div>
  </details>

  <!-- 提交按钮 -->
  <el-button
    type="primary"
    @click="handleSubmit"
    class="submit-btn"
    >提交答案</el-button
  >
</template>

<script setup lang="ts">
import { ref } from "vue";

interface multiple {
  index: number;
  options: string[];
  answer: string;
  explanation: string;
  point: string;
}

const props = defineProps<{
  multiples: multiple[];
}>();

// 用户选择的答案
const userSelections = ref<string[]>(
  new Array(props.multiples.length).fill("")
);
// 是否显示结果
const showResult = ref(false);

const handleSubmit = () => {
  showResult.value = true;
};
</script>

<style scoped>
/* 错误标记样式 */
.error-mark {
  color: #f56c6c;
  font-size: 1.2em;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

/* 调整布局定位 */
.custom-summary {
  position: relative;
  padding-right: 30px; /* 为标记留出空间 */
}

.index {
  min-width: 30px;
  display: inline-block;
}

/* 隐藏默认三角形 */
.custom-summary {
  list-style: none;
}

.custom-summary::-webkit-details-marker {
  display: none;
}

/* 自定义折叠指示器 */
.custom-summary:before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  margin-left: 5px;
  border-right: 2px solid #409eff;
  border-bottom: 2px solid #409eff;
  transform: rotate(-45deg);
  transition: transform 0.2s ease;
}

/* 展开状态样式 */
details[open] .custom-summary:before {
  transform: rotate(45deg);
}

/* 仅在显示结果时展示指示器 */
.show-marker .custom-summary:before {
  display: inline-block;
}

/* 未提交时强制隐藏 */
details:not(.show-marker) .custom-summary:before {
  display: none !important;
}

.multiple-item {
  margin: 5px 0;
  padding: 5px;
  border-bottom: 1px solid #ebeef5;
  border-radius: 4px;
  height: auto;
}

.correct-option :deep(.el-radio__label) {
  color: #67c23a;
  font-weight: bold;
}
.correct-option :deep(.el-radio__inner) {
  border-color: #67c23a;
}

.wrong-selected :deep(.el-radio__label) {
  color: #f56c6c;
  text-decoration: line-through;
}
.wrong-selected :deep(.el-radio__inner) {
  border-color: #f56c6c;
}

.analysis {
  margin-top: 12px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.answer-result {
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
}

.submit-btn {
  margin-top: 20px;
  width: 120px;
}

.explanation-tag {
  color: #909399;
  font-size: 0.9em;
}

.solution {
  color: #606266;
  margin: 8px 0;
}
</style>
