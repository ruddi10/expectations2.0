import React from "react"
// import { Image } from "semantic-ui-react"
import Image from "gatsby-image"
const GeneralComp = props => {
  return (
    <div>
      <h2 className="dark-color-head">{props.title}</h2>
      <Image className="expanded-image" fluid={props.fluid} />
      <p
        className="normal-para para-container"
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  )
}

export default GeneralComp
