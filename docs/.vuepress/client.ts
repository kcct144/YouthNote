import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'
import ControlButtons from "./theme/components/Question/ControlButtons.vue";
import QuestionContainer from "./theme/components/Question/QuestionContainer.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./theme/styles/custom.css";
import MultipleChoice from "./theme/components/Question/MultipleChoice.vue";
import FillIn from "./theme/components/Question/FillIn.vue";

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    // your custom components
    // app.component('CustomComponent', CustomComponent)
    app.component("ControlButtons", ControlButtons);
    app.component("QuestionContainer", QuestionContainer);
    app.component("MultipleChoice", MultipleChoice);
    app.component("FillIn", FillIn);
    app.use(ElementPlus);
  },
});
