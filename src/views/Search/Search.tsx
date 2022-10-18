import React from "react";

import PokemonCard from "components/PokemonCard";
import Container from "components/Container";

interface Props {
  data?: { name: string; url: string }[];
  onNext(): void;
  onPrevious(): void;
  onSearch(str: string): void;
}

const Search: React.FC<Props> = ({
  data = [],
  onSearch,
  onPrevious,
  onNext,
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onSearch(newValue);
  };

  const handleSelection = (name: string) => onSearch(name);

  return (
    <Container>
      <>
        <input
          type="search"
          placeholder="Search"
          className="text-xl outline-0 border-blue-400 focus:border-yellow-300 border-2 rounded-lg p-2 w-96 max-w-full"
          onChange={handleChange}
        />
        <div className="flex justify-between w-full px-6">
          <button
            onClick={onPrevious}
            className="text-5xl font-black text-blue-800"
          >
            &#x2190;
          </button>
          <button
            onClick={onNext}
            className="text-5xl font-black text-blue-800"
          >
            &#x2192;
          </button>
        </div>
        <div className="flex flex-wrap justify-center w-full pt-6">
          {data.map((item) => (
            <PokemonCard
              key={item.name}
              name={item.name}
              onClick={() => handleSelection(item.name)}
            />
          ))}
        </div>
      </>
    </Container>
  );
};

export default Search;
