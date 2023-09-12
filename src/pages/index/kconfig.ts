


export const kconfigJSON = [
  {
    "children": [],
    "depends_on": null,
    "help": "Product name help",
    "id": "CL_PRODUCT_NAME",
    "name": "CL_PRODUCT_NAME",
    "range": null,
    "title": "Product name",
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
        // "inline": true,
        "type": "bool"
      },

      {
        "children": [],
        "depends_on": "CL_CHIP_TYPE_ESP32",
        "help": null,
        "id": "CL_ESP32_MODULE_ENABLE_LEXIN_D0WD",
        "name": "CL_ESP32_MODULE_ENABLE_LEXIN_D0WD",
        "range": null,
        // "inline": true,
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
  },
  {
    "children": [
      {
        "children": [],
        "depends_on": null,
        "help": null,
        "id": "CL_HARDWARE_VERSION",
        "name": "CL_HARDWARE_VERSION",
        "range": null,
        "title": "Hardware version",
        "type": "string"
      }
    ],
    "depends_on": null,
    "id": "version-configuration",
    "title": "Version configuration",
    "type": "menu"
  },
  {
    "children": [
      {
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
    ],
    "depends_on": null,
    "id": "system-configuration",
    "title": "System configuration",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_TYPE_IR",
                "name": "CL_REMOTE_CONTROL_TYPE_IR",
                "range": null,
                "title": "IR remote",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_TYPE_BLE",
                "name": "CL_REMOTE_CONTROL_TYPE_BLE",
                "range": null,
                "title": "BLE remote",
                "type": "bool"
              }
            ],
            "depends_on": "CL_REMOTE_CONTROL_ENABLED",
            "help": null,
            "id": "remote-control-enable-remote-control-remote-type",
            "name": "CL_REMOTE_CONTROL_TYPE",
            "title": "Remote type",
            "type": "choice"
          }
        ],
        "depends_on": null,
        "help": null,
        "id": "CL_REMOTE_CONTROL_ENABLED",
        "name": "CL_REMOTE_CONTROL_ENABLED",
        "range": null,
        "title": "Enable remote control",
        "type": "bool"
      },
      {
        "children": [],
        "depends_on": "CL_REMOTE_CONTROL_TYPE_IR",
        "help": null,
        "id": "CL_REMOTE_CONTROL_IR_HEAD",
        "name": "CL_REMOTE_CONTROL_IR_HEAD",
        "range": null,
        "title": "ir head",
        "type": "int"
      },
      {
        "children": [
          // {
          //   "children": [],
          //   "depends_on": "CL_REMOTE_CONTROL_ENABLED",
          //   "help": null,
          //   "id": "CL_REMOTE_CONTROL_1_CODE",
          //   "name": "CL_REMOTE_CONTROL_-id-_CODE",
          //   "range": null,
          //   "title": "code",
          //   "type": "int",
          //   "placement": "left"
          // },
          {
            "children": [
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_1_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_1_FUN_ON",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_ON",
                "range": null,
                "title": "on",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_1_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_1_FUN_OFF",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_OFF",
                "range": null,
                "title": "off",
                "type": "bool"
              }
            ],
            "depends_on": "CL_REMOTE_CONTROL_ENABLED",
            "help": null,
            "id": "remote-control-remote-fun-fun",
            "name": "CL_REMOTE_CONTROL_-id-_FUN",
            "title": "fun",
            "type": "choice",
            "placement": "right"
          }
        ],
        "depends_on": "CL_REMOTE_CONTROL_ENABLED",
        "id": "remote-control-remote-fun",
        "title": "Remote fun",
        "type": "menu2"
      }
    ],
    "depends_on": null,
    "id": "remote-control",
    "title": "Remote control",
    "type": "menu"
  }
]
