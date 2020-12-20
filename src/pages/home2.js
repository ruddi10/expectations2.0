import React from "react"
import Card1 from "../components/Card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { Card, Icon, Image } from "semantic-ui-react"
import { h2data } from "../data"
function home2(props) {
  return (
    <Layout>
      <div className="home2-container">
        <div className="home2-heading">
          <h2 className="light-color-head">Life and culture at IITR</h2>
        </div>
        <div className="home2-cards">
          {h2data.map(data => (
            <div className="card-container">
              <Card1 carddata={data} />
            </div>
          ))}
        </div>
        <div className="home2-bottom"></div>
      </div>
    </Layout>
  )
}

export default home2
