import threeEyesWhite from 'assets/3eyes-w.svg';
import threeEyesBlack from 'assets/3eyes-b.svg';
import { useMedia } from 'react-use';

export const Home = () => {
  const isDark = useMedia('(prefers-color-scheme: dark)');

  return (
    <>
      <img
        src={isDark ? threeEyesWhite : threeEyesBlack}
        className="
        m-auto
        h-40
        animate-[spin_10s_linear_infinite]
        hover:animate-[spin_0.004s_linear_infinite]
      "
      />
      <p className="mx-auto my-5 text-xl">UNDER CONSTRUCTION</p>
    </>
  );
};
