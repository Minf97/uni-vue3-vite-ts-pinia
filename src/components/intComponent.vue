

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex flex-1">
      <a-input-number class="w-400" @change="onChange" id="inputNumber" v-model:value="inputVal" :min="range.min"
        :max="range.max" />
      <div class="flex items-center pl-10 c-#999">range: {{ range.min }} - {{ range.max }}</div>
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
const { data } = defineProps<{ data: Kconfig.IntObj }>();
const { changeResult } = useStore('result');
const { flag } = useDepend(data);

// 一些判断条件：
// 判断range
const range = reactive({ min: 0, max: 65535 });
if (data.range && data.range.length > 1) {
  // Object.assign会使reactive失去响应式
  // const [min, max] = data.range;
  // Object.assign(range, min, max);
  range.min = data.range[0];
  range.max = data.range[1];
}


// 双向绑定
const inputVal = ref(data.default)
// 输入框改变事件
const onChange = () => {
  changeResult(data.name, inputVal.value)
}
</script>

<style lang="scss" scoped></style>
