import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('./pages/Homepage')),
        exact: true,
      },
  {
    path: '/home',
    component: lazy(() => import('./pages/Homepage')),
    exact: true,
    preload: true, 
  },
  {
    path: '*',
    component: lazy(() => import('./pages/Errorpage')),
    exact: true,
    preload: true, 
  },
];

export default routes;