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

<CardGrid cols="4">

<Card title="doll" >

<img src="./images/doll.png" @click="handleImageClick($event, 'doll')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="dog" >

<img src="./images/dog.png" @click="handleImageClick($event, 'dog')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="desk" >

<img src="./images/desk.png" @click="handleImageClick($event, 'desk')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="duck" >

<img src="./images/duck.png" @click="handleImageClick($event, 'duck')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ee

<CardGrid cols="4">

<Card title="egg" >

<img src="./images/egg.png" @click="handleImageClick($event, 'egg')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="envelop" >

<img src="./images/envelop.png" @click="handleImageClick($event, 'envelop')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="elbow" >

<img src="./images/elbow.png" @click="handleImageClick($event, 'elbow')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="elephant" >

<img src="./images/elephant.png" @click="handleImageClick($event, 'elephant')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ff

<CardGrid cols="4">

<Card title="farm" >

<img src="./images/farm.png" @click="handleImageClick($event, 'farm')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="fan" >

<img src="./images/fan.png" @click="handleImageClick($event, 'fan')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="fork" >

<img src="./images/fork.png" @click="handleImageClick($event, 'fork')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="fish" >

<img src="./images/fish.png" @click="handleImageClick($event, 'fish')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Gg

<CardGrid cols="4">

<Card title="gorilla" >

<img src="./images/gorilla.png" @click="handleImageClick($event, 'gorilla')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="girl" >

<img src="./images/girl.png" @click="handleImageClick($event, 'girl')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="gift" >

<img src="./images/gift.png" @click="handleImageClick($event, 'gift')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="goat" >

<img src="./images/goat.png" @click="handleImageClick($event, 'goat')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Hh

<CardGrid cols="4">

<Card title="hat" >

<img src="./images/hat.png" @click="handleImageClick($event, 'hat')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="house" >

<img src="./images/house.png" @click="handleImageClick($event, 'house')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="hot dog" >

<img src="./images/hot dog.png" @click="handleImageClick($event, 'hot dog')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="horse" >

<img src="./images/horse.png" @click="handleImageClick($event, 'horse')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ii

<CardGrid cols="4">

<Card title="igloo" >

<img src="./images/igloo.png" @click="handleImageClick($event, 'igloo')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="insect" >

<img src="./images/insect.png" @click="handleImageClick($event, 'insect')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="iguana" >

<img src="./images/iguana.png" @click="handleImageClick($event, 'iguana')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="ink" >

<img src="./images/ink.png" @click="handleImageClick($event, 'ink')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Jj

<CardGrid cols="4">

<Card title="juice" >

<img src="./images/juice.png" @click="handleImageClick($event, 'juice')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="jacket" >

<img src="./images/jacket.png" @click="handleImageClick($event, 'jacket')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="jam" >

<img src="./images/jam.png" @click="handleImageClick($event, 'jam')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="jet" >

<img src="./images/jet.png" @click="handleImageClick($event, 'jet')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Kk

<CardGrid cols="4">

<Card title="key" >

<img src="./images/key.png" @click="handleImageClick($event, 'key')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="kite" >

<img src="./images/kite.png" @click="handleImageClick($event, 'kite')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="king" >

<img src="./images/king.png" @click="handleImageClick($event, 'king')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="kangaroo" >

<img src="./images/kangaroo.png" @click="handleImageClick($event, 'kangaroo')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ll

<CardGrid cols="4">

<Card title="lemon" >

<img src="./images/lemon.png" @click="handleImageClick($event, 'lemon')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="lamp" >

<img src="./images/lamp.png" @click="handleImageClick($event, 'lamp')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="leaf" >

<img src="./images/leaf.png" @click="handleImageClick($event, 'leaf')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="lion" >

<img src="./images/lion.png" @click="handleImageClick($event, 'lion')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Mm

<CardGrid cols="4">

<Card title="mouse" >

<img src="./images/mouse.png" @click="handleImageClick($event, 'mouse')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="money" >

<img src="./images/money.png" @click="handleImageClick($event, 'money')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="milk" >

<img src="./images/milk.png" @click="handleImageClick($event, 'milk')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="monkey" >

<img src="./images/monkey.png" @click="handleImageClick($event, 'monkey')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Nn

<CardGrid cols="4">

<Card title="nest" >

<img src="./images/nest.png" @click="handleImageClick($event, 'nest')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="nose" >

<img src="./images/nose.png" @click="handleImageClick($event, 'nose')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="nut" >

<img src="./images/nut.png" @click="handleImageClick($event, 'nut')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="net" >

<img src="./images/net.png" @click="handleImageClick($event, 'net')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Oo

<CardGrid cols="4">

<Card title="ostrich" >

<img src="./images/ostrich.png" @click="handleImageClick($event, 'ostrich')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="octopus" >

<img src="./images/octopus.png" @click="handleImageClick($event, 'octopus')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="olive" >

<img src="./images/olive.png" @click="handleImageClick($event, 'olive')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="ox" >

<img src="./images/ox.png" @click="handleImageClick($event, 'ox')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Pp

<CardGrid cols="4">

<Card title="panda" >

<img src="./images/panda.png" @click="handleImageClick($event, 'panda')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="pineapple" >

<img src="./images/pineapple.png" @click="handleImageClick($event, 'pineapple')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="peach" >

<img src="./images/peach.png" @click="handleImageClick($event, 'peach')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="pen" >

<img src="./images/pen.png" @click="handleImageClick($event, 'pen')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Qq

<CardGrid cols="4">

<Card title="quilt" >

<img src="./images/quilt.png" @click="handleImageClick($event, 'quilt')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="question" >

<img src="./images/question.png" @click="handleImageClick($event, 'question')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="quiz" >

<img src="./images/quiz.png" @click="handleImageClick($event, 'quiz')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="queen" >

<img src="./images/queen.png" @click="handleImageClick($event, 'queen')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Rr

<CardGrid cols="4">

<Card title="rice" >

<img src="./images/rice.png" @click="handleImageClick($event, 'rice')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="rose" >

<img src="./images/rose.png" @click="handleImageClick($event, 'rose')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="rabbit" >

<img src="./images/rabbit.png" @click="handleImageClick($event, 'rabbit')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="robot" >

<img src="./images/robot.png" @click="handleImageClick($event, 'robot')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ss

<CardGrid cols="4">

<Card title="soap" >

<img src="./images/soap.png" @click="handleImageClick($event, 'soap')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="sun" >

<img src="./images/sun.png" @click="handleImageClick($event, 'sun')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="socks" >

<img src="./images/socks.png" @click="handleImageClick($event, 'socks')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="seal" >

<img src="./images/seal.png" @click="handleImageClick($event, 'seal')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Tt

<CardGrid cols="4">

<Card title="turtle" >

<img src="./images/turtle.png" @click="handleImageClick($event, 'turtle')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="tent" >

<img src="./images/tent.png" @click="handleImageClick($event, 'tent')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="teacher" >

<img src="./images/teacher.png" @click="handleImageClick($event, 'teacher')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="tiger" >

<img src="./images/tiger.png" @click="handleImageClick($event, 'tiger')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Uu

<CardGrid cols="4">

<Card title="umpire" >

<img src="./images/umpire.png" @click="handleImageClick($event, 'umpire')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="uncle" >

<img src="./images/uncle.png" @click="handleImageClick($event, 'uncle')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="umbrella" >

<img src="./images/umbrella.png" @click="handleImageClick($event, 'umbrella')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="up" >

<img src="./images/up.png" @click="handleImageClick($event, 'up')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Vv

<CardGrid cols="4">

<Card title="van" >

<img src="./images/van.png" @click="handleImageClick($event, 'van')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="vest" >

<img src="./images/vest.png" @click="handleImageClick($event, 'vest')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="vet" >

<img src="./images/vet.png" @click="handleImageClick($event, 'vet')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="violin" >

<img src="./images/violin.png" @click="handleImageClick($event, 'violin')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Ww

<CardGrid cols="4">

<Card title="wet" >

<img src="./images/wet.png" @click="handleImageClick($event, 'wet')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="watch" >

<img src="./images/watch.png" @click="handleImageClick($event, 'watch')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="water" >

<img src="./images/water.png" @click="handleImageClick($event, 'water')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="wolf" >

<img src="./images/wolf.png" @click="handleImageClick($event, 'wolf')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Xx

<CardGrid cols="4">

<Card title="box" >

<img src="./images/box.png" @click="handleImageClick($event, 'box')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="wax" >

<img src="./images/wax.png" @click="handleImageClick($event, 'wax')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="fox" >

<img src="./images/fox.png" @click="handleImageClick($event, 'fox')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="six" >

<img src="./images/six.png" @click="handleImageClick($event, 'six')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Yy

<CardGrid cols="4">

<Card title="yoyo" >

<img src="./images/yoyo.png" @click="handleImageClick($event, 'yoyo')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="yak" >

<img src="./images/yak.png" @click="handleImageClick($event, 'yak')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="yogurt" >

<img src="./images/yogurt.png" @click="handleImageClick($event, 'yogurt')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="yacht" >

<img src="./images/yacht.png" @click="handleImageClick($event, 'yacht')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>

## Zz

<CardGrid cols="4">

<Card title="zibra" >

<img src="./images/zibra.png" @click="handleImageClick($event, 'zibra')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="zoo" >

<img src="./images/zoo.png" @click="handleImageClick($event, 'zoo')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="zero" >

<img src="./images/zero.png" @click="handleImageClick($event, 'zero')" style="cursor: pointer; pointer-events: auto;" />

</Card>

<Card title="zipper" >

<img src="./images/zipper.png" @click="handleImageClick($event, 'zipper')" style="cursor: pointer; pointer-events: auto;" />

</Card>

</CardGrid>
