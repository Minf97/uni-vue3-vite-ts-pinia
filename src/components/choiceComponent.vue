<template>
  <div class="flex w-full pt-35" v-if="flag">
    <a-tooltip placement="bottomRight">
      <template #title>{{ toolTip }}</template>
      <div
        class="flex flex-1 items-center justify-end text-right p-10 tracking-wide"
      >
        {{ data.title }}:
      </div>
    </a-tooltip>

    <div class="flex flex-1 items-center" :class="{ 'flex-4': isSpecial }">
      <a-select
        class="w-100% max-w-800"
        ref="select"
        v-model:value="inputVal"
        @change="onChange"
        :disabled="data.disabled"
        :status="data.status"
      >
        <template v-for="item in data.children" :key="item.name">
          <a-select-option v-if="!item.hide" :value="item.name">{{
            item.title
          }}</a-select-option>
        </template>
      </a-select>
      <helper v-if="data.help" :helper="data.help" style="margin-left: 10px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDepend } from "@/hooks/useDepend";
import { removeEscapedQuotes } from "@/utils/util";
import { ref, watch } from "vue";

// 数据
const { data, isSpecial } = defineProps<{
  data: Kconfig.ChoiceObj;
  isSpecial: boolean;
}>();
const { changeResult, delResult, findKey } = useStore("result");
const { flag } = useDepend(data);

// 一些判断条件：
const inputVal = ref("");
const toolTip = ref("");

watch(flag, (newVal) => {
  const child = data.children.filter((child) => child.title == data.value)[0];
  // console.log(data,child,child.name, "????");
  const handle = () => {
    // 全部删掉
    data.children.map(child => delResult(child.name));
    // 赋值
    changeResult(child.name, "y", data)
  }
  child && (newVal ? handle() : delResult(child.name));
}, {immediate: true});

watch(
  data,
  (newVal) => {
    console.log(
      newVal,
      newVal.name,
      newVal.value,
      "choice更新",
      inputVal.value
    );
    if (data.clearFocus) {
      inputVal.value = "";
      return;
    }
    data.children.map((item) => {
      if (data.secondChange && data.value !== "y") {
        inputVal.value = data.value;
      }
      if (item.default && !data.secondChange) {
        inputVal.value = item.name;
        data.value = item.default;
      }
    });
  },
  { immediate: true, deep: true }
);

watch(
  inputVal,
  (newVal) => {
    toolTip.value = data.children.filter(
      (item) => item.name == newVal
    )[0]?.title;
    // 有输入就消除警告
    data.status = "";
  },
  { immediate: true }
);
// 双向绑定，用于显示
watch(
  data.children,
  () => {
    if (inputVal.value) {
      findKey(inputVal.value) ? "" : (inputVal.value = "");
    }
  },
  { deep: true }
);

// 输入框改变事件
const onChange = (e) => {
  // 先全部删除，再把该键值置位
  data.children.map((item) => {
    if (item.name !== e) {
      delResult(item.name, item);
    } else {
      changeResult(e, "y", data);
      data.clearFocus = false;
      // choice也该补上值
      data.value = item.title;
    }
  });
};
</script>

<style lang="scss" scoped></style>
