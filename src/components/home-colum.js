import React from "react"
import { Button } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/home-column.css"
import { Link } from "gatsby"
const HomeColumn = ({ data, isReverse, backdrop }) => {
  return (
    <div
      className={
        `home-column-wrapper text ` +
        (isReverse ? "column-wrapper-reverse" : "")
      }
    >
      <div className="home-column-content">
        <div className="light-color-head headings">{data.heading}</div>
        <div className="home-column-body">{data.body}</div>
        <div>
          <Button
            as={Link}
            to={data.to}
            className="home-column-button"
            size="medium"
          >
            Know More > >
          </Button>
        </div>
      </div>
      <div className="home-column-image">
        <div className={"home-column-backdrop " + backdrop}></div>
        <div className="home-image-wrapper">
          <Image fluid={data.source} />
        </div>
      </div>
    </div>
  )
}

export default HomeColumn
