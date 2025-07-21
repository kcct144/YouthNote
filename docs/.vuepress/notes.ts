import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const GrammarSelection = defineNoteConfig({
  dir: "course/初中英语/语法选择专题课",
  link: "/course/语法选择/",
  sidebar: "auto",
});

const bi = defineNoteConfig({
  dir: "bi",
  link: "/bi/",
  sidebar: "auto",
});

const cn = defineNoteConfig({
  dir: "cn",
  link: "/cn/",
  sidebar: "auto",
});

const en = defineNoteConfig({
  dir: "en",
  link: "/en/",
  sidebar: "auto",
});

const ma = defineNoteConfig({
  dir: "ma",
  link: "/ma/",
  sidebar: "auto",
});

const ge = defineNoteConfig({
  dir: "ge",
  link: "/ge/",
  sidebar: "auto",
});

const hi = defineNoteConfig({
  dir: "hi",
  link: "/hi/",
  sidebar: "auto",
});

const ph = defineNoteConfig({
  dir: "ph",
  link: "/ph/",
  sidebar: "auto",
});

const po = defineNoteConfig({
  dir: "po",
  link: "/po/",
  sidebar: "auto",
});

const ch = defineNoteConfig({
  dir: "ch",
  link: "/ch/",
  sidebar: "auto",
});

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [cn, ma, en, ph, bi, ch, po, hi, ge, GrammarSelection],
});
