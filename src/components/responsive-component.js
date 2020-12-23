import React, { Component } from "react"
class ResponsiveComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth }
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }
}

export default ResponsiveComponent
