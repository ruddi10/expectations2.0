import React from "react"
import Card1 from "../components/Card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { Card, Icon, Image } from "semantic-ui-react"
import { h2data } from "../data"
import Video from "../components/Video"
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
        <div className="home2-bottom">
          <iframe
            width="800px"
            src="https://www.youtube.com/embed/tkJWtLKRVQA?start=11"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="card-container2">
            <Card1 carddata={h2data[0]} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default home2
