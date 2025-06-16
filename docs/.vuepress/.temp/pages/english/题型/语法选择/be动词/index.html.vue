<template><div><VPCard><p>考点：名词</p>
<p>全称：名词的单复数和所有格</p>
<p>关键词：<code v-pre>am</code>、<code v-pre>is</code>、<code v-pre>are</code>、<code v-pre>was</code>、<code v-pre>were</code>、<code v-pre>系动词</code>、<code v-pre>动词</code>、<code v-pre>表语</code>、<code v-pre>主谓一致</code>、<code v-pre>主系表</code></p>
</VPCard><h2 id="一、be-动词介绍" tabindex="-1"><a class="header-anchor" href="#一、be-动词介绍"><span>一、be 动词介绍</span></a></h2>
<p>be 动词是英语中最常见的动词。它有<mark>三个变形：am，are，is</mark>。（过去时中还有 was 和 were）</p>
<h3 id="_1-be-动词的用法" tabindex="-1"><a class="header-anchor" href="#_1-be-动词的用法"><span>1. be 动词的用法</span></a></h3>
<p>be 动词是<code v-pre>系动词</code>的一种，能表达非常多东西。<mark>功能相当于左箭头“←”</mark>。</p>
<Tabs id="23" :data='[{"id":"be 动词"},{"id":"点击将 be 动词改为 ←"}]'>
<template #title0="{ value, isActive }">be 动词</template><template #title1="{ value, isActive }">点击将 be 动词改为 ←</template><template #tab0="{ value, isActive }"><ol>
<li>表达年龄：I am <mark>10 years old</mark>. （我十岁了。）</li>
<li>表达姓名：He is <mark>Mike</mark>. （他是 Mike。）</li>
<li>表达身份：She is <mark>a student</mark>. （她是一名学生。）</li>
<li>表达状态：I am <mark>very happy</mark>. （我很开心。）</li>
<li>表达位置：I am <mark>at school</mark>. （我在学校。）</li>
<li>表达特征：They are <mark>tall</mark>. （他们很高。）</li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li>表达年龄：I &lt;-- <mark>10 years old</mark>.</li>
<li>表达姓名：He &lt;-- <mark>Mike</mark>.</li>
<li>表达身份：She &lt;-- <mark>a student</mark>.</li>
<li>表达状态：I &lt;-- <mark>very happy</mark>.</li>
<li>表达位置：I &lt;-- <mark>at school</mark>.</li>
<li>表达特征：They &lt;-- <mark>tall</mark>.</li>
</ol>
</template></Tabs><p>以上的结构可以概括为“主语+be 动词+表语”，也就是我们常说的“主系表”结构。</p>
<h3 id="_2-be-动词的变形" tabindex="-1"><a class="header-anchor" href="#_2-be-动词的变形"><span>2. be 动词的变形</span></a></h3>
<p>在现在时态，be 动词有三个变形：am，are，is。</p>
<Tabs id="102" :data='[{"id":"规则"},{"id":"口诀"}]'>
<template #title0="{ value, isActive }">规则</template><template #title1="{ value, isActive }">口诀</template><template #tab0="{ value, isActive }"><ul>
<li>am 跟 I 连用</li>
<li>are 跟 you，we，they 或复数名词连用</li>
<li>is 跟 he，she，it 或单数名词连用</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>I（我）用 am,</li>
<li>You（你）用 are,</li>
<li>Is 连着他(he) 她(she) 它(it),</li>
<li>单数 is，复数 are。</li>
</ul>
</template></Tabs><MakeSentence 
    :questions="[
      {
        stem: '我很开心。',
        options: ['am', 'is', 'are', 'I', 'happy'],
        answer: 'I am happy',
      },
      {
        stem: '我的朋友们很开心。',
        options: ['am', 'is', 'are', 'My', 'friends', 'happy'],
        answer: 'My friends are happy',
      },
      {
        stem: '你很开心',
        options: ['am', 'is', 'are', 'You', 'happy'],
        answer: 'You are happy',
      },
      {
        stem: '他很开心。',
        options: ['am', 'is', 'are', 'He', 'happy'],
        answer: 'He is happy',
      },
      {
        stem: '他们很开心',
        options: ['am', 'is', 'are', 'They', 'happy'],
        answer: 'They are happy',
      },
      {
        stem: 'Mike很开心',
        options: ['am', 'is', 'are', 'Mike', 'happy'],
        answer: 'Mike is happy',
      },
      {
        stem: '她很开心。',
        options: ['am', 'is', 'are', 'She', 'happy'],
        answer: 'She is happy',
      },
      {
        stem: '它很开心',
        options: ['am', 'is', 'are', 'It', 'happy'],
        answer: 'It is happy',
      },
      {
        stem: '我们很开心。',
        options: ['am', 'is', 'are', 'We', 'happy'],
        answer: 'We are happy',
      },
      {
        stem: '我们很开心。',
        options: ['am', 'is', 'are', 'We', 'happy'],
        answer: 'We are happy',
      },
      {
        stem: '你是我的朋友',
        options: ['am', 'is', 'are', 'friend', 'You', 'my'],
        answer: 'You are my friend',
      },
      {
        stem: '我们很开心。',
        options: ['am', 'is', 'are', 'We', 'happy'],
        answer: 'We are happy',
      },
      {
        stem: '他们是女孩',
        options: ['am', 'is', 'are', 'girl', 'They'],
        answer: ' They are girl',
      },
      {
        stem: '一只猫在桌子上。',
        options: ['am', 'is', 'are', 'cat', 'desk', 'on', 'A cat', 'the'],
        answer: ['A cat', 'is', 'on', 'the', 'desk'],
      },
      {
        stem: '水很干净。',
        options: ['am', 'is', 'are', 'water', 'clean', 'The'],
        answer: 'The water is clean',
      },
      {
        stem: '玛丽是一个聪明的女孩。',
        options: ['am', 'is', 'are', 'clever', 'a', 'girl', 'Mary'],
        answer: 'Mary is a clever girl',
      },
    ]"
/>
<h3 id="_3-be-动词的缩略形式" tabindex="-1"><a class="header-anchor" href="#_3-be-动词的缩略形式"><span>3. be 动词的缩略形式</span></a></h3>
<ul>
<li>am 常缩略为 'm （如 I am = I'm）</li>
<li>is 常缩略为's （如 He is = He's）</li>
<li>are 常缩略为 're （如 You are = You're）</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">熟读</p>
<p>以下组合非常常用，不管是完整形式，还是缩写，都建议熟读，提高造句反应速度：</p>
<VPCollapse><VPCollapseItem :index="0"><template #title>点击展开</template>
<ul>
<li>I am = I'm</li>
<li>You are = You're</li>
<li>He is = He's</li>
<li>She is = She's</li>
<li>It is = It's</li>
<li>We are = We're</li>
<li>They are = They're</li>
<li>This is</li>
<li>That is = That's</li>
</ul>
</VPCollapseItem></VPCollapse></div>
<h3 id="_4-含-be-动词的否定句" tabindex="-1"><a class="header-anchor" href="#_4-含-be-动词的否定句"><span>4. 含 be 动词的否定句</span></a></h3>
<p>英语表示否定一般<mark>加 not</mark>。在含有 be 动词的句子中，<mark>一般加在 be 动词后面</mark>。not 常缩略为 n't。</p>
<ul>
<li>I am a student. 我是一名学生。</li>
<li>I <mark>am not</mark> a student. 我<mark>不是</mark>一名学生。</li>
</ul>
<table>
<thead>
<tr>
<th>陈述</th>
<th>否定</th>
<th>否定缩略形式</th>
</tr>
</thead>
<tbody>
<tr>
<td>am</td>
<td>am not</td>
<td>无</td>
</tr>
<tr>
<td>are</td>
<td>are not</td>
<td>aren't</td>
</tr>
<tr>
<td>is</td>
<td>is not</td>
<td>isn't</td>
</tr>
</tbody>
</table>
<MakeSentence
:questions="[
    {
      stem: '他不是我的朋友',
      options: ['am', 'is', 'are', 'my', 'not', 'friend', 'He'],
      answer: 'He is not my friend',
    },
    {
      stem: '这不是她的书。',
      options: ['am', 'is', 'are', 'her', 'This', 'not', 'book'],
      answer: 'This is not her book',
    },
    {
      stem: '我妈妈不在家。',
      options: ['am not', 'isn\'t', 'aren\'t', 'My', 'home', 'mother', 'at', 'home'],
      answer: 'My mother isn\'t at home',
    },
    {
      stem: '今天天气不好。',
      options: ['am not', 'isn\'t', 'aren\'t', 'weather', 'nice today', 'The'],
      answer: ['The', 'weather', 'isn\'t', 'nice today'] ,
    },
    {
      stem: '那只猫不胖。',
      options: ['am', 'is', 'are', 'That', 'fat', 'cat', 'not'],
      answer: 'That cat is not fat',
    },
    {
      stem: '他们不在教室里。',
      options: ['am', 'is', 'are', 'the', 'They', 'in', 'classroom', 'not'],
      answer: 'They are not in the classroom',
    },
]"
/>
<h3 id="_5-含-be-动词的一般疑问句" tabindex="-1"><a class="header-anchor" href="#_5-含-be-动词的一般疑问句"><span>5. 含 be 动词的一般疑问句</span></a></h3>
<p>一般疑问句，是需要用 Yes/No 回答的问句。一般是在陈述句的基础上，将 be 动词提前到句首。</p>
<ul>
<li>You <mark>are</mark> happy. --&gt; <mark>Are</mark> you happy? 你开心吗？</li>
<li>He <mark>is</mark> tall. --&gt; <mark>Is</mark> he tall? 他高吗？</li>
<li>Your parents <mark>are</mark> at home. --&gt; <mark>Are</mark> your parents at home? 你的父母在家吗？</li>
</ul>
<MakeSentence
:questions="[
    {
      stem: '他是你的哥哥吗？',
      options: ['Is','brother', 'your', 'he'],
      answer: 'Is he your brother',
    },
    {
      stem: '你们是学生吗？',
      options: ['Are', 'students', 'you'],
      answer: 'Are you students',
    },
    {
      stem: 'Tom的狗是白色的吗？',
      options: ['Tom\'s', 'white', 'dog', 'Is'],
      answer: 'Is Tom\'s dog white',
    },
    {
      stem: '今天的作业难吗？',
      options: ['Am', 'Is', 'Are', 'homework', 'today\'s', 'difficult'],
      answer: 'Is today\'s homework difficult',
    },
    {
      stem: '这是你的笔吗？🖊',
      options: ['Am', 'Is', 'Are', 'pen', 'this', 'your'],
      answer: 'Is this your pen',
    },
    {
      stem: '他们在教室里吗。',
      options: ['Am', 'Is', 'Are', 'the', 'they', 'in', 'classroom'],
      answer: 'Are they in the classroom',
    },
]"
/>
<p>含 be 动词的一般疑问句，回答方式如下：</p>
<ul>
<li><mark>肯定回答：Yes, + 主语 + be 动词</mark>
<ul>
<li>Yes, I am.</li>
<li>Yes, he is.</li>
<li>Yes, they are.</li>
</ul>
</li>
<li><mark>否定回答：No, + 主语 + be 动词 + not</mark>
<ul>
<li>No, I am not.</li>
<li>No, he is not. = No, he isn't.</li>
<li>No, they are not. = No, they aren't.</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">熟读</p>
<p>以下组合非常常用，建议熟读，提高造句速度：</p>
<VPCollapse><VPCollapseItem :index="0"><template #title>常出现在问句开头：</template><ul>
<li>Are you, Are they, Are we</li>
<li>Is he, Is she, Is it</li>
<li>Is this, Is that</li>
</ul>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>常用于回答：</template><ul>
<li>Yes, I am. / No, I am not.</li>
<li>Yes, you are. / No, you aren't.</li>
<li>Yes, he is. / No, he isn't.</li>
<li>Yes, she is. / No, she isn't.</li>
<li>Yes, it is. / No, it isn't.</li>
<li>Yes, we are. / No, we aren't.</li>
<li>Yes, they are. / No, they aren't.</li>
</ul>
</VPCollapseItem></VPCollapse></div>
<h3 id="_4-含-be-动词的特殊疑问句-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_4-含-be-动词的特殊疑问句-⭐⭐⭐"><span>4. 含 be 动词的特殊疑问句 ⭐⭐⭐</span></a></h3>
<p>询问具体事物或情况时，用特殊疑问句，由特殊疑问词开头。</p>
<p>含 be 动词的特殊疑问句句型为：特殊疑问词 + be 动词 + 主语 + 其他</p>
<QuestionContainer
  :questionList="[
    {
      stem: '你几岁了？',
      options: ['are', 'how old', 'you', 'is', 'am'],
      answer: ['how old', 'are', 'you'],
      sentence: 'How old are you?',
    },
    {
      stem: 'Mike在哪？',
      options: ['are','is', 'am', 'where',  'Mike'],
      answer: ['where', 'is', 'Mike'],
      sentence: 'Where is Mike?',
    },
    {
      stem: '你好吗？',
      options: ['are','is', 'am', 'how', 'you'],
      answer: ['how', 'are', 'you'],
      sentence: 'How are you?',
    },
    {
      stem: '你的包是什么颜色的？',
      options: ['are','is', 'am','color', 'bag', 'what', 'your'],
      answer: ['what', 'color', 'is', 'your', 'bag'],
      sentence: 'What color is your bag?',
    },
  ]"
/>
<div class="hint-container tip">
<p class="hint-container-title">熟读</p>
<p>以下组合非常常用，建议熟读，提高造句速度：</p>
<ul>
<li>What is, What are</li>
<li>How is, How are</li>
<li>Who is, Who are</li>
</ul>
</div>
<h2 id="综合练习" tabindex="-1"><a class="header-anchor" href="#综合练习"><span>综合练习</span></a></h2>
<FillIn
:questions="[
{
stem: ['—{{1}} you Jack\'s friend? ','—No, I {{2}} his brother. (be)'],
answer: ['Are','am'],
explanation: '句意：你是 Jack 的朋友吗？ 不，我是他的哥哥。问句主语是 you，be 动词用 are；答句主语是 I，be 动词用 am。'
},
{
stem: 'This {{1}} (not be) my pen.',
answer: ['isn\'t'],
explanation: '句意：这不是我的笔。指示代词 This 作主语，单数，be 动词用 is。同时 is 的否定形式为 is not，缩略形式为 isn\'t。每空一词，故填 isn\'t。',
},
{
stem: 'My phone number {{1}} (be) 525-9825',
answer: ['is'],
explanation: '句意：我的电话号码是 5259825。My phone number 是单数，be 动词用 is。',
},
{
stem: 'Those {{1}} (not be) my pens.',
answer: ['aren\'t'],
explanation: '句意：那些不是我的笔。指示代词 Those 作主语，复数，be 动词用 are。同时 are 的否定形式为 are not，缩略形式为 aren\'t，故填 aren\'t。',
},
{
stem: 'This is my sister and those {{1}} (be) my brothers.',
answer: ['are'],
explanation: '句意：这是我的姐姐，那是我的兄弟们。指示代词 Those 作主语，复数，be 动词用 are。',
},
{
stem: 'Mary and I {{1}} (be) nine.',
answer: ['are'],
explanation: '句意：玛丽和我都是九岁。and 连接两个并列成分，视为复数，be 动词用 are。',
},
{
stem: '{{1}} (be) your father\'s sister a teacher?',
answer: ['Is'],
explanation: '句意：你爸爸的姐姐是一个老师吗？your father\'s sister（你爸爸的姐姐）是单数，be 动词用 is。',
},
{
stem: 'How {{1}} (be) she?',
answer: ['is'],
explanation: '句意：她怎么样了？主语是 she，be 动词用 is。',
},
{
stem: 'Your new shoes {{1}} (be) very cool.',
answer: ['are'],
explanation: '句意：你的鞋子很酷。主语 Your new shoes 是复数，be 动词用 are。',
},
{
stem: 'Some chicken {{1}} (be) on the table.',
answer: ['are'],
explanation: '句意：一些鸡肉在桌子上。主语 chicken 是不可数名词，视为单数，be 动词用 is。',
},
{
stem: 'What {{1}} (be) your favorite subjects?',
answer: ['are'],
explanation: '句意：你最喜欢的科目是什么？主语 your favorite subjects 是复数，be 动词用 are。',
},
{
stem: 'Her favorite food {{1}} (be) milk.',
answer: ['is'],
explanation: '句意：她最喜欢的食物是牛奶。food 是不可数名词，视为单数，be 动词用 is。',
},
{
stem: 'There {{1}} (be) a set of keys on the desk.',
answer: ['is'],
explanation: '句意：有一串钥匙在书桌上。量词短语 a set of，以前面的数量单位来判断 be 动词的形式，a set 是单数，be 动词用 is。',
},
{
stem: 'How much {{1}} (be) the ice-cream?',
answer: ['is'],
explanation: '句意：冰激凌多少钱？主语 ice-cream 是单数，be 动词用 is。',
},
{
stem: 'How much {{1}} (be) the blue socks?',
answer: ['are'],
explanation: '句意：这蓝色的袜子多少钱？主语 the blue socks 是复数，be 动词用 are。',
},
{
stem: 'How much {{1}} (be) this pair of shoes?',
answer: ['is'],
explanation: '句意：这双鞋多少钱？量词短语 this pair of，以前面的数量单位来判断 be 动词的形式，this pair 是单数，be 动词用 is。',
},
{
stem: 'What {{1}} (be) the price of these hats?',
answer: ['is'],
explanation: '句意：这些帽子的价格是多少？the price of...（...的价格），price 是单数，be 动词用 is。',
},
]"
/></div></template>


