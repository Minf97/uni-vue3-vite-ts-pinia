
<script setup lang="ts">
// @ts-nocheck
import { kconfigJSON } from "./kconfig";
import { checkIfCanShow, addDefaultRecursive } from '@/utils/util';

const { result } = useStore('result');
const state = reactive({ kconfig: [] });

const response = result;
for (const key in response.value) {
  const value = response.value[key];
  state.kconfig = kconfigJSON.map(item => {
    return addDefaultRecursive(item, key, value)
  })
}

if (state.kconfig.length == 0) state.kconfig = kconfigJSON;

</script>

<template>
  <div class="pb-100">
    {{ result }}

    <div v-for="item in state.kconfig" :key="item.name">
      <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
      <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
      <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
      <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
      <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" />
      <menu2Component v-if="checkIfCanShow(item, 'menu2')" :data="item" />
    </div>
    <!-- 悬浮按钮 -->
    <a-back-top :visibility-height="100" />
  </div>
</template>

<style scoped lang="scss"></style>
