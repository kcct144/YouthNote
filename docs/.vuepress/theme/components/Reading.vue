<template>
  <div
    class="navbar"
  >
    <span>选择章节：</span>
    <el-select
      v-model="curChapterId"
      placeholder="请选择章节"
      style="width: 240px; margin: 10px;"
    >
      <el-option
        v-for="chapter in chapterNum"
        :key="chapter"
        :label="chapter"
        :value="chapter"
      ></el-option>
    </el-select>
    <el-button @click="prevChapter" :disabled="isFirstChapter"
      >上一章</el-button
    >
    <el-button @click="nextChapter" :disabled="isLastChapter">下一章</el-button>
  </div>

  <h2>Chapter {{ curChapterId }}</h2>
  <div v-for="(item, index) in curChapter" :key="index">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="item.cn"
      show-after="3000"
      placement="bottom"
    >
      <p>{{ item.en }}</p>
    </el-tooltip>
    <div v-if="item.img" style="text-align: center">
      <img :src="item.img" alt="" />
    </div>
  </div>

  <!-- 底部按钮 -->
  <div style="text-align: center;">
    <el-button @click="prevChapter" :disabled="isFirstChapter"
      >上一章</el-button
    >
    <el-button @click="nextChapter" :disabled="isLastChapter">下一章</el-button>
  </div>
</template>

<script setup lang="ts">
import { useBookListStore } from "../../store/bookListStore"
import { computed, ref } from "vue"

const props = defineProps<{
  chapterNum: number
  bookId: number
}>()
const curChapterId = ref(1)
const curChapter = computed(() => {
  if (!curBook || !curBook.content) return null
  return curBook.content.filter(
    (chapter) => chapter.chapter === String(curChapterId.value)
  )
})
const curBook = useBookListStore()?.getBookById(props.bookId)
const isFirstChapter = computed(() => curChapterId.value <= 1)
const isLastChapter = computed(() => curChapterId.value >= props.chapterNum)

function prevChapter() {
  if (!isFirstChapter.value) {
    curChapterId.value--
  }
}

function nextChapter() {
  if (!isLastChapter.value) {
    curChapterId.value++
  }
}
</script>

<style scoped>
.navbar {
  border: 1px solid #e4e4e4;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
}

.el-button {
  border: none;
  min-width: 100px;
  transition: background-color 0.3s ease;
  margin: 10px;
}

.el-button[disabled] {
  cursor: not-allowed;
}

.box-item p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem auto;
  display: block;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .flex-wrap {
    flex-direction: column;
    width: 100%;
  }

  .el-select {
    width: 100% !important;
    margin-bottom: 0.5rem;
  }
}

</style>
