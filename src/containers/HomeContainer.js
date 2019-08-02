import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import {
  searchMovies,
  getPopularMovies,
  loadMoreMovies,
  clearMovies,
  showLoadingSpinner,
} from '../actions';

class HomeContainer extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    this.props.showLoadingSpinner();
    this.props.getPopularMovies();
  };

  searchMovies = searchTerm => {
    this.props.clearMovies();
    this.props.searchMovies(searchTerm);
  };

  loadMoreMovies = () => {
    const { searhTerm, currentPage } = this.props;
    this.props.showLoadingSpinner();
    this.props.loadMoreMovies(searhTerm, currentPage);
  };

  render() {
    return (
      <Home {...this.props} searchMovies={this.searchMovies} loadMoreMovies={this.loadMoreMovies} />
    );
  }
}

const mapStateToProps = state => state.home;
const mapDispatchToProps = {
  searchMovies,
  getPopularMovies,
  loadMoreMovies,
  clearMovies,
  showLoadingSpinner,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
