<template>
  <div class="website-nav">
    <h2>网站导航</h2>
    <el-row :gutter="20">
      <el-col 
        v-for="(site, index) in sites" 
        :key="index" 
        :xs="12" 
        :sm="8" 
        :md="6" 
        :lg="4"
      >
        <div class="site-item">
          <a :href="site.url" target="_blank" class="site-link">
            <div class="site-content">
              <el-avatar 
                v-if="site.favicon" 
                :src="site.favicon" 
                shape="circle" 
                size="large"
                class="site-icon"
              />
              <el-icon v-else class="site-icon-default">
                <Link />
              </el-icon>
              <span class="site-title">{{ site.title }}</span>
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Link } from '@element-plus/icons-vue'

interface Site {
  title: string
  url: string
  favicon?: string
}

const sites: Site[] = [
  {
    title: '学科网',
    url: 'https://www.zxxk.com/',
    favicon: 'https://www.zxxk.com//favicon.ico'
  },
  {
    title: '教学资源库',
    url: 'https://resources.example.com',
    favicon: 'https://resources.example.com/favicon.ico'
  },
  {
    title: '教师邮箱',
    url: 'https://mail.example.com',
    favicon: 'https://mail.example.com/favicon.ico'
  }
]
</script>

<style scoped>
.website-nav {
  margin: 20px 0;
}

.site-item {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.site-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.site-icon {
  margin-bottom: 8px;
  width: 48px;
  height: 48px;
}

.site-icon-default {
  margin-bottom: 8px;
  width: 48px;
  height: 48px;
  font-size: 32px;
  color: #409eff;
  background-color: #f0f2f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-title {
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}

.site-item:hover .site-title {
  color: #409eff;
}
</style>