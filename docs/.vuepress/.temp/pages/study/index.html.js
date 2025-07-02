import comp from "C:/Users/Kai/Desktop/projs/YouthNote/docs/.vuepress/.temp/pages/study/index.html.vue"
const data = JSON.parse("{\"path\":\"/study/\",\"title\":\"学习学习\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"学习学习\",\"permalink\":\"/study/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.7,\"words\":209},\"filePathRelative\":\"study/README.md\",\"categoryList\":[{\"id\":\"2cd1c6\",\"sort\":10003,\"name\":\"study\"}]}")
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
