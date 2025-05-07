import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'
import ControlButtons from "./theme/components/Question/ControlButtons.vue";
import QuestionContainer from "./theme/components/Question/QuestionContainer.vue";
import GrammarSelection from "./theme/components/GrammarSelection.vue";
import PassageBlank from "./theme/components/PassageBlank.vue";
import KeyWords from "./theme/components/KeyWords.vue";
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
    app.component("GrammarSelection", GrammarSelection);
    app.component("PassageBlank", PassageBlank);
    app.component("KeyWords", KeyWords);
    app.component("MultipleChoice", MultipleChoice);
    app.component("FillIn", FillIn);
    app.use(ElementPlus);
  },
});
