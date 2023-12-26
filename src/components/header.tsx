import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="text-main flex w-full gap-4 p-2 px-4">
      <HeaderLink children="home" to="/" />
      <HeaderLink children="profile" to="/1F6A7" />
      <HeaderLink children="gallery" to="/1F6A7" />
      <HeaderLink children="note" to="/1F6A7" />
    </div>
  );
};

const HeaderLink = (props: { to: string; children: ReactNode }) => (
  <Link
    children={props.children}
    to={props.to}
    className="font-urbanist text-xl decoration-from-font hover:underline"
  />
);
