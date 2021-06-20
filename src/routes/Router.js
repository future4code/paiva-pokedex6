import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import PokemonDetails from "../pages/PokemonDetails";
import NotFound from "../pages/NotFound";

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
          <NotFound/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
