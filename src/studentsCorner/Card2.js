import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import "../studentsCorner/Card2.css"
import "../styles/global.css"

const Card2 = () => (
  <Card className="bg_position">
    <Image src={require("../images/pattern.png")} wrapped ui={false} >
    </Image>
    <Card.Content  className="card_content">
      <Card.Header className="headings">Chaapo</Card.Header>
      <Card.Meta>
        <span className='date'>noun</span>
      </Card.Meta>
      <Card.Description>
      R land’s way of calling a party. Whether you got recruited to a campus group or have your birthday, you can hear people shouting chapo on any occassion.
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Card2