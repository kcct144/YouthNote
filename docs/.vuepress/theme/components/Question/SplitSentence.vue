<template>
  <div 
    class="split-sentence-container"
    :class="{
      'shake': isShaking,
      'correct': isCorrect && splitPosition !== null
    }"
  >
    <div class="sentence">
      <template v-if="splitPosition === null">
        <template v-for="(item, index) in sentenceParts" :key="index">
          <span v-if="typeof item === 'string'" class="text">{{ item }}</span>
          <button 
            v-else 
            class="space-button"
            @click="handleButtonClick(item.index)"
            :disabled="isProcessing"
          >
            <span class="dot"></span>
          </button>
        </template>
      </template>
      <template v-else>
        <span class="text">{{ sentence.substring(0, splitPosition) }}</span>
        <span class="separator">│</span>
        <span class="text">{{ sentence.substring(splitPosition) }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  sentence: string;
  correctSplitIndex: number;
}

const props = defineProps<Props>();

const splitPosition = ref<number | null>(null);
const isCorrect = ref(false);
const isShaking = ref(false);
const isProcessing = ref(false);

const sentenceParts = computed(() => {
  const parts: (string | { type: 'button'; index: number })[] = [];
  const words = props.sentence.split(' ');
  
  words.forEach((word, wordIndex) => {
    parts.push(word);
    if (wordIndex < words.length - 1) {
      const spaceStartIndex = props.sentence.indexOf(' ', parts.reduce((acc, curr) => {
        return acc + (typeof curr === 'string' ? curr.length : 0);
      }, 0));
      parts.push({ type: 'button', index: spaceStartIndex });
    }
  });
  
  return parts;
});

const handleButtonClick = (buttonIndex: number) => {
  if (isProcessing.value || splitPosition.value !== null) return;
  
  isProcessing.value = true;
  
  // 找到正确的空格位置
  const spaces = [];
  for (let i = 0; i < props.sentence.length; i++) {
    if (props.sentence[i] === ' ') {
      spaces.push(i);
    }
  }
  
  // 自动减1，使correctSplitIndex从1开始计数
  const correctPosition = spaces[props.correctSplitIndex - 1];
  
  if (buttonIndex === correctPosition) {
    // 正确
    splitPosition.value = buttonIndex;
    isCorrect.value = true;
  } else {
    // 错误
    isCorrect.value = false;
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500);
  }
  
  setTimeout(() => {
    isProcessing.value = false;
  }, 300);
};

const reset = () => {
  splitPosition.value = null;
  isCorrect.value = false;
  isShaking.value = false;
};

defineExpose({
  reset
});
</script>

<style scoped>
.split-sentence-container {
  position: relative;
  margin: 10px 0;
  padding: 5px 15px 5px 15px;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.split-sentence-container.correct {
  border-color: #67c23a;
  background-color: #f0f9eb;
}

.sentence {
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.text {
  white-space: nowrap;
}

.space-button {
  background: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  margin: 0 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.space-button:hover {
  border-color: #409eff;
  background-color: #ecf5ff;
}

.space-button:active {
  transform: scale(0.95);
}

.space-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: #909399;
  border-radius: 50%;
}

.separator {
  color: #409eff;
  font-weight: bold;
  font-size: 20px;
  margin: 0 2px;
  animation: fadeIn 0.3s ease;
}

.shake {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>