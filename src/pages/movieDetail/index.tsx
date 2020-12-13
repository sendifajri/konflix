/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { movieActions, movieDetailActions } from "../../actions/movieActions";
import { AppState } from "../../reducers";
import { MovieDetailParamTypes } from "../../App";
import { IMovieDetail } from "../../reducers/movieReducer";
import {
  Col,
  Descriptions,
  Row,
  Image,
  Typography,
  Skeleton,
  Button,
} from "antd";
import { notfound } from "../../components/MovieCard";
import MovieList from "../home/MovieList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import scrollToTop from "../../utils/scrollTop";
import MovieRating from "../../components/MovieRating";

const { Title, Text } = Typography;
const MovieDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movieState = useSelector<AppState, IMovieDetail>(
    (state) => state.movieDetailState
  );
  const { id, search } = useParams<MovieDetailParamTypes>();

  useEffect(() => {
    scrollToTop();
    dispatch(movieDetailActions({ id }));
    dispatch(movieActions({ search: search, page: 1 }));
  }, [id]);

  return (
    <div>
      <Button
        color="#212121"
        size="large"
        icon={
          <FontAwesomeIcon className="anticon" icon={faChevronCircleLeft} />
        }
        onClick={() => history.push(`/?s=${search}`)}
      >
        Back
      </Button>
      <Row gutter={[16, 16]} className="movie-detail">
        <Skeleton active loading={movieState.status === "LOADING"}>
          <Col xs={24} md={5}>
            <Image
              alt={movieState.Title}
              loading="eager"
              src={movieState.Poster}
              height={300}
              preview={false}
              width="100%"
              onClick={() =>
                history.push(
                  `/${movieState.imdbID}/${search}/preview?url=${movieState.Poster}`
                )
              }
              className="object-fit-cover movie-poster cursor-zoom-in"
              fallback={notfound}
            />
          </Col>
          <Col xs={24} md={19}>
            <Descriptions size="small">
              <Descriptions.Item span={3} style={{ paddingBottom: 0 }}>
                <Title level={3} style={{ marginBottom: 0 }}>
                  {movieState.Title}{" "}
                  <Text type="secondary">({movieState.Year})</Text>
                </Title>
              </Descriptions.Item>
              <Descriptions.Item span={3}>
                <div className="movie-info">
                  <Text type="secondary">{movieState.Rated}</Text>
                  <Text type="secondary">{movieState.Runtime}</Text>
                  <Text type="secondary">{movieState.Genre}</Text>
                </div>
              </Descriptions.Item>
              <Descriptions.Item span={3}>
                <MovieRating
                  rating={movieState.imdbRating}
                  votes={movieState.imdbVotes}
                />
              </Descriptions.Item>
              <Descriptions.Item span={3}>{movieState.Plot}</Descriptions.Item>
              <Descriptions.Item label="Actors" span={3}>
                {movieState.Actors}
              </Descriptions.Item>
              <Descriptions.Item label="Writer" span={3}>
                {movieState.Writer}
              </Descriptions.Item>
              <Descriptions.Item label="Director" span={3}>
                {movieState.Director}
              </Descriptions.Item>
              <Descriptions.Item label="Production" span={3}>
                {movieState.Production}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Skeleton>
      </Row>
      <br />
      <Title level={3}>Another Result for "{search}"</Title>
      <MovieList disableInfiniteScroll={true} />
    </div>
  );
};

export default MovieDetail;
