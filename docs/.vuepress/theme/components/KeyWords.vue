<template>
  <div class="keyword-container">
    <!-- 固定划词按钮 -->
    <button
      class="fixed-btn"
      :class="{ active: hasSelection }"
      @click="handleHighlight"
    >
      🖍 划词
    </button>

    <!-- 内容容器 -->
    <div
      class="content-wrapper"
      @mouseup="checkSelection"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hasSelection = ref(false);
let currentSelection: Range | null = null;

// 检查选区是否有效
const checkSelection = () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    hasSelection.value = false;
    return;
  }

  const range = selection.getRangeAt(0);
  // 确保选区在组件容器内
  if (
    !range.commonAncestorContainer?.parentElement?.closest(".keyword-container")
  ) {
    selection.removeAllRanges();
    hasSelection.value = false;
    return;
  }

  currentSelection = range;
  hasSelection.value = true;
};

// 处理划线逻辑
const handleHighlight = () => {
  if (!currentSelection) return;

  // 创建马克笔效果元素
  const mark = document.createElement("mark");
  mark.className = "highlighter-marker"; // 使用class代替内联样式

  // 添加删除线样式（可选）
  const underline = document.createElement("span");
  underline.className = "marker-underline";

  try {
    currentSelection.surroundContents(mark);
    mark.appendChild(underline); // 添加装饰线
  } catch (e) {
    console.warn("Invalid selection:", e);
  }

  // 重置选区
  window.getSelection()?.removeAllRanges();
  hasSelection.value = false;
  currentSelection = null;
};
</script>

<style scoped>
.keyword-container {
  position: relative;
  padding-top: 40px; /* 为固定按钮留出空间 */
}

.content-wrapper {
  cursor: text;
  user-select: text;
}

.fixed-btn {
  position: absolute;
  top: 10px;
  left: 20px;
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.fixed-btn:hover {
  border-color: #409eff;
  color: #409eff;
}

.fixed-btn.active {
  border-color: #f56c6c;
  color: #f56c6c;
  transform: scale(1.05);
}

/* 划线样式增强 */
span[style*="line-through"] {
  position: relative;
  background: #fff5f5; /* 浅红色背景 */
  padding: 0 2px;
}
</style>
