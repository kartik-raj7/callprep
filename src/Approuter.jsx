import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from './pages/Errorpage';
import { Spin } from 'antd';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className='loaderstyle'><Spin size="large" /></div>}>
        <Routes>
          {routes.map(({ path, component: Component, exact, roles }) => (
            <Route
              key={path}
              path={path}
              element={<Component roles={roles} />}
            />
          ))}
          <Route path='*' component={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
