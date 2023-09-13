

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex-1">
      <a-input class="w-400" @change="onChange" v-model:value="inputVal" :placeholder="data.help || data.title"
        allow-clear showCount :disabled="data.disabled" />
    </div>
  </div>
  <!-- 特殊项 - children - 用于递归 -->
  <div v-for="item in data.children">
    <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
    <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
    <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
    <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
    <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from '@/hooks/useDepend';
import { checkIfCanShow } from '@/utils/util';
// 数据
const { data } = defineProps<{ data: Kconfig.StringObj }>();
const { changeResult } = useStore('result')

// 一些判断条件：
const { flag } = useDepend(data);

// 双向绑定
const inputVal = ref(data.default)
// 输入框改变事件
const onChange = () => {
  changeResult(data.name, inputVal.value)
}
</script>

<style lang="scss" scoped></style>
