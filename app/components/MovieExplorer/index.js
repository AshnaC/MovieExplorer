/**
 *
 * MovieExplorer
 *
 */

import React from "react";
import debounce from "lodash/debounce";

import {
  Search,
  ResultWrapper,
  SearchItem,
  ExplorerWrapper,
  Loader
} from "./styles";

import MovieLister from "components/MovieLister";
import LoadingIndicator from "components/LoadingIndicator";

class MovieExplorer extends React.PureComponent {
  state = { inputValue: "" };
  searchMovies = debounce(this.onSearchInputChange, 1000);

  render() {
    return (
      <ExplorerWrapper>
        <Search
          value={this.state.inputValue || ""}
          placeholder="Search..."
          onChange={this.onInputChange}
          onKeyUp={this.handleSearch}
          onClick={this.onInputClick}
        />
        {this.props.fetchingSearchList && (
          <Loader>
            <LoadingIndicator />
          </Loader>
        )}
        {this.state.showSearchDropDown && (
          <ResultWrapper>
            {this.props.personSearchResults.map(item => (
              <SearchItem key={item.id} onClick={this.selectPerson(item)}>
                {item.name}
              </SearchItem>
            ))}
          </ResultWrapper>
        )}
        <MovieLister movies={this.props.sortedMovieList || []} />
      </ExplorerWrapper>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchingSearchList !== this.props.fetchingSearchList) {
      this.setState({ showSearchDropDown: true });
    }
  }

  onSearchInputChange(searchParam) {
    this.props.getSearchList({ search: searchParam });
    this.setState({ searchParam });
  }

  selectPerson = selectedPerson => () => {
    this.setState({
      selectedPerson,
      showSearchDropDown: false,
      inputValue: selectedPerson.name
    });
    this.props.getMovieCredits(selectedPerson.id);
  };

  handleSearch = event => {
    const { value } = event.target;
    if (value && value.length > 2 && value !== this.state.searchParam) {
      this.searchMovies(value);
    }
    // to handle 3 char when same data is entered after dropdown disabled
    if (value === this.state.searchParam) {
      this.setState({ showSearchDropDown: true });
    }
  };

  onInputClick = () => {
    let showSearchDropDown = false;
    if (
      this.props.personSearchResults &&
      this.props.personSearchResults.length > 0 &&
      !this.state.showSearchDropDown
    ) {
      showSearchDropDown = true;
    }
    this.setState({ showSearchDropDown });
  };

  onInputChange = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };
}

MovieExplorer.propTypes = {};

export default MovieExplorer;
