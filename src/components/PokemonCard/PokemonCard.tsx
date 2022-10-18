import React from "react";

import Pokeball from "assets/images/pokeball.png";
import capitalize from "utils/capitalize";

interface Props {
  name: string;
  onClick(): void;
}

const PokemonCard: React.FC<Props> = ({ name, onClick }) => {
  return (
    <button
      className="m-2 p-4 bg-gray-100 rounded-lg shadow-sm flex flex-col items-center w-32"
      onClick={onClick}
    >
      <img
        src={Pokeball}
        alt={`Picture of a ${name}`}
        className="w-16 h-auto"
      />
      <h2 className="text-lg font-semibold text-blue-900 pt-1">
        {capitalize(name)}
      </h2>
    </button>
  );
};

export default PokemonCard;
