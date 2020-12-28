import React, { Component } from "react"
import Layout from "../../components/layout"
import { freshman } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
const FreshmanList = ({ data }) => {
  const groups = data.freshman.experience
  return (
    <Layout>
      <GenericCard2Landing
        data={{
          ...freshman,
          cards: groups,
          rooturl: "/experiences/freshman/",
          isTrim: true,
          num: 40,
          cardNum: 2,
          isExperience: true,
        }}
      />
    </Layout>
  )
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
