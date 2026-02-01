---
title: Day 1【基本句型】解密英语句子的DNA
createTime: 2026/02/01 00:29:53
permalink: /grammar/day1/
---

## 课程前言

本课程的主要目标：
1. 能听懂课（上课能听懂老师讲的语法，课后能看懂参考书上的语法讲解）
2. 能拆句子（能够分析句子，并和其他人讨论句子的构成及功能）
3. 能作对题（能辨认各类语法考点，并运用所学语法知识做题）

第一期课程安排：
1. 【基本句型】主谓宾补表、及物/不及物/系动词
2. 【名词短语】定语、限定词、介词短语、定语从句
3. 【动词短语】副词、状语、助动词、时态、被动、非谓语
4. 【介词短语】名词性从句、定语从句、状语从句
5. 【三大从句】介词短语作状语、定语、表语、补语
6. 【主谓一致】单复数、可数/不可数、人称、三单、三大原则
7. 【综合复习】句子成分分析和语法填空专项

## 一、主谓之分

<TaskCard title="任务：试试将句子切分为两个部分？" >

<SplitSentence sentence="She smiled" correctSplitIndex="1" />
<SplitSentence sentence="He is a student" correctSplitIndex="1" />
<SplitSentence sentence="We love English" correctSplitIndex="1" />
<SplitSentence sentence="Mom gave me a gift" correctSplitIndex="1" />
<SplitSentence sentence="The red apple tastes sweet" correctSplitIndex="3" />
<SplitSentence sentence="My mother cooks dinner every day" correctSplitIndex="2" />
<SplitSentence sentence="The girl in blue is singing a song" correctSplitIndex="4" />
</TaskCard>

<TaskCard title="【总结】匹配定义" >
<Matching 
  :leftItems="['主语', '谓语']"
  :rightItems="['对主语的描述（咋了）', '句子的话题（谁）']"
  :correctMatches="[[0, 1], [1, 0]]"
/>
</TaskCard>

## 二、谓语动词

<TaskCard title="任务：找出谓语动词" hint="点击句子中的谓语动词，正确时会显示蓝色！">

<WordSelector 
  :sentence="'She smiled'"
  :correctWords="[2]"
/>

<WordSelector 
  :sentence="'She is happy'"
  :correctWords="[2]"
/>

<WordSelector 
  :sentence="'She likes cats'"
  :correctWords="[2]"
/>

<WordSelector 
  :sentence="'She gave me a gift'"
  :correctWords="[2]"
/>

<WordSelector 
  :sentence="'She makes me happy'"
  :correctWords="[2]"
/>

</TaskCard>