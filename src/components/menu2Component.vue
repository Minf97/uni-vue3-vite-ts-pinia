

<template>
  <div>
    <div class="fs-50 fw-700 tracking-wide flex items-center justify-center pt-70" v-if="!isSpecial && flag">
      <div class="w-70% border-b border-0 border-solid border-#ccc leading-loose">{{ data.title }}</div>
    </div>
    <div class="w-70% m-auto">
      <a-row>
        <a-col :span="8">
          <div v-for="item in data.children">
            <stringComponent v-if="checkIfCanShow(item, 'string') && item.placement == 'left'" :data="item" />
            <intComponent v-if="checkIfCanShow(item, 'int') && item.placement == 'left'" :data="item" />
            <boolComponent v-if="checkIfCanShow(item, 'bool') && item.placement == 'left'" :data="item" />
            <choiceComponent v-if="checkIfCanShow(item, 'choice') && item.placement == 'left'" :data="item" />
            <menuComponent v-if="checkIfCanShow(item, 'menu') && item.placement == 'left'" :data="item" />
            <menu2Component v-if="checkIfCanShow(item, 'menu2') && item.placement == 'left'" :data="item" />
          </div>
        </a-col>
        <a-col :span="8">
          <div v-for="item in data.children">
            <stringComponent v-if="checkIfCanShow(item, 'string') && item.placement == 'middle'" :data="item" />
            <intComponent v-if="checkIfCanShow(item, 'int') && item.placement == 'middle'" :data="item" />
            <boolComponent v-if="checkIfCanShow(item, 'bool') && item.placement == 'middle'" :data="item" />
            <choiceComponent v-if="checkIfCanShow(item, 'choice') && item.placement == 'middle'" :data="item" />
            <menuComponent v-if="checkIfCanShow(item, 'menu') && item.placement == 'middle'" :data="item" />
            <menu2Component v-if="checkIfCanShow(item, 'menu2') && item.placement == 'middle'" :data="item" />
          </div>
        </a-col>
        <a-col :span="8">
          <div v-for="item in data.children">
            <stringComponent v-if="checkIfCanShow(item, 'string') && item.placement == 'right'" :data="item" />
            <intComponent v-if="checkIfCanShow(item, 'int') && item.placement == 'right'" :data="item" />
            <boolComponent v-if="checkIfCanShow(item, 'bool') && item.placement == 'right'" :data="item" />
            <choiceComponent v-if="checkIfCanShow(item, 'choice') && item.placement == 'right'" :data="item" />
            <menuComponent v-if="checkIfCanShow(item, 'menu') && item.placement == 'right'" :data="item" />
            <menu2Component v-if="checkIfCanShow(item, 'menu2') && item.placement == 'right'" :data="item" />
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 自定义按钮 -->
    <div class="flex items-center justify-center mt-60">
      <PlusCircleFilled @click="addChildren" class="color-#1677ff fs-50 mr-50" />
      <DeleteFilled @click="popChildren" class="color-red fs-50" />
    </div>
  </div>
  <contextHolder />
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from '@/hooks/useDepend';
import { deepClone } from '@/utils/clone';
import { checkIfCanShow } from '@/utils/util';
import { PlusCircleFilled, DeleteFilled } from '@ant-design/icons-vue';
import { NotificationPlacement, notification } from 'ant-design-vue';
// 数据
const { data, isSpecial } = defineProps<{ data: Kconfig.BoolObj, isSpecial?: boolean }>();
const [api, contextHolder] = notification.useNotification();
const { flag } = useDepend(data);
const { result } = useStore('result');

const concatList = [];
// 一些判断条件：
// for (const key in result.value) {
//   const match = key.match(/\d+/);
//   // const concatList = [];
//   if (match) {
//     const num = match[0];
//     if (num > 1) {
//       data.children.map(item => {
//         if (item.name.replace(/-id.+-/, num) === key) {
//           const newItem = deepClone(item);
//           newItem.name = newItem.replace(/-id.+-/, Number(num) + 1);
//           newItem.default = result.value[key];
//           newItem.children
//           concatList.push(newItem)
//         }
//       })
//     }
//   }
// }

function recursive(obj, num, key) {
  for (const key in result.value) {
    if (obj.name.replace(/-id.+-/, num) === key) {
      // const newItem = deepClone(obj);
      // newItem.name = newItem.replace(/-id.+-/, Number(num) + 1);
      // newItem.default = result.value[key];
      // concatList.push(newItem)
    }
  }

  if (Array.isArray(obj.children) && obj.children.length > 0) {
    for (const child of obj.children) {
      recursive(child)
    }
  }
  return obj
}

const openNotification = (placement: NotificationPlacement) => {
  api.info({
    message: `提示`,
    description: '不可以删除第一项',
    placement,
  });
};

const popChildren = (lastID) => {
  lastID = typeof (lastID) === 'number' ? lastID : checkLastID();
  if (lastID === 1) {
    openNotification('topLeft')
    return;
  }
  data.children.map((item, index) => {
    if (item.name.includes(`-id${lastID}-`)) {
      data.children.splice(index, 1);
      popChildren(lastID);
    }
  })
}

const addChildren = () => {
  const lastID = checkLastID();
  const appendList = [];
  data.children.forEach(item => {
    if (item.name.includes(`-id${lastID}-`)) {
      const newItem = deepClone(item);
      newItem.name = newItem.name.replace(/-id(\d+)-/, `-id${lastID + 1}-`);
      // 针对普通组件
      newItem.default = null;
      // 针对choise组件
      newItem.children.forEach(item => {
        item.default = null;
        item.name = item.name.replace(/-id(\d+)-/, `-id${lastID + 1}-`);
      });
      appendList.push(newItem);
    }
  })
  data.children = data.children.concat(appendList);
}

function checkLastID() {
  let lastID = 0;
  data.children.map(item => {
    const match = item.name.match(/-id(\d+)-/);
    match && (lastID = match[1] > lastID ? match[1] : lastID);
  })
  return Number(lastID)
}
</script>

<style lang="scss" scoped></style>
