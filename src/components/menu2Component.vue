

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
    <div class="flex items-center justify-center mt-60" v-if="flag">
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

// 要做两件事：1.点击新增自定义项  2.页面加载时，把缓存的自定义项展示出来
const concatList = []
// data.children.forEach(item => {
//   const concatItem = recursiveAddResult(item)
//   concatItem ? concatList.push(concatItem) : ''
// })

data.children.forEach(item => {
  const concatItem = recursiveAddResult(item)
  concatItem ? data.children.push(concatItem) : ''
})
console.log(data.children);



function recursiveAddResult(obj) {
  const newItem = deepClone(obj);
  let res = {};
  for (const key in result.value) {
    // console.log(newItem.name.replace(/-id.+-/, num), key);
    const match = key.match(/_(\d+)_/);
    if (match) {
      const id = match[1];
      // 判断是否要新增展示自定义项，只有id>1时，才是新增的自定义项
      if (id > 1) {
        // 找到对应的项了，新增该项
        if (newItem.name.replace(/-id(\d+)-/, id) === key) {
          newItem.name = newItem.name.replace(/-id.+-/, `-id${id}-`);
          newItem.default = result.value[key];
          res = newItem;
        }

        // 这里有缺陷，没有递归实现，只解析了子级第一层 -- 针对choice
        if (Array.isArray(newItem.children) && newItem.children.length > 0) {
          for (let i = 0; i < newItem.children.length; i++) {
            const child = newItem.children[i];
            // 这里也是找到了，需要新增该项
            if (child.name.replace(/-id(\d+)-/, id) === key) {
              child.name = child.name.replace(/-id.+-/, `-id${id}-`);
              child.default = result.value[key];
              // 如果有一项满足，就把子项所有的名字改掉，也要把父项的名字改掉
              for (let i = 0; i < newItem.children.length; i++) {
                const child = newItem.children[i];
                child.name = child.name.replace(/-id.+-/, `-id${id}-`);
                newItem.name = newItem.name.replace(/-id.+-/, `-id${id}-`);
              }
              res = newItem;
            }
          }
        }
      }
    }
  }
  return res
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
  console.log(lastID);

  const concatList = data.children.map(item => {
    return recursive(item, lastID);
  })
  data.children = data.children.concat(concatList.filter(item => item));
  console.log(data.children);


  function recursive(obj, lastID) {
    const newItem = deepClone(obj);
    let res = "";
    if (newItem.name.includes(`-id${lastID}-`)) {
      newItem.name = newItem.name.replace(/-id.+-/, `-id${lastID + 1}-`);
      newItem.default = null;
      res = newItem;
    }
    if (Array.isArray(res.children) && res.children.length > 0) {
      for (let i = 0; i < res.children.length; i++) {
        res.children[i] = recursive(res.children[i], lastID);
        console.log(res.children[i].name);

      }
    }
    return res;
  }
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
