import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { nptel } from "../../data"
import { graphql } from "gatsby"
function Nptel(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...nptel} fluid={props.data.file.childImageSharp.fluid} />
      </Layout>
    </div>
  )
}

export default Nptel

export const query = graphql`
  {
    file(relativePath: { eq: "nptel.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
