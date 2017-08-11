import React from 'react';
import PropTypes from 'prop-types';
import Company from '../Company/index.jsx';
import './companies.css';

export function type(listed, pevc){
  return listed ? pevc ?
    <div><span>Listed Entity</span><span>PEVC House</span></div> :
    <span>Listed Entity</span> : '';
}

export function headquarter(geography) {
  return `${geography.state ? geography.state : ''}${geography.state && geography.country ? ', ': ''}${geography.country ? geography.country: ''}`;
}

const Companies = ({ companies, show }) => {
  const showMore = show ?
    <li>
      <a className="companies-more" onClick={show}>
        Show more
      </a>
    </li> : '';

  return (
    <ul className="companies">
      <li className="companies-headers">
        <span>Name</span>
        <span>Type</span>
        <span>Headquarter</span>
      </li>
      {
        companies.map((company) => {
          return (
            <li key={company.id}>
              <Company
                name={company.name}
                description={company.description}
                type={type(company.isListedEntity, company.isPEVCHouse)}
                headquarter={headquarter(company.geography)}
              />
            </li>
          );
        })
      }
      {showMore}
    </ul>
  );
}

Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  show: PropTypes.func,
};

export default Companies;
