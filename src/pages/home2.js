import React from "react"
import Card1 from "../components/Card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { h2data } from "../data"

import ImageGallery from "react-image-gallery"

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description:
      '<a href="https://facebook.com">Hello World there i am here to defeat everyone</>',
    embedUrl: "/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: require("../images/expectations_carousel_dummy.png"),
  },
]

function home2(props) {
  return (
    <Layout noContainer={true}>
      <ImageGallery
        items={images}
        showThumbnails={false}
        autoPlay={true}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />

      <div className="home2-container">
        <div className="home-banner">
          <div>FIND ALL YOUR DOUBTS CLEARED HERE.</div>
          <div className="dark-color-head">
            A COMPREHENSIVE GUIDE TO IIT ROORKEE FOR FRESHERS AND PROSPECTIVE
            STUDENTS.
          </div>
        </div>
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
