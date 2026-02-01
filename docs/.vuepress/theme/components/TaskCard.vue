<template>
  <div class="task-card">
    <div class="task-header">
      <div class="task-icon">
        <span class="icon">📝</span>
      </div>
      <h3 class="task-title">{{ title }}</h3>
    </div>
    <div v-if="hint" class="task-hint">
      <span class="hint-icon">💡</span>
      <span>{{ hint }}</span>
    </div>
    <div class="task-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  hint: "",
})
</script>

<style scoped>
.task-card {
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  color: #333;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.task-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.task-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.task-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  flex: 1;
}

.task-content {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.hint-icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .task-card {
    padding: 16px;
  }

  .task-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .task-icon {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  .task-title {
    font-size: 16px;
  }

  .task-content {
    font-size: 14px;
  }

  .task-hint {
    font-size: 12px;
  }
}
</style>
