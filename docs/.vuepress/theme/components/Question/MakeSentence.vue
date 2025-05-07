<template>
  <el-card style="max-width: 800px">
    <!-- 题号导航 -->
    <div class="list">
      <div
        v-for="(item, index) in indexArr"
        :key="index"
        :class="['box', { active: curIndex === index }]"
        @click="handleNavClick(index)"
        tabindex="0"
        role="button"
        :aria-label="`跳转到第 ${index + 1} 题`"
      >
        {{ index + 1 }}
      </div>
    </div>

    <Transition name="fade">
      <div :key="curIndex" class="question-content">
        <!-- 题干 -->
        <div class="stem">
          <div class="content">
            <!-- 仅遍历一次每个 stem 行 -->
            <div
              class="line"
              v-for="(line, idx) in curQuestion.stem"
              :key="idx"
            >
              <span
                v-for="(part, partIdx) in parseStemParts(line)"
                :key="partIdx"
              >
                <span v-if="part.type === 'text'">{{ part.text }}</span>
                <input
                  v-else
                  type="text"
                  class="blank-input"
                  :class="{
                    error:
                      curQuestion.isFinish &&
                      curQuestion.userAnswer[part.index] !==
                        curQuestion.answer[part.index],
                    correct:
                      curQuestion.isFinish &&
                      curQuestion.userAnswer[part.index]?.trim() ===
                        curQuestion.answer[part.index]?.trim(),
                  }"
                  v-model="curQuestion.userAnswer[part.index]"
                  :disabled="curQuestion.isFinish"
                  ref="inputRefs"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 控制按钮 -->
    <div class="control">
      <el-button @click="prev">上一题</el-button>
      <el-button @click="next" :disabled="!curQuestion.isFinish"
        >下一题</el-button
      >
      <el-button type="primary" @click="submit">提交</el-button>
    </div>

    <!-- 解析区域 -->
    <Transition name="slide">
      <div v-show="curQuestion.isFinish" class="explain">
        <div class="content">{{ curQuestion.explanation }}</div>
      </div>
    </Transition>
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed, reactive, nextTick } from "vue"

interface FillInBlankQuestion {
  stem: string | string[] // 题干，可能包含 {{1}}, {{2}} 这样的占位符
  options: string[] //可选词
  answer: string // 正确句子
  explanation: string // 解析
  isFinish?: boolean // 是否已完成
  isCorrect?: boolean // 是否正确
  userAnswer?: string[] // 用户填写的答案数组
}

const props = defineProps<{
  questions: FillInBlankQuestion[]
}>()

// 初始化题目数据
const initializedQuestions = reactive(
  props.questions.map((q) => ({
    ...q,
    isFinish: q.isFinish ?? false,
    isCorrect: q.isCorrect ?? false,
    userAnswer: Array.isArray(q.userAnswer)
      ? [
          ...q.userAnswer,
          ...Array(
            Math.max(0, q.answer.length - (q.userAnswer?.length || 0))
          ).fill(""),
        ]
      : Array(q.answer.length).fill(""),
  }))
)

const curIndex = ref(0)
const curQuestion = computed(() => initializedQuestions[curIndex.value])

// 导航点击
const handleNavClick = (index: number) => {
  curIndex.value = index
}

// 上一题
const prev = () => {
  if (curIndex.value > 0) curIndex.value--
}

// 下一题
const next = () => {
  if (curIndex.value < initializedQuestions.length - 1) curIndex.value++
}

// 提交答案
const submit = () => {
  const q = curQuestion.value
  q.isFinish = true
  q.isCorrect = q.userAnswer.every((ans, i) => ans.trim() === q.answer[i])
}

// 生成索引数组用于导航
const indexArr = computed(() => {
  return Array.from({ length: initializedQuestions.length }, (_, i) => i)
})

// 解析题干中的文本和空格
type StemPart =
  | { type: "text"; text: string }
  | { type: "input"; index: number }

const parseStemParts = (text: string): StemPart[] => {
  const parts: StemPart[] = []
  let lastIndex = 0

  const regex = /{\s*{(\d+)\s*}}/g // 支持带空格的 {{1}} 格式
  let match

  while ((match = regex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index)
    if (before) parts.push({ type: "text", text: before })

    const inputIndex = parseInt(match[1], 10) - 1
    if (inputIndex >= 0 && inputIndex < curQuestion.value.answer.length) {
      parts.push({ type: "input", index: inputIndex })
    }

    lastIndex = regex.lastIndex
  }

  const after = text.slice(lastIndex)
  if (after) parts.push({ type: "text", text: after })

  return parts
}
</script>

<style scoped>
.list {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.box {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.box.active {
  background-color: #409eff;
  color: white;
}

.stem {
  margin-bottom: 16px;
}
.line {
  margin-bottom: 8px;
}

.blank-input {
  width: 100px;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
.blank-input:focus {
  border-color: #409eff;
}
.blank-input.error {
  border-color: red;
  background-color: #ffe6e6;
}
.blank-input.correct {
  border-color: #67c23a;
  background-color: #f0f9eb;
}

.control {
  margin-bottom: 16px;
}
.explain {
  margin-top: 16px;
}
</style>
