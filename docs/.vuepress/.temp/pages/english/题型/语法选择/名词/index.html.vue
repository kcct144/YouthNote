<template><div><VPCard><p>考点：名词</p>
<p>全称：名词的单复数和所有格</p>
<p>关键词：<code v-pre>名词</code>、<code v-pre>单数</code>、<code v-pre>复数</code>、<code v-pre>可数名词</code>、<code v-pre>不可数名词</code>、<code v-pre>名词所有格</code>、<code v-pre>’s</code></p>
</VPCard><h2 id="一、讲解" tabindex="-1"><a class="header-anchor" href="#一、讲解"><span>一、讲解</span></a></h2>
<p>用来表示事物、人物、地点等的词叫名词。例如 apple（苹果）、elephant（大象）、car（汽车）、friend（朋友）等。</p>
<p>英语中，名词有<mark>单数、复数、所有格</mark>三种形式。以 friend 为例，有以下四种形式：</p>
<table>
<thead>
<tr>
<th>单词</th>
<th>中文</th>
<th>语法含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>friend</td>
<td>朋友</td>
<td>单数</td>
</tr>
<tr>
<td>friends</td>
<td>朋友们</td>
<td>复数</td>
</tr>
<tr>
<td>friend's</td>
<td>朋友的</td>
<td>所有格</td>
</tr>
<tr>
<td>friends’</td>
<td>朋友们的</td>
<td>所有格</td>
</tr>
</tbody>
</table>
<p>单数名词，即名词的原形（如 friend）；复数一般在后面加 <code v-pre>-s</code>（如 friends）；所有格则在后面加 <code v-pre>’s</code>（如 friend's）。</p>
<p>如果名词以 <code v-pre>-s</code> 结尾，又需要表示所有格，则直接在词尾加 <code v-pre>'</code>（如 friends'）即可。</p>
<table>
<thead>
<tr>
<th>形式</th>
<th>含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>单数</td>
<td>表示单个事物</td>
<td>an elephant（一头大象）</td>
</tr>
<tr>
<td>复数</td>
<td>表示多个事物</td>
<td>two elephants（两头大象）</td>
</tr>
<tr>
<td>所有格</td>
<td>表示“...的”</td>
<td>the elephant's ears（大象的耳朵）</td>
</tr>
</tbody>
</table>
<p>如果 A、B、C 分别是这三种形式，则考点为<mark>名词的单复数和所有格</mark>。</p>
<h2 id="二、思路" tabindex="-1"><a class="header-anchor" href="#二、思路"><span>二、思路</span></a></h2>
<h3 id="_1-什么时候用所有格-名词" tabindex="-1"><a class="header-anchor" href="#_1-什么时候用所有格-名词"><span>1. 什么时候用所有格/名词？</span></a></h3>
<MultipleChoice
:questions="[
  {
    stem: ['如果需要表示“...的”，则需要用所有格。这种情况下，后面往往会有一个名词。例如：','This is my ____ (friend) car.'],
    options: ['friend', 'friends', 'friend’s'],
    answer: 'friend’s',
    explanation: '句意：这是我朋友的汽车。由于后面有一个名词 car，所以需要用所有格来表示“我的*朋友的*汽车”。此题选C。'
  },
  {
    stem: ['反之，如果后面没有名词，则不需要用所有格','This is my ____ (friend).'],
    options: ['friend', 'friends', 'friend’s'],
    answer: 'friend',
    explanation: '句意：这是我的朋友。由于后面没有名词，不需要所有格，只需要名词，并且是单数，此题选A。'
  },
]"/>
<div class="hint-container tip">
<p class="hint-container-title">你真的理解所有格吗？</p>
<p>所有格不是名词，功能上是 <code v-pre>限定词</code> ，和 a/an/the, some, many, a pair of, this, those 等是同一类词，放在名词前面，<mark>用来限定名词，构成名词短语</mark>。</p>
</div>
<h3 id="_2-什么时候用单数-复数" tabindex="-1"><a class="header-anchor" href="#_2-什么时候用单数-复数"><span>2. 什么时候用单数/复数？</span></a></h3>
<p>用单数还是复数，要看<mark>名词所代表的事物可不可数，是单个还是多个</mark>。通常可以<mark>观察谓语动词</mark>（三单一般会用 is 或加 -s），或者<mark>观察名词前面的限定词</mark>（如 a/an, three, many 等）。</p>
<FillIn
:questions="[
  {
    stem: ['请认真观察空格前面的限定词：','This is my {{1}} (friend).','These are my {{2}} (friend).'],
    answer: ['friend','friends'],
    explanation: '句意：这是我的朋友。这些是我的朋友。this is （这个是）意味着是单个，所以用单数friend；these are （这些是）意味着是多个，所以用复数friends。'
  },
  {
    stem: ['请认真观察空格前面的限定词：','many {{1}} (apple)','an {{2}} (apple)'],
    answer: ['apples','apple'],
    explanation: 'many（许多）意味着是多个，所以用复数apples；an（一个）意味着是单个，所以用单数apple。'
  }
]"/>
<h3 id="_3-特殊情况-复习用-初学可跳过" tabindex="-1"><a class="header-anchor" href="#_3-特殊情况-复习用-初学可跳过"><span>3. 特殊情况（复习用-初学可跳过）</span></a></h3>
<h4 id="单数变复数规律-规则变化" tabindex="-1"><a class="header-anchor" href="#单数变复数规律-规则变化"><span>单数变复数规律：规则变化</span></a></h4>
<VPCollapse><VPCollapseItem :index="0"><template #title>一般情况：在名词词尾加 -s</template>
<ul>
<li>apple → apples 🍎</li>
<li>dog → dogs 🐕</li>
<li>pen → pens 🖊</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>以 s, x, z, sh, ch 结尾的名词：在词尾加 -es</template>
<ul>
<li>bus → buses 🚌</li>
<li>box → boxes 📦</li>
<li>quiz → quizzes 测试</li>
<li>dish → dishes 🍽️</li>
<li>peach → peaches 🍑</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="2"><template #title>以辅音字母 + y 结尾的名词：将 y 变为 i，再加 -es。</template>
<ul>
<li>city → cities 🏙</li>
<li>baby → babies 👶</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="3"><template #title>以 f 或 fe 结尾的名词：通常将 f 或 fe 变为 v，再加 -es</template>
<ul>
<li>leaf → leaves 🍂</li>
<li>knife → knives 🔪</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="4"><template #title>以 o 结尾的名词，有生命加 -es，没生命加 -s</template>
<ul>
<li>potato → potatoes 🥔</li>
<li>tomato → tomatoes 🍅</li>
<li>photo → photos 🖼️</li>
<li>piano → pianos 🎹</li>
</ul>
</VPCollapseItem></VPCollapse><h4 id="特殊名词" tabindex="-1"><a class="header-anchor" href="#特殊名词"><span>特殊名词</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">特殊名词</p>
<VPCollapse accordion><VPCollapseItem :index="0"><template #title>有些名词的变化不规则</template><ul>
<li>child → children 儿童</li>
<li>foot → feet 脚</li>
<li>tooth → teeth 牙齿</li>
<li>goose → geese 鹅</li>
<li>man → men 男人</li>
<li>woman → women 女人</li>
<li>mouse → mice 老鼠</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>有些名词的复数形式和单数形式相同</template><ul>
<li>sheep 羊</li>
<li>deer 鹿</li>
<li>fish 鱼</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="2"><template #title>有些名词是集体名词，一般视为复数</template><ul>
<li>people 人们</li>
<li>police 警察</li>
<li>family 家人（表示家庭时可数）</li>
</ul>
</VPCollapseItem></VPCollapse></div>
<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h2>
<MultipleChoice
:questions="[
{//1
  stem: 'My _______ is not very big.',
  options: ['classroom', 'classrooms', 'classroom’s'],
  answer: 'classroom',
  explanation: '句意：我的教室不是很大。空格后面没有名词，前面有my，所以不需要用所有格，排除C。根据 is 可知用单数，选A。'
},
{//2
  stem: 'You can travel to new _______, try interesting things, and make friends during a vacation.',
  options: ['place', 'places', 'places’'],
  answer: 'places',
  explanation: '句意：在假期里，你可以去新的地方旅行，尝试新的事物，认识新的人。place“地方”,可数名词单数；places“地方”,可数名词复数 ；places’“地方的”,名词所有格。根据设空前的“You can ty new”和设空后并无其他成分可知，设空处应用可数名词复数，故选B。',
},
{//3
  stem: 'He looked up and I saw sadness（悲伤）in his _______.',
  options: ['eye', 'eyes', 'eyes’'],
  answer: 'eyes',
  explanation: '句意：他抬起头，我从他的眼睛里看到了悲伤。 eye“眼晴”,可数名词的单数形式 ；eyes“眼睛”,可数名词的复数形式；eye’s “眼睛的“,名词所有格。根据设空前的“He looked up and I saw sadness in his“可知，此处指作者从凯尔的眼里看到了悲伤， 一般是双眼里透出悲伤，故选B。',
},
{//4
  stem: 'The movie named A Little Red Flower shows _________ love for their children.',
  options: ['parents', 'parent’s', 'parents’'],
  answer: 'parents’',
  explanation: '句意：电影《送你一朵小红花》展现了父母对孩子的爱。考查所有格。此处表达的是“父母的爱”，parents是以s结尾的复数名词，所有格直接加’即可，故选C。',
},
{//5
  stem: 'June 1st is ________ Day.',
  options: ['Children', 'Children’s', 'Child', 'Child’s'],
  answer: 'Children’s',
  explanation: '句意：六月一日是儿童节。考查名词所有格中节日的表达。Children’s Day儿童节，固定表达。故选B。',
},
{//6
  stem: 'There are some ________ on the table.',
  options: ['tomato', 'tomatos', 'tomatoes', 'tomato’s'],
  answer: 'tomatoes',
  explanation: '句意：桌子上有一些西红柿。考查名词复数。tomato西红柿；tomatos错误形式；tomatoes西红柿复数形式；tomato’s 单数名词的所有格。根据“some…”可知，some修饰可数名词复数。故选C。',
},
{//7
  stem: 'After three ________ of hard practice, she could finally keep her balance (平衡) on the bamboo pole.',
  options: ['year', 'years', 'year’s'],
  answer: 'years',
  explanation: '句意：经过三年的努力练习，她终于可以在竹竿上保持平衡了。考查名词。year年；years年，复数形式；year’s一年的。根据“three…of hard practice”可知，此处指经过三年的努力练习，of前面应使用名词形式，此处被three修饰，应使用复数。故选B。',
},
]"
/></div></template>


