import 'uno.css';
import { createSSRApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

export function createApp() {
  const app = createSSRApp(App).use(store).use(Antd);
  return {
    app
  };
}
