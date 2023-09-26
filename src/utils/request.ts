
import { isDevelopment, isH5 } from './platform';
import { forward } from './router';
import { getCommonParams } from '@/config/commonParams';
import env from '@/config/env';
import { hideLoading, showLoading } from '@/config/serviceLoading';

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '抢购火爆，稍候片刻！', errno = -1 } = err;
  switch (errno) {
    case 10000:
      // 特殊异常处理
      forward('login');
      break;

    default:
      uni.showToast({
        icon: 'error',
        title: errmsg
      });
      break;
  }
}

// h5环境开启代理
// const apiBaseUrl = isH5 && isDevelopment ? '/api' : env.apiBaseUrl;
const apiBaseUrl = env.apiBaseUrl;

function baseRequest(
  method:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined,
  url: string,
  data: { isLoading: any }
) {
  console.log(data,666);

  return new Promise((resolve) => {
    showLoading(true);
    delete data.isLoading;
    let responseDate: unknown;
    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 20000,

      data,
      success: (res: any) => {
        if(res.data.ret === '1') {
          responseDate = res.data.info;
        }
        else {
          reject({
            errno: -1,
            errmsg: res.data.desc
          });
        }
      },
      fail: () => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~'
        });
      },
      complete: (data) => {
        console.log(data, 'data');
        resolve(responseDate);
        hideLoading();
      }
    });
  });
}

const http = {
  get: <T>(api: string, params: any) =>
    baseRequest('GET', api, {
      // ...getCommonParams(),
      ...params
    }) as Http.Response<T>,
  post: <T>(api: string, params: any) =>
    baseRequest('POST', api, params) as Http.Response<T>
};

export default http;
