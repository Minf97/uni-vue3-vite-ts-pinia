import { hexToDecimal, decimalToHex } from '@/utils/util';


export const useInput = () => {
  const unitType = ref<'sixteen' | 'ten'>('sixteen');
  const formatValue = ref<string | number>('');
  const tooltipFlag = ref(false);
  const inputVal = ref('');
  const status = ref<'' | 'error' | 'warning'>(''); // 校验状态
  const range = reactive({ min: 0, max: 65535 });

  const onChange = () => {
    // 校验输入值是否符合预期
    if (!checkNumber(inputVal.value)) {
      formatValue.value = '输入值不正确！'
      status.value = 'error'
      return;
    }
    status.value = '';

    // 判断用户输入值,是想输入10进制的,还是想输入16进制的
    if (/^\d+$/.test(inputVal.value)) {
      // 纯数字10进制
      formatValue.value = unitType.value == 'sixteen' ? decimalToHex(Number(inputVal.value)) : Number(inputVal.value);
      if (
        Number(inputVal.value) > range.max ||
        Number(inputVal.value) < range.min
      ) {
        formatValue.value = '输入值超出范围！'
        status.value = 'error'
      }
    }
    else {
      // 有字母，即16进制
      formatValue.value = unitType.value == 'sixteen' ? inputVal.value : hexToDecimal(inputVal.value);
      if (
        hexToDecimal(inputVal.value) > range.max ||
        hexToDecimal(inputVal.value) < range.min
      ) {
        formatValue.value = '输入值超出范围！'
        status.value = 'error'
      }
    }
  }

  watch(unitType, () => onChange());

  return {
    // 当前选择的进制类型
    unitType,
    // tooltip值
    formatValue,
    // tooltip展示标志位
    tooltipFlag,
    // input的值
    inputVal,
    // input的状态
    status,
    range,

    onChange
  }
}


function checkNumber(input) {
  if(!input) return false
  const trimmedInput = input.replace(/\s/g, ''); // 去除空格
  const regexDecimal = /^[0-9]+$/; // 纯数字的正则表达式
  const regexHex = /^0x[0-9A-Fa-f]+$/; // 十六进制的正则表达式

  if (regexDecimal.test(trimmedInput)) {
    return true; // 纯数字
  } else if (regexHex.test(trimmedInput)) {
    return true; // 十六进制数字
  } else {
    return false; // 非纯数字或十六进制数字
  }
}
