import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'
import VPDemoBasic from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import VPCollapse from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapse.vue'
import VPCollapseItem from 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapseItem.vue'

import 'D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.137_esbuild@0.25.1_less@4.2.2_markdown-it@14.1.0_sass-embed_3dhmvudt3kiy3hgd6bbggwz4ui/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
    app.component('VPCollapse', VPCollapse)
    app.component('VPCollapseItem', VPCollapseItem)
  }
})
