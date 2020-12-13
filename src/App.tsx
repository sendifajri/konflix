import React from "react";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import PreviewPoster from "./pages/movieDetail/previewPoster";

export interface MovieDetailParamTypes {
  id: string;
  search: string;
}

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
