
<script setup lang="ts">
// @ts-nocheck
import { kconfigJSON } from "./kconfig";
import { checkIfCanShow } from '@/utils/util';

const { result } = useStore('result');

</script>

<template>
  <view class="content">
    {{ result }}
    <div v-for="item in kconfigJSON" :key="item.name">
      <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
      <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
      <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
      <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
      <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" />
    </div>
  </view>
</template>

<style scoped lang="scss"></style>
