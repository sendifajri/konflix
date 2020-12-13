import React from "react";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import { HashRouter, Route } from "react-router-dom";
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
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id/:search">
          <MovieDetail />
        </Route>
        <Route path="/:id/:search/preview">
          <PreviewPoster />
        </Route>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
