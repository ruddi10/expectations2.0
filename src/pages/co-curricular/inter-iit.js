import React from "react"
import ContentWithImage from "../../components/contentWithImage"
import Layout from "../../components/layout"
import { interIITs } from "../../data"
import { graphql } from "gatsby"
function InterIit(props) {
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">Inter IIT</h2>
        {interIITs.map(interIIT => (
          <div>
            <ContentWithImage
              {...interIIT}
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
        ))}
      </Layout>
    </div>
  )
}

export default InterIit

export const query = graphql`
  {
    file(relativePath: { eq: "tin_tin1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
