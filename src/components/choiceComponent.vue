

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }}:</div>
    <div class="flex flex-1 items-center">
      <a-select class="w-400" ref="select" v-model:value="inputVal" @change="onChange" :disabled="data.disabled">
        <a-select-option v-for="item in data.children" :key="item.name" :value="item.name">{{ item.title
        }}</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useFlag } from '@/hooks/useFlag'
// import { useResult } from '@/hooks/useResult'
// import { handleDepends_on } from '@/utils/util';
import { useDepend } from '@/hooks/useDepend';

// 数据
const { data } = defineProps<{ data: Kconfig.ChoiceObj }>();
const { changeResult, delResult } = useStore('result');
const { flag } = useDepend(data);
// const { flag, setFlag } = useFlag(true);


// 一些判断条件：

// 双向绑定，用于显示
const inputVal = ref("");
data.children.map(item => {
  item.default && (inputVal.value = item.name)
})
// 输入框改变事件
const onChange = (e) => {
  // 先全部删除，再把该键值置位
  data.children.map(item => delResult(item.name));
  changeResult(e, 'y');
}
</script>

<style lang="scss" scoped></style>
