

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex flex-1 items-center">
      <a-switch @change="onChange" v-model:checked="inputVal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlag } from '@/hooks/useFlag'
import { handleDepends_on } from '@/utils/util';
// 数据
const { data } = defineProps<{ data: Kconfig.BoolObj }>();
const { result, changeResult, delResult } = useStore('result')
const { flag, setFlag } = useFlag(true)
// 一些判断条件：
const dependList = handleDepends_on(data.depends_on);
dependList.map(item => {
  if (!result.value[item]) setFlag(false)
})

// 双向绑定
const inputVal = ref("")
// 输入框改变事件
const onChange = (e) => {
  e ? changeResult(data.name, 'y') : delResult(data.name);
}
</script>

<style lang="scss" scoped></style>
