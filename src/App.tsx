import React from "react";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import PreviewPoster from "./pages/movieDetail/previewPoster";

export interface MovieDetailParamTypes {
  id: string;
  search: string;
}

function App() {
  return (
    <HashRouter basename="/">
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id/:search">
            <Route path="/:id/:search/preview">
              <PreviewPoster />
            </Route>
            <MovieDetail />
          </Route>
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
