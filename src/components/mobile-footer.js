import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
export default function MobileFooter() {
  const data = useStaticQuery(query)
  return (
    <>
      <div className="nav-container">
        <div className="footer-bottom text">
          <div className="logo-wrapper">
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="grid-header headings">Quick Links</div>
          <Menu.Item as={Link}>How to get to Roorkee?</Menu.Item>
          <Menu.Item as={Link}>Gallery</Menu.Item>
          <Menu.Item as={Link}>FAQs</Menu.Item>
          <Menu.Item as={Link}>Know Your Branch</Menu.Item>

          <div className="grid-header headings">Connect With Us</div>
          <div>
            <List horizontal>
              <List.Item>
                <SemanticImage
                  avatar
                  as={"a"}
                  href="https://www.facebook.com/geekgazette"
                  target="_blank"
                  rel="noopener noreferrer"
                  src={require("../images/facebook.png")}
                />
              </List.Item>
              <List.Item>
                <SemanticImage
                  avatar
                  as={"a"}
                  href="https://www.instagram.com/geek_gazette/"
                  target="_blank"
                  rel="noopener noreferrer"
                  src={require("../images/insta_exp.png")}
                />
              </List.Item>
              <List.Item>
                <SemanticImage
                  avatar
                  as={"a"}
                  href="https://www.linkedin.com/company/geek-gazette/"
                  target="_blank"
                  rel="noopener noreferrer"
                  src={require("../images/linkedin_exp.png")}
                />
              </List.Item>
              <List.Item>
                <SemanticImage
                  avatar
                  as={"a"}
                  href="https://twitter.com/teamgeekgazette"
                  target="_blank"
                  rel="noopener noreferrer"
                  src={require("../images/tweet_exp.png")}
                />
              </List.Item>
            </List>
          </div>
          <div className="grid-header headings">
            Check JEE opening and closing ranks
          </div>
          <a
            href="https://cutoffs.iitr.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            View cutoffs
          </a>
          <div className="grid-header headings">Other Resources</div>

          <a
            href="https://geekgazette.iitr.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            geekgazette.iitr.ac.in
          </a>

          <a
            href="https://iitr.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            iitr.ac.in
          </a>
          <div>
            <Button className="button headings" color="teal">
              <Icon name="download" /> Expectations PDF
            </Button>
          </div>
        </div>

        <div className="mobi-low headings">
          <div>Photo Courtesy: Photography Section, IITR</div>

          <div>Video Courtesy: Cinematic Section, IITR </div>
          <div style={{ color: "#333333" }}>
            All rights reserved Geek Gazette,Copyright 2020
          </div>
        </div>
      </div>
    </>
  )
}
