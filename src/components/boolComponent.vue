

<template>
  <div class="flex w-full pt-35 inline-block" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }} {{ data.title ? ':' : '' }}</div>
    <div class="flex flex-1 items-center">
      <a-switch @change="onChange" v-model:checked="inputVal" />
    </div>
  </div>
  <!-- 特殊项 - children - 用于递归 -->
  <div v-for="item in data.children">
    <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
    <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
    <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
    <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
    <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" :isSpecial="true" />
    <menu2Component v-if="checkIfCanShow(item, 'menu2')" :data="item" :isSpecial="true" />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from '@/hooks/useDepend';
import { checkIfCanShow } from '@/utils/util';
// 数据
const { data } = defineProps<{ data: Kconfig.BoolObj }>();
const { changeResult, delResult } = useStore('result');
const { flag } = useDepend(data);

// 双向绑定
const inputVal = ref(data.default ? true : false);

// 输入框改变事件
const onChange = (e) => {
  e ? changeResult(data.name, 'y') : delResult(data.name, data);
  data.value = e;
}


</script>

<style lang="scss" scoped></style>
