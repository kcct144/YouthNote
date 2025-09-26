---
title: 五级拼读 | 单词表
permalink: /Oxford/5/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const ossBaseURL = process.env.NODE_ENV === "production" ? "/media-proxy/" : "http://120.25.178.64:3150/";

const words = [
  {level: '5', title: 'ar', word: 'car'},
  {level: '5',title: 'ar',word: 'farm'},
  {level: '5',title: 'ar',word: 'park'},
  {level: '5',title: 'ar',word: 'star'},
  {level: '5',title: 'ir ur',word: 'bird'},
  {level: '5',title: 'ir ur',word: 'girl'},
  {level: '5',title: 'ir ur',word: 'nurse'},
  {level: '5',title: 'ir ur',word: 'purple'},
  {level: '5',title: 'er or',word: 'teacher'},
  {level: '5',title: 'er or',word: 'sister'},
  {level: '5',title: 'er or',word: 'doctor'},
  {level: '5',title: 'er or',word: 'tractor'},
  {level: '5',title: 'ou ow',word: 'mouse'},
  {level: '5',title: 'ou ow',word: 'house'},
  {level: '5',title: 'ou ow',word: 'cow'},
  {level: '5',title: 'ou ow',word: 'brown'},
  {level: '5',title: 'oi oy',word: 'coin'},
  {level: '5',title: 'oi oy',word: 'soil'},
  {level: '5',title: 'oi oy',word: 'toy'},
  {level: '5',title: 'oi oy',word: 'boy'},
  {level: '5',title: 'oo u',word: 'book'},
  {level: '5',title: 'oo u',word: 'foot'},
  {level: '5',title: 'oo u',word: 'bush'},
  {level: '5',title: 'oo u',word: 'pull'},
  {level: '5',title: 'au aw',word: 'sauce'},
  {level: '5',title: 'au aw',word: 'August'},
  {level: '5',title: 'au aw',word: 'prawn'},
  {level: '5',title: 'au aw',word: 'draw'},
  {level: '5',title: 'all wa',word: 'ball'},
  {level: '5',title: 'all wa',word: 'tall'},
  {level: '5',title: 'all wa',word: 'water'},
  {level: '5',title: 'all wa',word: 'walk'},
  {level: '5',title: 'or oar',word: 'horse'},
  {level: '5',title: 'or oar',word: 'fork'},
  {level: '5',title: 'or oar',word: 'roar'},
  {level: '5',title: 'or oar',word: 'board'},
  {level: '5',title: 'are air',word: 'square'},
  {level: '5',title: 'are air',word: 'share'},
  {level: '5',title: 'are air',word: 'chair'},
  {level: '5',title: 'are air',word: 'hair'},
  {level: '5',title: 'ea ear',word: 'bread'},
  {level: '5',title: 'ea ear',word: 'head'},
  {level: '5',title: 'ea ear',word: 'bear'},
  {level: '5',title: 'ea ear',word: 'pear'},
  {level: '5',title: 'ear eer',word: 'ear'},
  {level: '5',title: 'ear eer',word: 'clear'},
  {level: '5',title: 'ear eer',word: 'deer'},
  {level: '5',title: 'ear eer',word: 'cheer'},
  {level: '5',title: 'a',word: 'acorn'},
  {level: '5',title: 'a',word: 'baby'},
  {level: '5',title: 'a',word: 'elevator'},
  {level: '5',title: 'a',word: 'lady'},
  {level: '5',title: 'e i',word: 'he'},
  {level: '5',title: 'e i',word: 'she'},
  {level: '5',title: 'e i',word: 'tiger'},
  {level: '5',title: 'e i',word: 'child'},
  {level: '5',title: 'o u',word: 'cold'},
  {level: '5',title: 'o u',word: 'hotel'},
  {level: '5',title: 'o u',word: 'uniform'},
  {level: '5',title: 'o u',word: 'music'},
  {level: '5',title: 'a',word: 'panda'},
  {level: '5',title: 'a',word: 'gorilla'},
  {level: '5',title: 'a',word: 'banana'},
  {level: '5',title: 'a',word: 'umbrella'},
  {level: '5',title: 'e i o u',word: 'chicken'},
  {level: '5',title: 'e i o u',word: 'pencil'},
  {level: '5',title: 'e i o u',word: 'lemon'},
  {level: '5',title: 'e i o u',word: 'surprise'},
  {level: '5',title: 'o',word: 'monkey'},
  {level: '5',title: 'o',word: 'love'},
  {level: '5',title: 'o',word: 'son'},
  {level: '5',title: 'o',word: 'honey'},
  {level: '5',title: 'kn wr',word: 'knife'},
  {level: '5',title: 'kn wr',word: 'knee'},
  {level: '5',title: 'kn wr',word: 'write'},
  {level: '5',title: 'kn wr',word: 'wrong'},
  {level: '5',title: 'mb e',word: 'lamb'},
  {level: '5',title: 'mb e',word: 'comb'},
  {level: '5',title: 'mb e',word: 'glove'},
  {level: '5',title: 'mb e',word: 'live'},
  {level: '5',title: 'rh st',word: 'rhino'},
  {level: '5',title: 'rh st',word: 'rhubarb'},
  {level: '5',title: 'rh st',word: 'whistle'},
  {level: '5',title: 'rh st',word: 'castle'},
  {level: '5',title: 'ture sure',word: 'piture'},
  {level: '5',title: 'ture sure',word: 'nature'},
  {level: '5',title: 'ture sure',word: 'treasure'},
  {level: '5',title: 'ture sure',word: 'measure'},
  {level: '5',title: 'tion sion',word: 'station'},
  {level: '5',title: 'tion sion',word: 'competition'},
  {level: '5',title: 'tion sion',word: 'television'},
  {level: '5',title: 'tion sion',word: 'excursion'},
  {level: '5',title: 'ous ful',word: 'famous'},
  {level: '5',title: 'ous ful',word: 'dangerous'},
  {level: '5',title: 'ous ful',word: 'beautiful'},
  {level: '5',title: 'ous ful',word: 'helpful'
  }
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
