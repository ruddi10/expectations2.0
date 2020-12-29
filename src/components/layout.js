import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children, noContainer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-container">
      <Navbar />
      <div className={noContainer ? " " : "container"}>
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
      <div
        style={{
          background: "#F7F7F7",
          fontSize: "0.8rem",
          marginTop: "0.6rem",
        }}
      >
        <div className="container headings">
          All rights reserved Geek Gazette,Copyright 2020
        </div>
      </div>
    </div>
  )
}

export default Layout
