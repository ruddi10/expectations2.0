import React from "react"
import Layout from "../../components/layout"
import { lingo } from "../../data"
import { Image } from "semantic-ui-react"
import "../../styles/to-do-list.css"

const LingoList = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">{lingo.heading}</h2>
        <p
          className="normal-para"
          dangerouslySetInnerHTML={{ __html: lingo.content }}
        />
        <div>
          {lingo.cards.map(card => (
            <div className="todo">
              <div className="icon-head">
                <Image
                  src={require("../../images/flag.png")}
                  className="flag-icon"
                />
                <p className="normal-para">
                  {" "}
                  <strong>{card.title} - </strong>
                  <span dangerouslySetInnerHTML={{ __html: card.content }} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default LingoList
