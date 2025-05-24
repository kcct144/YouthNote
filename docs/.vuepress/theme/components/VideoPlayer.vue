<template>
  <div class="video-player">
    <video :src="videoUrl" controls class="video-js vjs-default-skin" :data-setup='{}'>
      您的浏览器不支持视频播放。
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    // OSS 视频路径，例如: YouthNote/Animate/Journey to The West/001_Journey to the West 1_The Monkey.mp4
    videoPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ossBaseUrl: 'http://localhost:3100' // 本地代理服务器地址
    };
  },
  computed: {
    videoUrl() {
      return `${this.ossBaseUrl}/${encodeURIComponent(this.videoPath)}`;
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