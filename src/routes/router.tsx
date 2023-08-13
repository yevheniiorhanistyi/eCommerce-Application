import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SingUp from '../pages/RegistrationPage/SingUp';
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
    element: <SingUp />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

export default router;
