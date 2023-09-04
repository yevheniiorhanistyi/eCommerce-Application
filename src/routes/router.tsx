import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Catalog from '../pages/Catalog/Catalog';
import NotFound404 from '../pages/NotFound404/NotFound404';
import PrimaryLayout from '../layouts/PrimaryLayout';
import DetailedProductPage from '../pages/DetailedProductPage/DetailedProductPage';
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
        path: '/product/:key',
        element: <DetailedProductPage />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/category/:key',
        element: <Catalog />,
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
