
export const kconfigJSON = [
  {
      "children": [
          {
              "children": [],
              "default": "\"\"",
              "depends_on": null,
              "help": null,
              "id": "CL_PRODUCT_NAME",
              "name": "CL_PRODUCT_NAME",
              "range": null,
              "title": "产品名称",
              "type": "string"
          },
          {
              "children": [],
              "default": "\"1.0.0\"",
              "depends_on": null,
              "help": null,
              "id": "CL_HARDWARE_VERSION",
              "name": "CL_HARDWARE_VERSION",
              "range": null,
              "title": "硬件版本",
              "type": "string"
          }
      ],
      "depends_on": null,
      "id": "基本信息",
      "title": "基本信息",
      "type": "menu"
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
                      "title": "未设置",
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
              "id": "芯片模组-芯片",
              "name": "CL_CHIP_TYPE",
              "title": "芯片",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-esp32模组",
              "name": "CL_ESP32_MODULE",
              "title": "ESP32模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-esp32c3模组",
              "name": "CL_ESP32C3_MODULE",
              "title": "ESP32C3模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-esp8685模组",
              "name": "CL_ESP8685_MODULE",
              "title": "ESP8685模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-esp8684模组",
              "name": "CL_ESP8684_MODULE",
              "title": "ESP8684模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-bl602c模组",
              "name": "CL_BL602C_MODULE",
              "title": "BL602C模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-bl602l模组",
              "name": "CL_BL602L_MODULE",
              "title": "BL602L模组",
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
                      "title": "不使用模组",
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
              "id": "芯片模组-ln882h模组",
              "name": "CL_LN882H_MODULE",
              "title": "LN882H模组",
              "type": "choice"
          }
      ],
      "depends_on": null,
      "id": "芯片模组",
      "title": "芯片模组",
      "type": "menu"
  },
  {
      "children": [
          {
              "children": [
                  {
                      "children": [],
                      "depends_on": "<choice CL_LIGHT_TYPE>",
                      "help": null,
                      "id": "CL_LIGHT_TYPE_BULB_LIGHT",
                      "name": "CL_LIGHT_TYPE_BULB_LIGHT",
                      "range": null,
                      "title": "球泡灯",
                      "type": "bool",
                      "default": "y"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_LIGHT_TYPE>",
                      "help": null,
                      "id": "CL_LIGHT_TYPE_CEILING_LIGHT",
                      "name": "CL_LIGHT_TYPE_CEILING_LIGHT",
                      "range": null,
                      "title": "吸顶灯",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "depends_on": "<choice CL_LIGHT_TYPE>",
                      "help": null,
                      "id": "CL_LIGHT_TYPE_MUSIC_STRIP",
                      "name": "CL_LIGHT_TYPE_MUSIC_STRIP",
                      "range": null,
                      "title": "灯带",
                      "type": "bool"
                  }
              ],
              "depends_on": null,
              "help": null,
              "id": "产品配置-灯的类型",
              "name": "CL_LIGHT_TYPE",
              "title": "灯的类型",
              "type": "choice"
          },
          {
              "children": [
                  {
                      "children": [
                          {
                              "children": [],
                              "depends_on": "<choice CL_LIGHT_RGBCW_TYPE>",
                              "help": null,
                              "id": "CL_LIGHT_C",
                              "name": "CL_LIGHT_C",
                              "range": null,
                              "title": "C",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_LIGHT_RGBCW_TYPE>",
                              "help": null,
                              "id": "CL_LIGHT_CW",
                              "name": "CL_LIGHT_CW",
                              "range": null,
                              "title": "CW",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_LIGHT_RGBCW_TYPE>",
                              "help": null,
                              "id": "CL_LIGHT_RGB",
                              "name": "CL_LIGHT_RGB",
                              "range": null,
                              "title": "RGB",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_LIGHT_RGBCW_TYPE>",
                              "help": null,
                              "id": "CL_LIGHT_RGBC",
                              "name": "CL_LIGHT_RGBC",
                              "range": null,
                              "title": "RGBC",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "<choice CL_LIGHT_RGBCW_TYPE>",
                              "help": null,
                              "id": "CL_LIGHT_RGBCW",
                              "name": "CL_LIGHT_RGBCW",
                              "range": null,
                              "title": "RGBCW",
                              "type": "bool",
                              "default": "y"
                          }
                      ],
                      "depends_on": null,
                      "help": null,
                      "id": "产品配置-rgbcw-rgbcw信道",
                      "name": "CL_LIGHT_RGBCW_TYPE",
                      "title": "RGBCW信道",
                      "type": "choice"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "default": "y",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_USE_PWM_DRIVER",
                              "is_menuconfig": true,
                              "name": "CL_LIGHT_USE_PWM_DRIVER",
                              "range": null,
                              "title": "PWM驱动",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "default": "5000",
                              "depends_on": "CL_LIGHT_USE_PWM_DRIVER",
                              "help": null,
                              "id": "CL_LIGHT_PWM_DRIVER_FREQ",
                              "name": "CL_LIGHT_PWM_DRIVER_FREQ",
                              "range": [
                                  10,
                                  20000
                              ],
                              "title": "PWM频率",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "y",
                              "depends_on": "CL_LIGHT_USE_PWM_DRIVER",
                              "help": null,
                              "id": "CL_LIGHT_PWM_DRIVER_ACTIVE_LEVEL_HIGH",
                              "name": "CL_LIGHT_PWM_DRIVER_ACTIVE_LEVEL_HIGH",
                              "range": null,
                              "title": "高电平有效",
                              "type": "bool"
                          }
                      ],
                      "default": "y",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_USE_PWM_DRIVER",
                      "is_menuconfig": true,
                      "name": "CL_LIGHT_USE_PWM_DRIVER",
                      "range": null,
                      "title": "PWM驱动",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "default": "n",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_USE_IIC_DRIVER",
                              "is_menuconfig": true,
                              "name": "CL_LIGHT_USE_IIC_DRIVER",
                              "range": null,
                              "title": "使能IIC驱动",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER",
                              "help": null,
                              "id": "CL_LIGHT_IIC_DRIVER_SDA",
                              "name": "CL_LIGHT_IIC_DRIVER_SDA",
                              "range": null,
                              "title": "SDA引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER",
                              "help": null,
                              "id": "CL_LIGHT_IIC_DRIVER_SCL",
                              "name": "CL_LIGHT_IIC_DRIVER_SCL",
                              "range": null,
                              "title": "SCL引脚",
                              "type": "int"
                          }
                      ],
                      "default": "n",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_USE_IIC_DRIVER",
                      "is_menuconfig": true,
                      "name": "CL_LIGHT_USE_IIC_DRIVER",
                      "range": null,
                      "title": "使能IIC驱动",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_PWM_DRIVER && <choice CL_LIGHT_R_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_R_DRIVER_TYPE_PWM",
                                      "name": "CL_LIGHT_R_DRIVER_TYPE_PWM",
                                      "range": null,
                                      "title": "PWM",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_IIC_DRIVER && <choice CL_LIGHT_R_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_R_DRIVER_TYPE_IIC_BP5758D",
                                      "name": "CL_LIGHT_R_DRIVER_TYPE_IIC_BP5758D",
                                      "range": null,
                                      "title": "IIC_BP5758D",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-r-配置-r-驱动方式",
                              "name": "CL_LIGHT_R_DRIVER_TYPE",
                              "title": "R 驱动方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "1",
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_R_DRIVER_CHANNEL",
                              "name": "CL_LIGHT_R_DRIVER_CHANNEL",
                              "range": null,
                              "title": "R 驱动信道",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "14",
                              "depends_on": "CL_LIGHT_R_DRIVER_TYPE_PWM && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_R_DRIVER_PWM_IO",
                              "name": "CL_LIGHT_R_DRIVER_PWM_IO",
                              "range": [
                                  0,
                                  36
                              ],
                              "title": "PWM引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "10",
                              "depends_on": "CL_LIGHT_R_DRIVER_TYPE_IIC_BP5758D && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_R_DRIVER_MAX_CURRENT",
                              "name": "CL_LIGHT_R_DRIVER_MAX_CURRENT",
                              "range": null,
                              "title": "驱动最大电流",
                              "type": "int"
                          }
                      ],
                      "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                      "id": "产品配置-rgbcw-r-配置",
                      "title": "R 配置",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_PWM_DRIVER && <choice CL_LIGHT_G_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_G_DRIVER_TYPE_PWM",
                                      "name": "CL_LIGHT_G_DRIVER_TYPE_PWM",
                                      "range": null,
                                      "title": "PWM",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_IIC_DRIVER && <choice CL_LIGHT_G_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_G_DRIVER_TYPE_IIC_BP5758D",
                                      "name": "CL_LIGHT_G_DRIVER_TYPE_IIC_BP5758D",
                                      "range": null,
                                      "title": "IIC_BP5758D",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-g-配置-g-驱动方式",
                              "name": "CL_LIGHT_G_DRIVER_TYPE",
                              "title": "G 驱动方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "2",
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_G_DRIVER_CHANNEL",
                              "name": "CL_LIGHT_G_DRIVER_CHANNEL",
                              "range": null,
                              "title": "G 驱动信道",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "20",
                              "depends_on": "CL_LIGHT_G_DRIVER_TYPE_PWM && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_G_DRIVER_PWM_IO",
                              "name": "CL_LIGHT_G_DRIVER_PWM_IO",
                              "range": [
                                  0,
                                  36
                              ],
                              "title": "PWM引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "10",
                              "depends_on": "CL_LIGHT_G_DRIVER_TYPE_IIC_BP5758D && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_G_DRIVER_MAX_CURRENT",
                              "name": "CL_LIGHT_G_DRIVER_MAX_CURRENT",
                              "range": null,
                              "title": "驱动最大电流",
                              "type": "int"
                          }
                      ],
                      "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                      "id": "产品配置-rgbcw-g-配置",
                      "title": "G 配置",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_PWM_DRIVER && <choice CL_LIGHT_B_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_B_DRIVER_TYPE_PWM",
                                      "name": "CL_LIGHT_B_DRIVER_TYPE_PWM",
                                      "range": null,
                                      "title": "PWM",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_IIC_DRIVER && <choice CL_LIGHT_B_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_B_DRIVER_TYPE_IIC_BP5758D",
                                      "name": "CL_LIGHT_B_DRIVER_TYPE_IIC_BP5758D",
                                      "range": null,
                                      "title": "IIC_BP5758D",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-b-配置-b-驱动方式",
                              "name": "CL_LIGHT_B_DRIVER_TYPE",
                              "title": "B 驱动方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "3",
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_B_DRIVER_CHANNEL",
                              "name": "CL_LIGHT_B_DRIVER_CHANNEL",
                              "range": null,
                              "title": "B 驱动信道",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "21",
                              "depends_on": "CL_LIGHT_B_DRIVER_TYPE_PWM && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_B_DRIVER_PWM_IO",
                              "name": "CL_LIGHT_B_DRIVER_PWM_IO",
                              "range": [
                                  0,
                                  36
                              ],
                              "title": "PWM引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "10",
                              "depends_on": "CL_LIGHT_B_DRIVER_TYPE_IIC_BP5758D && (CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_B_DRIVER_MAX_CURRENT",
                              "name": "CL_LIGHT_B_DRIVER_MAX_CURRENT",
                              "range": null,
                              "title": "驱动最大电流",
                              "type": "int"
                          }
                      ],
                      "depends_on": "CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                      "id": "产品配置-rgbcw-b-配置",
                      "title": "B 配置",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_PWM_DRIVER && <choice CL_LIGHT_C_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_C_DRIVER_TYPE_PWM",
                                      "name": "CL_LIGHT_C_DRIVER_TYPE_PWM",
                                      "range": null,
                                      "title": "PWM",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_IIC_DRIVER && <choice CL_LIGHT_C_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_C_DRIVER_TYPE_IIC_BP5758D",
                                      "name": "CL_LIGHT_C_DRIVER_TYPE_IIC_BP5758D",
                                      "range": null,
                                      "title": "IIC_BP5758D",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_C || CL_LIGHT_CW || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-c-cc-配置-c-驱动方式",
                              "name": "CL_LIGHT_C_DRIVER_TYPE",
                              "title": "C 驱动方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "4",
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER && (CL_LIGHT_C || CL_LIGHT_CW || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_C_DRIVER_CHANNEL",
                              "name": "CL_LIGHT_C_DRIVER_CHANNEL",
                              "range": null,
                              "title": "C 驱动信道",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "22",
                              "depends_on": "CL_LIGHT_C_DRIVER_TYPE_PWM && (CL_LIGHT_C || CL_LIGHT_CW || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_C_DRIVER_PWM_IO",
                              "name": "CL_LIGHT_C_DRIVER_PWM_IO",
                              "range": [
                                  0,
                                  36
                              ],
                              "title": "PWM引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "10",
                              "depends_on": "CL_LIGHT_C_DRIVER_TYPE_IIC_BP5758D && (CL_LIGHT_C || CL_LIGHT_CW || CL_LIGHT_RGBC || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_C_DRIVER_MAX_CURRENT",
                              "name": "CL_LIGHT_C_DRIVER_MAX_CURRENT",
                              "range": null,
                              "title": "驱动最大电流",
                              "type": "int"
                          }
                      ],
                      "depends_on": "CL_LIGHT_C || CL_LIGHT_CW || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                      "id": "产品配置-rgbcw-c-cc-配置",
                      "title": "C(CC) 配置",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_PWM_DRIVER && <choice CL_LIGHT_W_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_W_DRIVER_TYPE_PWM",
                                      "name": "CL_LIGHT_W_DRIVER_TYPE_PWM",
                                      "range": null,
                                      "title": "PWM",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "CL_LIGHT_USE_IIC_DRIVER && <choice CL_LIGHT_W_DRIVER_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_W_DRIVER_TYPE_IIC_BP5758D",
                                      "name": "CL_LIGHT_W_DRIVER_TYPE_IIC_BP5758D",
                                      "range": null,
                                      "title": "IIC_BP5758D",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_CW || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-w-t-配置-w-驱动方式",
                              "name": "CL_LIGHT_W_DRIVER_TYPE",
                              "title": "W 驱动方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "5",
                              "depends_on": "CL_LIGHT_USE_IIC_DRIVER && (CL_LIGHT_CW || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_W_DRIVER_CHANNEL",
                              "name": "CL_LIGHT_W_DRIVER_CHANNEL",
                              "range": null,
                              "title": "W 驱动信道",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "3",
                              "depends_on": "CL_LIGHT_W_DRIVER_TYPE_PWM && (CL_LIGHT_CW || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_W_DRIVER_PWM_IO",
                              "name": "CL_LIGHT_W_DRIVER_PWM_IO",
                              "range": [
                                  0,
                                  36
                              ],
                              "title": "PWM引脚",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "10",
                              "depends_on": "CL_LIGHT_W_DRIVER_TYPE_IIC_BP5758D && (CL_LIGHT_CW || CL_LIGHT_RGBCW)",
                              "help": null,
                              "id": "CL_LIGHT_W_DRIVER_MAX_CURRENT",
                              "name": "CL_LIGHT_W_DRIVER_MAX_CURRENT",
                              "range": null,
                              "title": "驱动最大电流",
                              "type": "int"
                          }
                      ],
                      "depends_on": "CL_LIGHT_CW || CL_LIGHT_RGBCW",
                      "id": "产品配置-rgbcw-w-t-配置",
                      "title": "W(T) 配置",
                      "type": "menu"
                  },
                  {
                      "children": [
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_FULLPOWER",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_FULLPOWER",
                                      "range": null,
                                      "title": "全功率(倍功率)",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_HALFPOWER",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_HALFPOWER",
                                      "range": null,
                                      "title": "半功率(恒功率)",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_CW2RGB",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_CW2RGB",
                                      "range": null,
                                      "title": "RGB混色",
                                      "type": "bool",
                                      "default": "y"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_CCT",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_CCT",
                                      "range": null,
                                      "title": "CCT",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_CWL",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_CWL",
                                      "range": null,
                                      "title": "CWL",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_CW_OUT_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_CW_OUT_TYPE_C2RGB",
                                      "name": "CL_LIGHT_CW_OUT_TYPE_C2RGB",
                                      "range": null,
                                      "title": "C2RGB",
                                      "type": "bool"
                                  }
                              ],
                              "depends_on": "CL_LIGHT_CW || CL_LIGHT_RGB || CL_LIGHT_RGBC || CL_LIGHT_RGBCW",
                              "help": null,
                              "id": "产品配置-rgbcw-参数配置-色温输出方式",
                              "name": "CL_LIGHT_CW_OUT_TYPE",
                              "title": "色温输出方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "0",
                              "depends_on": "CL_LIGHT_CW_OUT_TYPE_CCT",
                              "help": null,
                              "id": "CL_LIGHT_CCT_WHITE_PWM",
                              "name": "CL_LIGHT_CCT_WHITE_PWM",
                              "range": null,
                              "title": "白光对应的PWM",
                              "type": "int"
                          },
                          {
                              "children": [
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_TRANSITION_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_TRANSITION_TYPE_JUMP",
                                      "name": "CL_LIGHT_TRANSITION_TYPE_JUMP",
                                      "range": null,
                                      "title": "跳变",
                                      "type": "bool"
                                  },
                                  {
                                      "children": [],
                                      "depends_on": "<choice CL_LIGHT_TRANSITION_TYPE>",
                                      "help": null,
                                      "id": "CL_LIGHT_TRANSITION_TYPE_SHADE",
                                      "name": "CL_LIGHT_TRANSITION_TYPE_SHADE",
                                      "range": null,
                                      "title": "渐变",
                                      "type": "bool",
                                      "default": "y"
                                  }
                              ],
                              "depends_on": null,
                              "help": null,
                              "id": "产品配置-rgbcw-参数配置-颜色过度方式",
                              "name": "CL_LIGHT_TRANSITION_TYPE",
                              "title": "颜色过度方式",
                              "type": "choice"
                          },
                          {
                              "children": [],
                              "default": "100",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_CW_MIN_BRIGHT",
                              "name": "CL_LIGHT_CW_MIN_BRIGHT",
                              "range": [
                                  1,
                                  1000
                              ],
                              "title": "CW最小亮度",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "1000",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_CW_MAX_BRIGHT",
                              "name": "CL_LIGHT_CW_MAX_BRIGHT",
                              "range": [
                                  1,
                                  1000
                              ],
                              "title": "CW最大亮度",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "100",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_RGB_MIN_BRIGHT",
                              "name": "CL_LIGHT_RGB_MIN_BRIGHT",
                              "range": [
                                  1,
                                  1000
                              ],
                              "title": "RGB最小亮度",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "1000",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_RGB_MAX_BRIGHT",
                              "name": "CL_LIGHT_RGB_MAX_BRIGHT",
                              "range": [
                                  1,
                                  1000
                              ],
                              "title": "RGB最大亮度",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "y",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_GENERAL_COLOR_CAL",
                              "name": "CL_LIGHT_GENERAL_COLOR_CAL",
                              "range": null,
                              "title": "通用颜色矫正",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "default": "n",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_RGB_POWER_LIMIT",
                              "name": "CL_LIGHT_RGB_POWER_LIMIT",
                              "range": null,
                              "title": "RGB功率限制",
                              "type": "bool"
                          },
                          {
                              "children": [],
                              "default": "n",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_CW_POWER_LIMIT",
                              "name": "CL_LIGHT_CW_POWER_LIMIT",
                              "range": null,
                              "title": "CW功率限制",
                              "type": "bool"
                          }
                      ],
                      "depends_on": null,
                      "id": "产品配置-rgbcw-参数配置",
                      "title": "参数配置",
                      "type": "menu"
                  }
              ],
              "depends_on": null,
              "id": "产品配置-rgbcw",
              "title": "RGBCW",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "y",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_FIRST_WIFI_CFG_STATUS",
                      "name": "CL_LIGHT_FIRST_WIFI_CFG_STATUS",
                      "range": null,
                      "title": "首次配网开启配网状态提醒",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "default": "0",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_DEFAULT_COLOR_H",
                      "name": "CL_LIGHT_DEFAULT_COLOR_H",
                      "range": null,
                      "title": "默认色值(H)",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "1000",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_DEFAULT_COLOR_S",
                      "name": "CL_LIGHT_DEFAULT_COLOR_S",
                      "range": null,
                      "title": "默认饱和度(S)",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "65535",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_DEFAULT_COLOR_T",
                      "name": "CL_LIGHT_DEFAULT_COLOR_T",
                      "range": null,
                      "title": "默认色温(T)",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "1000",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_DEFAULT_BRIGHT",
                      "name": "CL_LIGHT_DEFAULT_BRIGHT",
                      "range": [
                          0,
                          1000
                      ],
                      "title": "默认亮度",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "500",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_LIGHT_DEFAULT_SPEED",
                      "name": "CL_LIGHT_DEFAULT_SPEED",
                      "range": [
                          0,
                          1000
                      ],
                      "title": "默认速度",
                      "type": "int"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "default": "250",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_STATIC_SHADE_TIME",
                              "name": "CL_LIGHT_STATIC_SHADE_TIME",
                              "range": [
                                  100,
                                  5000
                              ],
                              "title": "颜色切换渐变时间",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "200",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_ON_SHADE_TIME",
                              "name": "CL_LIGHT_ON_SHADE_TIME",
                              "range": [
                                  100,
                                  5000
                              ],
                              "title": "开灯渐变时间",
                              "type": "int"
                          },
                          {
                              "children": [],
                              "default": "100",
                              "depends_on": null,
                              "help": null,
                              "id": "CL_LIGHT_OFF_SHADE_TIME",
                              "name": "CL_LIGHT_OFF_SHADE_TIME",
                              "range": [
                                  100,
                                  5000
                              ],
                              "title": "关灯渐变时间",
                              "type": "int"
                          }
                      ],
                      "depends_on": null,
                      "id": "产品配置-默认状态设置-渐变时间设置",
                      "title": "渐变时间设置",
                      "type": "menu"
                  }
              ],
              "depends_on": null,
              "id": "产品配置-默认状态设置",
              "title": "默认状态设置",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "y",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_POWER_SWITCH_CONFIG",
                      "is_menuconfig": true,
                      "name": "CL_POWER_SWITCH_CONFIG",
                      "range": null,
                      "title": "多次上电配网",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "default": "3",
                      "depends_on": "CL_POWER_SWITCH_CONFIG",
                      "help": null,
                      "id": "CL_POWER_SWITCH_CONFIG_COUNT",
                      "name": "CL_POWER_SWITCH_CONFIG_COUNT",
                      "range": [
                          0,
                          30
                      ],
                      "title": "重复上电次数",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "5000",
                      "depends_on": "CL_POWER_SWITCH_CONFIG",
                      "help": null,
                      "id": "CL_POWER_SWITCH_CONFIG_CLEAN_TIME",
                      "name": "CL_POWER_SWITCH_CONFIG_CLEAN_TIME",
                      "range": [
                          0,
                          60000
                      ],
                      "title": "清除时间",
                      "type": "int"
                  }
              ],
              "default": "y",
              "depends_on": null,
              "help": null,
              "id": "CL_POWER_SWITCH_CONFIG",
              "is_menuconfig": true,
              "name": "CL_POWER_SWITCH_CONFIG",
              "range": null,
              "title": "多次上电配网",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "y",
                      "depends_on": null,
                      "help": null,
                      "id": "CL_MUSIC_MODE",
                      "is_menuconfig": true,
                      "name": "CL_MUSIC_MODE",
                      "range": null,
                      "title": "音乐模式",
                      "type": "bool"
                  },
                  {
                      "children": [
                          {
                              "children": [],
                              "default": "5",
                              "depends_on": "CL_MUSIC_MODE && CL_MUSIC_MODE_OUT",
                              "help": null,
                              "id": "CL_MUSIC_MODE_OUT_ADC_PIN",
                              "name": "CL_MUSIC_MODE_OUT_ADC_PIN",
                              "range": null,
                              "title": "ADC引脚",
                              "type": "int"
                          }
                      ],
                      "default": "n",
                      "depends_on": "CL_MUSIC_MODE",
                      "help": null,
                      "id": "CL_MUSIC_MODE_OUT",
                      "name": "CL_MUSIC_MODE_OUT",
                      "range": null,
                      "title": "设备麦音乐模式",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "default": "y",
                      "depends_on": "CL_MUSIC_MODE",
                      "help": null,
                      "id": "CL_MUSIC_MODE_INT",
                      "name": "CL_MUSIC_MODE_INT",
                      "range": null,
                      "title": "手机麦音乐模式",
                      "type": "bool"
                  },
                  {
                      "children": [],
                      "default": "60",
                      "depends_on": "CL_MUSIC_MODE",
                      "help": null,
                      "id": "CL_MUSIC_MODE_SENSITIVITY",
                      "name": "CL_MUSIC_MODE_SENSITIVITY",
                      "range": [
                          0,
                          100
                      ],
                      "title": "默认灵敏度",
                      "type": "int"
                  },
                  {
                      "children": [],
                      "default": "0",
                      "depends_on": "CL_MUSIC_MODE",
                      "help": null,
                      "id": "CL_MUSIC_MODE_INDEX",
                      "name": "CL_MUSIC_MODE_INDEX",
                      "range": [
                          0,
                          255
                      ],
                      "title": "默认音乐效果",
                      "type": "int"
                  }
              ],
              "default": "y",
              "depends_on": null,
              "help": null,
              "id": "CL_MUSIC_MODE",
              "is_menuconfig": true,
              "name": "CL_MUSIC_MODE",
              "range": null,
              "title": "音乐模式",
              "type": "menu"
          },
          {
              "children": [
                  {
                      "children": [],
                      "default": "n",
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
