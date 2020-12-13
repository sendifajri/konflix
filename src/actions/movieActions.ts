import { dispatchTypes, getAction } from "./getActions";
import {
  MovieState,
  MOVIE_INITIAL_STATE,
  MOVIE_DETAIL_INITIAL_STATE,
  IMovieDetail,
} from "../reducers/movieReducer";
import { API_URL } from "../utils/api";

export interface IMovieActions {
  search: string;
  page: number;
}

export interface IMovieDetailActions {
  id: string;
}

export const GET_MOVIES = "GET_MOVIES";
export const GET_MORE_MOVIES = "GET_MORE_MOVIES";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";
export const SET_FILTERS = "SET_FILTERS";

export const setFilters = ({ search, page }: IMovieActions) => (
  dispatch: any
) => {
  dispatch({
    type: "SET_FILTERS",
    data: {
      filters: {
        search,
        page,
      },
    },
  });
};

export const movieActions = ({ search, page }: IMovieActions) => (
  dispatch: (
    arg: (dispatch: dispatchTypes<MovieState>) => void
  ) => dispatchTypes<MovieState>
) => {
  dispatch(setFilters({ search, page }));
  dispatch(
    getAction<MovieState>({
      url: `${API_URL}&s=${search}&page=${page}`,
      nameType: GET_MOVIES,
      initialValue: MOVIE_INITIAL_STATE,
    })
  );
};

export const moreMoviesAction = ({ search, page }: IMovieActions) => (
  dispatch: (
    arg: (dispatch: dispatchTypes<MovieState>) => void
  ) => dispatchTypes<MovieState>
) => {
  dispatch(setFilters({ search, page }));
  dispatch(
    getAction<MovieState>({
      url: `${API_URL}&s=${search}&page=${page}`,
      nameType: GET_MORE_MOVIES,
      initialValue: MOVIE_INITIAL_STATE,
    })
  );
};

export const movieDetailActions = ({ id }: IMovieDetailActions) => (
  dispatch: (
    arg: (dispatch: dispatchTypes<IMovieDetail>) => void
  ) => dispatchTypes<IMovieDetail>
) => {
  dispatch(movieDetailActionsLoading());
  dispatch(
    getAction<IMovieDetail>({
      url: `${API_URL}&i=${id}`,
      nameType: GET_MOVIES_DETAIL,
      initialValue: MOVIE_DETAIL_INITIAL_STATE,
    })
  );
};

export const movieDetailActionsLoading = () => (
  dispatch: (arg: { type: string; data: IMovieDetail }) => void
) => {
  dispatch({
    type: GET_MOVIES_DETAIL,
    data: { ...MOVIE_DETAIL_INITIAL_STATE, status: "LOADING" },
  });
};

export const movieActionsLoading = () => (
  dispatch: (arg: { type: string; data: MovieState }) => void
) => {
  dispatch({
    type: GET_MOVIES,
    data: { ...MOVIE_INITIAL_STATE, status: "LOADING" },
  });
};
