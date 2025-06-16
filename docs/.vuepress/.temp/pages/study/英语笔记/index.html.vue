<template><div><p>学会记录和管理自己的笔记很重要。</p>
<h2 id="一、笔记的分类" tabindex="-1"><a class="header-anchor" href="#一、笔记的分类"><span>一、笔记的分类</span></a></h2>
<p>我们可以将笔记分为三类：</p>
<ol>
<li>随记（随便记的，还没处理）</li>
<li>笔记（整理过的，随时翻阅）</li>
<li>数据（试卷、错题、单词表等）</li>
</ol>
<h3 id="_1-随记" tabindex="-1"><a class="header-anchor" href="#_1-随记"><span>1. 随记</span></a></h3>
<p>感觉有用的信息，随时记下来，叫随记。</p>
<p>这种信息一般都是临时的，课堂灵感、阅读摘录、解题时的顿悟、考试后的反思等碎片化的思考。</p>
<p>这些碎片化的思考，需要我们进一步删除，删减，增加，整理，才能纳入到我们的知识体系当中。</p>
<h3 id="_2-笔记" tabindex="-1"><a class="header-anchor" href="#_2-笔记"><span>2. 笔记</span></a></h3>
<p>笔记是整理过的，专题性的，结构化的，成体系的。</p>
<p>笔记一般都有一个主题。假如我们想要研究某个问题，为这个问题专门去整理信息，放到一起，那么这个整理好的信息就是笔记。</p>
<p>例如，要提高作文的造句技能，提高作文的语法丰富度，我们可以整理一些 <code v-pre>重点句型</code> 。学习语法的时候，可能有 <code v-pre>时态</code> 的笔记。</p>
<h3 id="_3-数据" tabindex="-1"><a class="header-anchor" href="#_3-数据"><span>3. 数据</span></a></h3>
<p>做过的试卷，练习题，错题本，单词表，短语表等等，都算是数据。</p>
<p>这些数据里面，有已掌握的、学习中的、未掌握的、待复习的、重点的、非重点的、正确的、错误的等各种信息。想要快速翻阅，一般都要简单整理。</p>
<h3 id="什么叫会记笔记" tabindex="-1"><a class="header-anchor" href="#什么叫会记笔记"><span>什么叫会记笔记？</span></a></h3>
<p>很多学生的笔记本都是 <code v-pre>随记</code> ，老师让记就记，记完之后几乎没有再翻阅过，等于是无效笔记。做过的试卷、练习也是东一个西一个。背单词也是背过的、没背的，一股脑放在一起背、一起复习。</p>
<p>简单来说，很多学生几乎没有 <code v-pre>笔记</code> ，只有 <code v-pre>随记</code> 和 <code v-pre>数据</code> ，所以学习的过程中几乎没有自己的思考，那么学习是很难进步的。</p>
<h2 id="二、笔记本的结构建议" tabindex="-1"><a class="header-anchor" href="#二、笔记本的结构建议"><span>二、笔记本的结构建议</span></a></h2>
<p>笔记本可以设计这样的结构：</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name focus"><strong>笔记本</strong></span><span class="comment"> (专门研究的主题)</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">考前笔记</span><span class="comment">(考前要复习或注意的内容)</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">专题笔记</span><span class="comment">(语法点、题型总结等)</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">例：判断词性的方法</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">例：时态</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">例：句型</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">例：词根词缀</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">例：名词的单复数和所有格</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name focus"><strong>词汇表</strong></span><span class="comment"> (平时需要复习的表达，可以混记)</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">单词</span><span class="comment">(中--&gt;英)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">单词</span><span class="comment">(英--&gt;中)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">短语</span><span class="comment">(中--&gt;英)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">句型</span><span class="comment">(中--&gt;英)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">句子</span><span class="comment">(英--&gt;中)</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name focus"><strong>随记本</strong></span><span class="comment"> (随意记录的信息)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name focus"><strong>文件夹</strong></span><span class="comment"> (试卷、复习资料)</span></span></FileTreeItem>
</ul>
</div><h2 id="三、加一点笔记" tabindex="-1"><a class="header-anchor" href="#三、加一点笔记"><span>三、加一点笔记</span></a></h2>
<h3 id="_1-考前笔记" tabindex="-1"><a class="header-anchor" href="#_1-考前笔记"><span>1. 考前笔记</span></a></h3>
<p>考前笔记专门用来放考前要复习或注意的内容。每次考试之前都要看一眼。内容不需要很多，一到两张纸即可。</p>
<p>以下是部分考前笔记的思路：</p>
<ol>
<li>有哪些单词经常出现，但是还没背出来的（挑 20-50 个）</li>
<li>有哪些自己容易搞混的单词和短语搭配？比如：
<ul>
<li>ex- 开头的单词</li>
<li>con- 开头的单词</li>
<li>bored, board, broad, abroad, aboard</li>
</ul>
</li>
<li>有哪些能用在作文的模板、句型？比如：
<ul>
<li>In my opinion, ... 在我看来...</li>
<li>It's + adj. + for sb. + to do sth.</li>
</ul>
</li>
<li>有哪些常考的语法点还不太熟？比如：
<ul>
<li>常见的名词后缀</li>
<li>各个时态的构成、含义、标志词</li>
<li>常见的不可数名词</li>
<li>主将从现</li>
<li>主谓一致</li>
</ul>
</li>
<li>有哪些题型做的不太好，应该注意什么，检查什么？
<ul>
<li>选词填空：有哪些判断词性的方法？</li>
<li>完形填空：排除法+代入法，划关键词</li>
</ul>
</li>
<li>...</li>
</ol>
<h3 id="_2-专题笔记" tabindex="-1"><a class="header-anchor" href="#_2-专题笔记"><span>2. 专题笔记</span></a></h3>
<p>专题笔记是针对某个主题的笔记，比如语法、题型、词根词缀、时态、句型等等。</p>
<p>现在试着做一个时态的笔记吧：</p>
<ol>
<li>初中有哪些时态？学过哪些？</li>
<li>这些时态是怎么构成的？谓语动词怎么变化？</li>
<li>这些时态的含义是什么？</li>
<li>每个时态常见的标志词有哪些？</li>
<li>如果选择题考时态，应该怎么做？有什么思路？</li>
<li>为每个时态找一个例句。</li>
<li>找几道时态题作为例题</li>
</ol>
<p>在制作过程中，多用思维导图、表格、各种符号来帮助自己理解，尽量避免直接抄写别人的笔记。</p>
<h3 id="_3-词汇表" tabindex="-1"><a class="header-anchor" href="#_3-词汇表"><span>3. 词汇表</span></a></h3>
<p>词汇表是用来放所有自己不太熟，需要记忆的单词、短语、搭配、句型、句子的。每天复习，在背出来后可以删除。</p>
<p>将每页纸分为左右两部分：</p>
<ol>
<li>需要认，不用写的单词：左边英文，右边中文</li>
<li>需要写的单词：左边中文，右边英文</li>
<li>短语、搭配：左边中文，右边英文</li>
<li>看不懂的的句子：左边英文，右边中文</li>
</ol>
<h4 id="tip-看不懂的句子-如何订正" tabindex="-1"><a class="header-anchor" href="#tip-看不懂的句子-如何订正"><span>Tip：看不懂的句子，如何订正</span></a></h4>
<Mermaid id="mermaid-359" code="eJzjSsvJL0/OSCwqUQhx4VIAAsfop/1Ln66dEKugq2tX83xO95Mdvc/am2oUnDSAnKe9U1+s79UEq3SCqXi6bzpQxfs9PUD28/lrX6xfW6PgDFIN4aCphpgHVP1s/lKIcTUKrhpA6tnG9mdz1kBUO2MzG2jWs81TaxRcwC4BuxJNNbLZMJe4oZvtAlb9dO0ymHnuGk92TH65aMbzNVNerNuAomjvpOe7NoOsmtddo+CBw6Q9u14s7HnR3PNi/dYaBU9kRVwA+YayeA=="></Mermaid><h3 id="_4-随记本" tabindex="-1"><a class="header-anchor" href="#_4-随记本"><span>4. 随记本</span></a></h3>
<p>随记本讲究随意，没有限制，和草稿纸类似。</p>
</div></template>


