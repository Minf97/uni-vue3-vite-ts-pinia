
<template>
  <view>
    123
    <!-- <a-upload-dragger v-model:fileList="fileList" name="file" :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange" @drop="handleDrop">
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">点击或拖动文件上传</p>
      <p class="ant-upload-hint">
        仅支持单个Kconfig文件
      </p>
    </a-upload-dragger> -->
  </view>
</template>

<script setup lang="ts" name="upload">
import { PythonShell } from 'python-shell';

let options = {
  args: [1, 2, 3, 4, 5]
};
PythonShell.run('./demo.py', options).then(() => {

}).catch(err => {
  console.log(err);

})
</script>

<style scoped></style>
