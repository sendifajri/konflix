import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface RateProps {
  rating: string;
  votes: string;
}
const MovieRating = ({ rating, votes }: RateProps) => {
  return (
    <div className="movie-rating">
      <FontAwesomeIcon icon={faStar} color="#e3bb23" size="2x" />
      <div>
        <div>
          <div>
            <span className="rating" data-testid="movie-rating">
              {rating}
            </span>
            <span className="fs-xsmall">/10</span>
          </div>
        </div>
        <Text type="secondary" className="fs-small" data-testid="movie-votes">
          {votes}
        </Text>
      </div>
    </div>
  );
};

export default MovieRating;
