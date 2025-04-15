<template>
  <div class="single">
    <el-radio-group
      v-model="submission"
      @change="handleChange"
    >
      <el-radio
        v-for="option in options"
        :key="option"
        :label="option"
        :value="option"
      ></el-radio>
    </el-radio-group>
    <!-- <label
      v-for="option in options"
      :key="option"
    >
      <input
        type="radio"
        v-model="submission"
        :value="option"
        @change="handleChange"
      />
      {{ option }}
    </label> -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// 声明接收props
const { options, curAnswer } = defineProps(["options", "curAnswer"]);
const emit = defineEmits(["handleChange"]);

const submission = ref<string>();

watch(
  () => curAnswer,
  (val) => {
    submission.value = val;
  }
);

const handleChange = () => {
  emit("handleChange", submission.value);
};
</script>

<style scoped>
.option-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
</style>
