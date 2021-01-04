import React from "react"
import Card2 from "../components/card2"
import { Grid, GridColumn } from "semantic-ui-react"
import { getWords } from "../helper-functions"
import ExperienceCard from "./experience-card"
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
        columns={data.cardNum}
        stackable
        relaxed
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {data.cards.map(card => (
          <GridColumn className="cards-grid" stretched>
            {data.isExperience ? (
              <ExperienceCard
                data={{
                  title: card.title,
                  tags: card.tags,
                  content:
                    getWords(
                      card.description.childMarkdownRemark.html,
                      data.num
                    ) + " ...",
                  to: data.rooturl + card.slug,
                  author: card.author,
                  batch: card.batch,
                }}
              />
            ) : (
              <Card2
                data={{
                  title: card.title,
                  subhead: card.subhead,
                  isLingo: data.isLingo,
                  content: data.isTrim
                    ? getWords(card.about.about, data.num) + "..."
                    : card.content,
                  isReadMore: data.isReadMore,
                  source: card.logo ? card.logo.file.url : "",
                  to: data.rooturl + card.slug,
                }}
              />
            )}
          </GridColumn>
        ))}
      </Grid>{" "}
    </>
  )
}

export default GenericCard2Landing
