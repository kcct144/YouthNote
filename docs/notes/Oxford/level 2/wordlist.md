---
title: 二级拼读 | 单词表
permalink: /Oxford/2/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const ossBaseURL = process.env.NODE_ENV === "production" ? "/media-proxy/" : "http://120.25.178.64:3150/";

const words = [
  {level: '2',title: 'a',word: 'cat'},
  {level: '2',title: 'a',word: 'ant'},
  {level: '2',title: 'a',word: 'yak'},
  {level: '2',title: 'a',word: 'ax'},
  {level: '2',title: 'am',word: 'ram'},
  {level: '2',title: 'am',word: 'jam'},
  {level: '2',title: 'am',word: 'yam'},
  {level: '2',title: 'am',word: 'dam'},
  {level: '2',title: 'an',word: 'fan'},
  {level: '2',title: 'an',word: 'man'},
  {level: '2',title: 'an',word: 'pan'},
  {level: '2',title: 'an',word: 'can'},
  {level: '2',title: 'ad ag',word: 'dad'},
  {level: '2',title: 'ad ag',word: 'pad'},
  {level: '2',title: 'ad ag',word: 'bag'},
  {level: '2',title: 'ad ag',word: 'rag'},
  {level: '2',title: 'ap',word: 'cap'},
  {level: '2',title: 'ap',word: 'map'},
  {level: '2',title: 'ap',word: 'nap'},
  {level: '2',title: 'ap',word: 'tap'},
  {level: '2',title: 'at',word: 'bat'},
  {level: '2',title: 'at',word: 'rat'},
  {level: '2',title: 'at',word: 'hat'},
  {level: '2',title: 'at',word: 'mat'},
  {level: '2',title: 'e',word: 'web'},
  {level: '2',title: 'e',word: 'egg'},
  {level: '2',title: 'e',word: 'vet'},
  {level: '2',title: 'e',word: 'ten'},
  {level: '2',title: 'et',word: 'jet'},
  {level: '2',title: 'et',word: 'net'},
  {level: '2',title: 'et',word: 'wet'},
  {level: '2',title: 'et',word: 'pet'},
  {level: '2',title: 'en ed',word: 'hen'},
  {level: '2',title: 'en ed',word: 'pen'},
  {level: '2',title: 'en ed',word: 'red'},
  {level: '2',title: 'en ed',word: 'bed'},
  {level: '2',title: 'i',word: 'hip'},
  {level: '2',title: 'i',word: 'ink'},
  {level: '2',title: 'i',word: 'zip'},
  {level: '2',title: 'i',word: 'in'},
  {level: '2',title: 'ip',word: 'lip'},
  {level: '2',title: 'ip',word: 'tip'},
  {level: '2',title: 'ip',word: 'sip'},
  {level: '2',title: 'ip',word: 'rip'},
  {level: '2',title: 'ib id',word: 'bib'},
  {level: '2',title: 'ib id',word: 'rib'},
  {level: '2',title: 'ib id',word: 'kid'},
  {level: '2',title: 'ib id',word: 'lid'},
  {level: '2',title: 'in',word: 'pin'},
  {level: '2',title: 'in',word: 'fin'},
  {level: '2',title: 'in',word: 'bin'},
  {level: '2',title: 'in',word: 'win'},
  {level: '2',title: 'ig',word: 'fig'},
  {level: '2',title: 'ig',word: 'wig'},
  {level: '2',title: 'ig',word: 'big'},
  {level: '2',title: 'ig',word: 'dig'},
  {level: '2',title: 'it ix',word: 'pit'},
  {level: '2',title: 'it ix',word: 'hit'},
  {level: '2',title: 'it ix',word: 'six'},
  {level: '2',title: 'it ix',word: 'mix'},
  {level: '2',title: 'o',word: 'fox'},
  {level: '2',title: 'o',word: 'log'},
  {level: '2',title: 'o',word: 'ox'},
  {level: '2',title: 'o',word: 'rod'},
  {level: '2',title: 'ot',word: 'pot'},
  {level: '2',title: 'ot',word: 'hot'},
  {level: '2',title: 'ot',word: 'cot'},
  {level: '2',title: 'ot',word: 'dot'},
  {level: '2',title: 'op',word: 'top'},
  {level: '2',title: 'op',word: 'mop'},
  {level: '2',title: 'op',word: 'hop'},
  {level: '2',title: 'op',word: 'pop'},
  {level: '2',title: 'u',word: 'sun'},
  {level: '2',title: 'u',word: 'up'},
  {level: '2',title: 'u',word: 'jug'},
  {level: '2',title: 'u',word: 'hug'},
  {level: '2',title: 'ug',word: 'bug'},
  {level: '2',title: 'ug',word: 'rug'},
  {level: '2',title: 'ug',word: 'mug'},
  {level: '2',title: 'ug',word: ''},
  {level: '2',title: 'ud up',word: 'bud'},
  {level: '2',title: 'ud up',word: 'mud'},
  {level: '2',title: 'ud up',word: 'pup'},
  {level: '2',title: 'ud up',word: 'cup'},
  {level: '2',title: 'ut',word: 'nut'},
  {level: '2',title: 'ut',word: 'hut'},
  {level: '2',title: 'ut',word: 'cut'},
  {level: '2',title: 'ut',word: ''},
  {level: '2',title: 'ub um',word: 'cub'},
  {level: '2',title: 'ub um',word: 'tub'},
  {level: '2',title: 'ub um',word: 'gum'},
  {level: '2',title: 'ub um',word: 'hum'},
  {level: '2',title: 'un',word: 'bun'},
  {level: '2',title: 'un',word: 'run'},
  {level: '2',title: 'un',word: 'fun'},
  {level: '2',title: 'un',word: ''},
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
