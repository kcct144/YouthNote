import comp from "C:/Users/Kai/Desktop/projs/YouthNote/docs/.vuepress/.temp/pages/books/index.html.vue"
const data = JSON.parse("{\"path\":\"/books/\",\"title\":\"课外阅读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"课外阅读\",\"createTime\":\"2025/03/24 17:33:35\",\"permalink\":\"/books/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"books/README.md\",\"categoryList\":[{\"id\":\"7d8949\",\"sort\":10000,\"name\":\"books\"}],\"bulletin\":true}")
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
