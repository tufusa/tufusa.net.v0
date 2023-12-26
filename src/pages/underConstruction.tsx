import threeEyesWhite from 'assets/3eyes-w.svg';

export const UnderConstruction = () => (
  <>
    <img
      src={threeEyesWhite}
      className="
        m-auto
        h-40
        animate-[spin_10s_linear_infinite]
        hover:animate-[spin_0.004s_linear_infinite]
      "
    />
    <p className="mx-auto my-5 font-mono text-2xl">under construction</p>
  </>
);
