import React from "react";
import { Provider } from "react-redux";

import GetPokemon from "pages/GetPokemon";
import { store } from "./config/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GetPokemon />
    </Provider>
  );
};

export default App;
