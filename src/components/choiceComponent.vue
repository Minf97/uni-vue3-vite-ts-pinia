

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <a-tooltip placement="bottomRight">
      <template #title>{{ toolTip }}</template>
      <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    </a-tooltip>

    <div class="flex flex-1 items-center">
      <a-select class="w-400" ref="select" v-model:value="inputVal" @change="onChange" :disabled="data.disabled">

        <template v-for="(item) in data.children" :key="item.name">
          <a-select-option v-if="!item.hide" :value="item.name">{{ item.title
          }}</a-select-option>
        </template>

      </a-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDepend } from '@/hooks/useDepend';

// 数据
const { data } = defineProps<{ data: Kconfig.ChoiceObj }>();
const { changeResult, delResult, findKey } = useStore('result');
const { flag } = useDepend(data);

// 一些判断条件：
const inputVal = ref("");
const toolTip = ref("");
data.children.map(item => {
  item.default && (inputVal.value = item.name) && (data.value = item.default)
})

watch(inputVal, (newVal) => {
  toolTip.value = data.children.filter(item => item.name == newVal)[0]?.title
}, { immediate: true })
// 双向绑定，用于显示
watch(data.children, () => {
  if (inputVal.value) {
    findKey(inputVal.value) ? '' : inputVal.value = '';
  }
}, { deep: true })

// 输入框改变事件
const onChange = (e) => {
  // 先全部删除，再把该键值置位
  data.children.map(item => delResult(item.name));
  changeResult(e, 'y');
  // choice也该补上值
  data.value = e;
}
</script>

<style lang="scss" scoped></style>
