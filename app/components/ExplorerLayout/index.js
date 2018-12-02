/**
 *
 * ExplorerLayout
 *
 */

import React from "react";

import { Header, SubItem, StyledFont, Loader, Error } from "./styles";

import MovieExplorer from "components/MovieExplorer";
import MovieSorter from "components/MovieSorter";
import LoadingIndicator from "components/LoadingIndicator";

class ExplorerLayout extends React.Component {
  state = { menu: this.props.menu.MOVIES };
  render() {
    const { menu } = this.props;
    return (
      <div>
        <Header>
          <SubItem onClick={this.switchMenu(menu.MOVIES)}>
            <StyledFont name="film" />
            Movies
          </SubItem>
          <SubItem onClick={this.switchMenu(menu.EXPLORER)}>
            <StyledFont name="search" />
            Explore
          </SubItem>
        </Header>
        {this.state.menu === menu.MOVIES && (
          <MovieExplorer
            fetchingData={this.props.fetchingData}
            fetchingSearchList={this.props.fetchingSearchList}
            sortedMovieList={this.props.sortedMovieList}
            getSearchList={this.props.getPersonDetails}
            getMovieCredits={this.props.getMovieCredits}
            personSearchResults={this.props.personSearchResults}
          />
        )}
        {this.state.menu === menu.EXPLORER && (
          <MovieSorter
            genres={this.props.genres}
            yearList={this.props.yearList}
            sortPrams={this.props.sortPrams}
            fetchingData={this.props.fetchingData}
            sortedMovieList={this.props.sortedMovieList}
            getSortedMovieList={this.props.getSortedMovieList}
          />
        )}
        {this.props.fetchingData && (
          <Loader>
            <LoadingIndicator />
          </Loader>
        )}
        {this.props.error && <Error>Something Went Wrong!</Error>}
      </div>
    );
  }

  componentDidMount() {
    this.props.getSortedMovieList({
      releaseYear: this.props.yearList[0],
      sortParam: this.props.sortPrams[0].value,
      genre: ""
    });
  }

  switchMenu = menu => () => {
    if (menu !== this.state.menu) {
      this.setState({ menu });
    }
  };
}

ExplorerLayout.propTypes = {};

export default ExplorerLayout;
