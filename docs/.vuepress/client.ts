import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./theme/styles/custom.css";
import MultipleChoice from "./theme/components/Question/MultipleChoice.vue";
import FillIn from "./theme/components/Question/FillIn.vue";
import MakeSentence from "./theme/components/Question/MakeSentence.vue";
import Reading from "./theme/components/Reading.vue";
import Dictation from "./theme/components/Dictation.vue";
import VideoPlayer from "./theme/components/VideoPlayer.vue";
import MultipleChoiceS from "./theme/components/Question/MultipleChoiceS.vue";
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
    app.component("Reading", Reading);
    app.component("Dictation", Dictation);
    app.component("VideoPlayer", VideoPlayer);

    app.use(createPinia());
    app.use(ElementPlus);
  },
});
