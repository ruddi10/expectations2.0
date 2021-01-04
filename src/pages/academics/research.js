import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { research } from "../../data"
import { graphql } from "gatsby"
function BranchChange(props) {
  return (
    <div>
      <Layout>
        <GeneralComp
          {...research}
          fluid={props.data.file.childImageSharp.fluid}
        />
      </Layout>
    </div>
  )
}

export default BranchChange

export const query = graphql`
  {
    file(relativePath: { eq: "research.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
