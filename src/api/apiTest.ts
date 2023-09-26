import http from '@/utils/request';

const apiTest = {
  getTest: (params: GetTest.params) => http.get<GetTest.data>('/test', params),
  postTest: (params: PostTest.params) =>
    http.post<PostTest.data>('/test', params),
  getLastCompileJSON: (device_model_id) => http.get('/admin/api/device_model/compile/config', { device_model_id }),
  getKconfig: (pid) => http.get('/admin/api/device_model/compile/kconfig', { pid }),
  uploadCompile: (urlquerys, config, formconfig) => http.post('/admin/api/v2/device_model/compile', { urlquerys, config, formconfig }),

};

export default apiTest;
