import http from '@/utils/request';

const apiTest = {
  getTest: (params: GetTest.params) => http.get<GetTest.data>('/test', params),
  postTest: (params: PostTest.params) =>
    http.post<PostTest.data>('/test', params),
  // getLastCompileJSON: (device_model_id) => http.get('/admin/api/device_model/compile/config', { device_model_id }),
  getLastCompileJSON: (device_model_id) => {
    return new Promise((res, rej) => {
      res({
        formconfig: {

          "CL_CHIP_TYPE_NULL": "y",
          "CL_REMOTE_CONTROL_1_FUN_fun_btn_remote_fun_set_color": "y",
          "CL_REMOTE_CONTROL_1_FUN_arg": '666',
          "CL_REMOTE_CONTROL_2_FUN_fun_btn_remote_fun_set_color": "y",
          "CL_REMOTE_CONTROL_2_FUN_arg": '777',
        }
      })
    })
  },
  getKconfig: (pid) => http.get('/admin/api/device_model/compile/kconfig', { pid }),
  uploadCompile: (urlquerys, config, formconfig) => http.post('/admin/api/v2/device_model/compile', { urlquerys, config, formconfig }),

};

export default apiTest;
