import React from 'react';
import PropTypes from 'prop-types';
import search from '../../../assets/search.svg';
import clear from '../../../assets/clear.svg';
import './search.css';

const Search = ({ query, reset, queryString}) => (
  <form className="search-form">
    <label
      htmlFor="search"
      dangerouslySetInnerHTML={{__html: search}}
      className="search-label"
    ></label>
    <input
      className="search-input"
      type="text"
      id="search"
      onChange={query}
      value={queryString}
    />
    <button
      className="search-clear"
      dangerouslySetInnerHTML={{__html: clear}}
      type="button"
      onClick={reset}
    >
    </button>
  </form>
);

Search.propTypes = {
  query: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  queryString: PropTypes.string.isRequired
};

export default Search;
