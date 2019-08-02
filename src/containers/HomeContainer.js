class Home extends Component {
  componentDidMount() {
    if (sessionStorage.getItem('HomeState')) {
      let state = JSON.parse(sessionStorage.getItem('HomeState'));
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      this.fetchItems(endpoint);
    }
  }

  searchItems = searchTerm => {
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm,
    });

    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    // ES6 Destructuring the state
    const { searchTerm, currentPage } = this.state;

    let endpoint = '';
    this.setState({ loading: true });

    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    // ES6 Destructuring the state
    const { movies, heroImage, searchTerm } = this.state;
  };
}

export default Home;
