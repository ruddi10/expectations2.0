import React from "react"
import { Button } from "semantic-ui-react"
import Image from "gatsby-image"
const HomeColumn = ({ data }) => {
  return (
    <div>
      <div>
        <div>{data.heading}</div>
        <div>{data.body}</div>
        <div>
          <Button size="medium">Know More</Button>
        </div>
      </div>
      <div>{/* <Image fluid={data.source} /> */}</div>
    </div>
  )
}

export default HomeColumn
