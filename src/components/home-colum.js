import React from "react"
import { Button } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/home-column.css"
import { Link, useStaticQuery, graphql } from "gatsby"
const HomeColumn = ({ data }) => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const image_source = nodes.find(image => image.relativePath == data.image)
  return (
    <div
      className={
        `home-column-wrapper text ` +
        (data.isReverse ? "column-wrapper-reverse" : "")
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
        <div className={"home-column-backdrop " + data.backdrop}></div>
        <div className="home-image-wrapper">
          <Image fluid={image_source.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default HomeColumn
