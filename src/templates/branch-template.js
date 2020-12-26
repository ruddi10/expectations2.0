import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Icon } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/branch-template.css"
function branchTemplate(props) {
  console.log(props.data)
  const branch = props.data.branch
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">{branch.name}</h2>
        <Image className="expanded-image" fluid={branch.image.fluid} />

        {/* <div className="btlinks">
          <Icon
            name="user"
            bordered
            aria-aria-label="faculty profile"
            color={"teal"}
            inverted
            size="large"
          />
          Faculty profile
          <Icon name="file alternate" aria-label={"syllabus"} color={"teal"} />
        </div> */}
        <div className="branch-info">
          <p
            className="normal-para"
            dangerouslySetInnerHTML={{
              __html: branch.sContent.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    </div>
  )
}

export default branchTemplate
export const query = graphql`
  query MyBranch($slug: String) {
    branch: contentfulBranch(slug: { eq: $slug }) {
      faculty
      courseStr
      sContent {
        sContent
        childMarkdownRemark {
          html
        }
      }
      syllabus
      name
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
    }
  }
`
