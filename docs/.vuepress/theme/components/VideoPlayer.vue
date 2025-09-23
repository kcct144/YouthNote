<template>
  <div class="video-player">
    <video :src="`${ossBaseURL}`" controls class="video-js vjs-default-skin" :data-setup='{}'>
      您的浏览器不支持视频播放。
    </video>
  </div>
</template>

<script>
import { ossBaseURL } from "../utils/oss"
export default {
  name: 'VideoPlayer',
  props: {
    videoPath: {
      type: String,
      required: true
    }
  },
  computed: {
    videoUrl() {
      return `/${encodeURIComponent(this.videoPath)}`;
    }
  }
};
</script>

<style scoped>
.video-player {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
video {
  width: 100%;
  height: auto;
}
</style>