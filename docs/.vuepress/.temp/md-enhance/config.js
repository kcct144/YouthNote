import MarkMap from "D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_markmap-lib@0.18.11_markmap-common@_z6nj4xsobgslhrbfrpqa6i4zhm/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "D:/WebProjs/EnglishTutorial/YouthNote/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_markmap-lib@0.18.11_markmap-common@_z6nj4xsobgslhrbfrpqa6i4zhm/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
};
