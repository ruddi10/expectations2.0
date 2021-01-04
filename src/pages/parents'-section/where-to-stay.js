import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { stay } from "../../data"
function WhereToStay(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...stay} />
      </Layout>
    </div>
  )
}

export default WhereToStay
