import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import "../styles/Card1.css"
import { Link } from "gatsby"
const Card1 = props => (
  <Card
    fluid
    className={"card1"}
    as={Link}
    to={`/${props.carddata.link}`}
    raised={false}
  >
    <Image
      src={
        "https://content.techgig.com/photo/77541410/iit-roorkee-to-launch-certification-course-in-ai-ml-data-science.jpg?141074"
      }
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{props.carddata.head}</Card.Header>
      <Card.Description>{props.carddata.Content}</Card.Description>
    </Card.Content>
  </Card>
)

export default Card1
