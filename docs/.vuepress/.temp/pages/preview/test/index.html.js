import comp from "C:/Users/Kai/Desktop/projs/YouthNote/docs/.vuepress/.temp/pages/preview/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/preview/test/\",\"title\":\"测试\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试\",\"permalink\":\"/preview/test/\",\"createTime\":\"2025/05/25 08:57:44\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"preview/test.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}],\"bulletin\":true}")
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
