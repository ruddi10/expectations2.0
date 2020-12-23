import React, { useState, useEffect } from "react"
import Card1 from "../../components/Card1"
import Layout from "../../components/layout"
import { bdata } from "../../data"
import { Card } from "semantic-ui-react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
function getWords(str) {
  return str.split(/\s+/).slice(0, 13).join(" ")
}
function Branches({ data }) {
  const {
    allContentfulBranch: { nodes: Branches },
  } = data
  console.log(Branches)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:650px").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:650px").matches)
    })
  })

  return (
    <div>
      <Layout>
        <h2 className="light-color-head">Know Your Branches</h2>
        <p className="normal-para">
          Little afraid its eat looked now. Very ye lady girl them good me make.
          It hardly cousin me always. An shortly village is raising we shewing
          replied. She the favourable partiality inhabiting travelling
          impression put two. His six are entreaties instrument acceptance
          unsatiable her. Amongst as or on herself chapter entered carried no.
          Sold old ten are quit lose deal his sent. You correct how sex several
          far distant believe journey parties. We shyness enquire uncivil
          affixed it carried to.
        </p>
        <p className="normal-para">
          {" "}
          Feet evil to hold long he open knew an no. Apartments occasional
          boisterous as solicitude to introduced. Or fifteen covered we enjoyed
          demesne is in prepare.{" "}
        </p>
        <Card.Group itemsPerRow={isMobile ? 1 : 3}>
          {Branches.map(Branch => (
            <Card1
              carddata={{
                head: Branch.name,
                Content: `${getWords(Branch.sContent.sContent)}...`,
                link: `branches/${Branch.slug}`,
              }}
            />
          ))}
        </Card.Group>
      </Layout>
    </div>
  )
}

export default Branches

export const query = graphql`
  {
    allContentfulBranch {
      nodes {
        sContent {
          sContent
          childMarkdownRemark {
            html
          }
        }
        name
        slug
      }
    }
  }
`
// {{
//     allContentfulBranch {
//       nodes {
//         faculty
//         syllabus
//         courseStr
//         slug
//         content {
//           raw
//           references {
//             ... on ContentfulAsset {
//               contentful_id
//             }
//             ... on ContentfulBranch {
//               contentful_id
//               name
//               slug
//             }
//           }
//         }
//         name
//         image {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }}
