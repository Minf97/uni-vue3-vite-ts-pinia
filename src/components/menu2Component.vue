<template>
  <div>
    <div
      class="fs-40 fw-700 tracking-wide flex items-center justify-center pt-70"
      v-if="isSpecial && flag"
    >
      <div
        class="w-90% border-b border-0 border-solid border-#ccc leading-loose c-#999"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="w-90% m-auto">
      <a-row v-for="a in list">
        <a-col :span="24 / colList.length" v-for="n in colList">
          <div v-for="item in a">
            <stringComponent
              v-if="checkIfCanShow(item, 'string') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
            <intComponent
              v-if="checkIfCanShow(item, 'int') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
            <boolComponent
              v-if="checkIfCanShow(item, 'bool') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
            <choiceComponent
              v-if="checkIfCanShow(item, 'choice') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
            <menuComponent
              v-if="checkIfCanShow(item, 'menu') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
            <menu2Component
              v-if="checkIfCanShow(item, 'menu2') && item.placement == n"
              :data="item"
              :isSpecial="boolTrue"
            />
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 自定义按钮 -->
    <div class="flex items-center justify-center mt-60" v-if="flag">
      <PlusCircleFilled
        @click="addChildren"
        class="color-#1677ff fs-50 mr-50"
      />
      <DeleteFilled @click="popChildren" class="color-red fs-50" />
    </div>
  </div>
  <contextHolder />
</template>

<script setup lang="ts">
// @ts-nocheck
import { useDepend } from "@/hooks/useDepend";
import { deepClone } from "@/utils/clone";
import { checkIfCanShow } from "@/utils/util";
import { PlusCircleFilled, DeleteFilled } from "@ant-design/icons-vue";
import { NotificationPlacement, notification } from "ant-design-vue";
import { ref, watchEffect, computed } from "vue";
// 数据
const { data, isSpecial } = defineProps<{
  data: Kconfig.BoolObj;
  isSpecial?: boolean;
}>();
const [api, contextHolder] = notification.useNotification();
const { flag } = useDepend(data);
const { result, delResult } = useStore("result");

const boolTrue = ref(true);

// 页面加载时，把缓存的自定义项展示出来
data.children.map((item) => {
  const concatList = recursiveAddResult(item);
  if (concatList.length > 0) {
    data.children = data.children.concat(...concatList);
  }
});

const list = ref([]);
watchEffect(() => {
  if (data.children.length == 0) return;
  // 这段代码的目的是根据 data.children 数组中每个对象的 name 属性，提取出形如 -id数字- 的字符串，并将具有相同数字的对象按照数字分组存放在一个新的数组中。
  // 最终返回的数组中，每个元素都是一个包含相同数字对象的子数组。
  list.value = data.children.reduce((accumulator, current) => {
    const match = current?.name.match(/-id(\d+)-/);
    if (!match) return;
    const currentId = current?.name.match(/-id(\d+)-/)[1];
    // 遍历累加器，查看是否存在具有相同 currentID 的项
    const exiting = accumulator.find((item) => {
      const itemId = item[0].name.match(/-id(\d+)-/)[1];
      return currentId === itemId;
    });

    if (exiting) {
      exiting.push(current);
    } else {
      accumulator.push([current]);
    }
    // console.log(accumulator, "accumulator");

    return accumulator;
  }, []);
});

const colList = computed(() => {
  const set = new Set<string>();
  list.value.map((item) => {
    item.map((e) => set.add(e.placement));
  });
  return [...set];
});
// console.log(colList.value);


function recursiveAddResult(obj) {
  let res = [];
  for (const key in result.value) {
    const match = key.match(/_(\d+)_/);
    if (match) {
      const id = match[1];
      // 判断是否要新增展示自定义项，只有id>1时，才是新增的自定义项
      if (id > 1) {
        const newItem = deepClone(obj);
        // 找到对应的项了，新增该项
        if (newItem.name.replace(/-id(\d+)-/, id) === key) {
          newItem.name = newItem.name.replace(/-id(\d+)-/g, `-id${id}-`);
          newItem.depends_on = newItem.depends_on.replace(/-id(\d+)-/g, `-id${id}-`);
          newItem.default = result.value[key];
          res.push(newItem);
        }

        // 这里有缺陷，没有递归实现，只解析了子级第一层 -- 针对choice
        if (Array.isArray(newItem.children) && newItem.children.length > 0) {
          for (let i = 0; i < newItem.children.length; i++) {
            const child = newItem.children[i];
            // 这里也是找到了，需要新增该项
            if (child.name.replace(/-id(\d+)-/, id) === key) {
              child.name = child.name.replace(/-id.+-/, `-id${id}-`);
              child.depends_on = child.depends_on.replace(/-id.+-/g, `-id${id}-`);
              child.default = result.value[key];
              // 如果有一项满足，就把子项所有的名字改掉，也要把父项的名字改掉
              for (let i = 0; i < newItem.children.length; i++) {
                const child = newItem.children[i];
                child.name = child.name.replace(/-id.+-/, `-id${id}-`);
                newItem.name = newItem.name.replace(/-id.+-/, `-id${id}-`);
              }
              res.push(newItem);
            }
          }
        }
      }
    }
  }
  return res;
}

// 提示
const openNotification = (placement: NotificationPlacement) => {
  api.info({
    message: `提示`,
    description: "不可以删除第一项",
    placement,
  });
};

// 点击删除自定义项
const popChildren = (lastID) => {
  lastID = typeof lastID === "number" ? lastID : checkLastID();
  if (lastID === 1) {
    openNotification("topLeft");
    return;
  }
  data.children.map((item, index) => {
    if (item.name.includes(`-id${lastID}-`)) {
      const delItem = data.children.splice(index, 1)[0];
      // choice
      if (delItem.type == "choice") {
        delItem.children.map((item) => {
          delResult(item.name);
        });
      }
      // 普通
      else {
        delResult(delItem.name);
      }
      popChildren(lastID);
    }
  });
};

// 点击添加自定义项
const addChildren = () => {
  const lastID = checkLastID();
  const concatList = data.children.map((item) => recursive(item, lastID));
  data.children = data.children.concat(concatList.filter((item) => item));

  function recursive(obj, lastID) {
    const newItem = deepClone(obj);
    let res = "";
    // console.log(newItem.name, 55555, lastID);

    if (newItem.name.includes(`-id${lastID}-`)) {
      newItem.name = newItem.name.replace(/-id(\d+)?-/g, `-id${lastID + 1}-`);
      newItem.depends_on = newItem.depends_on
        ? newItem.depends_on?.replace(/-id(\d+)?-/g, `-id${lastID + 1}-`)
        : newItem.depends_on;
      // 无法有默认值
      newItem.default = null;
      newItem.value = null;
      // newItem.value = newItem.default;

      res = newItem;
    }
    if (Array.isArray(res.children) && res.children.length > 0) {
      for (let i = 0; i < res.children.length; i++) {
        res.children[i] = recursive(res.children[i], lastID);
      }
    }
    return res;
  }
};

function checkLastID() {
  let lastID = 0;
  data.children.map((item) => {
    const match = item.name.match(/-id(\d+)-/);
    match && (lastID = match[1] > lastID ? match[1] : lastID);
  });
  return Number(lastID);
}
</script>

<style lang="scss" scoped></style>
