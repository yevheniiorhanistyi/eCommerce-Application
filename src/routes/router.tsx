import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
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
    element: <RegistrationPage />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

export default router;
