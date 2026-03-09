<template>
  <div class="split-sentence-group">
    <template v-for="(exercise, index) in exercises" :key="index">
      <SplitSentence 
        :sentence="exercise.sentence"
        :index="exercise.index"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import SplitSentence from './SplitSentence.vue';

interface Exercise {
  sentence: string;
  index: number;
}

interface Props {
  exercises: Exercise[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.split-sentence-group {
  display: flex;
  flex-direction: column;
}
</style>