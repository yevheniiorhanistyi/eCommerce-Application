import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import NotFound404 from '../pages/NotFound404/NotFound404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

export default router;
