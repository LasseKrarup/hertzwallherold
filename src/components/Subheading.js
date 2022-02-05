import React from 'react';
import PropTypes from 'prop-types';

const Subheading = ({title, className}) => {
  return <h2 className={"text-5xl max-w-screen-xl mx-auto font-extralight mb-16" + (className ? ` ${className}` : "")}>
    {title}
  </h2>;
};

Subheading.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Subheading;
