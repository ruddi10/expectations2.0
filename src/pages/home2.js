import React from "react"
import Card1 from "../components/Card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { h2data } from "../data"
import TestimonialExcerpt from "../components/testimonial-excerpt"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Link } from "gatsby"

function home2(props) {
  return (
    <Layout noContainer={true}>
      <Carousel
        showArrows={true}
        infiniteLoop
        autoPlay
        swipeable
        showThumbs={false}
      >
        <div style={{ height: "50vh" }}>
          <img
            className="image-gallery-image"
            src="https://picsum.photos/id/1018/1000/600/"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{ height: "50vh" }}>
          <img
            className="image-gallery-image"
            src="https://picsum.photos/id/1015/1000/600/"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div style={{ height: "50vh" }}>
          <img
            className="image-gallery-image"
            src="https://picsum.photos/id/1019/1000/600/"
          />
          <p className="legend">Legend 3</p>
        </div>
        <div style={{ height: "50vh" }}>
          <img
            className="image-gallery-image"
            src={require("../images/expectations_carousel_dummy.png")}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
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
            <div className="all-excerpt">
              <Link>View All</Link>
            </div>
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              showThumbs={false}
              showStatus={false}
            >
              <TestimonialExcerpt
                data={{
                  text:
                    "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
                  author: "Ketan Dhanuka",
                  branch: "Applied Mathematics, IITR’24",
                  source: "gg_logo.png",
                }}
              />
              <TestimonialExcerpt
                data={{
                  text:
                    "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
                  author: "Ketan Dhanuka",
                  branch: "Applied Mathematics, IITR’24",
                  source: "gg_logo.png",
                }}
              />
              <TestimonialExcerpt
                data={{
                  text:
                    "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
                  author: "Ketan Dhanuka",
                  branch: "Applied Mathematics, IITR’24",
                  source: "gg_logo.png",
                }}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default home2
