import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/login/login';
import Main from '../pages/main/main';
import Registration from '../pages/registration/registration';
import NotFound404 from '../pages/NotFound404/NotFound404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

export default router;
