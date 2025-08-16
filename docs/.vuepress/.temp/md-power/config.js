import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'
import AudioReader from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/AudioReader.vue'
import VPDemoBasic from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import VPCollapse from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapse.vue'
import VPCollapseItem from 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapseItem.vue'

import 'D:/proj/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1._4b425b6906bb48b7f71e7d3b24a917a1/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
    app.component('AudioReader', AudioReader)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
    app.component('VPCollapse', VPCollapse)
    app.component('VPCollapseItem', VPCollapseItem)
  }
})
