

<template>
  <div >
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
import { useDepend } from '@/hooks/useDepend';
import { checkIfCanShow } from '@/utils/util';
// 数据
const { data } = defineProps<{ data: Kconfig.BoolObj }>();

// 一些判断条件：
const { flag } = useDepend(data);

console.log(flag);

</script>

<style lang="scss" scoped></style>
