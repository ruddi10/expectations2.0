import React from "react"
import Layout from "../../components/layout"
import { freshman } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
import ResponsiveComponent from "../../components/responsive-component"

class FreshmanList extends ResponsiveComponent {
  render() {
    const groups = this.props.data.freshman.experience
    const { windowWidth } = this.state
    return (
      <Layout>
        <GenericCard2Landing
          data={{
            ...freshman,
            cards: groups,
            rooturl: "/experiences/freshman/",
            isTrim: true,
            num: windowWidth > 1000 ? 40 : windowWidth > 850 ? 25 : 20,
            cardNum: 2,
            isExperience: true,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    freshman: allContentfulExperience(filter: { archive: { eq: false } }) {
      experience: nodes {
        author
        title
        slug
        batch
        branch
        tags
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
export default FreshmanList
