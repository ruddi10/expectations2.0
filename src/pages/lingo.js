import React from "react"

import Layout from "../components/layout"
import Card2 from "../studentsCorner/Card2"
import { Card } from "semantic-ui-react"


export default () => (
    <div>
        <Layout>
        <div>
          <h2 className="light-color-head">IITR Lingo</h2>
          <p className="text description">
          A non-exhaustive list of words present in the vocabulary of the campus junta! Don’t try to memorise them all, you’ll definitely get savvy with these, by the end of the semester knowingly or unknowingly.
          </p>
          <Card.Group itemsPerRow={3}>
            <Card2 />
            <Card2 />
            <Card2 />
          </Card.Group>
        </div>
        </Layout>
        
    </div>
)
