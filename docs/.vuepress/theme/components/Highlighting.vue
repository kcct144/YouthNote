<template>
  <div class="highlight-container">
    <!-- 内容 -->
    <div
      class="content-wrappeer"
      @mouseup="checkSelection"
    >
      <slot />
    </div>
    <!-- 按钮 -->
    <el-button
      class="fixed-btn"
      :class="{ active: hasSelection }"
      @click="handleHighlight"
      >🖍</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const hasSelection = ref(false); // 是否有选中
let currentSelection: Range | null = null; //选区对象 Range
// 检验并验证当前文本选区
const checkSelection = () => {
  // 检测选区范围
  const selection = window.getSelection();
  // 检测选区范围是否有效
  if (!selection || selection.isCollapsed) {
    hasSelection.value = false;
    return;
  }
  const range = selection.getRangeAt(0);
  // 验证选区是否在组件容器内
  if (
    !range.commonAncestorContainer?.parentElement?.closest(".keyword-container")
  ) {
    selection.removeAllRanges();
    hasSelection.value = false;
    return;
  }
  //   更新选区状态
  currentSelection = range;
  hasSelection.value = true;
};
</script>

<style scoped></style>
