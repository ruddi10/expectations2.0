import React from "react"
import Card2 from "../components/card2"
import { Grid, GridColumn } from "semantic-ui-react"
import { getWords } from "../helper-functions"
const GenericCard2Landing = ({ data }) => {
  return (
    <>
      <h2 className="dark-color-head" style={{ fontSize: "2.5rem" }}>
        {data.heading}
      </h2>
      <p
        className="normal-para"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      <Grid
        columns={3}
        stackable
        relaxed
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {data.cards.map(card => (
          <GridColumn stretched>
            <Card2
              data={{
                title: card.title,
                content: data.isTrim
                  ? getWords(card.about.about, data.num) + "..."
                  : card.about.about,
                isReadMore: data.isReadMore,
                source: card.logo.file.url,
                to: data.rooturl + card.slug,
              }}
            />
          </GridColumn>
        ))}

        {/* <GridColumn>
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
          </GridColumn> */}
      </Grid>{" "}
    </>
  )
}

export default GenericCard2Landing
