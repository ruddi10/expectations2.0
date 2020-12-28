import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { firstsem } from "../../data"
function FirstSem(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...firstsem} />
      </Layout>
    </div>
  )
}

export default FirstSem
