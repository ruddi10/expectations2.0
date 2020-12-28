import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { cgpa } from "../../data"
function Cgpa(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...cgpa} />
      </Layout>
    </div>
  )
}

export default Cgpa
