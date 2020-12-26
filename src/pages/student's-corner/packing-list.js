import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { packinglist } from "../../data"
function PackingList(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...packinglist} />
      </Layout>
    </div>
  )
}

export default PackingList
