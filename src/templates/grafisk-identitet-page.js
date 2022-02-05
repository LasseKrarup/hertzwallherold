import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { motion } from "framer-motion"

import Layout from "../components/Layout";
import Streg1 from "../img/Streg1.svg"
import Subheading from "../components/Subheading";
import GrafiskIdentitet from "../components/GrafiskIdentitet";

// eslint-disable-next-line
export const GrafiskIdentitetPageTemplate = ({
  title, data
}) => {


  const linkVariant = {
    hover: {
      scale: 1.2
    }
  }

  console.log(data)

  return (
    <div className="relative">
      <section className="text-black flex flex-col items-center justify-center">
        <Subheading title="Grafisk identitet" className="text-right pr-8 pt-16" />
        <GrafiskIdentitet title="Montana" />
        ACTUAL page
      </section>
    </div>
  );
};

GrafiskIdentitetPageTemplate.propTypes = {
  title: PropTypes.string,
};

const GrafiskIdentitetPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GrafiskIdentitetPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};


export default GrafiskIdentitetPage;

export const pageQuery = graphql`
  query GrafiskIdentitetPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "grafisk-identitet-page" } }) {
      frontmatter {
        title
        identities {
            title
            description
            teaser
        }
      }
    }
  }
`;
