import { createApp } from 'vue';
import App from './App.vue'; // App.vue 경로 확인
import router from './router'; // router 설정을 포함하는 index.js 경로 확인

// 전역 CSS
import './assets/main.css'; // 실제 경로에 따라 수정

const app = createApp(App);
app.use(router);
app.mount('#app');
