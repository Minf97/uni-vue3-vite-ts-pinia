<script setup lang="ts">
// @ts-nocheck
import { kconfigJSON } from "./kconfig";
import {
  checkIfCanShow,
  filterConfigValue,
  addDefaultRecursive,
  addResultRecursive,
  treeRecursive,
  parseQueryParams,
} from "@/utils/util";
import { notification } from "ant-design-vue";
import { RightOutlined } from "@ant-design/icons-vue";
import apiTest from "@/api/apiTest";
import { ref, reactive } from "vue";
import { deepClone } from "@/utils/clone";

const { result, delResult, JSONList } = useStore("result");
const { state } = useStore("app");
const CONFIG_CL_DEV_BRANCH = ref("release");
const resultFlag = ref(true);
// query传参
const query = reactive<Query>(parseQueryParams(window.location.href));

// 请求JSON
apiTest.getKconfig(query.CONFIG_CL_PRODUCT_ID).then((res) => {
  let kconfig = res?.kconfig ? res.kconfig : kconfigJSON;
  // 首先是把JSON里的默认值加进result里
  kconfig?.forEach((item) => addResultRecursive(item));
  // 然后是把服务器的值填充进来，会把上面的默认值覆盖掉
  apiTest.getLastCompileJSON(query.device_model_id).then((res) => {
    let config = res?.formconfig ? res.formconfig : result.value;

    if (Object.keys(config).length == 0) {
      state.value.kconfig = kconfig;
    } else {
      // 把CONFIG_前缀去掉，并且过滤掉旧的不存在的key、branch、版本号 这些没用的信息
      const newConfig = filterConfigValue(config);
      console.log(newConfig, "newConfig");

      // 递归加入服务器的缓存值
      for (let key in newConfig) {
        const value = newConfig[key];
        state.value.kconfig = kconfig.map((item) => {
          return addDefaultRecursive(item, key, value);
        });
      }

      Object.assign(result.value, newConfig);
    }
  });
});

console.log(JSONList, "??");


const openNotificationWithIcon = (
  type: "success" | "error" | "info" | "warning",
  message: string,
  description: string
) => {
  notification[type]({
    message,
    description,
    placement: "bottom-right",
  });
};

const build = () => {
  // 表单校验
  for (const item of state.value.kconfig) {
    if (!treeRecursive(item)) {
      openNotificationWithIcon("warning", "警告!", "表单校验失败！仍有未填项");
      return;
    }
  }

  const res = deepClone(result.value);
  for (let key in res) {
    const newKey = "CONFIG_" + key;
    res[newKey] = res[key];
    delete res[key];
  }
  // 加入 y: 1
  const postForm = {
    ...res,
    ...{
      CONFIG_CL_PRODUCT_ID: `\"${query.CONFIG_CL_PRODUCT_ID}\"`,
      CONFIG_CL_DEV_BRANCH: `\"${CONFIG_CL_DEV_BRANCH.value}\"`,
    },
  };
  // uni.setClipboardData({
  //   data: JSON.stringify(postForm),
  //   success: () => {
  //     uni.showToast({ title: "复制成功" });
  //   },
  // });
  // return;

  // 上传表单
  apiTest
    .uploadCompile(query, postForm, postForm)
    .then((res) => {
      console.log(res);
      if (res) {
        openNotificationWithIcon("success", "成功", "上传表单成功！");
        uni.showLoading({ title: "上传成功~等待跳转页面" });
        setTimeout(() => {
          window.parent.location.href = query.re_url;
        }, 2000);
      }
    })
    .catch(() =>
      openNotificationWithIcon("error", "错误!", "上传表单失败! 请联系开发人员")
    );
};
</script>

<template>
  <div class="pb-100">
    <RightOutlined
      @click="
        () => {
          resultFlag = !resultFlag;
        }
      "
    />
    <text contenteditable="true" v-if="resultFlag">{{ result }}</text>

    <!-- 开发分支 -->
    <div style="margin: 0 auto;" class="flex w-80% pt-35">
      <a-tooltip placement="bottomRight">
        <template #title>{{ toolTip }}</template>
        <div
          class="flex flex-1 items-center justify-end text-right p-10 tracking-wide"
        >
          开发分支:
        </div>
      </a-tooltip>

      <div class="flex flex-1 items-center">
        <a-select
          class="w-100% max-w-800"
          ref="select"
          v-model:value="CONFIG_CL_DEV_BRANCH"
        >
          <a-select-option value="release">release</a-select-option>
          <a-select-option value="develop">develop</a-select-option>
        </a-select>
      </div>
    </div>
    <!-- 版本 -->
    <div class="flex dddd">
      <div style="margin: 0 auto;" class="flex pt-35 w-full">
        <div
          class="flex flex-1 items-center justify-end text-right p-10 tracking-wide"
        >
          版本:
        </div>
        <div
          class="flex flex-1"
          style="align-items: baseline; vertical-align: bottom;"
        >
          <a-input
            class="max-w-110"
            v-model:value="query.major_version"
            placeholder="主"
          />
          <text style="padding: 0 10rpx;">.</text>
          <a-input
            class="max-w-110"
            v-model:value="query.minor_version"
            placeholder="功能"
          />
          <text style="padding: 0 10rpx;">. </text>
          <a-input
            class="max-w-110"
            v-model:value="query.revision"
            placeholder="修改"
          />
        </div>
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

<style scoped lang="scss">
.dddd {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
}
</style>
