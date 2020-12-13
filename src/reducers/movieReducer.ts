import { IReducerAction, STATUS } from ".";
import {
  GET_MORE_MOVIES,
  GET_MOVIES,
  GET_MOVIES_DETAIL,
  SET_FILTERS,
} from "../actions/movieActions";

// MOVIE
export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type MovieState = {
  Search?: IMovie[];
  status?: STATUS;
  filters: {
    page: number;
    search: string;
  };
};

export type MovieAction = {
  type: string;
  movies: IMovie[];
};

export type MovieDispatchType = (args: MovieAction) => MovieAction;

export const MOVIE_INITIAL_STATE: MovieState = {
  Search: [],
  status: "LOADING",
  filters: {
    page: 1,
    search: "",
  },
};

const movieReducer = (
  state = MOVIE_INITIAL_STATE,
  action: IReducerAction<MovieState>
) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.data.filters,
      };
    case GET_MOVIES:
      return {
        ...state,
        Search: action.data.Search,
        status: action.data.status,
      };
    case GET_MORE_MOVIES: {
      if (!state.Search || !action.data.Search) {
        return state;
      }
      return {
        ...state,
        Search: [...state.Search, ...action.data.Search],
        status: action.data.status,
      };
    }
    default: {
      return state;
    }
  }
};

// END MOVIE

// MOVIE DETAIL

export interface IMovieDetail extends IMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Response: string;
  Runtime: string;
  Website: string;
  Writer: string;
  imdbRating: string;
  imdbVotes: string;
  status?: STATUS;
}

export const MOVIE_DETAIL_INITIAL_STATE: IMovieDetail = {
  Actors: "",
  Awards: "",
  BoxOffice: "",
  Country: "",
  DVD: "",
  Director: "",
  Genre: "",
  Language: "",
  Metascore: "",
  Plot: "",
  Poster: "",
  Production: "",
  Rated: "",
  Response: "",
  Runtime: "",
  Title: "",
  Type: "",
  Website: "",
  Writer: "",
  Year: "",
  imdbID: "",
  imdbRating: "",
  imdbVotes: "",
  Ratings: [],
  status: "LOADING",
};

const movieDetailReducer = (
  state: IMovieDetail = MOVIE_DETAIL_INITIAL_STATE,
  action: IReducerAction<IMovieDetail>
) => {
  switch (action.type) {
    case GET_MOVIES_DETAIL:
      return {
        ...state,
        ...action.data,
      };
    default: {
      return state;
    }
  }
};

// END MOVIE DETAIL

export { movieReducer, movieDetailReducer };
