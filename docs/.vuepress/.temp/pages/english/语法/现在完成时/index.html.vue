<template><div><VPCard title="现在完成时"><p>时态：<Badge text="现在" class="danger"/> + <Badge text="完成" class="warning"/></p>
<p>构成：<Badge text="助动词 have" class="danger"/> + <Badge text="过去分词" class="warning"/> （简写：have done）</p>
<p>表示：现在已经；已经</p>
<p>例句：I <mark>have done</mark> my homework. 我<mark>已经做完</mark>作业了。</p>
<p>标志词：yet, once/twice/three times, already, just, before, never, ever</p>
</VPCard><h2 id="一、概念理解" tabindex="-1"><a class="header-anchor" href="#一、概念理解"><span>一、概念理解</span></a></h2>
<p>现在完成时态的含义是表示<mark>过去发生的或已完成的动作对现在造成的影响或结果</mark>。</p>
<ul>
<li>动作：过去发生的</li>
<li>结果：现在发生的</li>
</ul>
<Tabs id="35" :data='[{"id":"示例 1"},{"id":"示例 2"},{"id":"示例 3"}]'>
<template #title0="{ value, isActive }">示例 1</template><template #title1="{ value, isActive }">示例 2</template><template #title2="{ value, isActive }">示例 3</template><template #tab0="{ value, isActive }"><p>I have done my homework. 我已经做完作业了。</p>
<ul>
<li>动作：作业是过去做的</li>
<li>结果：现在已经做完了（主要说明作业完成了）</li>
</ul>
</template><template #tab1="{ value, isActive }"><p>She has come. 她已经来了。</p>
<ul>
<li>动作：她是过去某个时间来的</li>
<li>结果：她已经来了（主要说明她现在还在这里）</li>
</ul>
</template><template #tab2="{ value, isActive }"><p>She has gone. 她已经走了。</p>
<ul>
<li>动作：她是过去某个时间走的</li>
<li>结果：她已经走了（主要说明她现在不在这里）</li>
</ul>
</template></Tabs><h2 id="二、时态构成" tabindex="-1"><a class="header-anchor" href="#二、时态构成"><span>二、时态构成</span></a></h2>
<p>时态的理解，从 <Badge text="助动词" class="danger"/> 和 <Badge text="主动词形式" class="warning"/> 两个角度看：</p>
<ul>
<li>
<Badge text="助动词" class="danger"/> ：在前面加 have/has</li>
<li>
<Badge text="主动词" class="warning"/> ：动词的过去分词形式（done / -ed 分词）</li>
</ul>
<p>现在完成时各句型构成：</p>
<ul>
<li>肯定句：have/has + 过去分词</li>
<li>否定句：have/has + not + 过去分词
<ul>
<li>have not = haven't</li>
<li>has not = hasn't</li>
</ul>
</li>
<li>一般疑问句：Have / Has + 主语 + 过去分词 + 其他? （即助动词 have 提前）
<ul>
<li>肯定回答：Yes, I have. 或 Yes, he has.</li>
<li>否定回答：No, I haven't. 或 No, he hasn't.</li>
</ul>
</li>
<li>特殊疑问句：特殊疑问词 + have/has + 主语 + 过去分词 + 其他?</li>
</ul>
<h2 id="三、过去分词" tabindex="-1"><a class="header-anchor" href="#三、过去分词"><span>三、过去分词</span></a></h2>
<p>尽管过去分词和过去式一样，都属于 -ed 分词，大部分情况都是在后面加 -ed。并且已学近 100 个不规则动词的过去分词，约有半数也和它的过去式相同。但仍有特殊情况（见不规则动词表）。</p>
<p>过去分词的变化规则：</p>
<ul>
<li>规则变化（加 -ed）
<ul>
<li><code v-pre>直</code> ：直接加 -ed（一般情况）</li>
<li><code v-pre>去</code> ：去 e 加 -ed（不发音的 e 结尾时）</li>
<li><code v-pre>双</code> ：双写最后一个字母，再加 -ed（重度闭音节结尾时）</li>
<li><code v-pre>改</code> ：改 y 为 i 再加 -ed（辅音字母加 y 结尾时）</li>
</ul>
</li>
<li>不规则变化</li>
</ul>
<VPCollapse><VPCollapseItem :index="0"><template #title>最常见的不规则动词</template><p>根据出现频率排序，原型 → 过去式 → 过去分词，前 30 个不规则动词如下：</p>
<ul>
<li>be → <Plot>was/were</Plot> → <Plot>been</Plot></li>
<li>have → <Plot>had</Plot> → <Plot>had</Plot></li>
<li>do → <Plot>did</Plot> → <Plot>done</Plot></li>
<li>make → <Plot>made</Plot> → <Plot>made</Plot></li>
<li>go → <Plot>went</Plot> → <Plot>gone</Plot></li>
<li>get → <Plot>got</Plot> → <Plot>got</Plot></li>
<li>take → <Plot>took</Plot> → <Plot>taken</Plot></li>
<li>say → <Plot>said</Plot> → <Plot>said</Plot></li>
<li>know → <Plot>knew</Plot> → <Plot>known</Plot></li>
<li>think → <Plot>thought</Plot> → <Plot>thought</Plot></li>
<li>come → <Plot>came</Plot> → <Plot>come</Plot></li>
<li>see → <Plot>saw</Plot> → <Plot>seen</Plot></li>
<li>find → <Plot>found</Plot> → <Plot>found</Plot></li>
<li>give → <Plot>gave</Plot> → <Plot>given</Plot></li>
<li>eat → <Plot>ate</Plot> → <Plot>eaten</Plot></li>
<li>tell → <Plot>told</Plot> → <Plot>told</Plot></li>
<li>feel → <Plot>felt</Plot> → <Plot>felt</Plot></li>
<li>become → <Plot>became</Plot> → <Plot>become</Plot></li>
<li>read → <Plot>read</Plot> → <Plot>read</Plot></li>
<li>buy → <Plot>bought</Plot> → <Plot>bought</Plot></li>
<li>keep → <Plot>kept</Plot> → <Plot>kept</Plot></li>
<li>write → <Plot>wrote</Plot> → <Plot>written</Plot></li>
<li>show → <Plot>showed</Plot> → <Plot>shown</Plot></li>
<li>run → <Plot>ran</Plot> → <Plot>run</Plot></li>
<li>put → <Plot>put</Plot> → <Plot>put</Plot></li>
<li>leave → <Plot>left</Plot> → <Plot>left</Plot></li>
<li>spend → <Plot>spent</Plot> → <Plot>spent</Plot></li>
<li>drink → <Plot>drank</Plot> → <Plot>drunk</Plot></li>
<li>teach → <Plot>taught</Plot> → <Plot>taught</Plot></li>
<li>grow → <Plot>grew</Plot> → <Plot>grown</Plot></li>
</ul>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>最常见的不规则动词（答案）</template><p>根据出现频率排序，原型 → 过去式 → 过去分词，前 30 个不规则动词如下：</p>
<ul>
<li>be → was/were → been</li>
<li>have → had → had</li>
<li>do → did → done</li>
<li>make → made → made</li>
<li>go → went → gone</li>
<li>get → got → got</li>
<li>take → took → taken</li>
<li>say → said → said</li>
<li>know → knew → known</li>
<li>think → thought → thought</li>
<li>come → came → come</li>
<li>see → saw → seen</li>
<li>find → found → found</li>
<li>give → gave → given</li>
<li>eat → ate → eaten</li>
<li>tell → told → told</li>
<li>feel → felt → felt</li>
<li>become → became → become</li>
<li>read → read → read</li>
<li>buy → bought → bought</li>
<li>keep → kept → kept</li>
<li>write → wrote → written</li>
<li>show → showed → shown</li>
<li>run → ran → run</li>
<li>put → put → put</li>
<li>leave → left → left</li>
<li>spend → spent → spent</li>
<li>drink → drank → drunk</li>
<li>teach → taught → taught</li>
<li>grow → grew → grown</li>
</ul>
</VPCollapseItem></VPCollapse><FillIn
:questions="[
    {//1-10
        stem: ['be → {{1}} / {{2}} → {{3}}',
'have → {{4}} → {{5}}',
'do → {{6}} → {{7}}',
'make → {{8}} → {{9}}',
'go → {{10}} → {{11}}',
'get → {{12}} → {{13}}',
'take → {{14}} → {{15}}',
'say → {{16}} → {{17}}',
'know → {{18}} → {{19}}',
'think → {{20}} → {{21}}',],
        answer: ['was', 'were', 'been', 'had', 'had', 'did', 'done', 'made', 'made', 'went', 'gone', 'got', 'got', 'took', 'taken', 'said', 'said', 'knew', 'known', 'thought', 'thought'],
    },
    {//11-20
        stem: ['come → {{1}} → {{2}}',
'see → {{3}} → {{4}}',
'find → {{5}} → {{6}}',
'give → {{7}} → {{8}}',
'eat → {{9}} → {{10}}',
'tell → {{11}} → {{12}}',
'feel → {{13}} → {{14}}',
'become → {{15}} → {{16}}',
'read → {{17}} → {{18}}',
'buy → {{19}} → {{20}}',],
        answer: ['came', 'come', 'saw', 'seen', 'found', 'found', 'gave', 'given', 'ate', 'eaten', 'told', 'told', 'felt', 'felt', 'became', 'become', 'read', 'read', 'bought', 'bought'],
    },
    {//21-30
        stem: ['keep → {{1}} → {{2}}',
'write → {{3}} → {{4}}',
'show → {{5}} → {{6}}',
'run → {{7}} → {{8}}',
'put → {{9}} → {{10}}',
'leave → {{11}} → {{12}}',
'spend → {{13}} → {{14}}',
'drink → {{15}} → {{16}}',
'teach → {{17}} → {{18}}',
'grow → {{19}} → {{20}}',],
        answer: ['kept', 'kept', 'wrote', 'written', 'showed', 'shown', 'ran', 'run', 'put', 'put', 'left', 'left', 'spent', 'spent', 'drank', 'drunk', 'taught', 'taught', 'grew', 'grown'],
    },
]"
/>
<h2 id="四、造句练习" tabindex="-1"><a class="header-anchor" href="#四、造句练习"><span>四、造句练习</span></a></h2>
<p>例：Finish your homework! (使用 already 在句中练习)</p>
<ul>
<li>I've already finished my homework.(现在完成时)</li>
</ul>
<ol>
<li>Clean your shoes! (already)
<ul>
<li><Plot>I've already cleaned my shoes.</Plot></li>
</ul>
</li>
<li>Open the window! (just)
<ul>
<li><Plot>I've just opened the window.</Plot></li>
</ul>
</li>
<li>Turn on the television! (already)
<ul>
<li><Plot>I've already turned on the television.</Plot></li>
</ul>
</li>
<li>Wash your clothes! (yet)
<ul>
<li><Plot>I haven't washed my clothes yet.</Plot></li>
</ul>
</li>
</ol>
<p>例：they / buy a new house （变成现在完成时的问句，并作肯定和否定回答）</p>
<ul>
<li>Have they bought a new house yet?</li>
<li>Yes, they have.</li>
<li>No, they haven't.</li>
</ul>
<ol>
<li>he / meet Mrs. Jones (meet-met-met)
<ul>
<li><Plot>Has he met Mrs. Jones yet?</Plot></li>
<li><Plot>Yes, he has.</Plot></li>
<li><Plot>No, he hasn't.</Plot></li>
</ul>
</li>
<li>the boss/ leave (leave-left-left)
<ul>
<li><Plot>Has the boss left yet?</Plot></li>
<li><Plot>Yes, he has.</Plot></li>
<li><Plot>No, he hasn't.</Plot></li>
</ul>
</li>
<li>you / find your pen (find-found-found)
<ul>
<li><Plot>Have you found your pen yet?</Plot></li>
<li><Plot>Yes, I have.</Plot></li>
<li><Plot>No, I haven't.</Plot></li>
</ul>
</li>
</ol>
<h2 id="五、填空练习" tabindex="-1"><a class="header-anchor" href="#五、填空练习"><span>五、填空练习</span></a></h2>
<p>以下练习，若是否定形式，请用缩写：</p>
<FillIn
:questions="[
    {//1
        stem: ['你曾同你的父母争吵过吗？不，从来没有。(argue)', ' {{1}} you ever {{2}} with your parents? No, {{3}} .'],
        answer: ['Have', 'argued', 'I haven\'t'],
        explanation: 'Have; argued; I haven\'t',
    },
    {//2
        stem: ['你曾到另外的省旅行过吗？是的。（travel）', ' {{1}} you ever {{2}} to another province? Yes, I {{3}} .'],
        answer: ['Have', 'traveled', 'have'],
        explanation: 'Have; traveled; have',
    },
    {//3
        stem: ['我刚洗了盘子。（wash）', 'I {{1}} just {{2}} the dishes.'],
        answer: ['have', 'washed'],
        explanation: 'have; washed',
    },
    {//4
        stem: ['她已抄了所有的新单词。（copy）', 'She {{1}} already {{2}} all the new words.'],
        answer: ['has', 'copied'],
        explanation: 'has; copied',
    },
    {//5
        stem: ['Jim还没做他的作业。（do）', 'Jim {{1}} {{2}} his homework yet.'],
        answer: ['hasn\'t', 'done'],
        explanation: 'hasn\'t; done',
    },
    {//6
        stem: ['你包过饺子吗？（make）', '{{1}} you ever {{2}} dumplings?'],
        answer: ['Have', 'made'],
        explanation: 'Have; made',
    },
    {//7
        stem: ['我从未听过这首歌。（listen）', 'I {{1}} {{2}} to the song.'],
        answer: ['have', 'never listened'],
        explanation: 'have; never listened',
    },
    {//8
        stem: ['他们以前去过巴黎吗？', '{{1}} they {{2}} to Paris {{3}}?'],
        answer: ['Have', 'been', 'before'],
        explanation: 'Have; been; before',
    },
    {//9
        stem: ['迄念这止，他学了多少首歌？（learn）', 'How many songs {{1}} he {{2}} so far?'],
        answer: ['has', 'learned'],
        explanation: 'has; learned',
    },
    {//10
        stem: ['你给你的笔友写了多少封信？（write）', '{{1}} letters {{2}} you {{3}} to your pen pal?'],
        answer: ['How many', 'have', 'written'],
        explanation: 'How many; have; written',
    }
]"
/>
<h2 id="现在完成时-vs-一般过去式" tabindex="-1"><a class="header-anchor" href="#现在完成时-vs-一般过去式"><span>现在完成时 vs 一般过去式</span></a></h2>
<blockquote>
<ul>
<li>He has cleaned the room already. 他已经打扫过房间了。</li>
<li>He cleaned the room an hour ago. 他一小时前打扫了房间。</li>
</ul>
</blockquote>
<p>第一句是现在完成时，强调结果（打扫过房间，房间很干净）；第二句是一般过去式，强调动作和时间（一小时前在打扫房间）。</p>
<table>
<thead>
<tr>
<th>区别</th>
<th>一般过去式</th>
<th>现在完成时</th>
</tr>
</thead>
<tbody>
<tr>
<td>用法</td>
<td>只表示过去的动作或状态，不涉及现在</td>
<td>表示过去发生的事情对现在造成的影响或结果（与现在有联系）</td>
</tr>
<tr>
<td>时间状语</td>
<td>yesterday, last week, ... ago 等表示过去的时间状语</td>
<td>already, yet, ever, never, just, for, since… （不能与表示过去的时间状语连用）</td>
</tr>
</tbody>
</table>
<FillIn
  :questions="[
    {
        stem: ['—{{1}} your brother {{2}} (leave) Shanghai yet?', '—Yes, he {{3}} .'],
        answer: ['Has', 'left', 'has'],
    },
    {
        stem: ['—When {{1}} you {{2}} (buy) the dress?', '—Two weeks ago.'],
        answer: ['did', 'buy'],
    },
    {
        stem: ['I {{1}} (join) the book club last month and I {{2}} (read) five books already.'],
        answer: ['joined', 'have read'],
    }
]"
/>
<h1 id="延续性-vs-瞬时性" tabindex="-1"><a class="header-anchor" href="#延续性-vs-瞬时性"><span>延续性 vs 瞬时性</span></a></h1>
<p>现在完成时态既涉及过去，又联系现在，它的第二种用法就是表示<mark>过去已经开始，而延续到现在的动作或状态，可以和表示一段时间的状语连用</mark>。这段时间从过去某一时刻延续到现在（包括“现在”在内）。</p>
<p>这种情况可由介词 for 或 since 引导的短语表示。</p>
<h2 id="for-和-since-引导的时间状语" tabindex="-1"><a class="header-anchor" href="#for-和-since-引导的时间状语"><span>for 和 since 引导的时间状语</span></a></h2>
<ul>
<li><mark>已经持续了...：for + 时间段</mark></li>
<li><mark>自...起：since + 时间点</mark>
<ul>
<li>since + 时间段 + ago</li>
<li>since + 过去点时间</li>
<li>since + （一般过去）从句</li>
</ul>
</li>
</ul>
<Tabs id="780" :data='[{"id":"练习"},{"id":"答案"}]'>
<template #title0="{ value, isActive }">练习</template><template #title1="{ value, isActive }">答案</template><template #tab0="{ value, isActive }"><p>用 for 和 since 填空</p>
<ol>
<li>______ three hours</li>
<li>______ last May</li>
<li>______ two weeks</li>
<li>______ ten minutes</li>
<li>______ Sunday</li>
<li>______ five years</li>
<li>______ 1998</li>
<li>______ a month</li>
<li>______ 1st January</li>
<li>______ March</li>
<li>______ half past three</li>
<li>______ yesterday</li>
<li>______ four days ago</li>
<li>______ I came to China</li>
<li>______ a long time</li>
</ol>
</template><template #tab1="{ value, isActive }"><ol>
<li><mark>for</mark> three hours</li>
<li><mark>since</mark> last May</li>
<li><mark>for</mark> two weeks</li>
<li><mark>for</mark> ten minutes</li>
<li><mark>since</mark> Sunday</li>
<li><mark>for</mark> five years</li>
<li><mark>since</mark> 1998</li>
<li><mark>for</mark> a month</li>
<li><mark>since</mark> 1st January</li>
<li><mark>since</mark> March</li>
<li><mark>since</mark> half past three</li>
<li><mark>since</mark> yesterday</li>
<li><mark>since</mark> four days ago</li>
<li><mark>since</mark> I came to China</li>
<li><mark>for</mark> a long time</li>
</ol>
</template></Tabs><h2 id="延续性动词" tabindex="-1"><a class="header-anchor" href="#延续性动词"><span>延续性动词</span></a></h2>
<p>表示延续的情况或动作的动词，如 wait, live, be, have, know, work, study, learn, teach, speak, talk, draw, wear, walk, sleep 等。它们的现在完成时态可以和表示一段时间的状语连用。</p>
<blockquote>
<ul>
<li>Mr Li has taught this class for two years. 李先生教这个班已两年了。</li>
<li>How many years have you lived here? 你在这里住了几年了。</li>
<li>I’ve known him since ten years ago. 十年前我就认识他了。</li>
</ul>
</blockquote>
<h2 id="瞬时性动词-非延续性动词" tabindex="-1"><a class="header-anchor" href="#瞬时性动词-非延续性动词"><span>瞬时性动词（非延续性动词）</span></a></h2>
<p>表示的动作不能延续，只是一瞬间就结束的动作，常见的有：come, go, arrive, reach, see, hear, leave, begin, start, lose, buy, close, fall, join, die, get up ,move 等。它们可以用于完成时态，说明某个动作的结果还存在。</p>
<blockquote>
<ul>
<li>He has come back. 他已回来。（他现在在这里。）</li>
<li>The film has begun. 电影已开映。（现在正放映着。）</li>
</ul>
</blockquote>
<p>肯定句中：这类动词不能和表示一段时间的状语连用。像 He has come back for a week. 这样的句子是错误的，因为 come back 的动作不可能延续一个星期。</p>
<h3 id="如何表达-回来已一星期-这个概念" tabindex="-1"><a class="header-anchor" href="#如何表达-回来已一星期-这个概念"><span>如何表达“回来已一星期”这个概念？</span></a></h3>
<p>方法：将非延续性动词转化为延续性动词</p>
<ul>
<li>He <mark class="caution">came back</mark> for a week. ❌</li>
<li>He <mark>has been back</mark> for a week. ✅</li>
</ul>
<h2 id="背诵-瞬时性-→-延续性-常见动词" tabindex="-1"><a class="header-anchor" href="#背诵-瞬时性-→-延续性-常见动词"><span>背诵：瞬时性 → 延续性（常见动词）</span></a></h2>
<ul>
<li>die—— be dead(死亡)</li>
<li>arrive, come——be here ,be in</li>
<li>leave, move—be away, be off, be out of</li>
<li>become——be</li>
<li>buy——have</li>
<li>begin, star——be on</li>
<li>join——be in, be a member of</li>
<li>marry(v 结婚) ——be/get married</li>
<li>have got——have</li>
<li>open——be open</li>
<li>close——be closed</li>
<li>borrow——keep</li>
<li>return——be back</li>
<li>put on——wear</li>
<li>wake——be awake</li>
<li>break——be broken</li>
<li>get up ——be up</li>
<li>go out——be out</li>
<li>fall asleep(ill) ——be asleep(ill)</li>
<li>finish, end——be over</li>
<li>get to sleep——sleep</li>
<li>get to know——know</li>
<li>begin to study——study</li>
<li>catch a cold——have a cold</li>
<li>lose——be lost</li>
<li>move in——live in</li>
</ul>
<h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3>
<ol>
<li>He has become a doctor. → He has <strong>___</strong> a doctor for 2 years.</li>
<li>He has joined the party. →He has <strong>___</strong> the party for 3 hours.</li>
<li>The shop opened 3 years ago.→ The shop <strong>___</strong> since 3 years ago.</li>
<li>I have borrowed the book.→ I have <strong>___</strong> the book for 2 weeks.</li>
<li>She has bought the pen.→ She has <strong>___</strong> the pen for one year.</li>
<li>He has ended the task. →He <strong>___</strong> the task since 2 days ago.</li>
<li>The little boy has lost.→The little boy has <strong>___</strong> for several days.</li>
<li>She has died.→She <strong>___</strong> for 3 years.</li>
<li>The tower has broken.→The tower has <strong>___</strong> since 2000.</li>
<li>The meeting has begun.→The meeting has <strong>___</strong> for 5 minutes.</li>
<li>She has arrived here.→She has <strong>___</strong> here for a few days.</li>
<li>I have got up. → I have <strong>___</strong> since 5 o’clock in the morning.</li>
</ol>
</div></template>


