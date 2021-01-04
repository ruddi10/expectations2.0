import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Icon } from "semantic-ui-react"
import Image from "gatsby-image"
import { Image as SemanticImage } from "semantic-ui-react"
import "../styles/branch-template.css"
import ResponsiveComponent from "../components/responsive-component"
const IconLink = props => (
  <div className="icon-group">
    <a href={props.branch.courseStr} target="_blank">
      <div className="single-link">
        <img src={require("../images/course.png")} />
        <p className="icon-label normal-para">Course Structure</p>
      </div>
    </a>
    <a href={props.branch.faculty} target="_blank">
      <div className="single-link normal-para">
        <img src={require("../images/faculty.png")} />
        <p className="icon-label normal-para">Faculty</p>
      </div>
    </a>
    <a href={props.branch.syllabus} target="_blank">
      <div className="single-link normal-para">
        <img src={require("../images/syllabus.png")} />
        <p className="icon-label">Syllabus</p>
      </div>
    </a>
  </div>
)

class branchTemplate extends ResponsiveComponent {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth }
  }
  render(props) {
    console.log(this.props.data)
    const branch = this.props.data.branch
    return (
      <div>
        <Layout>
          <h2 className="dark-color-head">{branch.name}</h2>
          <Image
            className="expanded-image image-wi"
            fluid={branch.image.fluid}
          />
          {this.state.windowWidth > 650 ? <IconLink branch={branch} /> : ""}
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
          {this.state.windowWidth < 650 ? <IconLink branch={branch} /> : ""}
        </Layout>
      </div>
    )
  }
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
        fluid(quality: 40, maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }
      slug
    }
  }
`
