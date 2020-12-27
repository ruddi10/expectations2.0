import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import "../styles/branch-template.css"
function branchTemplate({ data: { group } }) {
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">{group.name}</h2>
        <Image className="expanded-image" fluid={group.image.fluid} />
        <div className="branch-info">
          <p
            className="normal-para"
            dangerouslySetInnerHTML={{
              __html: group.about.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    </div>
  )
}

export default branchTemplate
export const query = graphql`
  query Group($slug: String) {
    group: contentfulGroup(slug: { eq: $slug }) {
      about {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      links
      title
    }
  }
`
