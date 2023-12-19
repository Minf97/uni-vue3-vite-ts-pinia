
export const kconfigJSON = [

  {
      "children": [
          {
              "children": [
                  {
                      "children": [],
                      "default": "y",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_REMOTE_CONTROL",
                      "is_menuconfig": true,
                      "name": "CL_REMOTE_CONTROL",
                      "range": null,
                      "title": "遥控控制",
                      "type": "bool"
                  }
              ],
              "default": "n",
              "depends_on": null,
              "help": null,
              "id": "CL_REMOTE_CONTROL",
              "is_menuconfig": true,
              "name": "CL_REMOTE_CONTROL",
              "range": null,
              "title": "遥控控制",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_TYPE_IR",
                      "name": "CL_REMOTE_CONTROL_TYPE_IR",
                      "range": null,
                      "title": "红外",
                      "type": "bool",
                      "default": "y"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_TYPE_RF",
                      "name": "CL_REMOTE_CONTROL_TYPE_RF",
                      "range": null,
                      "title": "433",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_TYPE_BLE",
                      "name": "CL_REMOTE_CONTROL_TYPE_BLE",
                      "range": null,
                      "title": "蓝牙2.4G",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_TYPE_COZYLIFE_OTP",
                      "name": "CL_REMOTE_CONTROL_TYPE_COZYLIFE_OTP",
                      "range": null,
                      "title": "CozyLife OTP",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_REMOTE_CONTROL_TYPE>",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_TYPE_USER_DEFINE",
                      "name": "CL_REMOTE_CONTROL_TYPE_USER_DEFINE",
                      "range": null,
                      "title": "宏定义",
                      "type": "bool"
                  }
              ],
              "depends_on": "CL_REMOTE_CONTROL",
              "help": null,
              "id": "产品配置-遥控控制方式",
              "name": "CL_REMOTE_CONTROL_TYPE",
              "title": "遥控控制方式",
              "type": "choice"
          },
          {
              "children": [],
              "depends_on": "CL_REMOTE_CONTROL && CL_REMOTE_CONTROL_TYPE_IR",
              "help": null,
              "id": "CL_IR_CONTROL_PIN",
              "name": "CL_IR_CONTROL_PIN",
              "range": null,
              "title": "红外驱动引脚",
              "type": "int"
          },
          {
              "children": [],
              "depends_on": "CL_REMOTE_CONTROL && CL_REMOTE_CONTROL_TYPE_IR",
              "help": null,
              "id": "CL_REMOTE_CONTROL_IR_HEAD",
              "name": "CL_REMOTE_CONTROL_IR_HEAD",
              "range": null,
              "title": "红外码头",
              "type": "int"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "0",
                      "depends_on": "CL_REMOTE_CONTROL",
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
                              "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_light_on",
                              "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_light_on",
                              "range": null,
                              "title": "on",
                              "type": "bool",
                              "default": "y"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                              "help": null,
                              "id": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_light_off",
                              "name": "CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_light_off",
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
                              "id": "CL_REMOTE_CONTROL_-id-_FUN_custom",
                              "name": "CL_REMOTE_CONTROL_-id-_FUN_custom",
                              "range": null,
                              "title": "custom",
                              "type": "bool"
                          }
                      ],
                      "depends_on": "CL_REMOTE_CONTROL",
                      "help": null,
                      "id": "产品配置--type-menu2--fun-placement-middle-",
                      "name": "CL_REMOTE_CONTROL_-id-_FUN",
                      "title": "Fun",
                      "type": "choice",
                      "placement": "middle"
                  },
                  {
                      "children": [],
                      "default": "\"\"",
                      "depends_on": "(CL_REMOTE_CONTROL_-id-_FUN_fun_btn_remote_fun_set_color || CL_REMOTE_CONTROL_-id-_FUN_custom) && CL_REMOTE_CONTROL",
                      "help": null,
                      "id": "CL_REMOTE_CONTROL_-id-_FUN_arg",
                      "name": "CL_REMOTE_CONTROL_-id-_FUN_arg",
                      "range": null,
                      "title": "",
                      "type": "string",
                      "placement": "right"
                  }
              ],
              "depends_on": "CL_REMOTE_CONTROL",
              "id": "产品配置--type-menu2-",
              "title": "",
              "type": "menu2"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "n",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_KEY_CONTROL",
                      "is_menuconfig": true,
                      "name": "CL_KEY_CONTROL",
                      "range": null,
                      "title": "按键控制",
                      "type": "bool"
                  }
              ],
              "default": "n",
              "depends_on": null,
              "help": null,
              "id": "CL_KEY_CONTROL",
              "is_menuconfig": true,
              "name": "CL_KEY_CONTROL",
              "range": null,
              "title": "按键控制",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "depends_on": "CL_KEY_CONTROL",
                      "help": null,
                      "id": "CL_KEY_CONTROL_-id-_CODE",
                      "name": "CL_KEY_CONTROL_-id-_CODE",
                      "range": null,
                      "title": "引脚",
                      "type": "int",
                      "placement": "left"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_CLICK_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_null",
                              "name": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_null",
                              "range": null,
                              "title": "不设置",
                              "type": "bool",
                              "default": "y"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_CLICK_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_light_on",
                              "name": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_light_on",
                              "range": null,
                              "title": "on",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_CLICK_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_light_off",
                              "name": "CL_KEY_CONTROL_-id-_CLICK_FUN_fun_btn_remote_fun_light_off",
                              "range": null,
                              "title": "off",
                              "type": "bool"
                          }
                      ],
                      "depends_on": "CL_KEY_CONTROL",
                      "help": null,
                      "id": "产品配置--type-menu2--单击-placement-right-",
                      "name": "CL_KEY_CONTROL_-id-_CLICK_FUN",
                      "title": "单击",
                      "type": "choice",
                      "placement": "right"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_DOUBLE_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_null",
                              "name": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_null",
                              "range": null,
                              "title": "不设置",
                              "type": "bool",
                              "default": "y"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_DOUBLE_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_light_on",
                              "name": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_light_on",
                              "range": null,
                              "title": "on",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_DOUBLE_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_light_off",
                              "name": "CL_KEY_CONTROL_-id-_DOUBLE_FUN_fun_btn_remote_fun_light_off",
                              "range": null,
                              "title": "off",
                              "type": "bool"
                          }
                      ],
                      "depends_on": "CL_KEY_CONTROL",
                      "help": null,
                      "id": "产品配置--type-menu2--双击-placement-right-",
                      "name": "CL_KEY_CONTROL_-id-_DOUBLE_FUN",
                      "title": "双击",
                      "type": "choice",
                      "placement": "right"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_LONG_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_LONG_FUN_null",
                              "name": "CL_KEY_CONTROL_-id-_LONG_FUN_null",
                              "range": null,
                              "title": "不设置",
                              "type": "bool",
                              "default": "y"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_LONG_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_light_on",
                              "name": "CL_KEY_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_light_on",
                              "range": null,
                              "title": "on",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_KEY_CONTROL_-id-_LONG_FUN>",
                              "help": null,
                              "id": "CL_KEY_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_light_off",
                              "name": "CL_KEY_CONTROL_-id-_LONG_FUN_fun_btn_remote_fun_light_off",
                              "range": null,
                              "title": "off",
                              "type": "bool"
                          }
                      ],
                      "depends_on": "CL_KEY_CONTROL",
                      "help": null,
                      "id": "产品配置--type-menu2--长按-placement-right-",
                      "name": "CL_KEY_CONTROL_-id-_LONG_FUN",
                      "title": "长按",
                      "type": "choice",
                      "placement": "right"
                  }
              ],
              "depends_on": "CL_KEY_CONTROL",
              "id": "产品配置--type-menu2-",
              "title": "",
              "type": "menu2"
          }
      ],
      "depends_on": null,
      "id": "产品配置",
      "title": "产品配置",
      "type": "menu"
  }
]
