import React from "react"
import { Image } from "semantic-ui-react"
import "../styles/testimonial-excerpt.css"
import { Link } from "gatsby"
const TestimonialExcerpt = ({ data }) => {
  return (
    <div className="excerpt-card text">
      <div style={{ paddingBottom: "1rem" }}>{data.text}</div>
      <div style={{ paddingBottom: "1rem" }}>
        <Image size="mini" avatar src={require("../images/quotes.png")} />
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Image
          size="tiny"
          circular
          avatar
          src={require(`../images/${data.source}`)}
        />
      </div>
      <div>{data.author}</div>
      <div>{data.branch}</div>
    </div>
  )
}

export default TestimonialExcerpt
