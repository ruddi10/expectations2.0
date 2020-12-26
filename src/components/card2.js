import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Image as SemanticImage } from "semantic-ui-react"
import "../styles/card2.css"

const query = graphql`
  {
    file(relativePath: { eq: "pattern_card.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Card2 = ({ data }) => {
  const pattern = useStaticQuery(query)
  return (
    <div className="card2-container text">
      <div className="card2-content">
        <div>
          <SemanticImage
            avatar
            size="tiny"
            src={require(`../images/${data.source}`)}
          />
        </div>
        <div className="card2-title headings">{data.title}</div>
        <div className="card2-body">{data.content}</div>
        {data.isReadMore ? (
          <Link to="/home2" className="card2-readmore">
            READ MORE >
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="card2-pattern">
        <Image fluid={pattern.file.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Card2
