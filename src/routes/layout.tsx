import { Header } from 'components/header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const Layout = () => (
  <div
    className="
      bg-back flex
      min-h-screen
      flex-col text-white
    "
  >
    <Header />
    <ScrollRestoration />
    <Outlet />
  </div>
);
