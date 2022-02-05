import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { motion } from "framer-motion"

import Layout from "../components/Layout";
import Streg1 from "../img/Streg1.svg"
import Subheading from "../components/Subheading";
import GrafiskIdentitet from "../components/GrafiskIdentitet";
import { v4 } from "uuid";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  identities
}) => {

  const linkVariant = {
    hover: {
      scale: 1.2
    }
  }

  return (
    <div className="relative">
      <section className="bg-black h-screen flex items-center justify-center text-white">
        <img src={Streg1} alt="bg graphic" className="pointer-events-none absolute right-0 top-0 w-80 h-80 opacity-75 m-8" />
        <h1 className="font-extralight absolute top-0 left-0 text-9xl pointer-events-none pt-32 pl-16">Hertzwall<br />Herold</h1>
        <ul id="index-nav" className="mt-64 text-4xl font-normal leading-snug">
          <li><Link to="/grafisk-identitet/"><motion.div whileHover="hover" variants={linkVariant}>Grafisk identitet</motion.div></Link></li>
          <li><Link to="/industriel-grafik/"><motion.div whileHover="hover" variants={linkVariant}>Industiel grafik</motion.div></Link></li>
          <li><Link to="/produktdesign/"><motion.div whileHover="hover" variants={linkVariant}>Produktdesign</motion.div></Link></li>
          <li><Link to="/airbrush/"><motion.div whileHover="hover" variants={linkVariant}>Airbrush</motion.div></Link></li>
          <li><Link to="/kunst/"><motion.div whileHover="hover" variants={linkVariant}>Kunst</motion.div></Link></li>
          <li><Link to="/om/"><motion.div whileHover="hover" variants={linkVariant}>Om</motion.div></Link></li>
        </ul>
      </section>

      <section className="text-black">
        <Subheading title="Grafisk identitet" className="text-right pr-8 pt-16" />
        {
          identities.map( (item) => {
            console.log(item)
            return <GrafiskIdentitet 
                            title={item.title}
                            description={item.description}
                            teaser={item.teaser}
                            image={item.image}
                            key={v4()} />
          })
        }
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        identities={frontmatter.identities}
      />
    </Layout>
  );
};


export default IndexPage;

export const pageQuery = graphql`
query IndexPageQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "grafisk-identitet-page"}}) {
    frontmatter {
      identities {
        title
        description
        teaser
        image {
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
  }
}
`;
