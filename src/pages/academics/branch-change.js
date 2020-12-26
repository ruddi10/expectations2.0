import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { branchCh } from "../../data"
function BranchChange(props) {
  return (
    <div>
      <Layout>
        <GeneralComp
          {...branchCh}
          fluid={props.data.file.childImageSharp.fluid}
        />
      </Layout>
    </div>
  )
}

export default BranchChange

export const query = graphql`
  {
    file(relativePath: { eq: "branch-change.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
