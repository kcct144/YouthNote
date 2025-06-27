import comp from "C:/Users/Kai/Desktop/projs/YouthNote/docs/.vuepress/.temp/pages/books/little-prince/index.html.vue"
const data = JSON.parse("{\"path\":\"/books/little-prince/\",\"title\":\"Little Prince\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Little Prince\",\"createTime\":\"2025/05/11 06:37:58\",\"permalink\":\"/books/little-prince/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"books/Little Prince.md\",\"categoryList\":[{\"id\":\"7d8949\",\"sort\":10001,\"name\":\"books\"}]}")
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
