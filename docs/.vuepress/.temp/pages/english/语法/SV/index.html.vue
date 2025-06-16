<template><div><VPCard title="主动结构"><p><strong>构成</strong>：<Badge text="主语" class="danger"/> + <Badge text="谓语动词" class="warning"/></p>
<p><strong>例句</strong>：<Badge text="She" class="danger"/><Badge text="smiled." class="warning"/> 她笑了。</p>
<p><strong>动词</strong>：<Badge text="不及物动词" class="warning"/></p>
<p><strong>前置知识</strong>：<Badge text="主语" class="danger"/> <Annotation label="主语" :total="1"><template #item-0><p>【主语】句子的出发点，通常位于句子开头，一般由代词或名词短语充当。如“I am Mike.”中的“I”；“My name is Mike.”中的“My name”。</p>
</template></Annotation> 、 <Badge text="谓语动词" class="warning"/> <Annotation label="谓语动词" :total="1"><template #item-0><p>【谓语动词】句子的中心部分，通常是一个动词短语，有时态。如“I play basketball.”中的“play”；“My name is Mike.”中的“is”。</p>
</template></Annotation></p>
</VPCard><h2 id="不及物动词和主动结构" tabindex="-1"><a class="header-anchor" href="#不及物动词和主动结构"><span>不及物动词和主动结构</span></a></h2>
<p>许多动词在使用的时候，往往需要在后面加点东西才完整：</p>
<ul>
<li>I have <Plot>a pen.</Plot> 我拥有<Plot>一支笔</Plot>。</li>
<li>I like <Plot>playing football.</Plot> 我喜欢<Plot>踢足球</Plot>。</li>
</ul>
<p>（谓语缺少内容，会导致句子不合理）</p>
<p>但有一类动词后面不需要加任何东西，谓语就已经完整，这类动词称为 <Badge text="不及物动词" class="warning"/> 。</p>
<ul>
<li>She smiled. 她笑了。</li>
<li>Mary cried. Mary 哭了。</li>
<li>He is singing. 他在唱歌。</li>
</ul>
<p>smile, cry, sing 都属于 <Badge text="不及物动词" class="warning"/> 。</p>
<p>通过 <Badge text="不及物动词" class="warning"/> 构成的句型，即“<Badge text="主语" class="danger"/> + <Badge text="谓语动词" class="warning"/>”的结构，称为 <Badge text="主动结构" class="success"/> ，简称 SV。</p>
<h2 id="简单练习-无修饰" tabindex="-1"><a class="header-anchor" href="#简单练习-无修饰"><span>简单练习 (无修饰)</span></a></h2>
<p>在“<Badge text="主语" class="danger"/> + <Badge text="谓语动词" class="warning"/>”的结构中：</p>
<ul>
<li>主语通常是代词或名词短语 <Annotation label="名词短语" :total="1"><template #item-0><p>【名词短语】以名词为中心，与其修饰成分（限定词、形容词、介词短语、定语从句等）构成的短语。</p>
</template></Annotation></li>
<li>谓语动词通常是动词短语 <Annotation label="动词短语" :total="1"><template #item-0><p>【动词短语】以动词为中心，与其修饰成分（助动词、副词）构成的短语。</p>
</template></Annotation></li>
</ul>
<Tabs id="79" :data='[{"id":"练习"},{"id":"答案"}]'>
<template #title0="{ value, isActive }">练习</template><template #title1="{ value, isActive }">答案</template><template #tab0="{ value, isActive }"><ol>
<li><mark class="danger">他</mark> <mark class="warning">走了</mark>。| <Plot>He left.</Plot></li>
<li><mark class="danger">我们的老师</mark> <mark class="warning">在笑</mark>。| <Plot>Our teacher is laughing.</Plot></li>
<li><mark class="danger">会议</mark> <mark class="warning">开始了</mark>。| <Plot>The meeting has started.</Plot></li>
<li><mark class="danger">这些花</mark> <mark class="warning">正在开放</mark>。| <Plot>These flowers are blooming.</Plot></li>
<li><mark class="danger">时间</mark> <mark class="warning">飞逝</mark>。| <Plot>Time flies.</Plot></li>
<li><mark class="danger">那个婴儿</mark> <mark class="warning">在睡觉</mark>。| <Plot>The baby is sleeping.</Plot></li>
<li><mark class="danger">太阳</mark> <mark class="warning">升起了</mark>。| <Plot>The sun rose.</Plot></li>
<li><mark class="danger">火车</mark> <mark class="warning">到了</mark>。| <Plot>The train arrived.</Plot></li>
<li><mark class="danger">那只狗</mark> <mark class="warning">死了</mark>。| <Plot>The dog died.</Plot></li>
<li><mark class="danger">鸟儿们</mark> <mark class="warning">在唱歌</mark>。| <Plot>The birds are singing.</Plot></li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li><mark class="danger">他</mark> <mark class="warning">走了</mark>。| <mark class="danger">He</mark> <mark class="warning">left</mark></li>
<li><mark class="danger">我们的老师</mark> <mark class="warning">在笑</mark>。| <mark class="danger">Our teacher</mark> <mark class="warning">is laughing</mark></li>
<li><mark class="danger">会议</mark> <mark class="warning">开始了</mark>。| <mark class="danger">The meeting</mark> <mark class="warning">has started</mark></li>
<li><mark class="danger">这些花</mark> <mark class="warning">正在开放</mark>。| <mark class="danger">These flowers</mark> <mark class="warning">are blooming</mark></li>
<li><mark class="danger">时间</mark> <mark class="warning">飞逝</mark>。| <mark class="danger">Time</mark> <mark class="warning">flies</mark></li>
<li><mark class="danger">那个婴儿</mark> <mark class="warning">在睡觉</mark>。| <mark class="danger">The baby</mark> <mark class="warning">is sleeping</mark></li>
<li><mark class="danger">太阳</mark> <mark class="warning">升起了</mark>。| <mark class="danger">The sun</mark> <mark class="warning">rose</mark></li>
<li><mark class="danger">火车</mark> <mark class="warning">到了</mark>。| <mark class="danger">The train</mark> <mark class="warning">arrived</mark></li>
</ol>
</template></Tabs><h2 id="进阶练习-有修饰" tabindex="-1"><a class="header-anchor" href="#进阶练习-有修饰"><span>进阶练习（有修饰）</span></a></h2>
<Badge text="谓语动词" class="warning"/> 通常可以被 <Badge text="助动词" class="success"/> <Annotation label="助动词" :total="1"><template #item-0><p>【助动词】辅助主动词构成时态、情态意义等的词。例如 is 用于构成现在进行时，can/should 作情态助动词。</p>
</template></Annotation> 和 <Badge text="副词" class="success"/> <Annotation label="副词" :total="1"><template #item-0><p>【副词】修饰动词、形容词或整个句子的词，英语中通常以 -ly 结尾。。相当于中文“...地”的词。</p>
</template></Annotation> 修饰。<ul>
<li>can read 会读书 （can 是情态助动词）</li>
<li>is reading loudly 正在大声读书 （is 是现在进行时助动词；loudly 是副词）</li>
</ul>
<Tabs id="196" :data='[{"id":"练习"},{"id":"答案"}]'>
<template #title0="{ value, isActive }">练习</template><template #title1="{ value, isActive }">答案</template><template #tab0="{ value, isActive }"><ol>
<li><mark class="danger">他</mark> <mark class="warning">伤心地哭了</mark>。| <Plot>He cried sadly.</Plot></li>
<li><mark class="danger">我的老师</mark> <mark class="warning">唱歌非常厉害</mark>。| <Plot>My teacher sings very well.</Plot></li>
<li><mark class="danger">学生们</mark> <mark class="warning">在认真听讲</mark>。| <Plot>Students are listening carefully.</Plot></li>
<li><mark class="danger">那只猫</mark> <mark class="warning">突然跳了起来</mark>。| <Plot>That cat jumped suddenly.</Plot></li>
<li><mark class="danger">我们</mark> <mark class="warning">必须现在离开</mark>。| <Plot>We must leave now.</Plot></li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li><mark class="danger">他</mark> <mark class="warning">伤心地哭了</mark>。| <mark class="danger">He</mark> <mark class="warning">cried sadly</mark>.</li>
<li><mark class="danger">我的老师</mark> <mark class="warning">唱歌非常厉害</mark>。| <mark class="danger">My teacher</mark> <mark class="warning">sings very well</mark>.</li>
<li><mark class="danger">学生们</mark> <mark class="warning">在认真听讲</mark>。| <mark class="danger">Students</mark> <mark class="warning">are listening carefully</mark>.</li>
<li><mark class="danger">那只猫</mark> <mark class="warning">突然跳了起来</mark>。| <mark class="danger">That cat</mark> <mark class="warning">jumped suddenly</mark>.</li>
<li><mark class="danger">我们</mark> <mark class="warning">必须现在离开</mark>。| <mark class="danger">We</mark> <mark class="warning">must leave now</mark>.</li>
</ol>
</template></Tabs><h2 id="综合练习" tabindex="-1"><a class="header-anchor" href="#综合练习"><span>综合练习</span></a></h2>
<MakeSentence
:questions="[
    {
        stem: '那只狗死了。',
        options: ['dog', 'died','The'],
        answer: 'The dog died',
        explanation: '答案：The dog died.'
    },
    {
        stem: '鸟儿 | 在唱歌。',
        options: ['singing','happily', 'are','Birds'],
        answer: 'Birds are singing happily',
        explanation: '答案：Birds are singing happily.'
    },
    {
        stem: '我的猫 | 会唱歌。',
        options: ['cat', 'sing', 'My', 'can'],
        answer: 'My cat can sing',
        explanation: '答案：My cat can sing.'
    },
    {
        stem: '孩子们在开心地玩耍',
        options: ['happily','Children', 'playing','are'],
        answer: 'Children are playing happily',
        explanation: '答案：Children are playing happily.'
    },
    {
        stem: '那个老人走不快',
        options: ['old', 'fast','cannot', 'walk', 'That','man'],
        answer: 'That old man cannot walk fast',
        explanation: '答案：That old man cannot walk fast.'
    },
    {
        stem: '你会赢的。别担心。',
        options: ['You','worry', 'win','Don\'t', 'will'],
        answer: 'You will win Don\'t worry',
        explanation: '答案：You will win. Don\'t worry.'
    },
]"/></div></template>


