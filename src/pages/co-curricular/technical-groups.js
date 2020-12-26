import React, { Component } from "react"
import Card2 from "../../components/card2"
import Layout from "../../components/layout"
import { technicalGroup } from "../../data"
import GenericCard2Landing from "../../components/card2-landing"
const TechnicalGroupsList = ({ data }) => {
  const groups = data.allContentfulGroup.nodes.filter(node => node.technical)
  return (
    <Layout>
      {/* <h2 className="dark-color-head" style={{ fontSize: "2.5rem" }}>
          Technical Groups
        </h2>
        <p className="normal-para">
          Little afraid its eat looked now. Very ye lady girl them good me make.
          It hardly cousin me always. An shortly village is raising we shewing
          replied. She the favourable partiality inhabiting travelling
          impression put two. His six are entreaties instrument acceptance
          unsatiable her. Amongst as or on herself chapter entered carried no.
          Sold old ten are quit lose deal his sent. You correct how sex several
          far distant believe journey parties. We shyness enquire uncivil
          affixed it carried to. Feet evil to hold long he open knew an no.
          Apartments occasional boisterous as solicitude to introduced. Or
          fifteen covered we enjoyed demesne is in prepare.
        </p>
        <Grid
          columns={3}
          stackable
          relaxed
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <GridColumn>
            <Card2
              data={{
                title: "Geek Gazette",
                content:
                  "It is a general belief that a branch change is a big task and a very difficult thing to achieve. My first year was about fun and regrets.",
                isReadMore: true,
                source: "gg_logo.png",
              }}
            />
          </GridColumn>
          <GridColumn>
            <Card2
              data={{
                title: "Geek Gazette",
                content:
                  "It is a general belief that a branch change is a big task and a very difficult thing to achieve. My first year was about fun and regrets.",
                isReadMore: true,
                source: "gg_logo.png",
              }}
            />
          </GridColumn>
          <GridColumn>
            <Card2
              data={{
                title: "Geek Gazette",
                content:
                  "It is a general belief that a branch change is a big task and a very difficult thing to achieve. My first year was about fun and regrets.",
                isReadMore: true,
                source: "gg_logo.png",
              }}
            />
          </GridColumn>
          <GridColumn>
            <Card2
              data={{
                title: "Geek Gazette",
                content:
                  "It is a general belief that a branch change is a big task and a very difficult thing to achieve. My first year was about fun and regrets.",
                isReadMore: true,
                source: "gg_logo.png",
              }}
            />
          </GridColumn>
        </Grid> */}
      <GenericCard2Landing
        data={{
          ...technicalGroup,
          isReadMore: true,
          cards: groups,
          rooturl: "/co-curricular/technical-groups/",
          isTrim: true,
          num: 25,
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
