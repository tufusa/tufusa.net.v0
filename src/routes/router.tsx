import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'routes/layout';
import { Home } from 'pages/home';
import { UnderConstruction } from 'pages/underConstruction';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/1F6A7', element: <UnderConstruction /> }],
  },
]);
