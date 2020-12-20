import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Icon } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/footer.css"
const query = graphql`
  {
    file(relativePath: { eq: "gg_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function Footer() {
  const data = useStaticQuery(query)

  return (
    <div className="nav-container">
      <div className="top">
        <div className="logo-wrapper">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
        <div>
          <Button className="button headings" basic color="teal">
            <Icon name="download" /> Expectations PDF
          </Button>
        </div>
      </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  )
}
