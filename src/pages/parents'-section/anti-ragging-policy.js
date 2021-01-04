import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { ragging } from "../../data"
function AntiRaggingPolicy(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...ragging} />
      </Layout>
    </div>
  )
}

export default AntiRaggingPolicy
