---
title: 五级拼读 | 单词表
permalink: /Oxford/5/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const words = [
  { level: '1', title: 'Aa', word: 'ant' },
  { level: '1', title: 'Aa', word: 'apple' },
  { level: '1', title: 'Aa', word: 'alligator' },
  { level: '1', title: 'Aa', word: 'ax' },
  { level: '1', title: 'Bb', word: 'bed' },
  { level: '1', title: 'Bb', word: 'bear' },
  { level: '1', title: 'Bb', word: 'banana' },
  { level: '1', title: 'Bb', word: 'bird' },
  { level: '1', title: 'Cc', word: 'cat' },
  { level: '1', title: 'Cc', word: 'cup' },
  { level: '1', title: 'Cc', word: 'computer' },
  { level: '1', title: 'Cc', word: 'car' },
  { level: '1', title: 'Dd', word: 'doll' },
  { level: '1', title: 'Dd', word: 'dog' },
  { level: '1', title: 'Dd', word: 'desk' },
  { level: '1', title: 'Dd', word: 'duck' },
  { level: '1', title: 'Ee', word: 'egg' },
  { level: '1', title: 'Ee', word: 'envelop' },
  { level: '1', title: 'Ee', word: 'elbow' },
  { level: '1', title: 'Ee', word: 'elephant' },
  { level: '1', title: 'Ff', word: 'farm' },
  { level: '1', title: 'Ff', word: 'fan' },
  { level: '1', title: 'Ff', word: 'fork' },
  { level: '1', title: 'Ff', word: 'fish' },
  { level: '1', title: 'Gg', word: 'gorilla' },
  { level: '1', title: 'Gg', word: 'girl' },
  { level: '1', title: 'Gg', word: 'gift' },
  { level: '1', title: 'Gg', word: 'goat' },
  { level: '1', title: 'Hh', word: 'hat' },
  { level: '1', title: 'Hh', word: 'house' },
  { level: '1', title: 'Hh', word: 'hot dog' },
  { level: '1', title: 'Hh', word: 'horse' },
  { level: '1', title: 'Ii', word: 'igloo' },
  { level: '1', title: 'Ii', word: 'insect' },
  { level: '1', title: 'Ii', word: 'iguana' },
  { level: '1', title: 'Ii', word: 'ink' },
  { level: '1', title: 'Jj', word: 'juice' },
  { level: '1', title: 'Jj', word: 'jacket' },
  { level: '1', title: 'Jj', word: 'jam' },
  { level: '1', title: 'Jj', word: 'jet' },
  { level: '1', title: 'Kk', word: 'key' },
  { level: '1', title: 'Kk', word: 'kite' },
  { level: '1', title: 'Kk', word: 'king' },
  { level: '1', title: 'Kk', word: 'kangaroo' },
  { level: '1', title: 'Ll', word: 'lemon' },
  { level: '1', title: 'Ll', word: 'lamp' },
  { level: '1', title: 'Ll', word: 'leaf' },
  { level: '1', title: 'Ll', word: 'lion' },
  { level: '1', title: 'Mm', word: 'mouse' },
  { level: '1', title: 'Mm', word: 'money' },
  { level: '1', title: 'Mm', word: 'milk' },
  { level: '1', title: 'Mm', word: 'monkey' },
  { level: '1', title: 'Nn', word: 'nest' },
  { level: '1', title: 'Nn', word: 'nose' },
  { level: '1', title: 'Nn', word: 'nut' },
  { level: '1', title: 'Nn', word: 'net' },
  { level: '1', title: 'Oo', word: 'ostrich' },
  { level: '1', title: 'Oo', word: 'octopus' },
  { level: '1', title: 'Oo', word: 'olive' },
  { level: '1', title: 'Oo', word: 'ox' },
  { level: '1', title: 'Pp', word: 'panda' },
  { level: '1', title: 'Pp', word: 'pineapple' },
  { level: '1', title: 'Pp', word: 'peach' },
  { level: '1', title: 'Pp', word: 'pen' },
  { level: '1', title: 'Qq', word: 'quilt' },
  { level: '1', title: 'Qq', word: 'question' },
  { level: '1', title: 'Qq', word: 'quiz' },
  { level: '1', title: 'Qq', word: 'queen' },
  { level: '1', title: 'Rr', word: 'rice' },
  { level: '1', title: 'Rr', word: 'rose' },
  { level: '1', title: 'Rr', word: 'rabbit' },
  { level: '1', title: 'Rr', word: 'robot' },
  { level: '1', title: 'Ss', word: 'soap' },
  { level: '1', title: 'Ss', word: 'sun' },
  { level: '1', title: 'Ss', word: 'socks' },
  { level: '1', title: 'Ss', word: 'seal' },
  { level: '1', title: 'Tt', word: 'turtle' },
  { level: '1', title: 'Tt', word: 'tent' },
  { level: '1', title: 'Tt', word: 'teacher' },
  { level: '1', title: 'Tt', word: 'tiger' },
  { level: '1', title: 'Uu', word: 'umpire' },
  { level: '1', title: 'Uu', word: 'uncle' },
  { level: '1', title: 'Uu', word: 'umbrella' },
  { level: '1', title: 'Uu', word: 'up' },
  { level: '1', title: 'Vv', word: 'van' },
  { level: '1', title: 'Vv', word: 'vest' },
  { level: '1', title: 'Vv', word: 'vet' },
  { level: '1', title: 'Vv', word: 'violin' },
  { level: '1', title: 'Ww', word: 'wet' },
  { level: '1', title: 'Ww', word: 'watch' },
  { level: '1', title: 'Ww', word: 'water' },
  { level: '1', title: 'Ww', word: 'wolf' },
  { level: '1', title: 'Xx', word: 'box' },
  { level: '1', title: 'Xx', word: 'wax' },
  { level: '1', title: 'Xx', word: 'fox' },
  { level: '1', title: 'Xx', word: 'six' },
  { level: '1', title: 'Yy', word: 'yoyo' },
  { level: '1', title: 'Yy', word: 'yak' },
  { level: '1', title: 'Yy', word: 'yogurt' },
  { level: '1', title: 'Yy', word: 'yacht' },
  { level: '1', title: 'Zz', word: 'zibra' },
  { level: '1', title: 'Zz', word: 'zoo' },
  { level: '1', title: 'Zz', word: 'zero' },
  { level: '1', title: 'Zz', word: 'zipper' }
]
</script>

<!-- 单词列表 -->

<div v-for="group in groupWordsByTitle(words)" :key="group.title">
  <h2>{{group.title}}</h2>
  <WordCardGrid :words="group.items" />
</div>

<script>
function groupWordsByTitle(words) {
  const groups = {}
  words.forEach(word => {
    if (!groups[word.title]) {
      groups[word.title] = {
        title: word.title,
        items: []
      }
    }
    groups[word.title].items.push({
      word: word.word,
      image: `/images/Oxford/level1/${word.word}.png`
    })
  })
  return Object.values(groups)
}
</script>
