import comp from "D:/WebProjs/EnglishTutorial/YouthNote/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"banner\",\"full\":true,\"banner\":\"https://s21.ax1x.com/2025/06/16/pVElZX8.jpg\",\"bannerMask\":{\"light\":0.3,\"dark\":0.3},\"hero\":{\"name\":\"YouthNote\",\"tagline\":\"青春记录站\",\"text\":\"欢迎来到凯凯的秘密基地，这里是凯凯的生活和学习笔记。\",\"actions\":[{\"theme\":\"sponsor\",\"text\":\"语法选择\",\"link\":\"/english/题型/语法选择/\"},{\"theme\":\"sponsor\",\"text\":\"语法教程\",\"link\":\"/english/语法/\"},{\"theme\":\"sponsor\",\"text\":\"课外阅读\",\"link\":\"/books/\"},{\"theme\":\"sponsor\",\"text\":\"学习学习\",\"link\":\"/study/\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.33,\"words\":99},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
