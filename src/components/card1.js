import React from "react"
import { Card, Icon } from "semantic-ui-react"
import "../styles/card1.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
const Card1 = props => (
  <Card
    className={"card1"}
    as={Link}
    to={`/${props.carddata.link}`}
    raised={false}
  >
    <Image fluid={props.carddata.fluid} />
    <Card.Content>
      <Card.Header>{props.carddata.title}</Card.Header>
      <Card.Description>{props.carddata.content}</Card.Description>
    </Card.Content>
  </Card>
)

export default Card1
