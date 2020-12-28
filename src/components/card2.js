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
        {data.isLingo ? (
          ""
        ) : (
          <div>
            <SemanticImage
              className="card2-logo"
              avatar
              size="tiny"
              src={data.source}
            />
          </div>
        )}
        <div className="card2-title headings">{data.title}</div>
        {data.isLingo ? (
          <div style={{ fontStyle: "italic", color: "#333333" }}>
            {data.subhead}
          </div>
        ) : (
          ""
        )}
        <div
          className="card2-body"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {data.isReadMore ? (
          <div style={{ marginTop: "auto" }}>
            <Link to={`${data.to}`} className="card2-readmore">
              READ MORE >
            </Link>
          </div>
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
