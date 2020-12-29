import React from "react"
import { Label, Icon, Image } from "semantic-ui-react"
import "../styles/share.css"
import { makeUrl } from "../helper-functions"

const Share = ({ relativeUrl, slug, title }) => {
  return (
    <div className="share-parent">
      <div className="text">
        <Image avatar src={require("../images/yayyyy.png")} />
        Yayy, you read it entirely! If you like this, share it on:
      </div>
      <div className="share-wrapper">
        <Label.Group>
          <a
            href={`https://www.facebook.com/sharer.php?u=${makeUrl(
              relativeUrl,
              slug
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon circular className="share-icons" name="facebook f" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${makeUrl(
              relativeUrl,
              slug
            )}&title=${title} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon circular className="share-icons" name="linkedin" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${title} ${makeUrl(
              relativeUrl,
              slug
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon circular className="share-icons" name="whatsapp" />
          </a>
          <a
            href={`https://twitter.com/share?url=${makeUrl(
              relativeUrl,
              slug
            )}&text=${title}&via=teamgeekgazette&hashtags=GeekGazette`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon circular className="share-icons" name="twitter" />
          </a>
        </Label.Group>
      </div>
    </div>
  )
}

export default Share
