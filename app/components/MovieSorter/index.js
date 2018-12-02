/**
 *
 * MovieSorter
 *
 */

import React from "react";

import { DropDownWrapper, Wrapper, SortingOptions } from "./styles";

import DropDown from "components/DropDown";
import MovieLister from "components/MovieLister";

class MovieSorter extends React.PureComponent {
  state = {};
  render() {
    return (
      <Wrapper>
        <SortingOptions>
          <DropDownWrapper>
            <DropDown
              options={this.props.yearList}
              getSortedList={this.selectReleaseYear}
              defaultText="Select an year"
            />
          </DropDownWrapper>
          <DropDownWrapper>
            <DropDown
              options={this.props.sortPrams}
              getSortedList={this.selectSortParam}
              defaultText="Select a category"
            />
          </DropDownWrapper>
          <DropDownWrapper>
            <DropDown
              options={this.props.genres}
              getSortedList={this.selectGenre}
              defaultText="Select a genre"
            />
          </DropDownWrapper>
        </SortingOptions>
        <MovieLister movies={this.props.sortedMovieList || []} />
      </Wrapper>
    );
  }

  selectSortParam = pram => {
    const sortParam = pram.value;
    this.setState({ sortParam });
    const releaseYear = this.state.releaseYear;
    const genre = this.state.genre;
    this.props.getSortedMovieList({ releaseYear, sortParam, genre });
  };

  selectReleaseYear = year => {
    const releaseYear = year.value;
    this.setState({ releaseYear });
    const sortParam = this.state.sortParam;
    const genre = this.state.genre;
    this.props.getSortedMovieList({ releaseYear, sortParam, genre });
  };

  selectGenre = selectedGenre => {
    const genre = selectedGenre.value;
    this.setState({ genre });
    const sortParam = this.state.sortParam;
    const releaseYear = this.state.releaseYear;
    this.props.getSortedMovieList({ releaseYear, sortParam, genre });
  };
}

export default MovieSorter;
