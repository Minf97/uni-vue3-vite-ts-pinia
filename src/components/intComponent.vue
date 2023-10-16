

<template>
  <div class="flex w-full pt-35" v-if="flag">
    <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">{{ data.title }} {{ data.title ? ':' : '' }}</div>
    <div class="flex flex-1">
      <!-- <a-input-number class="w-400" @change="onChange" id="inputNumber" :placeholder="placeholder"
        v-model:value="inputVal" :min="range.min" :max="range.max" :status="status" :disabled="data.disabled" /> -->

      <a-tooltip :trigger="['click']" v-model:open="tooltipFlag" placement="top" overlay-class-name="numeric-input">
        <template v-if="inputVal" #title>
          <span class="numeric-input-title">
            {{ formatValue }}
          </span>
        </template>

        <a-input-group compact class="w-600">
          <!-- <a-select v-model:value="unitType" :disabled="true">
            <a-select-option value="ten">十进制</a-select-option>
            <a-select-option value="sixteen">十六进制</a-select-option>
          </a-select> -->
          <a-input v-model:value="inputVal" style="width: 50%;" @focus="onChange" @change="onChange" @blur="onBlur"
            :status="status" :disabled="data.disabled" />
            <helper v-if="data.help" :helper="data.help" style="margin-left: 10px;" />
        </a-input-group>
      </a-tooltip>

      <div class="flex items-center pl-10 c-#999">range: {{ range.min }} - {{ range.max }}</div>
    </div>
  </div>
  <!-- 特殊项 - children - 用于递归 -->
  <div v-for="item in data.children" v-if="flag">
    <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
    <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
    <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
    <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
    <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from '@/hooks/useDepend';
import { useInput } from '@/hooks/useInput'
import { checkIfCanShow } from '@/utils/util';
import { watchEffect, watch } from 'vue';
// 数据
const { data } = defineProps<{ data: Kconfig.IntObj }>();
const { changeResult, delResult } = useStore('result');
const { flag } = useDepend(data);
const { unitType, formatValue, tooltipFlag, inputVal, status, range, onChange } = useInput(data);

// 一些判断条件：
// 判断range
if (data.range && data.range.length > 1) {
  range.min = data.range[0];
  range.max = data.range[1];
}

watch(data, ()=> {

}, {immediate: true,deep: true})

inputVal.value = data.default;

watchEffect(() => {
  data.status && (status.value = data.status)
})

const onBlur = () => {
  if (status.value)  {
    data.value = "";
    delResult(data.name, data)
    return;
  }
  changeResult(data.name, inputVal.value, data);
  data.value = inputVal.value;
}
</script>

<style lang="scss" scoped>
.numeric-input .ant-tooltip-inner {
  min-width: 32px;
  min-height: 37px;
}

.numeric-input .numeric-input-title {
  font-size: 14px;
}
</style>
