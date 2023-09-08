

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex-1">
      <a-input class="w-400" @change="onChange" v-model:value="inputVal" :placeholder="data.help || data.title"
        allow-clear showCount />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDepend } from '@/hooks/useDepend';
// 数据
const { data } = defineProps<{ data: Kconfig.StringObj }>();
const { changeResult } = useStore('result')

// 一些判断条件：
const { flag } = useDepend(data);

// 双向绑定
const inputVal = ref("")
// 输入框改变事件
const onChange = () => {
  changeResult(data.name, inputVal.value)
}
</script>

<style lang="scss" scoped></style>
