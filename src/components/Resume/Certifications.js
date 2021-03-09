import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certifications/Certificate';

const Certifications = ({ data }) => (
  <div className="education">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((certificate) => (
      <Certificate
        data={certificate}
        key={certificate.org}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    org: PropTypes.string,
    certificate: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
