import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, Icon, Menu } from "semantic-ui-react"
import Image from "gatsby-image"
import "../styles/footer.css"
const query = graphql`
  {
    file(relativePath: { eq: "gg_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function Footer() {
  const data = useStaticQuery(query)

  return (
    <div className="nav-container">
      <div className="top">
        <div className="logo-wrapper">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
        <div>
          <Button className="button headings" basic color="teal">
            <Icon name="download" /> Expectations PDF
          </Button>
        </div>
      </div>
      <div className="middle text">
        <div>Explore</div>
        <Menu.Item as={Link}>Student's Corner</Menu.Item>
        <Menu.Item as={Link}>Academics</Menu.Item>
        <Menu.Item as={Link}>Placement</Menu.Item>
        <Menu.Item as={Link}>Co-curricular</Menu.Item>
        <Menu.Item as={Link}>Campus</Menu.Item>
        <Menu.Item as={Link}>Parent's Corner</Menu.Item>
        <Menu.Item as={Link}>Experiences</Menu.Item>
      </div>
      <div className="bottom text">
        <div className="grid-header headings">Quick Links</div>
        <div className="grid-header headings">Other Resources</div>
        <div className="grid-header headings">Connect With Us</div>
        <Menu.Item as={Link}>Student's Corner</Menu.Item>
        <div>1</div>
        <div>1</div>
        <Menu.Item as={Link}>How to get to Roorkee?</Menu.Item>
        <div>1</div>
        <Menu.Item as={Link}>Gallery</Menu.Item>
        <div>1</div>
        <div>1</div>
        <Menu.Item as={Link}>Know Your Branch</Menu.Item>
        <div>1</div>
        <div>1</div>
        <Menu.Item as={Link}>FAQs</Menu.Item>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  )
}
