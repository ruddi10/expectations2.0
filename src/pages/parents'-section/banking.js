import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { banking } from "../../data"
function Banking(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...banking} />
      </Layout>
    </div>
  )
}

export default Banking
