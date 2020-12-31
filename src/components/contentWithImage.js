import React from "react"
import Image from "gatsby-image"
import "../styles/contentWithImage.css"
import ResponsiveComponent from "./responsive-component"
class ContentWithImage extends ResponsiveComponent {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth }
  }
  render(props) {
    return (
      <div className={`cwi-container ${this.props.r == 1 ? "yes" : ""}`}>
        {this.state.windowWidth < 880 ? (
          <h2 className="cwi-head">{this.props.title}</h2>
        ) : (
          ""
        )}
        <Image className="cwi-image" fluid={this.props.fluid} />
        <div className="cwi-content">
          {this.state.windowWidth > 880 ? (
            <h2 className="cwi-head">{this.props.title}</h2>
          ) : (
            ""
          )}
          <p
            className="normal-para cwi-para"
            dangerouslySetInnerHTML={{
              __html: this.props.content,
            }}
          ></p>
        </div>
      </div>
    )
  }
}

export default ContentWithImage
