<template>
  <div 
    class="word-selector-container"
    :class="{ 'shake': isShaking, 'all-correct': isAllCorrect }"
  >
    <div class="sentence">
      <template v-for="(word, index) in words" :key="index">
        <span 
          class="word"
          :class="{
            'selected': selectedWords.includes(index),
            'correct': selectedWords.includes(index) && isCorrectWord(index),
            'incorrect': selectedWords.includes(index) && !isCorrectWord(index)
          }"
          @click="selectWord(index)"
        >
          {{ word }}
        </span>
        <span v-if="index < words.length - 1" class="space"> </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  sentence: string;
  correctWords: string[] | number[];
}

const props = defineProps<Props>();

const words = computed(() => props.sentence.split(' '));
const selectedWords = ref<number[]>([]);
const isShaking = ref(false);

const isCorrectWord = (index: number) => {
  if (Array.isArray(props.correctWords) && typeof props.correctWords[0] === 'number') {
    // 数字数组格式：自动减一，使索引从1开始计数
    return props.correctWords.includes(index + 1);
  } else {
    // 字符串数组格式：检查单词
    return (props.correctWords as string[]).includes(words.value[index]);
  }
};

const correctWordsCount = computed(() => {
  return props.correctWords.length;
});

const isAllCorrect = computed(() => {
  if (selectedWords.value.length !== correctWordsCount.value) {
    return false;
  }
  return selectedWords.value.every(index => isCorrectWord(index));
});

const selectWord = (index: number) => {
  // 如果已经选择，取消选择
  const existingIndex = selectedWords.value.indexOf(index);
  if (existingIndex !== -1) {
    selectedWords.value.splice(existingIndex, 1);
    return;
  }
  
  // 选择新单词
  if (isCorrectWord(index)) {
    // 正确单词
    selectedWords.value.push(index);
  } else {
    // 错误单词，抖动组件
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500);
  }
};

const reset = () => {
  selectedWords.value = [];
  isShaking.value = false;
};

defineExpose({
  reset
});
</script>

<style scoped>
.word-selector-container {
  margin: 10px 0;
  padding: 5px;
  border-radius: 12px;
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.word-selector-container.all-correct {
  border-color: #67c23a;
  background-color: #f0f9eb;
}

.sentence {
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.word {
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.word:hover {
  background-color: #e3f2fd;
  transform: translateY(-1px);
}

.word.selected {
  font-weight: bold;
}

.word.correct {
  background-color: #bbdefb;
  color: #1565c0;
  border: 2px solid #2196f3;
}

.word.incorrect {
  background-color: #ffcdd2;
  color: #c62828;
  border: 2px solid #f44336;
}

.space {
  width: 8px;
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
  .word-selector-container {
    padding: 10px;
  }
  
  .sentence {
    font-size: 16px;
  }
  
  .word {
    padding: 4px 8px;
  }
}
</style>