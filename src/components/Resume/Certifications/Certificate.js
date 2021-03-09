import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.certification}</h4>
      <p className="school"><a href={data.link}>{data.org}</a>, {data.year}</p>
    </header>
  </article>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    certification: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Certificate;
