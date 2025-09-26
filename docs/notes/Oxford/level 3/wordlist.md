---
title: 三级拼读 | 单词表
permalink: /Oxford/3/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const ossBaseURL = process.env.NODE_ENV === "production" ? "/media-proxy/" : "http://120.25.178.64:3150/";

const words = [
  {level: '3',title: 'a_e',word: 'tape'},
  {level: '3',title: 'a_e',word: 'cape'},
  {level: '3',title: 'a_e',word: 'cane'},
  {level: '3',title: 'a_e',word: 'mane'},
  {level: '3',title: 'ame ake',word: 'game'},
  {level: '3',title: 'ame ake',word: 'cake'},
  {level: '3',title: 'ame ake',word: 'name'},
  {level: '3',title: 'ame ake',word: 'lake'},
  {level: '3',title: 'ate ave',word: 'gate'},
  {level: '3',title: 'ate ave',word: 'wave'},
  {level: '3',title: 'ate ave',word: 'skate'},
  {level: '3',title: 'ate ave',word: 'cave'},
  {level: '3',title: 'i_e',word: 'kite'},
  {level: '3',title: 'i_e',word: 'pine'},
  {level: '3',title: 'i_e',word: 'ripe'},
  {level: '3',title: 'i_e',word: 'fine'},
  {level: '3',title: 'ime ike',word: 'lime'},
  {level: '3',title: 'ime ike',word: 'bike'},
  {level: '3',title: 'ime ike',word: 'time'},
  {level: '3',title: 'ime ike',word: 'hike'},
  {level: '3',title: 'ive ine',word: 'five'},
  {level: '3',title: 'ive ine',word: 'nine'},
  {level: '3',title: 'ive ine',word: 'dive'},
  {level: '3',title: 'ive ine',word: 'line'},
  {level: '3',title: 'o_e',word: 'home'},
  {level: '3',title: 'o_e',word: 'bone'},
  {level: '3',title: 'o_e',word: 'cone'},
  {level: '3',title: 'o_e',word: 'rope'},
  {level: '3',title: 'u_e',word: 'cube'},
  {level: '3',title: 'u_e',word: 'mute'},
  {level: '3',title: 'u_e',word: 'cute'},
  {level: '3',title: 'u_e',word: 'mule'},
  {level: '3',title: 'u_e',word: 'tube'},
  {level: '3',title: 'u_e',word: 'june'},
  {level: '3',title: 'u_e',word: 'tune'},
  {level: '3',title: 'u_e',word: 'rule'},
  {level: '3',title: 'ai',word: 'rain'},
  {level: '3',title: 'ai',word: 'nail'},
  {level: '3',title: 'ai',word: 'tail'},
  {level: '3',title: 'ai',word: 'wait'},
  {level: '3',title: 'ay',word: 'bay'},
  {level: '3',title: 'ay',word: 'day'},
  {level: '3',title: 'ay',word: 'say'},
  {level: '3',title: 'ay',word: 'pay'},
  {level: '3',title: 'ai ay',word: 'sail'},
  {level: '3',title: 'ai ay',word: 'mail'},
  {level: '3',title: 'ai ay',word: 'hay'},
  {level: '3',title: 'ai ay',word: 'way'},
  {level: '3',title: 'ee',word: 'bee'},
  {level: '3',title: 'ee',word: 'feet'},
  {level: '3',title: 'ee',word: 'seed'},
  {level: '3',title: 'ee',word: 'jeep'},
  {level: '3',title: 'ea',word: 'leaf'},
  {level: '3',title: 'ea',word: 'eat'},
  {level: '3',title: 'ea',word: 'sea'},
  {level: '3',title: 'ea',word: 'meat'},
  {level: '3',title: 'y ey',word: 'candy'},
  {level: '3',title: 'y ey',word: 'key'},
  {level: '3',title: 'y ey',word: 'happy'},
  {level: '3',title: 'y ey',word: 'money'},
  {level: '3',title: 'igh',word: 'light'},
  {level: '3',title: 'igh',word: 'night'},
  {level: '3',title: 'igh',word: 'high'},
  {level: '3',title: 'igh',word: 'right'},
  {level: '3',title: 'ie',word: 'pie'},
  {level: '3',title: 'ie',word: 'tie'},
  {level: '3',title: 'ie',word: 'lie'},
  {level: '3',title: 'ie',word: 'die'},
  {level: '3',title: 'y',word: 'spy'},
  {level: '3',title: 'y',word: 'sky'},
  {level: '3',title: 'y',word: 'cry'},
  {level: '3',title: 'y',word: 'my'},
  {level: '3',title: 'oa',word: 'boat'},
  {level: '3',title: 'oa',word: 'coat'},
  {level: '3',title: 'oa',word: 'soap'},
  {level: '3',title: 'oa',word: 'road'},
  {level: '3',title: 'ow',word: 'bow'},
  {level: '3',title: 'ow',word: 'row'},
  {level: '3',title: 'ow',word: 'yellow'},
  {level: '3',title: 'ow',word: 'pillow'},
  {level: '3',title: 'oa ow',word: 'goat'},
  {level: '3',title: 'oa ow',word: 'toad'},
  {level: '3',title: 'oa ow',word: 'elbow'},
  {level: '3',title: 'oa ow',word: 'window'},
  {level: '3',title: 'ue',word: 'blue'},
  {level: '3',title: 'ue',word: 'glue'},
  {level: '3',title: 'ue',word: 'clue'},
  {level: '3',title: 'ue',word: 'Tuesday'},
  {level: '3',title: 'ui ew',word: 'fruit'},
  {level: '3',title: 'ui ew',word: 'suit'},
  {level: '3',title: 'ui ew',word: 'new'},
  {level: '3',title: 'ui ew',word: 'dew'},
  {level: '3',title: 'oo',word: 'moon'},
  {level: '3',title: 'oo',word: 'zoo'},
  {level: '3',title: 'oo',word: 'food'},
  {level: '3',title: 'oo',word: 'boot'},
]

function groupWordsByTitle(words) {
  const groups = {}
  words.forEach(word => {if (!groups[word.title]) {  groups[word.title] = {    title: word.title,    items: []  }}groups[word.title].items.push({  word: word.word,  image: `${ossBaseURL}Oxford/lv${word.level}/image/${word.word}.png`})
  })
  return Object.values(groups)
}

const groupedWords = groupWordsByTitle(words)
</script>

<!-- 单词列表 -->

## 目录

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
  <a v-for="group in groupedWords" :key="group.title" :href="'#' + group.title"style="display: inline-block; padding: 6px 12px; background-color: var(--vp-c-bg-soft); border-radius: 4px; text-decoration: none; color: var(--vp-c-brand-1); font-weight: 500;"
  >{{ group.title }}
  </a>
</div>

<div v-for="group in groupedWords" :key="group.title">
  <h2 :id="group.title">{{group.title}}</h2>
  <PhoneWordGrid :words="group.items" />
</div>
