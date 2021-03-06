import React from "react"
import Card1 from "../components/card1"
import Layout from "../components/layout"
import "../styles/home2.css"
import { h2data, testimonialExcerpt, homeColumn, carouselPic } from "../data"
import TestimonialExcerpt from "../components/testimonial-excerpt"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Link, useStaticQuery, graphql } from "gatsby"
import HomeColumn from "../components/home-colum"
import Image from "gatsby-image"
import ResponsiveComponent from "../components/responsive-component"
const Bottom = props => (
  <div className="home2-bottom">
    <iframe
      src="https://www.youtube.com/embed/b7xePppEUIU?start=1"
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

class Home2 extends ResponsiveComponent {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth }
  }

  render() {
    const {
      allFile: { edges },
    } = this.props.data
    return (
      <Layout noContainer={true}>
        <Carousel
          showArrows={true}
          infiniteLoop
          autoPlay
          swipeable
          showThumbs={false}
        >
          {carouselPic.map(pic => (
            <div style={{ height: "calc(100vw/2.5)" }}>
              <Image
                fluid={
                  edges.filter(edge => edge.node.name == pic.name)[0].node
                    .childImageSharp.fluid
                }
              />
              {this.state.windowWidth > 706 && (
                <p className="legend my-legend text">
                  <div className="legend-text">{pic.content}</div>
                  <div style={{ textAlign: "right" }}>
                    <Link className="legend-link text" to={pic.to}>
                      {pic.link}
                    </Link>
                  </div>
                </p>
              )}
            </div>
          ))}
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
                  <Card1
                    carddata={{
                      ...data,
                      fluid: this.props.data.allFile.edges.find(
                        edge => edge.node.name === data.title
                      ).node.childImageSharp.fluid,
                    }}
                  />
                </div>
              ))}
            </div>
            {this.state.windowWidth > 650 ? <Bottom /> : ""}
          </div>
        </div>
        <div className="home2-container">
          <div className="home-column-container">
            {homeColumn.map(data => (
              <HomeColumn
                windowWidth={this.state.windowWidth}
                data={{ ...data }}
              />
            ))}
          </div>
          {this.state.windowWidth > 650 ? "" : <Bottom />}
        </div>
      </Layout>
    )
  }
}
export default Home2

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
      totalCount
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
