import { combineReducers } from "redux";
import { movieDetailReducer, movieReducer } from "./movieReducer";

// ASYNC STATUS TYPES;
export type STATUS = "LOADING" | "DONE" | "ERROR";

// Dynamic reducer action types
export type IReducerAction<IData> = {
  type: string;
  data: IData;
};

// combine all reducers
const rootReducer = combineReducers({
  moviesState: movieReducer,
  movieDetailState: movieDetailReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
