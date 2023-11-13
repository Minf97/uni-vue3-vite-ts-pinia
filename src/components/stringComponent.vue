<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div
      class="flex flex-1 items-center justify-end text-right p-10 tracking-wide"
    >
      {{ data.title }} {{ data.title ? ":" : "" }}
    </div>
    <div class="flex-1" :class="{'flex-4': isSpecial}">
      <a-input

        style="max-width: 800rpx;"
        @change="onChange"
        v-model:value="inputVal"
        :placeholder="data.help || data.title"
        allow-clear
        :status="data.status"
        :showCount="!data.disabled"
        :disabled="data.disabled"
      />
      <helper v-if="data.help" :helper="data.help" style="margin-left: 10px;" />
    </div>
  </div>
  <!-- 特殊项 - children - 用于递归 -->
  <div v-for="item in data.children" v-if="flag">
    <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" :isSpecial="isSpecial" />
    <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" :isSpecial="isSpecial" />
    <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" :isSpecial="isSpecial" />
    <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" :isSpecial="isSpecial" />
    <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" :isSpecial="isSpecial" />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from "@/hooks/useDepend";
import { checkIfCanShow, removeEscapedQuotes } from "@/utils/util";
import { ref, watch, watchEffect } from "vue";
// 数据
const { data, isSpecial } = defineProps<{ data: Kconfig.StringObj, isSpecial:boolean }>();
const { changeResult } = useStore("result");
const { flag } = useDepend(data);

// 双向绑定
const inputVal = ref(removeEscapedQuotes(data.default));

watch(inputVal, () => {
  data.status = "";
});
watch(data, () => {
  // console.log("tttt!!!变化了", data);
  (inputVal.value = removeEscapedQuotes(data.value));
});
// 输入框改变事件
const onChange = () => {
  changeResult(data.name, `\"${inputVal.value}\"`, data);
  data.value = removeEscapedQuotes(inputVal.value);
};
</script>

<style lang="scss" scoped></style>
