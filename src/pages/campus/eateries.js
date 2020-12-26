import React from "react"
// import { Image } from "semantic-ui-react"
import Image from "gatsby-image"
import { eateries } from "../../data"
import Layout from "../../components/layout"
import GeneralComp from "../../components/generalComp"
const Eateries = props => {
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">Eateries</h2>
        <Image
          className="expanded-image"
          fluid={props.data.file.childImageSharp.fluid}
        />
        <div className="para-container">
          {eateries.map(eat => (
            <div className="para-container">
              <h2 className="normal-head">{eat.title}</h2>
              <p
                className="normal-para"
                dangerouslySetInnerHTML={{
                  __html: eat.content,
                }}
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default Eateries

export const query = graphql`
  {
    file(relativePath: { eq: "eateriesback.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
