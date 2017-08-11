import React from 'react';
import companies from '../data/company';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.companies = companies;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
