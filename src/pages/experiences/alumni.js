import React, { Component } from "react"
import Card2 from "../../components/card2"
import Layout from "../../components/layout"
import { alumni } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
const AlumniList = ({ data }) => {
  const groups = data.alumni.experience
  return (
    <Layout>
      <GenericCard2Landing
        data={{
          ...alumni,
          cards: groups,
          rooturl: "/experiences/alumni/",
          isTrim: true,
          num: 50,
          cardNum: 2,
          isExperience: true,
        }}
      />
    </Layout>
  )
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
