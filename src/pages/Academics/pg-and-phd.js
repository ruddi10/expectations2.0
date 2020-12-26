import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { pgphd } from "../../data"
import { graphql } from "gatsby"
function PgAndPhd(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...pgphd} fluid={props.data.file.childImageSharp.fluid} />
      </Layout>
    </div>
  )
}

export default PgAndPhd

export const query = graphql`
  {
    file(relativePath: { eq: "pgPhd.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
