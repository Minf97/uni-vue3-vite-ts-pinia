

<template>
  <div>
    <div class="fs-50 fw-700 tracking-wide flex items-center justify-center pt-70" v-if="!isSpecial && flag">
      <div class="w-80% border-b border-0 border-solid border-#ccc leading-loose">{{ data.title }}</div>
    </div>
    <div v-for="item in data.children" style="margin: 0 auto;" :class="{ 'w-90% ml-5%': checkIfCanShow(item, 'menu'), 'w-80%': true }" v-if="flag">
      <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" :isSpecial="isSpecial" />
      <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" :isSpecial="isSpecial" />
      <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" :isSpecial="isSpecial" />
      <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" :isSpecial="isSpecial" />
      <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" :isSpecial="isSpecial" />
      <menu2Component v-if="checkIfCanShow(item, 'menu2')" :data="item" :isSpecial="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from '@/hooks/useDepend';
import { checkIfCanShow } from '@/utils/util';

// 数据
const { data, isSpecial } = defineProps<{ data: Kconfig.BoolObj, isSpecial?: boolean }>();

// 一些判断条件：
const { flag } = useDepend(data);

</script>

<style lang="scss" scoped></style>
