<template>
  <div class="skill-tree-container">
    <h2 class="skill-tree-title">技能树</h2>
    <div class="skill-tree-content">
      <div
        v-for="(category, index) in skills.categories"
        :key="index"
        class="skill-category"
      >
        <div
          class="skill-node category-node"
          @click="toggleCategory(index)"
        >
          <span class="node-icon">
            {{ category.expanded ? '▼' : '▶' }}
          </span>
          <span class="node-name">{{ category.name }}</span>
          <div class="node-level">
            <div class="level-bar">
              <div
                class="level-fill"
                :style="{ width: (category.level / 5) * 100 + '%' }"
              ></div>
            </div>
            <span class="level-text">{{ category.level }}/5</span>
          </div>
        </div>
        <div
          v-if="category.expanded"
          class="skill-children"
        >
          <div
            v-for="(skill, skillIndex) in category.children"
            :key="skillIndex"
            class="skill-node child-node"
            @click="showSkillDescription(skill)"
          >
            <span class="node-name">{{ skill.name }}</span>
            <div class="node-level">
              <div class="level-bar">
                <div
                  class="level-fill"
                  :style="{ width: (skill.level / 5) * 100 + '%' }"
                ></div>
              </div>
              <span class="level-text">{{ skill.level }}/5</span>
            </div>
            <div
              v-if="selectedSkill === skill"
              class="skill-description"
            >
              {{ skill.description || '暂无描述' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface Skill {
  name: string;
  level: number;
  description?: string;
  children?: Skill[];
  expanded?: boolean;
}

interface SkillsData {
  categories: Skill[];
}

const skills = ref<SkillsData>({ categories: [] });
const selectedSkill = ref<Skill | null>(null);

const toggleCategory = (index: number) => {
  skills.value.categories[index].expanded = !skills.value.categories[index].expanded;
};

const showSkillDescription = (skill: Skill) => {
  selectedSkill.value = selectedSkill.value === skill ? null : skill;
};

const loadSkills = async () => {
  try {
    const response = await fetch('/skills.json');
    const data = await response.json();
    // 添加 expanded 属性到每个分类
    data.categories.forEach((category: Skill) => {
      category.expanded = false;
    });
    skills.value = data;
  } catch (error) {
    console.error('Failed to load skills:', error);
  }
};

onMounted(() => {
  loadSkills();
});

// 监听主题变化，添加适当的类名
const isDarkMode = ref(false);

// 检测当前主题
const checkDarkMode = () => {
  isDarkMode.value = document.documentElement.classList.contains('dark');
};

// 初始检查
checkDarkMode();

// 监听主题变化
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      checkDarkMode();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
});
</script>

<style scoped>
.skill-tree-container {
  padding: 20px;
  border-radius: 8px;
  background-color: var(--plume-bg-color, #ffffff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.skill-tree-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--plume-text-color, #333333);
  text-align: center;
}

.skill-category {
  margin-bottom: 10px;
}

.skill-node {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--plume-card-bg-color, #f9f9f9);
  color: var(--plume-text-color, #333333);
}

.skill-node:hover {
  background-color: var(--plume-hover-bg-color, #f0f0f0);
  transform: translateX(4px);
}

.category-node {
  font-weight: 600;
  font-size: 16px;
}

.child-node {
  margin-left: 30px;
  font-size: 14px;
}

.node-icon {
  margin-right: 10px;
  font-size: 12px;
  color: var(--plume-text-color-secondary, #666666);
}

.node-name {
  flex: 1;
  margin-right: 15px;
}

.node-level {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 120px;
}

.level-bar {
  width: 80px;
  height: 8px;
  background-color: var(--plume-border-color, #e0e0e0);
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background-color: var(--plume-primary-color, #42b983);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.level-text {
  font-size: 12px;
  color: var(--plume-text-color-secondary, #666666);
  min-width: 35px;
}

.skill-children {
  margin-left: 20px;
  animation: slideDown 0.3s ease;
}

.skill-description {
  margin-top: 8px;
  padding: 8px 12px;
  background-color: var(--plume-code-bg-color, #f5f5f5);
  border-radius: 4px;
  font-size: 12px;
  color: var(--plume-text-color-secondary, #666666);
  animation: fadeIn 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .skill-tree-container {
    padding: 15px;
    margin: 10px 0;
  }

  .skill-tree-title {
    font-size: 20px;
  }

  .skill-node {
    padding: 10px;
  }

  .node-level {
    min-width: 100px;
  }

  .level-bar {
    width: 60px;
  }

  .child-node {
    margin-left: 20px;
  }
}

@media (max-width: 480px) {
  .skill-node {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .node-level {
    width: 100%;
    justify-content: space-between;
  }

  .level-bar {
    flex: 1;
    margin-right: 10px;
  }
}
</style>