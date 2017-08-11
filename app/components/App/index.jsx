import React from 'react';
import companies from '../../../data/company';
import Search from '../Search/index.jsx';
import Companies from '../Companies/index.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: companies,
      queryString: '',
      results: [],
      view: []
    }
    this.query = this.query.bind(this);
    this.reset = this.reset.bind(this);
    this.show = this.show.bind(this);
  }

  query(evt) {
    if (evt.target.value.length > 2) {
      const regx = new RegExp(evt.target.value, 'gi');
      const results = this.state.companies.filter((company) => {
        return company.name.match(regx) !== null;
      });
      this.setState({
        results: results.slice(5, results.length),
        view: results.slice(0, 5),
        queryString: evt.target.value
      });
    } else {
      this.setState({ results: [], view: [], queryString: evt.target.value });
    }
  }

  reset() {
    this.setState({ results: [], view: [], queryString: '' });
  }

  show() {
    if (this.state.results.length) {
      this.setState({
        results: this.state.results.slice(5, this.state.results.length),
        view: this.state.view.concat(this.state.results.slice(0, 5))
      });
    }
  }

  render() {
    return (
      <div>
        <Search
          query={this.query}
          reset={this.reset}
          queryString={this.state.queryString}
        />
        <Companies
          companies={this.state.view}
          show={this.state.results.length ? this.show : undefined}
        />
      </div>
    );
  }
}
