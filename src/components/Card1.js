import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import "../styles/Card1.css"
import { Link } from "gatsby"
const Card1 = props => (
  <Card
    className={"card1"}
    as={Link}
    to={`/${props.carddata.link}`}
    raised={false}
  >
    <Image
      src="https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png"
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
