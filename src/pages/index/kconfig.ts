
export const kconfigJSON = [
  {
    "children": [],
    "default": "n",
    "depends_on": null,
    "help": null,
    "id": "CL_YYY",
    "name": "CL_YYY",
    "range": null,
    "title": "YYY",
    "type": "bool"
  },
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "default": "0",
                "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                "help": null,
                "id": "CL_BUTTON_CONTROL_-id-_GPIO",
                "name": "CL_BUTTON_CONTROL_-id-_GPIO",
                "range": null,
                "title": "GPIO",
                "type": "int",
                "placement": "left"
              },
              {
                "children": [
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_CLICK_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_set_on",
                    "name": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_set_on",
                    "range": null,
                    "title": "on",
                    "type": "bool",
                    "default": "y"
                  },
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_CLICK_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_set_off",
                    "name": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_set_off",
                    "range": null,
                    "title": "off",
                    "type": "bool"
                  }
                ],
                "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                "help": null,
                "id": "button-control-enable-button-control-button-fun-type-menu2--click-fun-placement-right-",
                "name": "CL_BUTTON_CONTROL_-id-_CLICK_FUN",
                "title": "Click fun",
                "type": "choice",
                "placement": "right"
              },
              {
                "children": [
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_DOUBLE_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_set_on",
                    "name": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_set_on",
                    "range": null,
                    "title": "on",
                    "type": "bool",
                    "default": "y"
                  },
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_DOUBLE_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_set_off",
                    "name": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_set_off",
                    "range": null,
                    "title": "off",
                    "type": "bool"
                  }
                ],
                "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                "help": null,
                "id": "button-control-enable-button-control-button-fun-type-menu2--double-fun-placement-right-",
                "name": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN",
                "title": "Double fun",
                "type": "choice",
                "placement": "right"
              },
              {
                "children": [
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_LONG_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_set_on",
                    "name": "CL_BUTTON_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_set_on",
                    "range": null,
                    "title": "on",
                    "type": "bool",
                    "default": "y"
                  },
                  {
                    "children": [],
                    "depends_on": "<choice CL_BUTTON_CONTROL_-id-_LONG_FUN>",
                    "help": null,
                    "id": "CL_BUTTON_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_set_off",
                    "name": "CL_BUTTON_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_set_off",
                    "range": null,
                    "title": "off",
                    "type": "bool"
                  }
                ],
                "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                "help": null,
                "id": "button-control-enable-button-control-button-fun-type-menu2--long-fun-placement-right-",
                "name": "CL_BUTTON_CONTROL_-id-_LONG_FUN",
                "title": "Long fun",
                "type": "choice",
                "placement": "right"
              }
            ],
            "depends_on": "CL_BUTTON_CONTROL_ENABLED",
            "id": "button-control-enable-button-control-button-fun-type-menu2-",
            "title": "Button fun",
            "type": "menu2"
          }
        ],
        "depends_on": null,
        "help": null,
        "id": "CL_BUTTON_CONTROL_ENABLED",
        "name": "CL_BUTTON_CONTROL_ENABLED",
        "range": null,
        "title": "Enable button control",
        "type": "bool"
      }
    ],
    "depends_on": null,
    "id": "button-control",
    "title": "Button control",
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
                "type": "bool",
                "default": "y"
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
        "default": "n",
        "title": "Enable remote control",
        "type": "bool"
      },
      {
        "children": [],
        "default": "0",
        "depends_on": "CL_REMOTE_CONTROL_TYPE_IR",
        "help": null,
        "id": "CL_REMOTE_CONTROL_IR_HEAD",
        "name": "CL_REMOTE_CONTROL_IR_HEAD",
        "range": null,
        "title": "IR head",
        "type": "int"
      },
      {
        "children": [
          {
            "children": [],
            "default": "0",
            "depends_on": "CL_REMOTE_CONTROL_ENABLED",
            "help": null,
            "id": "CL_REMOTE_CONTROL_-id-_CODE",
            "name": "CL_REMOTE_CONTROL_-id-_CODE",
            "range": null,
            "title": "Code",
            "type": "int",
            "placement": "left"
          },
          {
            "children": [
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_on",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_on",
                "range": null,
                "title": "on",
                "type": "bool",
                "default": "y"
              },
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_off",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_off",
                "range": null,
                "title": "off",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_color",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_color",
                "range": null,
                "title": "color",
                "type": "bool"
              },
              {
                "children": [],
                "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                "help": null,
                "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_custom",
                "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_custom",
                "range": null,
                "title": "custom",
                "type": "bool"
              }
            ],
            "depends_on": "CL_REMOTE_CONTROL_ENABLED",
            "help": null,
            "id": "remote-control-remote-fun-type-menu2--fun-placement-middle-",
            "name": "CL_REMOTE_CONTROL_-id-_FUN",
            "title": "Fun",
            "type": "choice",
            "placement": "middle"
          },
          {
            "children": [],
            "default": "\"\"",
            "depends_on": "(CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_color || CL_REMOTE_CONTROL_-id-_FUN_fun_custom) && CL_REMOTE_CONTROL_ENABLED",
            "help": null,
            "id": "CL_REMOTE_CONTROL_-id-_FUN_arg",
            "name": "CL_REMOTE_CONTROL_-id-_FUN_arg",
            "range": null,
            "title": "",
            "type": "string",
            "placement": "right"
          }
        ],
        "depends_on": "CL_REMOTE_CONTROL_ENABLED",
        "id": "remote-control-remote-fun-type-menu2-",
        "title": "Remote fun",
        "type": "menu2"
      }
    ],
    "depends_on": null,
    "id": "remote-control",
    "title": "Remote control",
    "type": "menu"
  },
  {
    "children": [
      {
        "children": [
          {
            "children": [],
            "default": "\"\"",
            "depends_on": null,
            "help": null,
            "id": "CL_CUSTOM_-id-_CUSTOM_key",
            "name": "CL_CUSTOM_-id-_CUSTOM_key",
            "range": null,
            "title": "key",
            "type": "string",
            "placement": "left"
          },
          {
            "children": [],
            "default": "\"\"",
            "depends_on": null,
            "help": null,
            "id": "CL_CUSTOM_-id-_CUSTOM_value",
            "name": "CL_CUSTOM_-id-_CUSTOM_value",
            "range": null,
            "title": "value",
            "type": "string",
            "placement": "right"
          }
        ],
        "depends_on": null,
        "id": "custom-define-type-menu2-",
        "title": "Define",
        "type": "menu2"
      }
    ],
    "depends_on": null,
    "id": "custom",
    "title": "CUSTOM",
    "type": "menu"
  }
]
