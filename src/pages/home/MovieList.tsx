import React from "react";
import { List } from "antd";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers";
import { MovieState } from "../../reducers/movieReducer";
import InfiniteScroll from "../../components/InfiniteScroll";
import { moreMoviesAction } from "../../actions/movieActions";

interface MovieListProps {
  disableInfiniteScroll?: boolean;
}

const MovieList = ({ disableInfiniteScroll }: MovieListProps) => {
  const moviesState = useSelector<AppState, MovieState>(
    (state) => state.moviesState
  );
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      minItem={10}
      disable={disableInfiniteScroll}
      loadMore={() =>
        dispatch(
          moreMoviesAction({
            search: moviesState.filters.search,
            page: moviesState.filters.page + 1,
          })
        )
      }
    >
      <List
        grid={{ gutter: 16, column: 5, xs: 2, sm: 16 }}
        dataSource={moviesState.Search}
        loading={moviesState.status === "LOADING"}
        renderItem={(item) => (
          <List.Item className="page-items">
            <MovieCard
              key={item.imdbID}
              {...item}
              search={moviesState.filters.search}
            />
          </List.Item>
        )}
      />
    </InfiniteScroll>
  );
};

export default MovieList;
