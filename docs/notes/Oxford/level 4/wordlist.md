---
title: 四级拼读 | 单词表
permalink: /Oxford/4/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const ossBaseURL = process.env.NODE_ENV === "production" ? "/media-proxy/" : "http://120.25.178.64:3150/";

const words = [
  {level: '4',title: 'bl cl',word: 'black'},
  {level: '4',title: 'bl cl',word: 'blanket'},
  {level: '4',title: 'bl cl',word: 'clock'},
  {level: '4',title: 'bl cl',word: 'club'},
  {level: '4',title: 'br cr',word: 'broom'},
  {level: '4',title: 'br cr',word: 'bride'},
  {level: '4',title: 'br cr',word: 'crab'},
  {level: '4',title: 'br cr',word: 'crocodile'},
  {level: '4',title: 'fl gl',word: 'fly'},
  {level: '4',title: 'fl gl',word: 'flag'},
  {level: '4',title: 'fl gl',word: 'globe'},
  {level: '4',title: 'fl gl',word: 'glass'},
  {level: '4',title: 'fr gr',word: 'frog'},
  {level: '4',title: 'fr gr',word: 'Friday'},
  {level: '4',title: 'fr gr',word: 'green'},
  {level: '4',title: 'fr gr',word: 'grass'},
  {level: '4',title: 'pl sl',word: 'plate'},
  {level: '4',title: 'pl sl',word: 'play'},
  {level: '4',title: 'pl sl',word: 'slide'},
  {level: '4',title: 'pl sl',word: 'sleep'},
  {level: '4',title: 'dr tr',word: 'drum'},
  {level: '4',title: 'dr tr',word: 'dress'},
  {level: '4',title: 'dr tr',word: 'truck'},
  {level: '4',title: 'dr tr',word: 'tree'},
  {level: '4',title: 'sm sn',word: 'smile'},
  {level: '4',title: 'sm sn',word: 'smoke'},
  {level: '4',title: 'sm sn',word: 'snake'},
  {level: '4',title: 'sm sn',word: 'snow'},
  {level: '4',title: 'sp sw',word: 'spoon'},
  {level: '4',title: 'sp sw',word: 'spot'},
  {level: '4',title: 'sp sw',word: 'swing'},
  {level: '4',title: 'sp sw',word: 'swim'},
  {level: '4',title: 'st',word: 'stop'},
  {level: '4',title: 'st',word: 'test'},
  {level: '4',title: 'st',word: 'stamp'},
  {level: '4',title: 'st',word: 'fast'},
  {level: '4',title: 'sh',word: 'shell'},
  {level: '4',title: 'sh',word: 'fish'},
  {level: '4',title: 'sh',word: 'ship'},
  {level: '4',title: 'sh',word: 'brush'},
  {level: '4',title: 'ch tch',word: 'chick'},
  {level: '4',title: 'ch tch',word: 'lunch'},
  {level: '4',title: 'ch tch',word: 'watch'},
  {level: '4',title: 'ch tch',word: 'catch'},
  {level: '4',title: 'ph wh',word: 'phone'},
  {level: '4',title: 'ph wh',word: 'dolphin'},
  {level: '4',title: 'ph wh',word: 'whale'},
  {level: '4',title: 'ph wh',word: 'white'},
  {level: '4',title: 'voiced th',word: 'this'},
  {level: '4',title: 'voiced th',word: 'that'},
  {level: '4',title: 'voiced th',word: 'mother'},
  {level: '4',title: 'voiced th',word: 'father'},
  {level: '4',title: 'unvoiced th',word: 'three'},
  {level: '4',title: 'unvoiced th',word: 'teeth'},
  {level: '4',title: 'unvoiced th',word: 'think'},
  {level: '4',title: 'unvoiced th',word: 'bath'},
  {level: '4',title: 'ck qu',word: 'duck'},
  {level: '4',title: 'ck qu',word: 'rocket'},
  {level: '4',title: 'ck qu',word: 'queen'},
  {level: '4',title: 'ck qu',word: 'quilt'},
  {level: '4',title: 'ng nk',word: 'king'},
  {level: '4',title: 'ng nk',word: 'long'},
  {level: '4',title: 'ng nk',word: 'bank'},
  {level: '4',title: 'ng nk',word: 'pink'},
  {level: '4',title: 'nd nt',word: 'wind'},
  {level: '4',title: 'nd nt',word: 'hand'},
  {level: '4',title: 'nd nt',word: 'tent'},
  {level: '4',title: 'nd nt',word: 'paint'},
  {level: '4',title: 'lt mp',word: 'belt'},
  {level: '4',title: 'lt mp',word: 'adult'},
  {level: '4',title: 'lt mp',word: 'lamp'},
  {level: '4',title: 'lt mp',word: 'camp'},
  {level: '4',title: 'sk sc',word: 'skunk'},
  {level: '4',title: 'sk sc',word: 'desk'},
  {level: '4',title: 'sk sc',word: 'scale'},
  {level: '4',title: 'sk sc',word: 'school'},
  {level: '4',title: 'spr str',word: 'spray'},
  {level: '4',title: 'spr str',word: 'spring'},
  {level: '4',title: 'spr str',word: 'string'},
  {level: '4',title: 'spr str',word: 'strong'},
  {level: '4',title: 'spl squ',word: 'splash'},
  {level: '4',title: 'spl squ',word: 'splint'},
  {level: '4',title: 'spl squ',word: 'squid'},
  {level: '4',title: 'spl squ',word: 'square'},
  {level: '4',title: 'soft c',word: 'rice'},
  {level: '4',title: 'soft c',word: 'city'},
  {level: '4',title: 'soft c',word: 'ice cream'},
  {level: '4',title: 'soft c',word: 'cell phone'},
  {level: '4',title: 'soft g',word: 'giraffe'},
  {level: '4',title: 'soft g',word: 'orange'},
  {level: '4',title: 'soft g',word: 'giant'},
  {level: '4',title: 'soft g',word: 'cage'},
  {level: '4',title: 'voiced s',word: 'rose'},
  {level: '4',title: 'voiced s',word: 'jeans'},
  {level: '4',title: 'voiced s',word: 'cheese'},
  {level: '4',title: 'voiced s',word: 'legs'},
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
