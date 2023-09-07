
<script setup lang="ts">
import { useTitle } from '@/hooks/useTitle';
import { forward } from '@/utils/router';

// const { title, changeTitle } = useTitle();
// function goTest() {
//   forward('test', {
//     a: 1
//   });
// }

// 最后的返回结果

// 测试用
const stringObj: Kconfig.StringObj = {
  "children": [],
  "depends_on": null,
  "help": "Product name help",
  "id": "CL_PRODUCT_NAME",
  "name": "CL_PRODUCT_NAME",
  "range": null,
  "title": "Product name",
  "type": "string"
}

const intObj: Kconfig.IntObj = {
  "children": [],
  "depends_on": null,
  "help": null,
  "id": "CL_LOOP_PERIOD",
  "name": "CL_LOOP_PERIOD",
  "range": [
    10,
    10
  ],
  "title": "System operating cycle",
  "type": "int"
}

const boolObj: Kconfig.BoolObj = {
  "children": [],
  "depends_on": "<choice CL_REMOTE_CONTROL_1_FUN>",
  "help": null,
  "id": "CL_REMOTE_CONTROL_1_FUN_ON",
  "name": "CL_REMOTE_CONTROL_1_FUN_ON",
  "range": null,
  "title": "on",
  "type": "bool"
}

const choiceObj: Kconfig.ChoiceObj = {
  "children": [
    {
      "children": [],
      "depends_on": "<choice CL_REMOTE_CONTROL_1_FUN>",
      "help": null,
      "id": "CL_REMOTE_CONTROL_1_FUN_ON",
      "name": "CL_REMOTE_CONTROL_1_FUN_ON",
      "range": null,
      "title": "on",
      "type": "bool"
    },
    {
      "children": [],
      "depends_on": "<choice CL_REMOTE_CONTROL_1_FUN>",
      "help": null,
      "id": "CL_REMOTE_CONTROL_1_FUN_OFF",
      "name": "CL_REMOTE_CONTROL_1_FUN_OFF",
      "range": null,
      "title": "off",
      "type": "bool"
    }
  ],
  "depends_on": "CL_REMOTE_CONTROL_ENABLED",
  "help": null,
  "id": "remote-control-enable-remote-control-remote-control-fun",
  "name": "CL_REMOTE_CONTROL_1_FUN",
  "title": "fun",
  "type": "choice"
}

const menuObj = {
  "children": [
    {
      "children": [
        {
          "children": [],
          "depends_on": "<choice CL_CHIP_TYPE>",
          "help": null,
          "id": "CL_CHIP_TYPE_NULL",
          "name": "CL_CHIP_TYPE_NULL",
          "range": null,
          "title": "Not set",
          "type": "bool"
        },
        {
          "children": [],
          "depends_on": "<choice CL_CHIP_TYPE>",
          "help": null,
          "id": "CL_CHIP_TYPE_ESP32",
          "name": "CL_CHIP_TYPE_ESP32",
          "range": null,
          "title": "ESP32",
          "type": "bool"
        },
        {
          "children": [],
          "depends_on": "<choice CL_CHIP_TYPE>",
          "help": null,
          "id": "CL_CHIP_TYPE_ESP32C3",
          "name": "CL_CHIP_TYPE_ESP32C3",
          "range": null,
          "title": "ESP32C3",
          "type": "bool"
        }
      ],
      "depends_on": null,
      "help": null,
      "id": "chip-module-chip",
      "name": "CL_CHIP_TYPE",
      "title": "Chip",
      "type": "choice"
    },
    {
      "children": [],
      "depends_on": null,
      "help": null,
      "id": "CL_CHIP_TYPE",
      "name": "CL_CHIP_TYPE",
      "range": null,
      "title": null,
      "type": "int"
    },
    {
      "children": [],
      "depends_on": "CL_CHIP_TYPE_ESP32",
      "help": null,
      "id": "CL_ESP32_MODULE_ENABLE_LEXIN",
      "name": "CL_ESP32_MODULE_ENABLE_LEXIN",
      "range": null,
      "title": "Support Le Xin module",
      "type": "bool"
    },
    {
      "children": [],
      "depends_on": "CL_CHIP_TYPE_ESP32",
      "help": null,
      "id": "CL_ESP32_MODULE_ENABLE_LEXIN_D0WD",
      "name": "CL_ESP32_MODULE_ENABLE_LEXIN_D0WD",
      "range": null,
      "title": "Support Lexin D0WD module",
      "type": "bool"
    },
    {
      "children": [
        {
          "children": [],
          "depends_on": "<choice CL_ESP32_MODULE>",
          "help": null,
          "id": "CL_ESP32_MODULE_NULL",
          "name": "CL_ESP32_MODULE_NULL",
          "range": null,
          "title": "Do not use modules",
          "type": "bool"
        },
        {
          "children": [],
          "depends_on": "<choice CL_ESP32_MODULE>",
          "help": null,
          "id": "CL_ESP32_MODULE_ESP_HOME",
          "name": "CL_ESP32_MODULE_ESP_HOME",
          "range": null,
          "title": "ESP-HOME",
          "type": "bool"
        },
        {
          "children": [],
          "depends_on": "CL_ESP32_MODULE_ENABLE_LEXIN && CL_ESP32_MODULE_ENABLE_LEXIN_D0WD && <choice CL_ESP32_MODULE>",
          "help": null,
          "id": "CL_ESP32_MODULE_ESP32_D0WD",
          "name": "CL_ESP32_MODULE_ESP32_D0WD",
          "range": null,
          "title": "ESP32-D0WD",
          "type": "bool"
        }
      ],
      "depends_on": "CL_CHIP_TYPE_ESP32",
      "help": null,
      "id": "chip-module-esp32-module",
      "name": "CL_ESP32_MODULE",
      "title": "ESP32 module",
      "type": "choice"
    },
    {
      "children": [
        {
          "children": [],
          "depends_on": "<choice CL_ESP32C3_MODULE>",
          "help": null,
          "id": "CL_ESP32C3_MODULE_NULL",
          "name": "CL_ESP32C3_MODULE_NULL",
          "range": null,
          "title": "Do not use modules",
          "type": "bool"
        }
      ],
      "depends_on": "CL_CHIP_TYPE_ESP32C3",
      "help": null,
      "id": "chip-module-esp32c3-module",
      "name": "CL_ESP32C3_MODULE",
      "title": "ESP32C3 module",
      "type": "choice"
    }
  ],
  "depends_on": null,
  "id": "chip-module",
  "title": "Chip module",
  "type": "menu"
}

const { result } = useStore('result')

</script>

<template>
  <view class="content">
    {{ result }}
    <menuComponent :data="menuObj" />
    <!-- <stringComponent :data="stringObj" />
    <intComponent :data="intObj" />
    <boolComponent :data="boolObj" />
    <choiceComponent :data="choiceObj" /> -->
  </view>
</template>

<style scoped lang="scss"></style>
