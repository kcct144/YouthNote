<template>
  <CardGrid :cols="2">
    <Card>字母：{{ letter }} <audioReader :src="computedLetterAudio" /></Card>
    <Card>发音：{{ sound }} <audioReader :src="computedSoundAudio" /></Card>
  </CardGrid>

  <PhoneWordGrid
    :words="wordItems"
    :cols="4"
  />

  <ArtPlayer
    :src="computedVideo"
    fullscreen
  />
</template>

<script setup lang="ts">
import PhoneWordGrid from "./PhoneWordGrid.vue"
import { ossBaseURL } from "../../utils/oss"
import { computed } from "vue"

const props = defineProps({
  level: {
    type: String,
    required: true,
  },
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
    default: ""
  },
  letterAudio: {
    type: String,
    default: ""
  },
  soundAudio: {
    type: String,
    default: ""
  },
});

// 计算视频路径
const computedVideo = computed(() => {
  const letterChar = props.letter.charAt(0);
  return `${ossBaseURL}Oxford/lv${props.level}/video/${letterChar}.mp4`;
});

// 计算字母音频路径
const computedLetterAudio = computed(() => {
  const letterChar = props.letter.charAt(0);
  return `${ossBaseURL}Oxford/lv${props.level}/letter/${letterChar}.mp3`;
});

// 计算发音音频路径
const computedSoundAudio = computed(() => {
  const letterChar = props.letter.charAt(0);
  return `${ossBaseURL}Oxford/lv${props.level}/sound/${letterChar}.mp3`;
});

// 将单词数组转换为WordCardGrid组件所需的格式
const wordItems = computed(() => props.word.map((word) => ({
  word,
  image: `${ossBaseURL}Oxford/lv${props.level}/image/${word}.png`,
})));
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