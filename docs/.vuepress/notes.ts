import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const Oxford = defineNoteConfig({
  dir: "Oxford",
  link: "/Oxford/",
  sidebar: "auto",
});

const Tguide = defineNoteConfig({
  dir: "Ttools/guide",
  link: "/Ttools/guide/",
  sidebar: "auto",
});

const study = defineNoteConfig({
  dir: "study",
  link: "/study/",
  sidebar: "auto",
});

const GrammarSelection = defineNoteConfig({
  dir: "course/初中英语/语法选择专题课",
  link: "/course/语法选择/",
  sidebar: "auto",
});

const PassageBlanking = defineNoteConfig({
  dir: "course/初中英语/选词填空专题课",
  link: "/course/选词填空/",
  sidebar: "auto",
});

const MiddleEnglishNote = defineNoteConfig({
  dir: "note/中考英语笔记/",
  link: "/note/中考英语笔记/",
  sidebar: "auto",
});


export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    GrammarSelection,
    PassageBlanking,
    Oxford,
    Tguide,
    study,
    MiddleEnglishNote,
  ],
});