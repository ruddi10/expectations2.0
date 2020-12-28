import React, { Component } from "react"
import Card2 from "../../components/card2"
import Layout from "../../components/layout"
import { technicalGroup } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
import { graphql } from "gatsby"

const TechnicalGroupsList = ({ data }) => {
  const groups = data.allContentfulGroup.nodes.filter(node => node.technical)
  return (
    <Layout>
      <GenericCard2Landing
        data={{
          ...technicalGroup,
          isReadMore: true,
          cards: groups,
          rooturl: "/co-curricular/technical-groups/",
          isTrim: true,
          num: 25,
          cardNum: 3,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGroup {
      nodes {
        technical
        title
        about {
          about
        }
        logo {
          file {
            url
          }
        }
        slug
      }
    }
  }
`
export default TechnicalGroupsList
