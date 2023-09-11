import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Catalog from '../pages/Catalog/Catalog';
import DetailedProductPage from '../pages/DetailedProductPage/DetailedProductPage';
import Profile from '../pages/Profile/Profile';
import AboutUs from '../pages/AboutUs/AboutUs';
import NotFound404 from '../pages/NotFound404/NotFound404';

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
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/*',
        element: <NotFound404 />,
      },
    ],
  },
]);

export default router;
