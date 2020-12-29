import React from "react"
import Image from "gatsby-image"
import "../styles/contentWithImage.css"
function ContentWithImage(props) {
  return (
    <div className="cwi-container">
      <Image className="cwi-image" fluid={props.fluid} />
      <div className="cwi-content">
        <h2 className="cwi-head">{props.title}</h2>
        <div className="para-cnt">
          <p
            className="normal-para cwi-para"
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          ></p>
        </div>
      </div>
    </div>
  )
}

export default ContentWithImage
