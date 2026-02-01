<template>
  <div 
    class="matching-container"
    :class="{ 'shake': isShaking }"
  >
    <div class="matching-wrapper">
      <!-- 左侧问题区域 -->
      <div class="left-section">
        <div class="items-list">
          <div
            v-for="(item, index) in leftItems"
            :key="index"
            class="item-card"
            :class="{
              'selected': selectedLeft === index,
              'matched': matchedPairs.some(pair => pair[0] === index),
              'correct': matchedPairs.some(pair => pair[0] === index && isCorrectMatch(pair)),
              'incorrect': matchedPairs.some(pair => pair[0] === index && !isCorrectMatch(pair))
            }"
            @click="selectLeft(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <!-- 中间显示区域 -->
      <div class="center-section">
      </div>

      <!-- 右侧答案区域 -->
      <div class="right-section">
        <div class="items-list">
          <div
            v-for="(item, index) in rightItems"
            :key="index"
            class="item-card"
            :class="{
              'selected': selectedRight === index,
              'matched': matchedPairs.some(pair => pair[1] === index),
              'correct': matchedPairs.some(pair => pair[1] === index && isCorrectMatch(pair)),
              'incorrect': matchedPairs.some(pair => pair[1] === index && !isCorrectMatch(pair))
            }"
            @click="selectRight(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  leftItems: string[];
  rightItems: string[];
  correctMatches: [number, number][];
}

const props = defineProps<Props>();

const selectedLeft = ref<number | null>(null);
const selectedRight = ref<number | null>(null);
const matchedPairs = ref<[number, number][]>([]);
const isShaking = ref(false);
const isProcessing = ref(false);

const isCorrectMatch = (pair: [number, number]) => {
  return props.correctMatches.some(correctPair => 
    correctPair[0] === pair[0] && correctPair[1] === pair[1]
  );
};

const selectLeft = (index: number) => {
  if (isProcessing.value) return;
  
  // 如果已经匹配，取消匹配
  const existingPairIndex = matchedPairs.value.findIndex(pair => pair[0] === index);
  if (existingPairIndex !== -1) {
    matchedPairs.value.splice(existingPairIndex, 1);
    selectedLeft.value = null;
    selectedRight.value = null;
    return;
  }
  
  selectedLeft.value = index;
  selectedRight.value = null;
};

const selectRight = (index: number) => {
  if (isProcessing.value || selectedLeft.value === null) return;
  
  // 如果已经匹配，取消匹配
  const existingPairIndex = matchedPairs.value.findIndex(pair => pair[1] === index);
  if (existingPairIndex !== -1) {
    matchedPairs.value.splice(existingPairIndex, 1);
    selectedRight.value = null;
    return;
  }
  
  isProcessing.value = true;
  const newPair: [number, number] = [selectedLeft.value, index];
  
  if (isCorrectMatch(newPair)) {
    // 正确匹配
    matchedPairs.value.push(newPair);
  } else {
    // 错误匹配，抖动组件
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500);
  }
  
  selectedLeft.value = null;
  selectedRight.value = null;
  
  setTimeout(() => {
    isProcessing.value = false;
  }, 300);
};
</script>

<style scoped>
.matching-container {
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.matching-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: start;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-card {
  padding: 10px 15px 10px 15px;
  border: 2px solid #dcdfe6;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.item-card:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.1);
}

.item-card.selected {
  border-color: #409eff;
  background-color: #ecf5ff;
  font-weight: bold;
}

.item-card.matched {
  cursor: default;
}

.item-card.correct {
  border-color: #67c23a;
  background-color: #f0f9eb;
  font-weight: bold;
}

.item-card.incorrect {
  border-color: #f56c6c;
  background-color: #fef0f0;
  font-weight: bold;
}

.center-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.shake {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@media (max-width: 768px) {
  .matching-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  
  .center-section {
    order: -1;
  }
}
</style>