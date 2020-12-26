import React from "react"
import Layout from "../../components/layout"
import { scholarships } from "../../data"
import { Image } from "semantic-ui-react"
import "../../styles/scholarships.css"
function Scholarships(props) {
  return (
    <Layout>
      <h2 className="dark-color-head">Scholarships</h2>
      <p className="normal-para">
        The institute offers scholarships, fellowships and fee concessions to
        its students apart from providing bank loans. Fellowships are made
        available to PG students only. Following is a non-exhaustive list of
        some scholarships you can avail while at IITR.
      </p>
      {scholarships.map(scholarship => (
        <div className="single-scholarship">
          <h2 className="normal-head">{scholarship.title}</h2>
          <p
            className="normal-para"
            dangerouslySetInnerHTML={{
              __html: scholarship.content,
            }}
          />
          <div className="scholar-link">
            <Image src={require("../../images/web.png")} />
            <a href={scholarship.src}>{scholarship.src}</a>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Scholarships
