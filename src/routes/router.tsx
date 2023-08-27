import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Catalog from '../pages/Catalog/Catalog';
import NotFound404 from '../pages/NotFound404/NotFound404';
import PrimaryLayout from '../layouts/PrimaryLayout';

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
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '*',
        element: <NotFound404 />,
      },
    ],
  },
]);

export default router;
