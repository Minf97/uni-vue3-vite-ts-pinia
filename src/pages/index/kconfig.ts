
export const kconfigJSON = [
  {
    "children": [],
    "default": "\"\"",
    "depends_on": null,
    "help": null,
    "id": "CL_PRODUCT_ID",
    "name": "CL_PRODUCT_ID",
    "range": null,
    "title": "PID",
    "type": "string"
  },
  {
    "children": [],
    "default": "\"\"",
    "depends_on": null,
    "help": null,
    "id": "CL_PRODUCT_NAME",
    "name": "CL_PRODUCT_NAME",
    "range": null,
    "title": "\u4ea7\u54c1\u540d\u79f0",
    "type": "string"
  },
  {
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
            "title": "\u672a\u8bbe\u7f6e",
            "type": "bool",
            "default": "y"
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
          },
          {
            "children": [],
            "depends_on": "<choice CL_CHIP_TYPE>",
            "help": null,
            "id": "CL_CHIP_TYPE_ESP8685",
            "name": "CL_CHIP_TYPE_ESP8685",
            "range": null,
            "title": "ESP8685",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_CHIP_TYPE>",
            "help": null,
            "id": "CL_CHIP_TYPE_ESP8684",
            "name": "CL_CHIP_TYPE_ESP8684",
            "range": null,
            "title": "ESP8684",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_CHIP_TYPE>",
            "help": null,
            "id": "CL_CHIP_TYPE_BL602C",
            "name": "CL_CHIP_TYPE_BL602C",
            "range": null,
            "title": "BL602C",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_CHIP_TYPE>",
            "help": null,
            "id": "CL_CHIP_TYPE_BL602L",
            "name": "CL_CHIP_TYPE_BL602L",
            "range": null,
            "title": "BL602L",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_CHIP_TYPE>",
            "help": null,
            "id": "CL_CHIP_TYPE_LN882H",
            "name": "CL_CHIP_TYPE_LN882H",
            "range": null,
            "title": "LN882H",
            "type": "bool"
          }
        ],
        "depends_on": null,
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-\u82af\u7247",
        "name": "CL_CHIP_TYPE",
        "title": "\u82af\u7247",
        "type": "choice"
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
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
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
            "depends_on": "<choice CL_ESP32_MODULE>",
            "help": null,
            "id": "CL_ESP32_MODULE_ESP_02",
            "name": "CL_ESP32_MODULE_ESP_02",
            "range": null,
            "title": "ESP-02",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_ESP32",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-esp32\u6a21\u7ec4",
        "name": "CL_ESP32_MODULE",
        "title": "ESP32\u6a21\u7ec4",
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
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP32C3_MODULE>",
            "help": null,
            "id": "CL_ESP32C3_MODULE_ESP_C02",
            "name": "CL_ESP32C3_MODULE_ESP_C02",
            "range": null,
            "title": "ESP-C02",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP32C3_MODULE>",
            "help": null,
            "id": "CL_ESP32C3_MODULE_ESP_C05",
            "name": "CL_ESP32C3_MODULE_ESP_C05",
            "range": null,
            "title": "ESP-C05",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP32C3_MODULE>",
            "help": null,
            "id": "CL_ESP32C3_MODULE_ESP_C12",
            "name": "CL_ESP32C3_MODULE_ESP_C12",
            "range": null,
            "title": "ESP-C12",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_ESP32C3",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-esp32c3\u6a21\u7ec4",
        "name": "CL_ESP32C3_MODULE",
        "title": "ESP32C3\u6a21\u7ec4",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_ESP8685_MODULE>",
            "help": null,
            "id": "CL_ESP8685_MODULE_NULL",
            "name": "CL_ESP8685_MODULE_NULL",
            "range": null,
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8685_MODULE>",
            "help": null,
            "id": "CL_ESP8685_MODULE_ESP_C02M",
            "name": "CL_ESP8685_MODULE_ESP_C02M",
            "range": null,
            "title": "ESP-C02M",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8685_MODULE>",
            "help": null,
            "id": "CL_ESP8685_MODULE_ESP_C05M",
            "name": "CL_ESP8685_MODULE_ESP_C05M",
            "range": null,
            "title": "ESP-C05M",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8685_MODULE>",
            "help": null,
            "id": "CL_ESP8685_MODULE_ESP_C12M",
            "name": "CL_ESP8685_MODULE_ESP_C12M",
            "range": null,
            "title": "ESP-C12M",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_ESP8685",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-esp8685\u6a21\u7ec4",
        "name": "CL_ESP8685_MODULE",
        "title": "ESP8685\u6a21\u7ec4",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_ESP8684_MODULE>",
            "help": null,
            "id": "CL_ESP8684_MODULE_NULL",
            "name": "CL_ESP8684_MODULE_NULL",
            "range": null,
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8684_MODULE>",
            "help": null,
            "id": "CL_ESP8684_MODULE_ESPC2_01",
            "name": "CL_ESP8684_MODULE_ESPC2_01",
            "range": null,
            "title": "ESPC2-01",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8684_MODULE>",
            "help": null,
            "id": "CL_ESP8684_MODULE_ESPC2_02",
            "name": "CL_ESP8684_MODULE_ESPC2_02",
            "range": null,
            "title": "ESPC2-02",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8684_MODULE>",
            "help": null,
            "id": "CL_ESP8684_MODULE_ESPC2_05",
            "name": "CL_ESP8684_MODULE_ESPC2_05",
            "range": null,
            "title": "ESPC2-05",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_ESP8684_MODULE>",
            "help": null,
            "id": "CL_ESP8684_MODULE_ESPC2_12",
            "name": "CL_ESP8684_MODULE_ESPC2_12",
            "range": null,
            "title": "ESPC2-12",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_ESP8684",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-esp8684\u6a21\u7ec4",
        "name": "CL_ESP8684_MODULE",
        "title": "ESP8684\u6a21\u7ec4",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_BL602C_MODULE>",
            "help": null,
            "id": "CL_BL602C_MODULE_NULL",
            "name": "CL_BL602C_MODULE_NULL",
            "range": null,
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_BL602C_MODULE>",
            "help": null,
            "id": "CL_BL602C_MODULE_BL10_2M",
            "name": "CL_BL602C_MODULE_BL10_2M",
            "range": null,
            "title": "BL10_2M",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_BL602C",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-bl602c\u6a21\u7ec4",
        "name": "CL_BL602C_MODULE",
        "title": "BL602C\u6a21\u7ec4",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_BL602L_MODULE>",
            "help": null,
            "id": "CL_BL602L_MODULE_NULL",
            "name": "CL_BL602L_MODULE_NULL",
            "range": null,
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_BL602L_MODULE>",
            "help": null,
            "id": "CL_BL602L_MODULE_BL200_1M",
            "name": "CL_BL602L_MODULE_BL200_1M",
            "range": null,
            "title": "BL200_1M",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_BL602L_MODULE>",
            "help": null,
            "id": "CL_BL602L_MODULE_BL02_1M",
            "name": "CL_BL602L_MODULE_BL02_1M",
            "range": null,
            "title": "BL02_1M",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_BL602L_MODULE>",
            "help": null,
            "id": "CL_BL602L_MODULE_BL12_1M",
            "name": "CL_BL602L_MODULE_BL12_1M",
            "range": null,
            "title": "BL12_1M",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_BL602L_MODULE>",
            "help": null,
            "id": "CL_BL602L_MODULE_BL12_2M",
            "name": "CL_BL602L_MODULE_BL12_2M",
            "range": null,
            "title": "BL12_2M",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_BL602L",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-bl602l\u6a21\u7ec4",
        "name": "CL_BL602L_MODULE",
        "title": "BL602L\u6a21\u7ec4",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_LN882H_MODULE>",
            "help": null,
            "id": "CL_LN882H_MODULE_NULL",
            "name": "CL_LN882H_MODULE_NULL",
            "range": null,
            "title": "\u4e0d\u4f7f\u7528\u6a21\u7ec4",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_LN882H_MODULE>",
            "help": null,
            "id": "CL_LN882H_MODULE_LN_02",
            "name": "CL_LN882H_MODULE_LN_02",
            "range": null,
            "title": "LN-02",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_LN882H_MODULE>",
            "help": null,
            "id": "CL_LN882H_MODULE_LN_05",
            "name": "CL_LN882H_MODULE_LN_05",
            "range": null,
            "title": "LN-05",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_LN882H_MODULE>",
            "help": null,
            "id": "CL_LN882H_MODULE_LN_10",
            "name": "CL_LN882H_MODULE_LN_10",
            "range": null,
            "title": "LN-10",
            "type": "bool"
          }
        ],
        "depends_on": "CL_CHIP_TYPE_LN882H",
        "help": null,
        "id": "\u82af\u7247\u6a21\u7ec4-ln882h\u6a21\u7ec4",
        "name": "CL_LN882H_MODULE",
        "title": "LN882H\u6a21\u7ec4",
        "type": "choice"
      }
    ],
    "depends_on": null,
    "id": "\u82af\u7247\u6a21\u7ec4",
    "title": "\u82af\u7247\u6a21\u7ec4",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [],
        "default": "\"0.0.1\"",
        "depends_on": null,
        "help": null,
        "id": "CL_HARDWARE_VERSION",
        "name": "CL_HARDWARE_VERSION",
        "range": null,
        "title": "\u786c\u4ef6\u7248\u672c",
        "type": "string"
      }
    ],
    "depends_on": null,
    "id": "\u7248\u672c\u914d\u7f6e",
    "title": "\u7248\u672c\u914d\u7f6e",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [],
        "default": "20",
        "depends_on": null,
        "help": null,
        "id": "CL_LOOP_PERIOD",
        "name": "CL_LOOP_PERIOD",
        "range": null,
        "title": "\u7cfb\u7edf\u8fd0\u884c\u5468\u671f",
        "type": "int"
      },
      {
        "children": [],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_LOW_POWER_MODE",
        "name": "CL_LOW_POWER_MODE",
        "range": null,
        "title": "\u4f4e\u529f\u8017\u6a21\u5f0f",
        "type": "bool"
      },
      {
        "children": [],
        "default": "400",
        "depends_on": null,
        "help": null,
        "id": "CL_UPDATA_STATUS_NOW_TIME_MS",
        "name": "CL_UPDATA_STATUS_NOW_TIME_MS",
        "range": [
          0,
          10000
        ],
        "title": "\u7acb\u5373\u4e0a\u62a5\u5ef6\u65f6\u65f6\u95f4(ms)",
        "type": "int"
      },
      {
        "children": [],
        "default": "800",
        "depends_on": null,
        "help": null,
        "id": "CL_SAVE_STATUS_NOW_TIME_MS",
        "name": "CL_SAVE_STATUS_NOW_TIME_MS",
        "range": [
          0,
          10000
        ],
        "title": "\u7acb\u5373\u4fdd\u5b58\u7684\u5ef6\u65f6\u65f6\u95f4(ms)",
        "type": "int"
      },
      {
        "children": [],
        "default": "2000",
        "depends_on": null,
        "help": null,
        "id": "CL_UPDATA_STATUS_DELAY_TIME_MS",
        "name": "CL_UPDATA_STATUS_DELAY_TIME_MS",
        "range": [
          0,
          10000
        ],
        "title": "\u5ef6\u8fdf\u4e0a\u62a5\u7684\u5ef6\u65f6\u65f6\u95f4(ms)",
        "type": "int"
      },
      {
        "children": [],
        "default": "2000",
        "depends_on": null,
        "help": null,
        "id": "CL_SAVE_STATUS_DELAY_TIME_MS",
        "name": "CL_SAVE_STATUS_DELAY_TIME_MS",
        "range": [
          0,
          10000
        ],
        "title": "\u5ef6\u8fdf\u4fdd\u5b58\u7684\u5ef6\u65f6\u65f6\u95f4(ms)",
        "type": "int"
      }
    ],
    "depends_on": null,
    "id": "\u7cfb\u7edf\u914d\u7f6e",
    "title": "\u7cfb\u7edf\u914d\u7f6e",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_TYPE>",
            "help": null,
            "id": "CL_SWITCH_TYPE_PLUG",
            "name": "CL_SWITCH_TYPE_PLUG",
            "range": null,
            "title": "\u6392\u63d2(\u63d2\u5ea7)",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_TYPE>",
            "help": null,
            "id": "CL_SWITCH_TYPE_ONOFF",
            "name": "CL_SWITCH_TYPE_ONOFF",
            "range": null,
            "title": "\u901a\u65ad\u5668",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_TYPE>",
            "help": null,
            "id": "CL_SWITCH_TYPE_CONTROL_PANEL",
            "name": "CL_SWITCH_TYPE_CONTROL_PANEL",
            "range": null,
            "title": "\u9762\u677f\u5f00\u5173",
            "type": "bool"
          }
        ],
        "depends_on": null,
        "help": null,
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u5173\u7c7b\u578b",
        "name": "CL_SWITCH_TYPE",
        "title": "\u5f00\u5173\u7c7b\u578b",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_1",
            "name": "CL_SWITCH_NUM_1",
            "range": null,
            "title": "1\u8def\u5f00\u5173",
            "type": "bool",
            "default": "y"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_2",
            "name": "CL_SWITCH_NUM_2",
            "range": null,
            "title": "2\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_3",
            "name": "CL_SWITCH_NUM_3",
            "range": null,
            "title": "3\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_4",
            "name": "CL_SWITCH_NUM_4",
            "range": null,
            "title": "4\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_5",
            "name": "CL_SWITCH_NUM_5",
            "range": null,
            "title": "5\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_6",
            "name": "CL_SWITCH_NUM_6",
            "range": null,
            "title": "6\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_7",
            "name": "CL_SWITCH_NUM_7",
            "range": null,
            "title": "7\u8def\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "<choice CL_SWITCH_NUM>",
            "help": null,
            "id": "CL_SWITCH_NUM_8",
            "name": "CL_SWITCH_NUM_8",
            "range": null,
            "title": "8\u8def\u5f00\u5173",
            "type": "bool"
          }
        ],
        "depends_on": null,
        "help": null,
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u5173\u6570\u91cf",
        "name": "CL_SWITCH_NUM",
        "title": "\u5f00\u5173\u6570\u91cf",
        "type": "choice"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN1",
            "name": "CL_SWITCH_RELAY_PIN1",
            "range": [
              0,
              36
            ],
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_KEY_PIN1",
            "name": "CL_SWITCH_KEY_PIN1",
            "range": [
              -1,
              36
            ],
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN1",
            "name": "CL_SWITCH_POWER_STATE_PIN1",
            "range": [
              -1,
              36
            ],
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": null,
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51731",
        "title": "\u5f00\u51731",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_2 || CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN2",
            "name": "CL_SWITCH_RELAY_PIN2",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_2 || CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN2",
            "name": "CL_SWITCH_KEY_PIN2",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_2 || CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN2",
            "name": "CL_SWITCH_POWER_STATE_PIN2",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_2 || CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51732",
        "title": "\u5f00\u51732",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN3",
            "name": "CL_SWITCH_RELAY_PIN3",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN3",
            "name": "CL_SWITCH_KEY_PIN3",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN3",
            "name": "CL_SWITCH_POWER_STATE_PIN3",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_3 || CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51733",
        "title": "\u5f00\u51733",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN4",
            "name": "CL_SWITCH_RELAY_PIN4",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN4",
            "name": "CL_SWITCH_KEY_PIN4",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN4",
            "name": "CL_SWITCH_POWER_STATE_PIN4",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_4 || CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51734",
        "title": "\u5f00\u51734",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN5",
            "name": "CL_SWITCH_RELAY_PIN5",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN5",
            "name": "CL_SWITCH_KEY_PIN5",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN5",
            "name": "CL_SWITCH_POWER_STATE_PIN5",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_5 || CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51735",
        "title": "\u5f00\u51735",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN6",
            "name": "CL_SWITCH_RELAY_PIN6",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN6",
            "name": "CL_SWITCH_KEY_PIN6",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN6",
            "name": "CL_SWITCH_POWER_STATE_PIN6",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_6 || CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51736",
        "title": "\u5f00\u51736",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN7",
            "name": "CL_SWITCH_RELAY_PIN7",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN7",
            "name": "CL_SWITCH_KEY_PIN7",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN7",
            "name": "CL_SWITCH_POWER_STATE_PIN7",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_7 || CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51737",
        "title": "\u5f00\u51737",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_RELAY_PIN8",
            "name": "CL_SWITCH_RELAY_PIN8",
            "range": null,
            "title": "\u7ee7\u7535\u5668\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_KEY_PIN8",
            "name": "CL_SWITCH_KEY_PIN8",
            "range": null,
            "title": "\u6309\u952e\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_NUM_8",
            "help": null,
            "id": "CL_SWITCH_POWER_STATE_PIN8",
            "name": "CL_SWITCH_POWER_STATE_PIN8",
            "range": null,
            "title": "\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          }
        ],
        "depends_on": "CL_SWITCH_NUM_8",
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u5f00\u51738",
        "title": "\u5f00\u51738",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_USE_WIFI_STATE",
            "is_menuconfig": true,
            "name": "CL_SWITCH_USE_WIFI_STATE",
            "range": null,
            "title": "WIFI\u6307\u793a\u706f",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_WIFI_STATE",
            "help": null,
            "id": "CL_SWITCH_WIFI_STATE_PIN",
            "name": "CL_SWITCH_WIFI_STATE_PIN",
            "range": null,
            "title": "WiFi\u6307\u793a\u706f\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "default": "n",
            "depends_on": "CL_SWITCH_USE_WIFI_STATE",
            "help": null,
            "id": "CL_SWITCH_WIFI_STATE_REVERSE",
            "name": "CL_SWITCH_WIFI_STATE_REVERSE",
            "range": null,
            "title": "\u53cd\u76f8\u8fde\u63a5\u72b6\u6001",
            "type": "bool"
          },
          {
            "children": [],
            "default": "n",
            "depends_on": "CL_SWITCH_USE_WIFI_STATE",
            "help": null,
            "id": "CL_SWITCH_WIFI_STATE_WIFICFG_ALWAYS_FLASH",
            "name": "CL_SWITCH_WIFI_STATE_WIFICFG_ALWAYS_FLASH",
            "range": null,
            "title": "\u5f00\u5173\u4e0d\u6253\u65ad\u914d\u7f51\u95ea\u706f",
            "type": "bool"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_SWITCH_USE_WIFI_STATE",
        "is_menuconfig": true,
        "name": "CL_SWITCH_USE_WIFI_STATE",
        "range": null,
        "title": "WIFI\u6307\u793a\u706f",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "1",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_RELAY_ACTIVE_LEVEL",
            "name": "CL_SWITCH_RELAY_ACTIVE_LEVEL",
            "range": [
              0,
              1
            ],
            "title": "\u7ee7\u7535\u6709\u6548\u7535\u5e73",
            "type": "int"
          },
          {
            "children": [],
            "default": "0",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_KEY_ACTIVE_LEVEL",
            "name": "CL_SWITCH_KEY_ACTIVE_LEVEL",
            "range": [
              0,
              1
            ],
            "title": "\u6309\u952e\u6709\u6548\u7535\u5e73",
            "type": "int"
          },
          {
            "children": [],
            "default": "0",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_STATE_ACTIVE_LEVEL",
            "name": "CL_SWITCH_STATE_ACTIVE_LEVEL",
            "range": [
              0,
              1
            ],
            "title": "\u6307\u793a\u706f\u6709\u6548\u7535\u5e73",
            "type": "int"
          }
        ],
        "depends_on": null,
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u7535\u5e73\u914d\u7f6e",
        "title": "\u7535\u5e73\u914d\u7f6e",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "default": "3000",
                "depends_on": "CL_SWITCH_KEY_CONFIG",
                "help": null,
                "id": "CL_SWITCH_KEY_CONTROL_LONG_TIME_MS",
                "name": "CL_SWITCH_KEY_CONTROL_LONG_TIME_MS",
                "range": [
                  0,
                  10000
                ],
                "title": "\u957f\u6309\u65f6\u95f4\u89e6\u53d1(ms)",
                "type": "int"
              }
            ],
            "default": "y",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_KEY_CONFIG",
            "name": "CL_SWITCH_KEY_CONFIG",
            "range": null,
            "title": "\u957f\u6309\u6309\u952e\u914d\u7f51",
            "type": "bool"
          }
        ],
        "depends_on": null,
        "id": "\u4ea7\u54c1\u914d\u7f6e-\u6309\u952e\u529f\u80fd\u914d\u7f6e",
        "title": "\u6309\u952e\u529f\u80fd\u914d\u7f6e",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_USE_POWER_MEASURE",
            "is_menuconfig": true,
            "name": "CL_SWITCH_USE_POWER_MEASURE",
            "range": null,
            "title": "\u8ba1\u91cf",
            "type": "bool"
          },
          {
            "children": [
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_POWER_MEASURE_TYPE>",
                "help": null,
                "id": "CL_SWITCHPOWER_MEASURE_TYPE_HLW8012",
                "name": "CL_SWITCHPOWER_MEASURE_TYPE_HLW8012",
                "range": null,
                "title": "HLW8012",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_POWER_MEASURE_TYPE>",
                "help": null,
                "id": "CL_SWITCHPOWER_MEASURE_TYPE_BL0937",
                "name": "CL_SWITCHPOWER_MEASURE_TYPE_BL0937",
                "range": null,
                "title": "BL0937",
                "type": "bool",
                "default": "y"
              },
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_POWER_MEASURE_TYPE>",
                "help": null,
                "id": "CL_SWITCHPOWER_MEASURE_TYPE_BL0942",
                "name": "CL_SWITCHPOWER_MEASURE_TYPE_BL0942",
                "range": null,
                "title": "BL0942",
                "type": "bool"
              }
            ],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE",
            "help": null,
            "id": "\u4ea7\u54c1\u914d\u7f6e-\u8ba1\u91cf-\u8ba1\u91cf\u82af\u7247",
            "name": "CL_SWITCH_POWER_MEASURE_TYPE",
            "title": "\u8ba1\u91cf\u82af\u7247",
            "type": "choice"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && (CL_SWITCHPOWER_MEASURE_TYPE_HLW8012 || CL_SWITCHPOWER_MEASURE_TYPE_BL0937)",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_CF_GPIO",
            "name": "CL_SWITCH_POWER_MEASURE_CF_GPIO",
            "range": null,
            "title": "CF\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && (CL_SWITCHPOWER_MEASURE_TYPE_HLW8012 || CL_SWITCHPOWER_MEASURE_TYPE_BL0937)",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_CF1_GPIO",
            "name": "CL_SWITCH_POWER_MEASURE_CF1_GPIO",
            "range": null,
            "title": "CF1\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && (CL_SWITCHPOWER_MEASURE_TYPE_HLW8012 || CL_SWITCHPOWER_MEASURE_TYPE_BL0937)",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_SEL_GPIO",
            "name": "CL_SWITCH_POWER_MEASURE_SEL_GPIO",
            "range": null,
            "title": "SE\u5f15\u811aL",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && CL_SWITCHPOWER_MEASURE_TYPE_BL0942",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_TX_GPIO",
            "name": "CL_SWITCH_POWER_MEASURE_TX_GPIO",
            "range": null,
            "title": "TX\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && CL_SWITCHPOWER_MEASURE_TYPE_BL0942",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_RX_GPIO",
            "name": "CL_SWITCH_POWER_MEASURE_RX_GPIO",
            "range": null,
            "title": "RX\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [],
            "default": "4800",
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE && CL_SWITCHPOWER_MEASURE_TYPE_BL0942",
            "help": null,
            "id": "CL_SWITCH_POWER_MEASURE_BAUDRATE",
            "name": "CL_SWITCH_POWER_MEASURE_BAUDRATE",
            "range": null,
            "title": "\u6ce2\u7279\u7387",
            "type": "int"
          },
          {
            "children": [
              {
                "children": [],
                "default": "16000",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_OVERCURRENT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_OVERCURRENT_VALUE",
                "name": "CL_SWITCH_POWER_MEASURE_OVERCURRENT_VALUE",
                "range": null,
                "title": "\u7535\u6d41\u4e0a\u9650(mA)",
                "type": "int"
              }
            ],
            "default": "y",
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE",
            "help": null,
            "id": "CL_SWITCH_USE_POWER_MEASURE_OVERCURRENT",
            "name": "CL_SWITCH_USE_POWER_MEASURE_OVERCURRENT",
            "range": null,
            "title": "\u8fc7\u6d41\u4fdd\u62a4",
            "type": "bool"
          },
          {
            "children": [
              {
                "children": [],
                "default": "y",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_REPEAT_CORRECT",
                "name": "CL_SWITCH_POWER_MEASURE_REPEAT_CORRECT",
                "range": null,
                "title": "\u91cd\u590d\u6821\u51c6",
                "type": "bool"
              },
              {
                "children": [],
                "default": "220",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_CORRECT_VOLTAGE_EXPECTED",
                "name": "CL_SWITCH_POWER_MEASURE_CORRECT_VOLTAGE_EXPECTED",
                "range": null,
                "title": "\u6807\u51c6\u7535\u538b(V)",
                "type": "int"
              },
              {
                "children": [],
                "default": "187",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_CORRECT_CURRENT_EXPECTED",
                "name": "CL_SWITCH_POWER_MEASURE_CORRECT_CURRENT_EXPECTED",
                "range": null,
                "title": "\u6807\u51c6\u7535\u6d41(mA)",
                "type": "int"
              },
              {
                "children": [],
                "default": "40",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_CORRECT_POWER_EXPECTED",
                "name": "CL_SWITCH_POWER_MEASURE_CORRECT_POWER_EXPECTED",
                "range": null,
                "title": "\u6807\u51c6\u529f\u7387(W)",
                "type": "int"
              },
              {
                "children": [],
                "default": "30",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_CORRECT_FAULT_TOLERANT",
                "name": "CL_SWITCH_POWER_MEASURE_CORRECT_FAULT_TOLERANT",
                "range": null,
                "title": "\u5bb9\u9519\u7387(%)",
                "type": "int"
              },
              {
                "children": [],
                "default": "5000",
                "depends_on": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
                "help": null,
                "id": "CL_SWITCH_POWER_MEASURE_CORRECT_TIME",
                "name": "CL_SWITCH_POWER_MEASURE_CORRECT_TIME",
                "range": null,
                "title": "\u6821\u51c6\u65f6\u95f4(ms)",
                "type": "int"
              }
            ],
            "default": "n",
            "depends_on": "CL_SWITCH_USE_POWER_MEASURE",
            "help": null,
            "id": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
            "name": "CL_SWITCH_USE_POWER_MEASURE_CORRECT",
            "range": null,
            "title": "\u4ea7\u6d4b\u6821\u51c6",
            "type": "bool"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_SWITCH_USE_POWER_MEASURE",
        "is_menuconfig": true,
        "name": "CL_SWITCH_USE_POWER_MEASURE",
        "range": null,
        "title": "\u8ba1\u91cf",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_USE_USB",
            "is_menuconfig": true,
            "name": "CL_SWITCH_USE_USB",
            "range": null,
            "title": "USB",
            "type": "bool"
          },
          {
            "children": [
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_USB_CONTROL_TYPE>",
                "help": null,
                "id": "CL_SWITCH_USB_CONTROL_TYPE_ON",
                "name": "CL_SWITCH_USB_CONTROL_TYPE_ON",
                "range": null,
                "title": "\u5e38\u5f00",
                "type": "bool",
                "default": "y"
              },
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_USB_CONTROL_TYPE>",
                "help": null,
                "id": "CL_SWITCH_USB_CONTROL_TYPE_OFF",
                "name": "CL_SWITCH_USB_CONTROL_TYPE_OFF",
                "range": null,
                "title": "\u5e38\u95ed",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_SWITCH_USB_CONTROL_TYPE>",
                "help": null,
                "id": "CL_SWITCH_USB_CONTROL_TYPE_SWITCH",
                "name": "CL_SWITCH_USB_CONTROL_TYPE_SWITCH",
                "range": null,
                "title": "\u53ef\u63a7",
                "type": "bool"
              }
            ],
            "depends_on": "CL_SWITCH_USE_USB",
            "help": null,
            "id": "\u4ea7\u54c1\u914d\u7f6e-usb-\u5f00\u5173\u7c7b\u578b",
            "name": "CL_SWITCH_USB_CONTROL_TYPE",
            "title": "\u5f00\u5173\u7c7b\u578b",
            "type": "choice"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_USB",
            "help": null,
            "id": "CL_SWITCH_USB_CONTROL_RELAY_PIN",
            "name": "CL_SWITCH_USB_CONTROL_RELAY_PIN",
            "range": null,
            "title": "USB\u8f93\u51fa\u5f15\u811a",
            "type": "int"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_SWITCH_USE_USB",
        "is_menuconfig": true,
        "name": "CL_SWITCH_USE_USB",
        "range": null,
        "title": "USB",
        "type": "menu"
      },
      {
        "children": [],
        "depends_on": "CL_SWITCH_USB_CONTROL_TYPE_SWITCH",
        "help": null,
        "id": "CL_SWITCH_USB_CONTROL_KEY_PIN",
        "name": "CL_SWITCH_USB_CONTROL_KEY_PIN",
        "range": null,
        "title": "USB\u6309\u952e\u5f15\u811a",
        "type": "int"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_USE_PLATE_CONTROL",
            "is_menuconfig": true,
            "name": "CL_SWITCH_USE_PLATE_CONTROL",
            "range": null,
            "title": "\u7fd8\u677f\u5f00\u5173",
            "type": "bool"
          },
          {
            "children": [],
            "depends_on": "CL_SWITCH_USE_PLATE_CONTROL",
            "help": null,
            "id": "CL_SWITCH_PLATE_CONTROL_PIN",
            "name": "CL_SWITCH_PLATE_CONTROL_PIN",
            "range": null,
            "title": "\u7fd8\u677f\u5f00\u5173\u5f15\u811a",
            "type": "int"
          },
          {
            "children": [
              {
                "children": [],
                "default": "6",
                "depends_on": "CL_SWITCH_USE_PLATE_CONTROL && CL_SWITCH_USE_PLATE_CONFIG",
                "help": null,
                "id": "CL_SWITCH_PLATE_CONFIG_COUNT",
                "name": "CL_SWITCH_PLATE_CONFIG_COUNT",
                "range": null,
                "title": "\u5f00\u5173\u6b21\u6570",
                "type": "int"
              },
              {
                "children": [],
                "default": "10000",
                "depends_on": "CL_SWITCH_USE_PLATE_CONTROL && CL_SWITCH_USE_PLATE_CONFIG",
                "help": null,
                "id": "CL_SWITCH_PLATE_CONFIG_CLS_TIME",
                "name": "CL_SWITCH_PLATE_CONFIG_CLS_TIME",
                "range": null,
                "title": "\u6e05\u9664\u65f6\u95f4",
                "type": "int"
              }
            ],
            "default": "y",
            "depends_on": "CL_SWITCH_USE_PLATE_CONTROL",
            "help": null,
            "id": "CL_SWITCH_USE_PLATE_CONFIG",
            "name": "CL_SWITCH_USE_PLATE_CONFIG",
            "range": null,
            "title": "\u591a\u6b21\u5f00\u5173\u914d\u7f51",
            "type": "bool"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_SWITCH_USE_PLATE_CONTROL",
        "is_menuconfig": true,
        "name": "CL_SWITCH_USE_PLATE_CONTROL",
        "range": null,
        "title": "\u7fd8\u677f\u5f00\u5173",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_SWITCH_USE_WOL",
            "is_menuconfig": true,
            "name": "CL_SWITCH_USE_WOL",
            "range": null,
            "title": "WOL",
            "type": "bool"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_SWITCH_USE_WOL",
        "is_menuconfig": true,
        "name": "CL_SWITCH_USE_WOL",
        "range": null,
        "title": "WOL",
        "type": "menu"
      },
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_POWER_SWITCH_CONFIG",
            "is_menuconfig": true,
            "name": "CL_POWER_SWITCH_CONFIG",
            "range": null,
            "title": "\u591a\u6b21\u4e0a\u7535\u914d\u7f51",
            "type": "bool"
          },
          {
            "children": [],
            "default": "3",
            "depends_on": "CL_POWER_SWITCH_CONFIG",
            "help": null,
            "id": "CL_POWER_SWITCH_CONFIG_COUNT",
            "name": "CL_POWER_SWITCH_CONFIG_COUNT",
            "range": null,
            "title": "\u91cd\u590d\u4e0a\u7535\u6b21\u6570",
            "type": "int"
          },
          {
            "children": [],
            "default": "5000",
            "depends_on": "CL_POWER_SWITCH_CONFIG",
            "help": null,
            "id": "CL_POWER_SWITCH_CONFIG_CLEAN_TIME",
            "name": "CL_POWER_SWITCH_CONFIG_CLEAN_TIME",
            "range": null,
            "title": "\u6e05\u9664\u65f6\u95f4",
            "type": "int"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_POWER_SWITCH_CONFIG",
        "is_menuconfig": true,
        "name": "CL_POWER_SWITCH_CONFIG",
        "range": null,
        "title": "\u591a\u6b21\u4e0a\u7535\u914d\u7f51",
        "type": "menu"
      }
    ],
    "depends_on": null,
    "id": "\u4ea7\u54c1\u914d\u7f6e",
    "title": "\u4ea7\u54c1\u914d\u7f6e",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [
          {
            "children": [],
            "default": "n",
            "depends_on": null,
            "help": null,
            "id": "CL_CUSTOM_DEFINE_ENABLE",
            "is_menuconfig": true,
            "name": "CL_CUSTOM_DEFINE_ENABLE",
            "range": null,
            "title": "\u5b8f\u5b9a\u4e49",
            "type": "bool"
          },
          {
            "children": [
              {
                "children": [],
                "default": "\"\"",
                "depends_on": "CL_CUSTOM_DEFINE_ENABLE && CL_CUSTOM_DEFINE_ENABLE",
                "help": null,
                "id": "CL_CUSTOM_-id-_DEFINE_key",
                "name": "CL_CUSTOM_-id-_DEFINE_key",
                "range": null,
                "title": "\u5b8f",
                "type": "string",
                "placement": "left"
              },
              {
                "children": [],
                "default": "\"\"",
                "depends_on": "CL_CUSTOM_DEFINE_ENABLE && CL_CUSTOM_DEFINE_ENABLE",
                "help": null,
                "id": "CL_CUSTOM_-id-_DEFINE_value",
                "name": "CL_CUSTOM_-id-_DEFINE_value",
                "range": null,
                "title": "\u503c",
                "type": "string",
                "placement": "right"
              }
            ],
            "depends_on": "CL_CUSTOM_DEFINE_ENABLE",
            "id": "\u81ea\u5b9a\u4e49-\u5b8f\u5b9a\u4e49--type-menu2-",
            "title": "",
            "type": "menu2"
          }
        ],
        "default": "n",
        "depends_on": null,
        "help": null,
        "id": "CL_CUSTOM_DEFINE_ENABLE",
        "is_menuconfig": true,
        "name": "CL_CUSTOM_DEFINE_ENABLE",
        "range": null,
        "title": "\u5b8f\u5b9a\u4e49",
        "type": "menu"
      }
    ],
    "depends_on": null,
    "id": "\u81ea\u5b9a\u4e49",
    "title": "\u81ea\u5b9a\u4e49",
    "type": "menu"
  }
]
