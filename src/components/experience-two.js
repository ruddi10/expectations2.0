import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Grid } from "semantic-ui-react"
import ExperienceCard from "../components/experience-card"
import { getWords } from "../helper-functions"
import "../styles/experience-two.css"

const query = graphql`
  {
    data: allContentfulExperience(sort: { order: DESC, fields: createdAt }) {
      nodes {
        author
        batch
        branch
        archive
        slug
        description {
          childMarkdownRemark {
            html
          }
        }
        tags
        title
      }
    }
  }
`
const ExperienceTwo = ({ url, slug, archive, windowWidth }) => {
  const {
    data: { nodes },
  } = useStaticQuery(query)
  const experiences = nodes.filter(
    node => node.archive == archive && node.slug !== slug
  )
  const experience = experiences.slice(0, 2)

  return (
    <div className="experience-two-wrapper">
      <div className="experience-two-header headings">
        <div>Read another experience...</div>
        <Link className="experience-two-all" to={url}>
          View All
        </Link>
      </div>
      <Grid
        columns="2"
        stackable
        relaxed
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
      >
        {experience.map(card => (
          <Grid.Column className="cards-grid" stretched>
            <ExperienceCard
              data={{
                title: card.title,
                tags: card.tags,
                content:
                  getWords(
                    card.description.childMarkdownRemark.html,
                    windowWidth > 1000 ? 40 : windowWidth > 850 ? 25 : 20
                  ) + " ...",
                to: url + card.slug,
                author: card.author,
                batch: card.batch,
              }}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  )
}

export default ExperienceTwo
