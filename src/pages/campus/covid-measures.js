import React from "react"
// import { Image } from "semantic-ui-react"
import Image from "gatsby-image"
import { covidupd } from "../../data"
import Layout from "../../components/layout"
import GeneralComp from "../../components/generalComp"
const CovidMeasures = props => {
  return (
    <div>
      <Layout>
        <GeneralComp {...covidupd} />
      </Layout>
    </div>
  )
}

export default CovidMeasures
