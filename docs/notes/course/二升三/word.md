---
title: 二升三专题课-单词点读
permalink: /course/2-3/word/
createTime: 2025/07/21 11:11:40
---

<script setup>
import { ref } from 'vue'

const playAudio = (word) => {
  const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${word}`)
  audio.play()
}

const handleImageClick = (event, word) => {
  // 阻止事件冒泡，防止触发图片放大
  event.stopPropagation()
  // 阻止默认行为
  event.preventDefault()
  // 播放音频
  playAudio(word)
}
</script>


## Aa

<CardGrid cols="4">

<Card title="ant" >

<img src="./images/ant.png" @click="handleImageClick($event, 'ant')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="apple" >

<img src="./images/apple.png" @click="handleImageClick($event, 'apple')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="alligator" >

<img src="./images/alligator.png" @click="handleImageClick($event, 'alligator')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="ax" >

<img src="./images/ax.png" @click="handleImageClick($event, 'ax')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Bb

<CardGrid cols="4">

<Card title="bed" >

<img src="./images/bed.png" @click="handleImageClick($event, 'bed')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="bear" >

<img src="./images/bear.png" @click="handleImageClick($event, 'bear')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="banana" >

<img src="./images/banana.png" @click="handleImageClick($event, 'banana')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="bird" >

<img src="./images/bird.png" @click="handleImageClick($event, 'bird')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Cc

<CardGrid cols="4">

<Card title="cat" >

<img src="./images/cat.png" @click="handleImageClick($event, 'cat')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="cup" >

<img src="./images/cup.png" @click="handleImageClick($event, 'cup')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="computer" >

<img src="./images/computer.png" @click="handleImageClick($event, 'computer')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="car" >

<img src="./images/car.png" @click="handleImageClick($event, 'car')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Dd

