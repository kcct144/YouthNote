import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "./theme/styles/custom.css";
import MultipleChoice from "./theme/components/Question/MultipleChoice.vue";
import FillIn from "./theme/components/Question/FillIn.vue";
import MakeSentence from "./theme/components/Question/MakeSentence.vue";
import SplitSentence from "./theme/components/Question/SplitSentence.vue";
import SplitSentenceGroup from "./theme/components/Question/SplitSentenceGroup.vue";
import Matching from "./theme/components/Question/Matching.vue";
import WordSelector from "./theme/components/Question/WordSelector.vue";
import WordSelectorGroup from "./theme/components/Question/WordSelectorGroup.vue";
import OxfordPhone from "./theme/components/Phone/OxfordPhone.vue";
import PhoneWordGrid from "./theme/components/Phone/PhoneWordGrid.vue";
import MultipleChoiceS from "./theme/components/Question/MultipleChoiceS.vue";
import WordCardGrid from "./theme/components/WordCardGrid.vue";
import WebsiteNav from "./theme/components/WebsiteNav/WebsiteNav.vue";
import TaskCard from "./theme/components/TaskCard.vue";
import { createPinia } from "pinia";

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    // your custom components
    app.component("MultipleChoice", MultipleChoice);
    app.component("MultipleChoiceS", MultipleChoiceS);
    app.component("MakeSentence", MakeSentence);
    app.component("FillIn", FillIn);
    app.component("SplitSentence", SplitSentence);
    app.component("SplitSentenceGroup", SplitSentenceGroup);
    app.component("Matching", Matching);
    app.component("WordSelector", WordSelector);
    app.component("WordSelectorGroup", WordSelectorGroup);
    app.component("WordCardGrid", WordCardGrid);
    app.component("WebsiteNav", WebsiteNav);
    app.component("OxfordPhone", OxfordPhone);
    app.component("PhoneWordGrid", PhoneWordGrid);
    app.component("TaskCard", TaskCard);

    app.use(createPinia());
    app.use(ElementPlus);
    app.use(ArcoVue);
  },
});