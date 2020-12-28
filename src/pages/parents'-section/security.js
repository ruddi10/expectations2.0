import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { security } from "../../data"
function Security(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...security} />
      </Layout>
    </div>
  )
}

export default Security
