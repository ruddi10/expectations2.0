import React from "react"
import Card1 from "../components/card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { h2data, testimonialExcerpt, homeColumn } from "../data"
import TestimonialExcerpt from "../components/testimonial-excerpt"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Link, useStaticQuery, graphql } from "gatsby"
import HomeColumn from "../components/home-colum"
const Bottom = props => (
  <div className={`home2-bottom ${props.class}`}>
    <iframe
      src="https://www.youtube.com/embed/b7xePppEUIU?start=11"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    {/* <Embed
      source="youtube"
      placeholder="https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png"
      url="https://www.youtube.com/watch?v=b7xePppEUIU"
    /> */}
    <div className="card-container2">
      <div className="all-excerpt">
        <Link>View All</Link>
      </div>
      <Carousel
        infiniteLoop
        showArrows={false}
        autoPlay
        swipeable
        showThumbs={false}
        showStatus={false}
      >
        {testimonialExcerpt.map(data => (
          <TestimonialExcerpt data={data} />
        ))}
      </Carousel>
    </div>
  </div>
)
export default function Home2(props) {
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
      <div className="home-banner">
        <div>FIND ALL YOUR DOUBTS CLEARED HERE.</div>
        <div className="dark-color-head">
          A COMPREHENSIVE GUIDE TO IIT ROORKEE FOR FRESHERS AND PROSPECTIVE
          STUDENTS.
        </div>
      </div>
      <div className="grey-body">
        <div className="gb-container">
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
          <Bottom class={"only-web"} />
        </div>
      </div>
      <div className="home2-container">
        <div className="home-column-container">
          {homeColumn.map(data => (
            <HomeColumn data={{ ...data }} />
          ))}
        </div>
        <Bottom class={"only-mobile"} />
      </div>
    </Layout>
  )
}
