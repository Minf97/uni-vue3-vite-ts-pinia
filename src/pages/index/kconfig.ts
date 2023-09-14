


export const kconfigJSON = [
  {
      "children": [],
      "default": "\"\"",
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
              "default": "0",
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
              "default": "y",
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
                      "default": "y",
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
              "default": "\"0.0.1\"",
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
              "default": "20",
              "depends_on": null,
              "help": null,
              "id": "CL_LOOP_PERIOD",
              "name": "CL_LOOP_PERIOD",
              "range": [
                  10,
                  20
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
                              "children": [],
                              "default": "\"Click\"",
                              "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                              "help": null,
                              "id": "_CL_BUTTON_CONTROL_-id-_TYPE_CLICK",
                              "name": "_CL_BUTTON_CONTROL_-id-_TYPE_CLICK",
                              "range": null,
                              "title": "Click",
                              "type": "string",
                              "disabled": true,
                              "placement": "middle"
                          },
                          {
                              "children": [],
                              "default": "\"Dublue\"",
                              "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                              "help": null,
                              "id": "_CL_BUTTON_CONTROL_-id-_TYPE_DOUBLE",
                              "name": "_CL_BUTTON_CONTROL_-id-_TYPE_DOUBLE",
                              "range": null,
                              "title": "Dublue",
                              "type": "string",
                              "disabled": true,
                              "placement": "middle"
                          },
                          {
                              "children": [],
                              "default": "\"Long\"",
                              "depends_on": "CL_BUTTON_CONTROL_ENABLED",
                              "help": null,
                              "id": "_CL_BUTTON_CONTROL_-id-_TYPE_LONG",
                              "name": "_CL_BUTTON_CONTROL_-id-_TYPE_LONG",
                              "range": null,
                              "title": "Long",
                              "type": "string",
                              "disabled": true,
                              "placement": "middle"
                          },
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_BUTTON_CONTROL_-id-_CLICK_FUN>",
                                      "help": null,
                                      "id": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_ON",
                                      "name": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_ON",
                                      "range": null,
                                      "title": "on",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_BUTTON_CONTROL_-id-_CLICK_FUN>",
                                      "help": null,
                                      "id": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_OFF",
                                      "name": "CL_BUTTON_CONTROL_-id-_CLICK_FUN_OFF",
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
                                      "id": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_ON",
                                      "name": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_ON",
                                      "range": null,
                                      "title": "on",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_BUTTON_CONTROL_-id-_DOUBLE_FUN>",
                                      "help": null,
                                      "id": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_OFF",
                                      "name": "CL_BUTTON_CONTROL_-id-_DOUBLE_FUN_OFF",
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
                                      "id": "CL_BUTTON_CONTROL_-id-_LONG_FUN_ON",
                                      "name": "CL_BUTTON_CONTROL_-id-_LONG_FUN_ON",
                                      "range": null,
                                      "title": "on",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_BUTTON_CONTROL_-id-_LONG_FUN>",
                                      "help": null,
                                      "id": "CL_BUTTON_CONTROL_-id-_LONG_FUN_OFF",
                                      "name": "CL_BUTTON_CONTROL_-id-_LONG_FUN_OFF",
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
                              "id": "CL_REMOTE_CONTROL_-id-_FUN_ON",
                              "name": "CL_REMOTE_CONTROL_-id-_FUN_ON",
                              "range": null,
                              "title": "on",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_REMOTE_CONTROL_-id-_FUN>",
                              "help": null,
                              "id": "CL_REMOTE_CONTROL_-id-_FUN_OFF",
                              "name": "CL_REMOTE_CONTROL_-id-_FUN_OFF",
                              "range": null,
                              "title": "offffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                              "type": "bool"
                          }
                      ],
                      "depends_on": "CL_REMOTE_CONTROL_ENABLED",
                      "help": null,
                      "id": "remote-control-remote-fun-type-menu2--fun-placement-right-",
                      "name": "CL_REMOTE_CONTROL_-id-_FUN",
                      "title": "Fun",
                      "type": "choice",
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
  }
]
