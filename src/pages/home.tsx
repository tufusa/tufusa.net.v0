import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div
      className="
        bg-back flex min-h-screen
        flex-col items-center
        justify-center text-white
      "
    >
      <p className="font-poiret-one text-6xl">tufusa.net</p>
      <div className="font-urbanist text-main flex flex-row gap-6 p-6 text-2xl">
        <Link to="/1F6A7" children="profile" />
        <Link to="/1F6A7" children="gallery" />
        <Link to="/1F6A7" children="note" />
      </div>
    </div>
  );
};
