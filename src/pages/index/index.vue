
<script setup lang="ts">
// @ts-nocheck
import { kconfigJSON } from "./kconfig";
import { checkIfCanShow, addDefaultRecursive, addResultRecursive, treeRecursive, parseQueryParams } from '@/utils/util';
import { notification } from 'ant-design-vue';
import apiTest from "@/api/apiTest"
import { ref, reactive } from "vue";

const { result } = useStore('result');
const { state } = useStore('app');
const CONFIG_CL_DEV_BRANCH = ref("release")
// query传参
const query = reactive<Query>(parseQueryParams(window.location.href));

// 首先是把JSON里的默认值加进result里
apiTest.getKconfig(query.CONFIG_CL_PRODUCT_ID).then((res) => {
  let kconfig = res?.kconfig;
  if (!kconfig) {
    kconfig = kconfigJSON;
  }
  kconfig?.forEach(item => addResultRecursive(item));
  // 然后是把服务器的值填充进来，会把上面的默认值覆盖掉
  apiTest.getLastCompileJSON(query.device_model_id).then(res => {
    let config = {};
    if (res) {
      if (res.formconfig) {
        config = res.formconfig
      }
    }
    console.log(config, "config!!!");
    if (Object.keys(config).length == 0) {
      state.value.kconfig = kconfig;
    }
    else {
      for (const key in config) {
        const value = config[key];
        state.value.kconfig = kconfig.map(item => {
          return addDefaultRecursive(item, key, value)
        })
      }
    }
  });
})

const openNotificationWithIcon = (type: string, message: string, description: string) => {
  notification[type]({
    message, description
  });
};

const build = () => {
  // 表单校验
  for (const item of state.value.kconfig) {
    if (!treeRecursive(item)) {
      openNotificationWithIcon('warning', '警告!', '表单校验失败！仍有未填项');
      return;
    }
  }
  // 加入 y: 1
  const postForm = { ...result.value, ...{ CONFIG_CL_PRODUCT_ID: query.CONFIG_CL_PRODUCT_ID, CONFIG_CL_DEV_BRANCH: CONFIG_CL_DEV_BRANCH.value } }
  // 上传表单
  apiTest.uploadCompile(query, postForm, postForm)
    .then((res) => {
      console.log(res);
      // window.location.href = query.re_url;
    })
    .catch(() => openNotificationWithIcon('error', '错误!', '上传表单失败! 请联系开发人员'))
}
</script>

<template>
  <div class="pb-100">
    <text>{{ result }}</text>
    <!-- 开发分支 -->
    <div class="flex w-full pt-35">
      <a-tooltip placement="bottomRight">
        <template #title>{{ toolTip }}</template>
        <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">开发分支:</div>
      </a-tooltip>

      <div class="flex flex-1 items-center">
        <a-select class="w-100% max-w-800" ref="select" v-model:value="CONFIG_CL_DEV_BRANCH">
          <a-select-option value="release">release</a-select-option>
          <a-select-option value="develop">develop</a-select-option>
        </a-select>
      </div>
    </div>
    <!-- 主版本 -->
    <div class="flex w-full pt-35">
      <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">主版本</div>
      <div class="flex-1">
        <a-input class="w-400" v-model:value="query.major_version" />
      </div>
    </div>
    <!-- 功能版本 -->
    <div class="flex w-full pt-35">
      <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">功能版本</div>
      <div class="flex-1">
        <a-input class="w-400" v-model:value="query.minor_version" />
      </div>
    </div>
    <!-- bug修改版本 -->
    <div class="flex w-full pt-35">
      <div class="flex flex-1 items-center justify-end text-right p-10 tracking-wide">bug修改版本</div>
      <div class="flex-1">
        <a-input class="w-400" v-model:value="query.revision" />
      </div>
    </div>
    <hr style="margin-top: 100px;" />

    <div v-for="item in state.kconfig" :key="item.name">
      <stringComponent v-if="checkIfCanShow(item, 'string')" :data="item" />
      <intComponent v-if="checkIfCanShow(item, 'int')" :data="item" />
      <boolComponent v-if="checkIfCanShow(item, 'bool')" :data="item" />
      <choiceComponent v-if="checkIfCanShow(item, 'choice')" :data="item" />
      <menuComponent v-if="checkIfCanShow(item, 'menu')" :data="item" />
      <menu2Component v-if="checkIfCanShow(item, 'menu2')" :data="item" />
    </div>
    <!-- 悬浮按钮 -->
    <a-back-top :visibility-height="100" />

    <div class="text-center mt-200">
      <a-button type="primary" size="large" @click="build">确定生成</a-button>
    </div>
  </div>
  <contextHolder />
</template>

<style scoped lang="scss"></style>
