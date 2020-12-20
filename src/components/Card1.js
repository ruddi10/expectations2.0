import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import "../styles/Card1.css"
import { Link } from "gatsby"
const Card1 = props => (
  <Card fluid className={"card1"} as={Link} to={`/cardLink`}>
    <Image
      src={
        "https://storage.googleapis.com/picxystatic/cache/2019/7/4/0233b76936525adc4c2e68292d82a516.jpg"
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
