import React, { useState } from "react";

import { useGetPokemonByNameQuery } from "config/api";
import SearchView from "views/Search";
import StatsView from "views/Stats";
import useDebounce from "hooks/useDebounce";

const GetPokemon: React.FC = () => {
  const [value, setValue] = useState("");
  const [searchOffset, setSearchOffset] = useState(0);

  const debouncedValue = useDebounce(value, 300);

  const { data, isLoading } = useGetPokemonByNameQuery({
    name: debouncedValue,
    offset: searchOffset,
  });

  const clearSearch = () => setValue("");

  const handleNextClick = () => {
    if (data?.count && searchOffset < data?.count) {
      setSearchOffset(searchOffset + 20);
    }
  };

  const handlePreviousClick = () => {
    if (data?.count && searchOffset > 0) {
      setSearchOffset(searchOffset - 20);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.results) {
    return (
      <SearchView
        data={data?.results}
        onSearch={setValue}
        onNext={handleNextClick}
        onPrevious={handlePreviousClick}
      />
    );
  }

  if (data?.id) {
    return (
      <StatsView name={data.name} stats={data?.stats} goBack={clearSearch} />
    );
  }

  return <div className="text-red-500">There has been an error.</div>;
};

export default GetPokemon;
