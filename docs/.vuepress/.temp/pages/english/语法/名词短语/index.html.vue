<template><div><VPCard title="名词短语"><p><strong>构成</strong>：<Badge text="限定词" class="danger"/> + <Badge text="前置 修饰语" class="success"/> + <Badge text="名词" class="warning"/> + <Badge text="后置 修饰语" class="success"/></p>
<p><strong>例句</strong>：<Badge text="the" class="danger"/><Badge text="red" class="success"/><Badge text="book" class="warning"/><Badge text="on the table" class="success"/> 桌子上那本红色的书</p>
<p><strong>功能</strong>：作主语 <Annotation label="主语" :total="1"><template #item-0><p>【主语】句子的出发点，通常位于句子开头，一般由代词或名词短语充当。如“I am Mike.”中的“I”；“My name is Mike.”中的“My name”。</p>
</template></Annotation> 或宾语 <Annotation label="宾语" :total="1"><template #item-0><p>【宾语】某些词的作用对象。通常位于动词或介词之后，一般由代词或名词短语充当。如“Help me!”中的“me”；“at school”中的“school”。</p>
</template></Annotation></p>
<p><strong>前置知识</strong>：名词 <Annotation label="名词" :total="1"><template #item-0><p>【名词】表示各种事物的词。例如 apple, book, Mike。</p>
</template></Annotation>、短语 <Annotation label="短语" :total="1"><template #item-0><p>【短语】以某个词为中心构成的词组，包含一个或多个词。可根据词性分为名词短语、动词短语、介词短语等。</p>
</template></Annotation></p>
</VPCard><p>注意： <Badge text="限定词" class="danger"/> 和 <Badge text="名词" class="warning"/> 是必要成分； <Badge text="修饰语" class="success"/> 是次要成分。</p>
<ul>
<li>
<Badge text="前置 修饰语" class="success"/> 可能是形容词、名词。<ul>
<li>a <mark>red</mark> apple</li>
<li>an <mark>apple</mark> tree</li>
</ul>
</li>
<li>
<Badge text="后置 修饰语" class="success"/> 可能是介词短语、非谓语动词、定语从句。<ul>
<li>a girl <mark>in red</mark></li>
<li>a girl <mark>wearing red clothes</mark></li>
<li>a girl <mark>who is wearing red clothes</mark></li>
</ul>
</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">什么是限定词？</p>
<p>英语中，名词一般用于构成<code v-pre>名词短语</code>（以名词为中心，含有一个或多个词构成）。</p>
<p>名词一般不直接充当名词短语（不以单数形式单独出现）：</p>
<ul>
<li>要么以复数形式（视为加了零冠词）</li>
<li>要么在前面加限定词</li>
</ul>
<p>例如: a/an/the, this/that/these/those, my/your/her..., one/two/three, a set of, a cup of, many, much 等都是限定词。</p>
</div>
<h2 id="一、限定词-名词" tabindex="-1"><a class="header-anchor" href="#一、限定词-名词"><span>一、限定词 + 名词</span></a></h2>
<h3 id="_1-冠词-名词" tabindex="-1"><a class="header-anchor" href="#_1-冠词-名词"><span>1. 冠词 + 名词</span></a></h3>
<p>冠词有四个：复数, a, an, the</p>
<ul>
<li><mark>零冠词（单独的名词复数）用于泛指</mark></li>
<li><mark>不定冠词 （a/an） 用于泛指</mark>，一般初次提及某个名词时使用
<ul>
<li>a 用于辅音音素前</li>
<li>an 用于元音音素前</li>
</ul>
</li>
<li><mark>定冠词 （the） 用于特指</mark>，一般在初次提及某个名词之后，再次提及其时使用</li>
</ul>
<Tabs id="117" :data='[{"id":"复数的情况"},{"id":"a/an 的情况"},{"id":"the 的情况"},{"id":"答案"}]'>
<template #title0="{ value, isActive }">复数的情况</template><template #title1="{ value, isActive }">a/an 的情况</template><template #title2="{ value, isActive }">the 的情况</template><template #title3="{ value, isActive }">答案</template><template #tab0="{ value, isActive }"><p>注意：泛指某类东西时，一般用复数。</p>
<ol>
<li>我喜欢猫。I like <Plot>cats</Plot>.</li>
<li>我经常读书。 I often read <Plot>books</Plot>.</li>
<li>老虎是橙色的。 <Plot>Tigers</Plot> are orange.</li>
<li>学生们很累。 <Plot>Students</Plot> are very tired.</li>
<li>鸟儿会飞。 <Plot>Birds</Plot> can fly.</li>
</ol>
</template><template #tab1="{ value, isActive }"><p>a/an 表示 “一个”</p>
<ul>
<li>a 用于辅音音素前</li>
<li>an 用于元音音素前</li>
</ul>
<ol>
<li>一只狗 <Plot>a dog</Plot></li>
<li>一名老师 <Plot>a teacher</Plot></li>
<li>一位同学 <Plot>a classmate</Plot></li>
<li>一个橙子 <Plot>an orange</Plot></li>
<li>一只动物 <Plot>an animal</Plot></li>
<li>一本书 <Plot>a book</Plot></li>
<li>一条河 <Plot>a river</Plot></li>
<li>一个苹果 <Plot>an apple</Plot></li>
<li>一颗鸡蛋 <Plot>an egg</Plot></li>
<li>一个人，一支笔，一个晚上，一个奇迹 <Plot>a man, a pen, a night, a miracle</Plot></li>
</ol>
</template><template #tab2="{ value, isActive }"><p>如果初次提及某个名词，用 a/an，否则用 the 特指。</p>
<ol>
<li>我有一只狗。这只狗是白色的。I have <Plot>a dog</Plot>. <Plot>The dog</Plot> is white.</li>
<li>学校里有一只猫。每个人都喜欢这只猫。 There is <Plot>a cat</Plot> in the school. Everyone likes <Plot>the cat</Plot>.</li>
</ol>
<p>表示某一类群体或种类时也可以用 the（通常也可以用复数）。</p>
<ol>
<li>我最喜欢的动物是猴子。 My favorite animal is <Plot>the monkey</Plot>.</li>
<li>老虎是一种很大的动物。 <Plot>The tiger</Plot> is a huge animal.</li>
</ol>
<p>其他特指的情况也会用 the。</p>
<ol>
<li>桌子上的那本书 <Plot>the book</Plot> on the table</li>
<li>中国的首都 <Plot>the capital</Plot> of China</li>
<li>世界上最高的山 <Plot>the</Plot> highest <Plot>mountain</Plot> in the world</li>
<li>我昨天买的手机 <Plot>the phone</Plot> I bought yesterday</li>
</ol>
</template><template #tab3="{ value, isActive }"><h4 id="_1-用复数的情况" tabindex="-1"><a class="header-anchor" href="#_1-用复数的情况"><span>1. 用复数的情况</span></a></h4>
<p>注意：泛指某类东西时，一般用复数。</p>
<ol>
<li>我喜欢<mark>猫</mark>。I like <mark>cats</mark>.</li>
<li>我经常读<mark>书</mark>。 I often read <mark>books</mark>.</li>
<li><mark>老虎</mark>是橙色的。 <mark>Tigers</mark> are orange.</li>
<li><mark>学生们</mark>很累。 <mark>Students</mark> are very tired.</li>
<li><mark>鸟儿</mark>会飞。 <mark>Birds</mark> can fly.</li>
</ol>
<h4 id="_2-用-a-an-的情况" tabindex="-1"><a class="header-anchor" href="#_2-用-a-an-的情况"><span>2. 用 a/an 的情况</span></a></h4>
<p>a/an 表示 “一个”</p>
<ul>
<li>a 用于辅音音素前</li>
<li>an 用于元音音素前</li>
</ul>
<ol>
<li>一只狗 a dog</li>
<li>一名老师 a teacher</li>
<li>一位同学 a classmate</li>
<li>一个橙子 an orange</li>
<li>一只动物 an animal</li>
<li>一本书 a book</li>
<li>一条河 a river</li>
<li>一个苹果 an apple</li>
<li>一颗鸡蛋 an egg</li>
<li>一个人，一支笔，一个晚上，一个奇迹 a man, a pen, a night, a miracle</li>
</ol>
<h4 id="_3-用-the-的情况" tabindex="-1"><a class="header-anchor" href="#_3-用-the-的情况"><span>3. 用 the 的情况</span></a></h4>
<p>如果初次提及某个名词，用 a/an，否则用 the 特指。</p>
<ol>
<li>我有<mark>一只狗</mark>。<mark>这只狗</mark>是白色的。I have <mark>a dog</mark>. <mark>The dog</mark> is white.</li>
<li>学校里有<mark>一只猫</mark>。每个人都喜欢<mark>这只猫</mark>。 There is <mark>a cat</mark> in the school. Everyone likes <mark>the cat</mark>.</li>
</ol>
<p>表示某一类群体或种类时也可以用 the（通常也可以用复数）。</p>
<ol>
<li>我最喜欢的动物是<mark>猴子</mark>。 My favorite animal is <mark>the monkey</mark>.</li>
<li><mark>老虎</mark>是一种很大的动物。 <mark>The tiger</mark> is a huge animal.</li>
</ol>
<p>其他特指的情况也会用 the。</p>
<ol>
<li>桌子上的那本书 the book on the table</li>
<li>中国的首都 the capital of China</li>
<li>世界上最高的山 the highest mountain in the world （最高级前面加 the）</li>
<li>我昨天买的手机 the phone I bought yesterday</li>
</ol>
</template></Tabs><h3 id="_2-其他限定词-名词" tabindex="-1"><a class="header-anchor" href="#_2-其他限定词-名词"><span>2. 其他限定词 + 名词</span></a></h3>
<Tabs id="443" :data='[{"id":"指示限定词"},{"id":"形容词性物主代词"},{"id":"基数词"},{"id":"量词"},{"id":"量词短语"}]'>
<template #title0="{ value, isActive }">指示限定词</template><template #title1="{ value, isActive }">形容词性物主代词</template><template #title2="{ value, isActive }">基数词</template><template #title3="{ value, isActive }">量词</template><template #title4="{ value, isActive }">量词短语</template><template #tab0="{ value, isActive }"><ul>
<li>this 这个 （这本书 <Plot>this book</Plot>）</li>
<li>that 那个 （那个女人 <Plot>that woman</Plot>）</li>
<li>these 这些 （这些电脑 <Plot>these computers</Plot>）</li>
<li>those 那些 （那些学生 <Plot>those students</Plot>）</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>my 我的 （我的老师 <Plot>my teacher</Plot>）</li>
<li>your 你的 （你的名词 <Plot>your name</Plot>）</li>
<li>his 他的 （他的生活 <Plot>his life</Plot>）</li>
<li>her 她的 （她的工作 <Plot>her job</Plot>）</li>
<li>it 它的 （它的鼻子 <Plot>its nose</Plot>）</li>
<li>our 我们的 （我们的作业 <Plot>our homework</Plot>）</li>
<li>their 他们的 （他们的教室 <Plot>their classroom</Plot>）</li>
</ul>
</template><template #tab2="{ value, isActive }"><p>基数词为 one 的时候用单数，其他用复数。</p>
<ul>
<li>one 一个 （一只狗 <Plot>one dog</Plot>）</li>
<li>two 两个 （两只狗 <Plot>two dogs</Plot>）</li>
<li>ten 十个 （十张桌子 <Plot>ten tables</Plot>）</li>
<li>one hundred 一百个 （一百张椅子 <Plot>one hundred chairs</Plot></li>
</ul>
</template><template #tab3="{ value, isActive }"><ul>
<li>some 一些 （一些礼物 <Plot>some gifts</Plot>）</li>
<li>many 许多 （许多鸭子 <Plot>many ducks</Plot>）</li>
<li>much 许多 （许多钱 <Plot>much money</Plot>）</li>
<li>most 大多数 （大多数学生 <Plot>most students</Plot>）</li>
</ul>
</template><template #tab4="{ value, isActive }"><ul>
<li>a pair of 一双 （一双鞋 <Plot>a pair of shoes</Plot>）</li>
<li>a set of 一套；一串 （一串钥匙 <Plot>a set of keys</Plot>）</li>
<li>a cup of 一杯 （一杯水 <Plot>a cup of water</Plot>）</li>
<li>a lot of 许多 （许多人 <Plot>a lot of people</Plot>）</li>
</ul>
<p>量词短语中表示容器的单词一般可数：</p>
<ul>
<li>三双鞋 <Plot>three pairs of shoes</Plot></li>
<li>五串钥匙 <Plot>five sets of keys</Plot></li>
<li>十杯水 <Plot>ten cups of water</Plot></li>
</ul>
</template></Tabs><h2 id="二、限定词-形容词-名词" tabindex="-1"><a class="header-anchor" href="#二、限定词-形容词-名词"><span>二、限定词 + 形容词 + 名词</span></a></h2>
<p>要构成一个名词短语，名词是必要成分。<mark>并且绝大部分情况下，限定词也是必要成分（毕竟复数也算限定）</mark>。</p>
<p>形容词并非必要的，所以和限定词并非同一类词，<mark>一般放在限定词后面，名词前面</mark>。</p>
<p>形容词相当于中文 <code v-pre>的</code> 的词，例如 big（大的），beautiful（美丽的），red（红色的），tall（高的），fat（胖的）。</p>
<Tabs id="615" :data='[{"id":"练习 1"},{"id":"练习 1（答案）"},{"id":"练习 2"},{"id":"练习 2（答案）"}]'>
<template #title0="{ value, isActive }">练习 1</template><template #title1="{ value, isActive }">练习 1（答案）</template><template #title2="{ value, isActive }">练习 2</template><template #title3="{ value, isActive }">练习 2（答案）</template><template #tab0="{ value, isActive }"><ol>
<li>那个红苹果 🍎 <Plot>that red apple</Plot></li>
<li>我的新书包 🎒 <Plot>my new schoolbag</Plot></li>
<li>三本有趣的书 📚 <Plot>three interesting books</Plot></li>
<li>她漂亮的裙子 👗 <Plot>her beautiful dress</Plot></li>
<li>这些高大的建筑 🏢 <Plot>these tall buildings</Plot></li>
<li>一杯热牛奶 🥛 <Plot>a cup of hot milk</Plot></li>
<li>两把木制椅子 🪑 <Plot>two wooden chairs</Plot></li>
<li>许多可爱的狗 🐶 <Plot>many cute dogs</Plot></li>
<li>他们聪明的儿子 👦 <Plot>their smart son</Plot></li>
<li>一部有趣的电影 🎦 <Plot>an interesting movie</Plot></li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li>那个红苹果 🍎 <mark>that red apple</mark></li>
<li>我的新书包 🎒 <mark>my new schoolbag</mark></li>
<li>三本有趣的书 📚 <mark>three interesting books</mark></li>
<li>她漂亮的裙子 👗 <mark>her beautiful dress</mark></li>
<li>这些高大的建筑 🏢 <mark>these tall buildings</mark></li>
<li>一杯热牛奶 🥛 <mark>a cup of hot milk</mark></li>
<li>两把木制椅子 🪑 <mark>two wooden chairs</mark></li>
<li>许多可爱的狗 🐶 <mark>many cute dogs</mark></li>
<li>他们聪明的儿子 👦 <mark>their smart son</mark></li>
<li>一部有趣的电影 🎦 <mark>an interesting movie</mark></li>
</ol>
</template><template #tab2="{ value, isActive }"><ol>
<li>这只橙色的猫 🐈 <Plot>this orange cat</Plot></li>
<li>五张圆形桌子 🟡 <Plot>five round tables</Plot></li>
<li>你的旧手机 📱 <Plot>your old phone</Plot></li>
<li>那些新鲜的花 🌸 <Plot>those fresh flowers</Plot></li>
<li>一些重要笔记 📄 <Plot>some important notes</Plot></li>
<li>一双棕色的鞋 👞 <Plot>a pair of brown shoes</Plot></li>
<li>我们忙碌的老师 🧑 <Plot>our busy teacher</Plot></li>
<li>那座古老桥梁 🌉 <Plot>that ancient bridge</Plot></li>
<li>他的蓝色自行车 🚲 <Plot>his blue bicycle</Plot></li>
<li>许多彩色卡片 💳 <Plot>many colorful cards</Plot></li>
</ol>
</template><template #tab3="{ value, isActive }"><ol>
<li>这只橙色的猫 🐈 <mark>this orange cat</mark></li>
<li>五张圆形桌子 🟡 <mark>five round tables</mark></li>
<li>你的旧手机 📱 <mark>your old phone</mark></li>
<li>那些新鲜的花 🌸 <mark>those fresh flowers</mark></li>
<li>一些重要笔记 📄 <mark>some important notes</mark></li>
<li>一双棕色的鞋 👞 <mark>a pair of brown shoes</mark></li>
<li>我们忙碌的老师 🧑 <mark>our busy teacher</mark></li>
<li>那座古老桥梁 🌉 <mark>that ancient bridge</mark></li>
<li>他的蓝色自行车 🚲 <mark>his blue bicycle</mark></li>
<li>许多彩色卡片 💳 <mark>many colorful cards</mark></li>
</ol>
</template></Tabs><h2 id="三、限定词-名词-介词短语" tabindex="-1"><a class="header-anchor" href="#三、限定词-名词-介词短语"><span>三、限定词 + 名词 + 介词短语</span></a></h2>
<p>要构成名词短语，除了可以在名词前面加形容词，<mark>还可以在名词后面加介词短语</mark>。</p>
<p>例如：</p>
<ul>
<li><mark class="danger">a photo</mark> <mark>of my family</mark> 一张我的全家福</li>
<li><mark class="danger">the book</mark> <mark>in the morning</mark> 上午那本书</li>
<li><mark class="danger">those students</mark> <mark>with good grades</mark> 那些成绩好的学生</li>
</ul>
<Tabs id="859" :data='[{"id":"练习 1"},{"id":"练习 1（答案）"},{"id":"练习 2"},{"id":"练习 2（答案）"}]'>
<template #title0="{ value, isActive }">练习 1</template><template #title1="{ value, isActive }">练习 1（答案）</template><template #title2="{ value, isActive }">练习 2</template><template #title3="{ value, isActive }">练习 2（答案）</template><template #tab0="{ value, isActive }"><ol>
<li><mark class="danger">桌子上的</mark> <mark>那本书</mark> 📖（on） <Plot>the book on the table</Plot></li>
<li><mark>一张</mark> <mark class="danger">我朋友的</mark> <mark>照片</mark> 📸（of） <Plot>a photo of my friend</Plot></li>
<li><mark>三杯</mark> <mark class="danger">加了糖的</mark> <mark>咖啡</mark> ☕（with） <Plot>three cups of coffee with sugar</Plot></li>
<li><mark class="danger">学校附近的</mark> <mark>那家商店</mark> 🏪（near） <Plot>that shop near the school</Plot></li>
<li><mark class="danger">穿红裙子的</mark> <mark>女孩</mark> 👧（in） <Plot>the girl in the red dress</Plot></li>
<li><mark class="danger">来自美国的</mark> <mark>学生</mark> 🗽（from） <Plot>students from USA</Plot></li>
<li><mark>一部</mark> <mark class="danger">关于太空的</mark> <mark>电影</mark> 🚀（about） <Plot>a movie about space</Plot></li>
<li><mark class="danger">书桌下的</mark> <mark>猫</mark> 🐈（under） <Plot>the cat under the desk</Plot></li>
<li><mark>一扇</mark> <mark class="danger">没有钥匙的</mark> <mark>门</mark> 🚪（without） <Plot>a door without keys</Plot></li>
<li><mark>一个</mark> <mark class="danger">在河边的</mark> <mark>老房子</mark> 🏡（by） <Plot>an old house by the river</Plot></li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li><mark class="danger">桌子上的</mark> <mark>那本书</mark> 📖（on） <mark>the book</mark> <mark class="danger">on the table</mark></li>
<li><mark>一张</mark> <mark class="danger">我朋友的</mark> <mark>照片</mark> 📸（of） <mark>a photo</mark> <mark class="danger">of my friend</mark></li>
<li><mark>三杯</mark> <mark class="danger">加了糖的</mark> <mark>咖啡</mark> ☕（with） <mark>three cups of coffee</mark> <mark class="danger">with sugar</mark></li>
<li><mark class="danger">学校附近的</mark> <mark>那家商店</mark> 🏪（near） <mark>that shop</mark> <mark class="danger">near the school</mark></li>
<li><mark class="danger">穿红裙子的</mark> <mark>女孩</mark> 👧（in） <mark>the girl</mark> <mark class="danger">in the red dress</mark></li>
<li><mark class="danger">来自美国的</mark> <mark>学生</mark> 🗽（from） <mark>students</mark> <mark class="danger">from USA</mark></li>
<li><mark>一部</mark> <mark class="danger">关于太空的</mark> <mark>电影</mark> 🚀（about） <mark>a movie</mark> <mark class="danger">about space</mark></li>
<li><mark class="danger">书桌下的</mark> <mark>猫</mark> 🐈（under） <mark>the cat</mark> <mark class="danger">under the desk</mark></li>
<li><mark>一扇</mark> <mark class="danger">没有钥匙的</mark> <mark>门</mark> 🚪（without） <mark>a door</mark> <mark class="danger">without keys</mark></li>
<li><mark>一个</mark> <mark class="danger">在河边的</mark> <mark>老房子</mark> 🏡（by） <mark>an old house</mark> <mark class="danger">by the river</mark></li>
</ol>
</template><template #tab2="{ value, isActive }"><ol>
<li><mark class="danger">教室里的</mark> <mark>那些椅子</mark> 🪑（in） <Plot>those chairs in the classroom</Plot></li>
<li><mark class="danger">他手上的</mark> <mark>绷带</mark> 🩹（on） <Plot>the bandage on his hand</Plot></li>
<li><mark>五封</mark> <mark class="danger">写给我妈妈的</mark> <mark>信</mark> 💌（to） <Plot>five letters to my mother</Plot></li>
<li><mark>一只</mark> <mark class="danger">树上的</mark> <mark>橙色小鸟</mark> 🐦（in） <Plot>an orange bird in the tree</Plot></li>
<li><mark>一个</mark> <mark class="danger">带游泳池的</mark> <mark>酒店</mark> 🏊（with） <Plot>a hotel with a swimming pool</Plot></li>
<li><mark>一个</mark> <mark class="danger">桌子旁边的</mark> <mark>黑色包</mark> 👜（beside） <Plot>a black bag beside the table</Plot></li>
<li><mark class="danger">两座山之间的</mark> <mark>一个村庄</mark> ⛰️（between） <Plot>a village between two mountains</Plot></li>
<li><mark class="danger">来自不同国家的</mark> <mark>游客</mark> 🌍（from） <Plot>tourists from different countries</Plot></li>
<li><mark class="danger">会议期间的</mark> <mark>休息时间</mark> ⏳（during） <Plot>the break during the meeting</Plot></li>
<li><mark>一个</mark> <mark class="danger">带花园的</mark> <mark>白色房子</mark> 🌷（with） <Plot>a white house with a garden</Plot></li>
</ol>
</template><template #tab3="{ value, isActive }"><ol>
<li><mark class="danger">教室里的</mark> <mark>那些椅子</mark> 🪑（in） <mark>those chairs</mark> <mark class="danger">in the classroom</mark></li>
<li><mark class="danger">他手上的</mark> <mark>绷带</mark> 🩹（on） <mark>the bandage</mark> <mark class="danger">on his hand</mark></li>
<li><mark>五封</mark> <mark class="danger">写给我妈妈的</mark> <mark>信</mark> 💌（to） <mark>five letters</mark> <mark class="danger">to my mother</mark></li>
<li><mark>一只</mark> <mark class="danger">树上的</mark> <mark>橙色小鸟</mark> 🐦（in） <mark>an orange bird</mark> <mark class="danger">in the tree</mark></li>
<li><mark>一个</mark> <mark class="danger">带游泳池的</mark> <mark>酒店</mark> 🏊（with） <mark>a hotel</mark> <mark class="danger">with a swimming pool</mark></li>
<li><mark>一个</mark> <mark class="danger">桌子旁边的</mark> <mark>黑色包</mark> 👜（beside） <mark>a black bag</mark> <mark class="danger">beside the table</mark></li>
<li><mark class="danger">两座山之间的</mark> <mark>一个村庄</mark> ⛰️（between） <mark>a village</mark> <mark class="danger">between two mountains</mark></li>
<li><mark class="danger">来自不同国家的</mark> <mark>游客</mark> 🌍（from） <mark>tourists</mark> <mark class="danger">from different countries</mark></li>
<li><mark class="danger">会议期间的</mark> <mark>休息时间</mark> ⏳（during） <mark>the break</mark> <mark class="danger">during the meeting</mark></li>
<li><mark>一个</mark> <mark class="danger">带花园的</mark> <mark>白色房子</mark> 🌷（with） <mark>a white house</mark> <mark class="danger">with a garden</mark></li>
</ol>
</template></Tabs><h2 id="综合练习" tabindex="-1"><a class="header-anchor" href="#综合练习"><span>综合练习</span></a></h2>
<MakeSentence
:questions="[
    {//1
        stem: '那个红苹果 | 在桌子上。🍎',
        options: ['table', 'That', 'on', 'apple', 'red', 'is', 'the'],
        answer: 'That red apple is on the table',
        explanation: '答案：That red apple is on the table. (限定词+形容词+名词)'
    },
    {//2
        stem: '三本有趣的书 | 在书包里。📚',
        options: ['books', 'Three', 'schoolbag', 'in',  'interesting', 'the', 'are'],
        answer: 'Three interesting books are in the schoolbag',
        explanation: '答案：Three interesting books are in the schoolbag. (限定词+形容词+名词)'
    },
    {//3
        stem: '穿蓝裙子的女孩 | 是我妹妹。👧',
        options: ['blue', 'The', 'sister','my', 'the','dress', 'girl', 'in', 'is'],
        answer: 'The girl in the blue dress is my sister',
        explanation: '答案：The girl in the blue dress is my sister. (限定词+名词+介词短语)'
    },
    {//4
        stem: '这些高大的建筑 | 是新的。🏢',
        options: ['tall', 'These', 'new', 'are', 'buildings'],
        answer: 'These tall buildings are new',
        explanation: '答案：These tall buildings are new. (限定词+形容词+名词)'
    },
    {//5
        stem: '超市里的手机 | 很贵。📱',
        options: ['is', 'phone', 'expensive', 'the', 'I', 'The', 'in', 'yesterday', 'supermarket'],
        answer: 'The phone in the supermarket is expensive',
        explanation: '答案：The phone in the supermarket is expensive. (限定词+名词+介词短语)'
    },
    {//6
        stem: '书桌下的猫 | 在睡觉。🐈',
        options: ['desk', 'sleeping', 'The', 'under', 'cat', 'is', 'the'],
        answer: 'The cat under the desk is sleeping',
        explanation: '答案：The cat under the desk is sleeping. (限定词+名词+介词短语)'
    },
    {//7
        stem: '许多彩色气球 | 飞走了。🎈',
        options: ['away', 'balloons', 'flew', 'colorful', 'Many'],
        answer: 'Many colorful balloons flew away',
        explanation: '答案：Many colorful balloons flew away. (限定词+形容词+名词)'
    },
    {//8
        stem: '学校附近的新商店 | 很大。🏪',
        options: ['new', 'near', 'big', 'the', 'is', 'shop', 'The', 'school'],
        answer: 'The new shop near the school is big',
        explanation: '答案：The new shop near the school is big. (限定词+形容词+名词+介词短语)'
    },
    {//9
        stem: '她的红裙子 | 很漂亮。👗',
        options: ['dress', 'red', 'Her', 'is', 'beautiful'],
        answer: 'Her red dress is beautiful',
        explanation: '答案：Her red dress is beautiful. (限定词+形容词+名词)'
    },
    {//10
        stem: '两座山之间的村庄 | 很美。⛰️',
        options: ['mountains', 'village', 'between', 'beautiful', 'The', 'two', 'is'],
        answer: 'The village between two mountains is beautiful',
        explanation: '答案：The village between two mountains is beautiful. (限定词+名词+介词短语)'
    },
    {//11
        stem: '我哥哥的旧自行车 | 坏了。🚲',
        options: ['broken', 'bicycle', 'old', 'My', 'is', 'brother\'s'],
        answer: 'My brother\'s old bicycle is broken',
        explanation: '答案：My brother\'s old bicycle is broken. (限定词+形容词+名词)'
    },
    {//12
        stem: '一杯桌子上的牛奶 | 凉了。🥛',
        options: ['table','of','is', 'milk', 'cold', 'the','A', 'on', 'cup'],
        answer: 'A cup of milk on the table is cold',
        explanation: '答案：A cup of milk on the table is cold. (限定词+介词短语)'
    },
    {//13
        stem: '那些在公园里的孩子 | 很开心。👧👦',
        options: ['park', 'happy', 'children', 'Those', 'the','are', 'in'],
        answer: 'Those children in the park are happy',
        explanation: '答案：Those children in the park are happy. (限定词+名词+介词短语)'
    },
    {//14
        stem: '五张圆形桌子 | 被搬走了。🟡',
        options: ['moved', 'round', 'tables', 'were', 'Five'],
        answer: 'Five round tables were moved',
        explanation: '答案：Five round tables were moved. (限定词+形容词+名词)'
    },
    {//15
        stem: '关于人工智能的书 | 很有趣。🤖',
        options: ['about', 'book', 'interesting', 'The', 'AI', 'is'],
        answer: 'The book about AI is interesting',
        explanation: '答案：The book about AI is interesting. (限定词+名词+介词短语)'
    },
    {//16
        stem: '我们忙碌的老师 | 生病了。🧑🏫',
        options: ['teacher', 'sick', 'busy', 'Our', 'is'],
        answer: 'Our busy teacher is sick',
        explanation: '答案：Our busy teacher is sick. (限定词+形容词+名词)'
    },
    {//17
        stem: '树上的橙子 | 很甜。🍊',
        options: ['oranges', 'sweet', 'the', 'tree', 'The', 'are', 'on'],
        answer: 'The oranges on the tree are sweet',
        explanation: '答案：The oranges on the tree are sweet. (限定词+名词+介词短语)'
    },
    {//18
        stem: '穿红衣服的女孩 | 在唱歌。🎤',
        options: ['dress', 'singing', 'is', 'The', 'the', 'red', 'girl', 'in'],
        answer: 'The girl in the red dress is singing',
        explanation: '答案：The girl in the red dress is singing. (限定词+名词+介词短语)'
    },
    {//19
        stem: '三本来自图书馆的书 | 丢了。📚',
        options: ['library','the', 'missing', 'are','books', 'Three', 'from'],
        answer: 'Three books from the library are missing',
        explanation: '答案：Three books from the library are missing. (限定词+基数词+名词+介词短语)'
    },
    {//20
        stem: '会议期间的休息时间 | 很短。⏳',
        options: ['during', 'the', 'short', 'break', 'The', 'meeting', 'was'],
        answer: 'The break during the meeting was short',
        explanation: '答案：The break during the meeting was short. (限定词+名词+介词短语)'
    }
]"
/></div></template>


