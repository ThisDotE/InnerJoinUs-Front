import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage/MainPageAfterLogin/mainbackdata.vue'; // 컴포넌트 경로 확인

const router = createRouter({
  history: createWebHistory(), // HTML5 History 모드
  routes: [
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
    },
    // 추가 라우트 설정
  ],
});

export default router;
