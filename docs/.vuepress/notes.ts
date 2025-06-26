import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'


const grammar = defineNoteConfig({
  dir: '',
  link: '/grammar',
  sidebar: ['NP/','VP/','PP/'],
})

export const notes = defineNotesConfig({
  dir: 'grammar',
  link: '/',
  notes: [grammar],
})
