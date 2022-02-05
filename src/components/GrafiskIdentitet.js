import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GrafiskIdentitet = ( {title, teaser, image, description, reverse} ) => {
  return <div className="max-w-screen-xl mx-auto grid grid-cols-2 items-center gap-4 py-12 ">
      {/* Logo */}
      <div className={"flex justify-center " + ( reverse ? "order-2" : "order-1")}>
        {
            image.childImageSharp ?
                <GatsbyImage image={getImage(image)} alt={teaser} />
            : 
                <img src={"/img/" + image.relativePath} alt={title} />
        }
      </div>

      {/* Text */}
      <div className={"flex flex-col  " + ( reverse ? "order-1" : "order-2")}>
          <p className="font-normal text-4xl font-raleway pb-8">{title}</p>
          <p className="font-normal leading-normal text-3xl font-raleway">
              {teaser}
          </p>
      </div>
  </div>;
};

GrafiskIdentitet.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    teaser: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    reverse: PropTypes.bool
};

GrafiskIdentitet.defaultProps = {
    reverse: false
}

export default GrafiskIdentitet;
