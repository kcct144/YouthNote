<template><div><VPCard><p>考点：含 it 的词</p>
<p>全称：it, its, it's, it is, is it 的区别</p>
</VPCard><h2 id="讲解" tabindex="-1"><a class="header-anchor" href="#讲解"><span>讲解</span></a></h2>
<table>
<thead>
<tr>
<th>形式</th>
<th>意思</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>it</td>
<td>它</td>
<td>作主语或宾语</td>
</tr>
<tr>
<td>its</td>
<td>它的</td>
<td>物主代词，修饰名词</td>
</tr>
<tr>
<td>it's</td>
<td>它是</td>
<td>it is 动词的缩写</td>
</tr>
<tr>
<td>it is</td>
<td>它是</td>
<td>it + be 动词</td>
</tr>
<tr>
<td>is it</td>
<td>它是</td>
<td>疑问语序</td>
</tr>
</tbody>
</table>
<h3 id="it" tabindex="-1"><a class="header-anchor" href="#it"><span>it</span></a></h3>
<p>it 表示“他”，是人称代词的<code v-pre>主格</code>或<code v-pre>宾格</code>形式，用在句子的<code v-pre>主语</code>或<code v-pre>宾语</code>。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>主语一般在句子的开头；宾语一般在动词或介词后面。</p>
</div>
<MakeSentence
  :questions="[
    {//1
        stem: '它是我的猫。',
        options: ['cat', 'It', 'my', 'is'],
        answer: 'It is my cat',
        explanation: '答案：It is my cat.'
    },
    {//2
        stem: '我看见它了。',
        options: ['saw', 'it', 'I'],
        answer: 'I saw it',
        explanation: '答案：I saw it.'
    },
    {//3
        stem: '它可以飞。',
        options: ['can', 'It', 'fly'],
        answer: 'It can fly',
        explanation: '答案：It can fly.'
    },
    {//4
        stem: '它跳得很高。',
        options: [ 'jumps', 'It','high', 'very'],
        answer: 'It jumps very high',
        explanation: '答案：It jumps very high.'
    },
    {//5
        stem: '我很喜欢它。',
        options: ['very', 'I', 'it', 'like', 'much'],
        answer: 'I like it very much',
        explanation: '答案：I like it very much.'
    },
  ]"
/>
<h3 id="it-is-it-s" tabindex="-1"><a class="header-anchor" href="#it-is-it-s"><span>it is / it's</span></a></h3>
<p>it is 是主语 it + be 动词，it's 是它的缩略形式。</p>
<p>It is 可以表示“它是”，也可以表示天气、距离、温度、时间等信息。</p>
<MakeSentence
  :questions="[
    {//1
        stem: '它是一只可爱的狗',
        options: ['dog', 'It', 'is', 'cute', 'a'],
        answer: 'It is a cute dog',
        explanation: '答案：It is a cute dog.'
    },
    {//2
        stem: '它很漂亮。',
        options: ['beautiful', 'It\'s'],
        answer: 'It\'s beautiful',
        explanation: '答案：It\'s beautiful.'
    },
    {//3
        stem: '现在是10点。',
        options: ['It\'s', '10:00', 'now'],
        answer: 'It\'s 10:00 now',
        explanation: '答案：It\'s 10:00 now.'
    },
    {//4
        stem: '今天天气很热。',
        options: ['today', 'It\'s', 'hot', 'very'],
        answer: 'It\'s very hot today',
        explanation: '答案：It\'s very hot today.'
    },
    {//5
        stem: '【挑战题】从家到学校大约一公里。（from...to... 从...到...）',
        options: ['one', 'kilometer', 'about', 'It\'s', 'home', 'from','to','school'],
        answer: 'It\'s about one kilometer from home to school',
        explanation: '答案：It\'s about one kilometer from home to school.'
    },
  ]"
/>
<div class="hint-container info">
<p class="hint-container-title">拓展</p>
<VPCollapse><VPCollapseItem :index="0"><template #title>It's 还可以用于特殊句型： it 句型【点击展开】</template><ul>
<li>It's + 形容词 (+ for sb.) + to do sth. 做某事（对某人来说）是...的
<ul>
<li>It's difficult for me to play the piano. 弹钢琴对我来说很难。</li>
<li>It's interesting to play computer games. 玩电脑游戏很有趣。</li>
</ul>
</li>
<li>It's + 名词短语 (+ for sb.) + to do sth. 做某事（对某人来说）是...
<ul>
<li>It's a good idea to ask the teacher for help. 问老师是个好主意。</li>
<li>It's time to go to bed. 该睡觉了。</li>
</ul>
</li>
<li>It's no use/good doing sth. 做某事是无用的。
<ul>
<li>It's no use doing this. 做这无用。</li>
<li>It's no good sitting here all day. 在这坐一整天是无用的。</li>
</ul>
</li>
</ul>
</VPCollapseItem></VPCollapse></div>
<h3 id="its" tabindex="-1"><a class="header-anchor" href="#its"><span>its</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>its 和 it's 发音一致</p>
<ul>
<li>its ： 它的（物主代词）</li>
<li>it's ： 它是（主语+be 动词）</li>
</ul>
</div>
<p>its 可以作<code v-pre>形容词性物主代词</code>，用来<mark>构成名词短语</mark>，表示“它的...”。</p>
<MakeSentence
:questions="[
    {
        stem: '它的苹果',
        options: ['it', 'it\'s', 'its', 'apple'],
        answer: 'its apple',
        explanation: '答案：its apple'
    },
    {
        stem: '它的耳朵很漂亮。',
        options: ['It', 'It\'s', 'Its', 'beautiful', 'are', 'ears'],
        answer: 'Its ears are beautiful',
        explanation: '答案：Its ears are beautiful.'
    },
    {
        stem: '这只狗在摇它的头。',
        options: ['dog', 'The', 'is', 'head', 'shaking', 'its'],
        answer: 'The dog is shaking its head',
        explanation: '答案：The dog is shaking its head.'
    }
]"
/>
<h3 id="is-it" tabindex="-1"><a class="header-anchor" href="#is-it"><span>is it</span></a></h3>
<p>由于疑问句的语序一般为“先动词，后主语”。it is（或 it's） 会变为 is it。</p>
<p>例如：</p>
<ul>
<li>What time <mark>is it</mark>? 几点了？</li>
<li><mark>Is it</mark> your pen? 这是你的笔吗？</li>
</ul>
<MakeSentence
:questions="[
    {
        stem: '它是什么颜色的？',
        options: ['color', 'is', 'it', 'What'],
        answer: 'What color is it',
        explanation: '答案：What color is it?'
    },
    {
        stem: '从家到学校有多远？',
        options: ['far', 'from', 'school', 'is', 'How', 'home', 'it', 'to'],
        answer: 'How far is it from home to school',
        explanation: '答案：How far is it from home to school?'
    },
    {
        stem: '这是你的铅笔吗？',
        options: ['it', 'are', 'Is', 'pencil', 'It\'s', 'your'],
        answer: 'Is it your pencil?',
        explanation: '答案：Is it your pencil?'
    }
]"
/>
<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h2>
<MultipleChoice
:questions="[
    {//1
        stem: 'I have a cat. _______ name is Coco.',
        options: ['It', 'is', 'It\'s', 'Its'],
        answer: 'Its',
        explanation: '句意：我有一只猫。它的名字叫Coco。“它的名字”，用形容词性物主代词，选D。'
    },
    {//2
        stem: 'The cat is eating _______ food.',
        options: ['it', 'it\'s', 'its', 'is'],
        answer: 'its',
        explanation: '句意：这只猫正在吃它的食物。“它的食物”，用形容词性物主代词，选D。'
    },
    {//3
        stem: 'I like this dress. _______ beautiful (漂亮的).',
        options: ['It', 'Is', 'It\'s', 'Its'],
        answer: 'It\'s',
        explanation: '句意：我喜欢这条裙子。它很漂亮。第二个句子没有主语和动词，因此选择 It + be动词的形式，缩写为 It\'s，选C。'
    },
    {//4
        stem: '_______ cold. Winter is coming (即将来临).',
        options: ['It', 'Is', 'It\'s', 'Its'],
        answer: 'It\'s',
        explanation: '句意：天气很冷。冬天要来了。第一个句子没有主语和动词，因此选择 It + be动词的形式，缩写为 It\'s，选C。'
    },
    {//5
        stem: 'Look! _______ a red balloon (气球).',
        options: ['It', 'It is', 'It\'s', 'Its'],
        answer: 'It\'s',
        explanation: '句意：看！那是一个气球。第二个句子没有主语和动词，因此选择 It + be动词的形式，缩写为 It\'s，选C。'
    },
]"
/></div></template>


