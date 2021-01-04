import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Icon } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/branch-template.css"
import Share from "../components/share"
import ExperienceTwo from "../components/experience-two"
import ResponsiveComponent from "../components/responsive-component"

class ExperienceTemplate extends ResponsiveComponent {
  render() {
    const experience = this.props.data.experience
    const { pageContext } = this.props
    const { windowWidth } = this.state
    return (
      <div>
        <Layout>
          <h2 className="dark-color-head">{experience.title}</h2>
          <div className="experience-template-author headings">
            {experience.author}
          </div>
          <div className="experience-template-branch text">
            Computer Science Batch 2023
          </div>
          <Image
            className="experience-expanded-image"
            fluid={experience.image.fluid}
          />
          <div className="branch-info">
            <p
              className="normal-para"
              dangerouslySetInnerHTML={{
                __html: experience.description.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="experience-tag-bottom headings">
            <span>Tags:</span>
            <span className="tag1">design</span>
            <span className="tag2">branch change</span>
          </div>
          <Share
            relativeUrl={pageContext.myurl}
            title={experience.title}
            slug={pageContext.slug}
          />
          <ExperienceTwo
            url={pageContext.myurl}
            archive={experience.archive}
            slug={pageContext.slug}
            windowWidth={windowWidth}
          />
        </Layout>
      </div>
    )
  }
}

export default ExperienceTemplate

export const query = graphql`
  query Experience($slug: String) {
    experience: contentfulExperience(slug: { eq: $slug }) {
      author
      batch
      branch
      archive
      image {
        fluid(quality: 90, maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }
      title
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
