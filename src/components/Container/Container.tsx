import React, { ReactElement } from "react";

import Title from "assets/images/pokeapi_title.png";

interface Props {
  children: ReactElement;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-50 px-4">
      <img src={Title} alt="PokeApi" className="w-60 h-auto my-8" />
      {children}
    </div>
  );
};

export default Container;
