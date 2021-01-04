import React, { Component } from "react"
import Card2 from "../../components/card2"
import Layout from "../../components/layout"
import { alumni } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
import ResponsiveComponent from "../../components/responsive-component"

class AlumniList extends ResponsiveComponent {
  render() {
    const { windowWidth } = this.state
    const groups = this.props.data.alumni.experience
    return (
      <Layout>
        <GenericCard2Landing
          data={{
            ...alumni,
            cards: groups,
            rooturl: "/experiences/alumni/",
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
    alumni: allContentfulExperience(filter: { archive: { eq: true } }) {
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
export default AlumniList
