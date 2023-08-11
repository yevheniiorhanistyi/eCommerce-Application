import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Registration from '../pages/Registration/Registration';
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
