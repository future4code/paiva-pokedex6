import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Pokedex from "../pages/Pokedex";
import PokemonDetails from "../pages/PokemonDetails";
import Error from "../pages/Error";

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/pokedex">
          <Pokedex/>
        </Route>

        <Route exact path="/details/:id">
          <PokemonDetails/>
        </Route>

        <Route>
          <Error/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
