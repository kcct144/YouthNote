<template>
  <CardGrid :cols="2">
    <Card>字母：{{ letter }} <audioReader :src="letterAudio" /></Card>
    <Card>发音：{{ sound }} <audioReader :src="soundAudio" /></Card>
  </CardGrid>

  <WordCardGrid
    :words="wordItems"
    :cols="4"
  />

  <ArtPlayer
    :src="video"
    fullscreen
  />
</template>

<script setup lang="ts">
const props = defineProps({
  letter: {
    type: String,
    required: true,
  },
  sound: {
    type: String,
    required: true,
  },
  word: {
    type: Array as () => string[],
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  letterAudio: {
    type: String,
    required: true,
  },
  soundAudio: {
    type: String,
    required: true,
  },
});

// 将单词数组转换为WordCardGrid组件所需的格式
const wordItems = props.word.map((word) => ({
  word,
  image: `/images/Oxford/${word}.png`,
}));
</script>

<style scoped>
.phone-component {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-1);
  transition: var(--vp-t-color);
}

.phone-component:hover {
  box-shadow: var(--vp-shadow-2);
}

.phone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.letter {
  font-size: 2em;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin: 0;
}

.sound-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sound-label {
  font-weight: 500;
}

.words-section {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.word-item {
  padding: 6px 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.word-item:hover {
  background: var(--vp-c-brand-1);
  color: white;
}

.video-section {
  margin-top: 16px;
}
</style>
