import { defineThemeConfig, defineCollection, defineCollections } from "vuepress-theme-plume";
import { navbar } from "./navbar";

const oxford = defineCollection({
  type: 'doc',
  dir: 'docs/Oxford',
  linkPrefix: '/Oxford/',
  title: 'Oxford 笔记',
  sidebar: 'auto',
});

const ttools = defineCollection({
  type: 'doc',
  dir: 'docs/Ttools/guide',
  linkPrefix: '/Ttools/guide/',
  title: '教师工具指南',
  sidebar: 'auto',
});

const study = defineCollection({
  type: 'doc',
  dir: 'docs/study',
  linkPrefix: '/study/',
  title: '学习笔记',
  sidebar: 'auto',
});

const grammarSelection = defineCollection({
  type: 'doc',
  dir: 'docs/course/初中英语/语法选择专题课',
  linkPrefix: '/course/语法选择/',
  title: '语法选择专题课',
  sidebar: 'auto',
});

const passageBlanking = defineCollection({
  type: 'doc',
  dir: 'docs/course/初中英语/选词填空专题课',
  linkPrefix: '/course/选词填空/',
  title: '选词填空专题课',
  sidebar: 'auto',
});

const english = defineCollection({
  type: 'doc',
  dir: 'docs/english',
  linkPrefix: '/english/',
  title: '英语笔记',
  sidebar: 'auto'
});

const blog = defineCollection({
  type: 'post',
  dir: 'blogs',
  linkPrefix: '/article/',
  title: '博客',
  postList: true,
  tags: true,
  archives: true,
  categories: true,
  postCover: 'right',
  pagination: 15,
});

const collections = defineCollections([
  oxford,
  ttools,
  study,
  grammarSelection,
  passageBlanking,
  english,
  blog,
]);

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "https://theme-plume.vuejs.press/plume.png",

  appearance: true, // 配置 深色模式

  // social: [{ icon: "github", link: "/" }],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message:
      '<span>Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress<aa> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a></span><br><span><a href="https://beian.miit.gov.cn">粤ICP备2021038051号</a></span>',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: "https://s21.ax1x.com/2025/06/23/pVZhphF.png",
    name: "YouthNote",
    description: "青春记录站",
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  collections,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true, // 启用 页面间跳转过渡动画
    postList: true, // 启用 博客文章列表过渡动画
    appearance: "fade", // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
});
