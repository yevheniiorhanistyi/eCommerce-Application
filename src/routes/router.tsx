import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import NotFound404 from '../pages/NotFound404/NotFound404';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Profile from '../pages/Profile/Profile';

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
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
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound404 />,
      },
    ],
  },
]);

export default router;
