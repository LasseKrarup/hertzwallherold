import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import useScroll from "../hooks/useScroll"

const Navbar = () => {

  const data = useStaticQuery(graphql`
  query NavQuery {
    allSite {
      edges {
        node {
          siteMetadata {
            title
          }
        }
      }
    }
  }  
  `)
  const scrollY = useScroll()

  return ( scrollY > 1000 && 
    <nav
      className="bg-black"
      role="navigation"
      aria-label="main-navigation"
    >
      <Link to="/" className="text-white font-extralight font-3xl">{data?.allSite?.edges[0].node.siteMetadata.title}</Link>
    </nav>
  );
  }

export default Navbar;
