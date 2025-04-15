<template>
  <div class="button-container">
    <el-button @click="emitter.emit('submit'), $emit('submit')">提交</el-button>
    <el-button
      @click="$emit('prev')"
      :disabled="disablePrev"
    >
      上一题
    </el-button>
    <el-button
      @click="$emit('next')"
      :disabled="disableNext"
    >
      下一题
    </el-button>
  </div>
</template>

<script setup lang="ts">
import emitter from "../../utils/emitter";
defineProps({
  disablePrev: Boolean,
  disableNext: Boolean,
});

const emit = defineEmits(["submit", "prev", "next"]);
</script>
