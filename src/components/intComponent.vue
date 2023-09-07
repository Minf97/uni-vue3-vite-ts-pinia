

<template>
  <div class="flex w-full pt-35">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex flex-1">
      <a-input-number class="w-400" @change="onChange" id="inputNumber" v-model:value="inputVal" :min="range.min"
        :max="range.max" />
      <div class="flex items-center pl-10 c-#999">range: {{ range.min }} - {{ range.max }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResult } from '@/hooks/useResult'
// 数据
const { data } = defineProps<{ data: Kconfig.IntObj }>();
const { changeResult } = useStore('result')
// 一些判断条件：

const range = reactive({ min: 0, max: 65535 });

if (data.range && data.range.length > 1) {
  // const [min, max] = data.range;
  // Object.assign(range, min, max);
  range.min = data.range[0];
  range.max = data.range[1];
}



// 双向绑定
const inputVal = ref("")
// 输入框改变事件
const onChange = () => {
  changeResult(data.name, inputVal.value)
}
</script>

<style lang="scss" scoped></style>
