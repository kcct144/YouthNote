---
title: 一级拼读 | 单词表
permalink: /Oxford/1/wordlist/
createTime: 2025/07/21 11:11:40
---

<script setup>
const letterWords = {
  Aa: [
    { word: 'ant', image: '/images/Oxford/level1/ant.png' },
    { word: 'apple', image: '/images/Oxford/level1/apple.png' },
    { word: 'alligator', image: '/images/Oxford/level1/alligator.png' },
    { word: 'ax', image: '/images/Oxford/level1/ax.png' }
  ],
  Bb: [
    { word: 'bed', image: '/images/Oxford/level1/bed.png' },
    { word: 'bear', image: '/images/Oxford/level1/bear.png' },
    { word: 'banana', image: '/images/Oxford/level1/banana.png' },
    { word: 'bird', image: '/images/Oxford/level1/bird.png' }
  ],
  Cc: [
    { word: 'cat', image: '/images/Oxford/level1/cat.png' },
    { word: 'cup', image: '/images/Oxford/level1/cup.png' },
    { word: 'computer', image: '/images/Oxford/level1/computer.png' },
    { word: 'car', image: '/images/Oxford/level1/car.png' }
  ],
  Dd: [
    { word: 'doll', image: '/images/Oxford/level1/doll.png' },
    { word: 'dog', image: '/images/Oxford/level1/dog.png' },
    { word: 'desk', image: '/images/Oxford/level1/desk.png' },
    { word: 'duck', image: '/images/Oxford/level1/duck.png' }
  ],
  Ee: [
    { word: 'egg', image: '/images/Oxford/level1/egg.png' },
    { word: 'envelop', image: '/images/Oxford/level1/envelop.png' },
    { word: 'elbow', image: '/images/Oxford/level1/elbow.png' },
    { word: 'elephant', image: '/images/Oxford/level1/elephant.png' }
  ],
  Ff: [
    { word: 'farm', image: '/images/Oxford/level1/farm.png' },
    { word: 'fan', image: '/images/Oxford/level1/fan.png' },
    { word: 'fork', image: '/images/Oxford/level1/fork.png' },
    { word: 'fish', image: '/images/Oxford/level1/fish.png' }
  ],
  Gg: [
    { word: 'gorilla', image: '/images/Oxford/level1/gorilla.png' },
    { word: 'girl', image: '/images/Oxford/level1/girl.png' },
    { word: 'gift', image: '/images/Oxford/level1/gift.png' },
    { word: 'goat', image: '/images/Oxford/level1/goat.png' }
  ],
  Hh: [
    { word: 'hat', image: '/images/Oxford/level1/hat.png' },
    { word: 'house', image: '/images/Oxford/level1/house.png' },
    { word: 'hot dog', image: '/images/Oxford/level1/hot dog.png' },
    { word: 'horse', image: '/images/Oxford/level1/horse.png' }
  ],
  Ii: [
    { word: 'igloo', image: '/images/Oxford/level1/igloo.png' },
    { word: 'insect', image: '/images/Oxford/level1/insect.png' },
    { word: 'iguana', image: '/images/Oxford/level1/iguana.png' },
    { word: 'ink', image: '/images/Oxford/level1/ink.png' }
  ],
  Jj: [
    { word: 'juice', image: '/images/Oxford/level1/juice.png' },
    { word: 'jacket', image: '/images/Oxford/level1/jacket.png' },
    { word: 'jam', image: '/images/Oxford/level1/jam.png' },
    { word: 'jet', image: '/images/Oxford/level1/jet.png' }
  ],
  Kk: [
    { word: 'key', image: '/images/Oxford/level1/key.png' },
    { word: 'kite', image: '/images/Oxford/level1/kite.png' },
    { word: 'king', image: '/images/Oxford/level1/king.png' },
    { word: 'kangaroo', image: '/images/Oxford/level1/kangaroo.png' }
  ],
  Ll: [
    { word: 'lemon', image: '/images/Oxford/level1/lemon.png' },
    { word: 'lamp', image: '/images/Oxford/level1/lamp.png' },
    { word: 'leaf', image: '/images/Oxford/level1/leaf.png' },
    { word: 'lion', image: '/images/Oxford/level1/lion.png' }
  ],
  Mm: [
    { word: 'mouse', image: '/images/Oxford/level1/mouse.png' },
    { word: 'money', image: '/images/Oxford/level1/money.png' },
    { word: 'milk', image: '/images/Oxford/level1/milk.png' },
    { word: 'monkey', image: '/images/Oxford/level1/monkey.png' }
  ],
  Nn: [
    { word: 'nest', image: '/images/Oxford/level1/nest.png' },
    { word: 'nose', image: '/images/Oxford/level1/nose.png' },
    { word: 'nut', image: '/images/Oxford/level1/nut.png' },
    { word: 'net', image: '/images/Oxford/level1/net.png' }
  ],
  Oo: [
    { word: 'ostrich', image: '/images/Oxford/level1/ostrich.png' },
    { word: 'octopus', image: '/images/Oxford/level1/octopus.png' },
    { word: 'olive', image: '/images/Oxford/level1/olive.png' },
    { word: 'ox', image: '/images/Oxford/level1/ox.png' }
  ],
  Pp: [
    { word: 'panda', image: '/images/Oxford/level1/panda.png' },
    { word: 'pineapple', image: '/images/Oxford/level1/pineapple.png' },
    { word: 'peach', image: '/images/Oxford/level1/peach.png' },
    { word: 'pen', image: '/images/Oxford/level1/pen.png' }
  ],
  Qq: [
    { word: 'quilt', image: '/images/Oxford/level1/quilt.png' },
    { word: 'question', image: '/images/Oxford/level1/question.png' },
    { word: 'quiz', image: '/images/Oxford/level1/quiz.png' },
    { word: 'queen', image: '/images/Oxford/level1/queen.png' }
  ],
  Rr: [
    { word: 'rice', image: '/images/Oxford/level1/rice.png' },
    { word: 'rose', image: '/images/Oxford/level1/rose.png' },
    { word: 'rabbit', image: '/images/Oxford/level1/rabbit.png' },
    { word: 'robot', image: '/images/Oxford/level1/robot.png' }
  ],
  Ss: [
    { word: 'soap', image: '/images/Oxford/level1/soap.png' },
    { word: 'sun', image: '/images/Oxford/level1/sun.png' },
    { word: 'socks', image: '/images/Oxford/level1/socks.png' },
    { word: 'seal', image: '/images/Oxford/level1/seal.png' }
  ],
  Tt: [
    { word: 'turtle', image: '/images/Oxford/level1/turtle.png' },
    { word: 'tent', image: '/images/Oxford/level1/tent.png' },
    { word: 'teacher', image: '/images/Oxford/level1/teacher.png' },
    { word: 'tiger', image: '/images/Oxford/level1/tiger.png' }
  ],
  Uu: [
    { word: 'umpire', image: '/images/Oxford/level1/umpire.png' },
    { word: 'uncle', image: '/images/Oxford/level1/uncle.png' },
    { word: 'umbrella', image: '/images/Oxford/level1/umbrella.png' },
    { word: 'up', image: '/images/Oxford/level1/up.png' }
  ],
  Vv: [
    { word: 'van', image: '/images/Oxford/level1/van.png' },
    { word: 'vest', image: '/images/Oxford/level1/vest.png' },
    { word: 'vet', image: '/images/Oxford/level1/vet.png' },
    { word: 'violin', image: '/images/Oxford/level1/violin.png' }
  ],
  Ww: [
    { word: 'wet', image: '/images/Oxford/level1/wet.png' },
    { word: 'watch', image: '/images/Oxford/level1/watch.png' },
    { word: 'water', image: '/images/Oxford/level1/water.png' },
    { word: 'wolf', image: '/images/Oxford/level1/wolf.png' }
  ],
  Xx: [
    { word: 'box', image: '/images/Oxford/level1/box.png' },
    { word: 'wax', image: '/images/Oxford/level1/wax.png' },
    { word: 'fox', image: '/images/Oxford/level1/fox.png' },
    { word: 'six', image: '/images/Oxford/level1/six.png' }
  ],
  Yy: [
    { word: 'yoyo', image: '/images/Oxford/level1/yoyo.png' },
    { word: 'yak', image: '/images/Oxford/level1/yak.png' },
    { word: 'yogurt', image: '/images/Oxford/level1/yogurt.png' },
    { word: 'yacht', image: '/images/Oxford/level1/yacht.png' }
  ],
  Zz: [
    { word: 'zibra', image: '/images/Oxford/level1/zibra.png' },
    { word: 'zoo', image: '/images/Oxford/level1/zoo.png' },
    { word: 'zero', image: '/images/Oxford/level1/zero.png' },
    { word: 'zipper', image: '/images/Oxford/level1/zipper.png' }
  ]
}
</script>

## Aa

<WordCardGrid :words="letterWords.Aa" />

## Bb

<WordCardGrid :words="letterWords.Bb" />

## Cc

<WordCardGrid :words="letterWords.Cc" />

## Dd

<WordCardGrid :words="letterWords.Dd" />

## Ee

<WordCardGrid :words="letterWords.Ee" />

## Ff

<WordCardGrid :words="letterWords.Ff" />

## Gg

<WordCardGrid :words="letterWords.Gg" />

## Hh

<WordCardGrid :words="letterWords.Hh" />

## Ii

<WordCardGrid :words="letterWords.Ii" />

## Jj

<WordCardGrid :words="letterWords.Jj" />

## Kk

<WordCardGrid :words="letterWords.Kk" />

## Ll

<WordCardGrid :words="letterWords.Ll" />

## Mm

<WordCardGrid :words="letterWords.Mm" />

## Nn

<WordCardGrid :words="letterWords.Nn" />

## Oo

<WordCardGrid :words="letterWords.Oo" />

## Pp

<WordCardGrid :words="letterWords.Pp" />

## Qq

<WordCardGrid :words="letterWords.Qq" />

## Rr

<WordCardGrid :words="letterWords.Rr" />

## Ss

<WordCardGrid :words="letterWords.Ss" />

## Tt

<WordCardGrid :words="letterWords.Tt" />

## Uu

<WordCardGrid :words="letterWords.Uu" />

## Vv

<WordCardGrid :words="letterWords.Vv" />

## Ww

<WordCardGrid :words="letterWords.Ww" />

## Xx

<WordCardGrid :words="letterWords.Xx" />

## Yy

<WordCardGrid :words="letterWords.Yy" />

## Zz

<WordCardGrid :words="letterWords.Zz" />
