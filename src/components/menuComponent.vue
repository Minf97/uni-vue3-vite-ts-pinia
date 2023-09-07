

<template>
  <div>
    <div class="fs-50 fw-700 tracking-wide flex items-center justify-center pt-70">
      <div class="w-70% border-b border-0 border-solid border-#ccc leading-loose">{{ data.title }}</div>
    </div>
    <div v-for="item in data.children">
      <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
      <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
      <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
      <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useResult } from '@/hooks/useResult'
// 数据
const { data } = defineProps<{ data: Kconfig.BoolObj }>();
const { changeResult, delResult } = useStore('result')

// 一些判断条件：
const checkIfCanShow = (data: Kconfig.children, type: Kconfig.Type) => {
  return data.name && data.title && (data.type == type)
}

// 双向绑定
const inputVal = ref("")
// 输入框改变事件
const onChange = (e) => {
  e ? changeResult(data.name, 'y') : delResult(data.name);
}

</script>

<style lang="scss" scoped></style>
