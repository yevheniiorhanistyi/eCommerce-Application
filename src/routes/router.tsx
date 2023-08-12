import { createBrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn/SignIn';
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
    element: <SignIn />,
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
