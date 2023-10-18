import http from '@/utils/request';

const apiTest = {
  getTest: (params: GetTest.params) => http.get<GetTest.data>('/test', params),
  postTest: (params: PostTest.params) =>
    http.post<PostTest.data>('/test', params),
  getLastCompileJSON: (device_model_id) => http.get('/admin/api/device_model/compile/config', { device_model_id }),
  // getLastCompileJSON: (device_model_id) => {
  //   return new Promise((res,rej) => {
  //     res({
  //       formconfig: {
  //         CL_BUTTON_CONTROL_2_GPIO: "2",
  //         CL_BUTTON_CONTROL_2_LONG_FUN_fun_btn_remote_fun_set_off: "y",
  //         CL_BUTTON_CONTROL_2_DOUBLE_FUN_fun_btn_remote_fun_set_off: "y",
  //         CL_BUTTON_CONTROL_2_CLICK_FUN_fun_btn_remote_fun_set_off: "y"
  //       }
  //     })
  //   })
  // },
  getKconfig: (pid) => http.get('/admin/api/device_model/compile/kconfig', { pid }),
  uploadCompile: (urlquerys, config, formconfig) => http.post('/admin/api/v2/device_model/compile', { urlquerys, config, formconfig }),

};

export default apiTest;
