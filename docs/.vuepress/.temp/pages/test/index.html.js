import comp from "C:/Users/Kai/Desktop/projs/YouthNote/docs/.vuepress/.temp/pages/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/03/12 22:50:36\",\"permalink\":\"/test/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.37,\"words\":110},\"filePathRelative\":\"preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10002,\"name\":\"preview\"}]}")
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
