import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { connect } from "../data"
import {
  Button,
  Icon,
  Menu,
  List,
  Image as SemanticImage,
} from "semantic-ui-react"
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
      <div className="footer-bottom text">
        <div className="grid-header headings">Quick Links</div>
        <div className="grid-header headings">Other Resources</div>
        <div className="grid-header headings">Connect With Us</div>
        <Menu.Item as={Link}>How to get to Roorkee?</Menu.Item>
        <a
          href="https://geekgazette.iitr.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          geekgazette.iitr.ac.in
        </a>
        <div className="connect-icons">
          <List horizontal>
            {connect.map(conn => (
              <List.Item>
                <SemanticImage
                  avatar
                  as={"a"}
                  href={conn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  src={require(`../images/${conn.image}`)}
                />
              </List.Item>
            ))}
          </List>
        </div>
        <Menu.Item as={Link}>Gallery</Menu.Item>
        <a href="https://iitr.ac.in" target="_blank" rel="noopener noreferrer">
          iitr.ac.in
        </a>
        <Menu.Item as={Link}>Know Your Branch</Menu.Item>
        <div>Photo Courtesy: Photography Section, IITR</div>
        <div style={{ color: "var(--lightg)" }}>
          Check JEE opening and closing ranks
        </div>
        <Menu.Item as={Link}>FAQs</Menu.Item>
        <div>Video Courtesy: Cinematic Section, IITR </div>
        <Button
          as={"a"}
          href="https://cutoffs.iitr.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="cutoff-btn headings"
        >
          View cutoffs
        </Button>
      </div>
    </div>
  )
}
