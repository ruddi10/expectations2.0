import React from "react"
// import { Image } from "semantic-ui-react"
import Image from "gatsby-image"
import { eateries } from "../../data"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import "../../styles/eateries.css"
import { Component } from "react"
import ContentWithImage from "../../components/contentWithImage"

class Eateries extends Component {
  constructor(props) {
    super(props)
    this.state = { type: "veg" }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    this.setState({
      type: e.target.value,
    })
    console.log(this.state.type)
  }
  render(props) {
    const ueateries = eateries.filter(eat => eat.type === this.state.type)
    console.log(this.props.data)
    return (
      <div>
        <Layout>
          <h2 className="dark-color-head">Eateries</h2>
          <div className="eat-nav">
            <button
              className="eat-button text"
              value={"veg"}
              onClick={this.handleClick}
            >
              Pure Veg
            </button>
            <button
              className="eat-button text"
              value={"nonveg"}
              onClick={this.handleClick}
            >
              Non Veg
            </button>
            <button
              className="eat-button text"
              value={"dessert"}
              onClick={this.handleClick}
            >
              Dessert
            </button>
            <hr className="hr" />
          </div>
          {ueateries.map((ueat, index) => (
            <div className="eat-div">
              <ContentWithImage
                {...ueat}
                fluid={
                  this.props.data.allFile.edges.find(
                    edge => edge.node.name === ueat.display
                  ).node.childImageSharp.fluid
                }
                r={index % 2}
              />
            </div>
          ))}
        </Layout>
      </div>
    )
  }
}

export default Eateries

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "eateries" } }) {
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

{
  /* <Image
          className="expanded-image"
          fluid={props.data.file.childImageSharp.fluid}
        />
        <div className="para-container">
          {eateries.map(eat => (
            <div className="eat-cntr">
              <h2 className="normal-head">{eat.title}</h2>
              <p
                className="normal-para"
                dangerouslySetInnerHTML={{
                  __html: eat.content,
                }}
              />
            </div>
          ))}
        </div> */
}
