import MarkMap from "C:/Users/Kai/Desktop/projs/YouthNote/node_modules/.pnpm/vuepress-plugin-md-enhance@_55647e249700ea3a85010b8fefd1eba4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "C:/Users/Kai/Desktop/projs/YouthNote/node_modules/.pnpm/vuepress-plugin-md-enhance@_55647e249700ea3a85010b8fefd1eba4/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
};
