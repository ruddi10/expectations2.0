import React from "react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { incampusCommute } from "../../data"
function IncampusCommute(props) {
  return (
    <div>
      <Layout>
        <GeneralComp {...incampusCommute} />
      </Layout>
    </div>
  )
}

export default IncampusCommute