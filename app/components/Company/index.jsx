import React from 'react';
import PropTypes from 'prop-types';
import './company.css';

const Company = ({ name, description, type, headquarter }) => (
  <article className="company">
    <header className="company-details">
      <h2 className="company-name">{name}</h2>
      <p className="company-description">{description}</p>
    </header>
    <p className="company-type">
      {type}
    </p>
    <p className="company-headquarter">
      {headquarter}
    </p>
  </article>
);

Company.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.node.isRequired,
  headquarter: PropTypes.string.isRequired
};

export default Company;
