<template>
  <div
    class="card-grid"
    :style="{ '--card-grid-cols': cols }"
  >
    <div
      class="card"
      v-for="item in words"
      :key="item.word"
    >
      <div class="card-title">{{ item.word }}</div>
      <div class="card-content">
        <img
          :src="item.image"
          @click="handleImageClick($event, item.word)"
          style="cursor: pointer; pointer-events: auto;"
          :alt="item.word"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  words: {
    type: Array as () => Array<{ word: string; image: string }>,
    required: true,
  },
  cols: {
    type: Number,
    default: 4,
  },
});

const playAudio = (word: string) => {
  // 将短语中的空格替换为连字符以构造正确的音频URL
  const processedWord = word.replace(/\s+/g, '-');
  const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${processedWord}`);
  audio.play();
};

const handleImageClick = (event: Event, word: string) => {
  // 阻止事件冒泡，防止触发图片放大
  event.stopPropagation();
  // 阻止默认行为
  event.preventDefault();
  // 播放音频
  playAudio(word);
};
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(var(--card-grid-cols), 1fr);
  gap: 16px;
  margin: 16px 0;
}

.card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--vp-t-color);
  background: var(--vp-c-bg);
}

.card:hover {
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-1);
}

.card-title {
  font-weight: 500;
  padding: 8px 12px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.card-content {
  padding: 12px;
  text-align: center;
}

.card-content img {
  max-width: 100%;
  height: 50px;
  border-radius: 4px;
}

@media (min-width: 768px) {
  .card-content img {
    height: 100px;
  }
}
</style>
