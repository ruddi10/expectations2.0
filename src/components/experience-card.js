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
const ExperienceCard = ({ data }) => {
  const pattern = useStaticQuery(query)
  return (
    <div className="experience-wrapper">
      <div className=" experience-container card2-container text">
        <div className="card2-content">
          <div>
            <SemanticImage
              avatar
              size="tiny"
              src={require("../images/gg_logo.png")}
            />
          </div>
          <div className="card2-title headings">{data.title}</div>
          <div className="experience-tag">
            <div className="tag1">design</div>
            <div className="tag2">branch change</div>
          </div>
          <div
            className="card2-body"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="card2-pattern">
          <Image fluid={pattern.file.childImageSharp.fluid} />
        </div>
      </div>
      <div className="experience-footer text">
        <div>
          <div>{data.author}</div>
          <div style={{ color: "#666666" }}>Computer Science Batch 2023</div>
        </div>
        <Link to={`${data.to}`} className="card2-readmore">
          READ MORE >
        </Link>
      </div>
    </div>
  )
}

export default ExperienceCard
