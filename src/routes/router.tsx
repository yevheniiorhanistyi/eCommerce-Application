import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/login/login';
import Main from '../pages/main/main';
import Registration from '../pages/registration/registration';

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
]);

export default router;
