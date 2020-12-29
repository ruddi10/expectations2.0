import React from "react"

import Navbar from "./navbar"
import "./layout.css"
import Footer from "./footer"
import ResponsiveComponent from "./responsive-component"
import MobileFooter from "./mobile-footer"

class Layout extends ResponsiveComponent {
  render() {
    const { noContainer, children } = this.props
    return (
      <div className="layout-container">
        <Navbar />
        <div className={noContainer ? " " : "container"}>
          <div>{children}</div>
          {this.state.windowWidth > 650 ? <Footer /> : <MobileFooter />}
        </div>
        {this.state.windowWidth > 650 && (
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
        )}
      </div>
    )
  }
}

export default Layout
