<template>
  <div class="flex w-full pt-35 inline-block" v-if="flag">
    <div
      class="flex flex-1 items-center justify-end text-right p-10 tracking-wide"
    >
      {{ data.title }} {{ data.title ? ":" : "" }}
    </div>
    <div class="flex flex-1 items-center" :class="{ 'flex-4': isSpecial }">
      <a-switch @change="onChange" v-model:checked="inputVal" />
      <helper v-if="data.help" :helper="data.help" style="margin-left: 10px;" />
    </div>
  </div>
  <!-- 特殊项 - children - 用于递归 -->
  <div v-for="item in data.children" v-if="flag">
    <stringComponent
      v-if="checkIfCanShow(item, 'string')"
      :data="item"
      :isSpecial="isSpecial"
    />
    <intComponent
      v-if="checkIfCanShow(item, 'int')"
      :data="item"
      :isSpecial="isSpecial"
    />
    <boolComponent
      v-if="checkIfCanShow(item, 'bool')"
      :data="item"
      :isSpecial="isSpecial"
    />
    <choiceComponent
      v-if="checkIfCanShow(item, 'choice')"
      :data="item"
      :isSpecial="isSpecial"
    />
    <menuComponent
      v-if="checkIfCanShow(item, 'menu')"
      :data="item"
      :isSpecial="true"
    />
    <menu2Component
      v-if="checkIfCanShow(item, 'menu2')"
      :data="item"
      :isSpecial="true"
    />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from "@/hooks/useDepend";
import { checkIfCanShow } from "@/utils/util";
import { ref, watch } from "vue";
import { InfoCircleOutlined } from "@ant-design/icons-vue";
// 数据
const { data, isSpecial } = defineProps<{
  data: Kconfig.BoolObj;
  isSpecial: boolean;
}>();
const { changeResult, delResult } = useStore("result");
const { flag } = useDepend(data);

watch(flag, (newVal) => {
  console.log(data, "??***");
  newVal ? changeResult(data.name, data.value, data) : delResult(data.name);
});

// 双向绑定
const inputVal = ref(data.default == "y" ? true : false);

// 输入框改变事件
const onChange = (e) => {
  e ? changeResult(data.name, "y", data) : delResult(data.name, data);
  data.value = e;
};
</script>

<style lang="scss" scoped></style>
