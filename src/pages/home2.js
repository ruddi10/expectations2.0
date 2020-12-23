import React from "react"
import Card1 from "../components/Card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { h2data, testimonialExcerpt } from "../data"
import TestimonialExcerpt from "../components/testimonial-excerpt"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Link, useStaticQuery, graphql } from "gatsby"

import HomeColumn from "../components/home-colum"

const query = graphql`
  {
    image1: file(relativePath: { eq: "dummy_image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "dummy_image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "dummy_image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "dummy_image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Home2(props) {
  const data = useStaticQuery(query)
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
        <div className="home-column-container">
          <HomeColumn
            data={{
              heading: "Student’s Corner",
              body:
                "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
              source: data.image1.childImageSharp.fluid,
              to: "/",
            }}
            isReverse={false}
            backdrop="tr"
          />
          <HomeColumn
            data={{
              heading: "Student’s Corner",
              body:
                "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
              source: data.image1.childImageSharp.fluid,
              to: "/",
            }}
            isReverse={true}
            backdrop="tl"
          />
          <HomeColumn
            data={{
              heading: "Student’s Corner",
              body:
                "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
              source: data.image1.childImageSharp.fluid,
              to: "/",
            }}
            isReverse={false}
            backdrop="tr"
          />
          <HomeColumn
            data={{
              heading: "Student’s Corner",
              body:
                "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
              source: data.image1.childImageSharp.fluid,
              to: "/",
            }}
            isReverse={true}
            backdrop="tl"
          />
        </div>
      </div>
    </Layout>
  )
}
