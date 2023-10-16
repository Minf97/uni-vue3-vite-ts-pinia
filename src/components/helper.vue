<template>
  <div>
    <a-tooltip>
      <template #title>{{ helper }}</template>
      <InfoCircleOutlined style="color: #666;" />
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import { InfoCircleOutlined } from "@ant-design/icons-vue";

const { helper } = defineProps<{ helper: string | null }>();

</script>

<style lang="scss" scoped></style>
