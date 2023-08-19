import { Outlet, ScrollRestoration } from 'react-router-dom';

export const Layout = () => (
  <div
    className="
      flex flex-col
      min-h-screen
      bg-white dark:bg-black
      text-black dark:text-white
    "
  >
    <ScrollRestoration />
    <Outlet />
  </div>
);
