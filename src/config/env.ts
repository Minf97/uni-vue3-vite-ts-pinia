import { valueType } from "ant-design-vue/es/statistic/utils";

const apiEnv: ApiEnv = 'dev';

const envMap = {
  dev: {
    baseUrl: '',
    apiBaseUrl: ''
  },
  beta: {
    baseUrl: 'http://m.beta.xxx.com',
    apiBaseUrl: 'https://m.betaapi.xxx.com'
  },
  prod: {
    baseUrl: '',
    apiBaseUrl: ''
  },
  local: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com'
  }
};


// type demo = {
//   demo1: {
//     name: string
//   }
//   demo2: {
//     name: string
//   }
// }

// const test:keyof demo = ""



type ApiEnv = keyof typeof envMap;
type Env<T extends ApiEnv> = {
  apiEnv: T;
} & (typeof envMap)[T];

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
  return Object.assign({ apiEnv }, envMap[apiEnv]);
}

const env = createEnv(apiEnv);
export default env;
