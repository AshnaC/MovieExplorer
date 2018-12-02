/**
 *
 * MovieContainer
 *
 */

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectMovieContainer from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import {
  getPersonDetails,
  getSortedMovieList,
  getMovieCredits
} from "./actions";
import { yearList, sortPrams, genres, menu } from "./constants";

import ExplorerLayout from "components/ExplorerLayout";

export class MovieContainer extends React.Component {
  render() {
    const {
      personSearchResults = [],
      sortedMovieList = [],
      fetchingData,
      fetchingSearchList,
      error
    } = this.props.moviecontainer;
    return (
      <ExplorerLayout
        menu={menu}
        error={error}
        genres={genres}
        yearList={yearList}
        sortPrams={sortPrams}
        fetchingData={fetchingData}
        fetchingSearchList={fetchingSearchList}
        getMovieCredits={this.props.getMovieCredits}
        getPersonDetails={this.props.getPersonDetails}
        personSearchResults={personSearchResults}
        sortedMovieList={sortedMovieList}
        getSortedMovieList={this.props.getSortedMovieList}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  moviecontainer: makeSelectMovieContainer()
});

function mapDispatchToProps(dispatch) {
  return {
    getPersonDetails: param => dispatch(getPersonDetails(param)),
    getSortedMovieList: param => dispatch(getSortedMovieList(param)),
    getMovieCredits: personId => dispatch(getMovieCredits(personId))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "movieContainer", reducer });
const withSaga = injectSaga({ key: "movieContainer", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MovieContainer);
