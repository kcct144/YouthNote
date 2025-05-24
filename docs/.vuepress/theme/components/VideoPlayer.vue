<template>
  <div class="video-player">
    <video :src="videoUrl" controls class="video"></video>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  path: {
    type: String,
    required: true
  }
});

// 构造请求路径并进行编码
const videoPath = encodeURIComponent(props.path).replace(/%2F/g, '/');
const videoUrl = `http://your-ecs-ip:3100/${videoPath}`;
</script>

<style scoped>
.video-player {
  max-width: 800px;
  margin: 20px auto;
}
.video {
  width: 100%;
  height: auto;
}
</style>