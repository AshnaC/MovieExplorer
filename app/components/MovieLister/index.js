/**
 *
 * MovieLister
 *
 */

import React from "react";
import {
  Poster,
  MovieDetail,
  Header,
  Rating,
  MovieName,
  Desciption,
  MovieCard,
  MovieListWrapper
} from "./styles";

class MovieLister extends React.PureComponent {
  render() {
    return (
      <MovieListWrapper>
        {this.props.movies.map(item => (
          <MovieCard key={item.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path ||
                item.backdrop_path}`}
              alt={`No pics love`}
            />
            <MovieDetail>
              <Header>
                <MovieName>{item.original_title}</MovieName>
                <Rating>Rating:{item.vote_average * 10}%</Rating>
              </Header>
              <Desciption>{item.overview}</Desciption>
            </MovieDetail>
          </MovieCard>
        ))}
      </MovieListWrapper>
    );
  }
}

export default MovieLister;
