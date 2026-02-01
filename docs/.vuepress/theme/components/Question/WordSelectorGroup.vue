<template>
  <div class="word-selector-group">
    <template v-for="(exercise, index) in exercises" :key="index">
      <WordSelector 
        :sentence="exercise.sentence"
        :index="exercise.index"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import WordSelector from './WordSelector.vue';

interface Exercise {
  sentence: string;
  index: string[] | number[];
}

interface Props {
  exercises: Exercise[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.word-selector-group {
  display: flex;
  flex-direction: column;
}
</style>