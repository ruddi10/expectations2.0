import React, { Component } from "react"
import { Sticky, Dropdown, Menu, Icon, Image } from "semantic-ui-react"
import "../styles/navbar.css"
import { dropups } from "../data"
import { Link } from "gatsby"
import ResponsiveComponent from "./responsive-component"
const MenuList = () => (
  <Menu
    stackable
    widths={7}
    size="small"
    borderless
    className="navbar-menu"
    attached={"bottom"}
  >
    {dropups.map((dropup, index) => (
      <Dropdown item text={dropup.value} className={"box"}>
        <Dropdown.Menu>
          {dropup.fields.map(field => (
            <Dropdown.Item
              className="ditem"
              value={index}
              as={Link}
              to={`/${dropup.value
                .split(" ")
                .join("-")
                .toLowerCase()}/${field.split(" ").join("-").toLowerCase()}/`}
            >
              {field}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    ))}
  </Menu>
)
export default class Navbar extends ResponsiveComponent {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth, toggle: false }
  }

  handleClick = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="above-menu">
            <Image
              src={require("../images/explogo.jpg")}
              fluid
              size={"small"}
              as={Link}
              to="/home2"
            />
            {/* <Icon
              className="cond-icon"
              name="list"
              size={"large"}
              onClick={this.handleClick}
            /> */}
            <Image
              src={require("../images/hamburger.png")}
              fluid
              onClick={this.handleClick}
              className="cond-icon"
            />
          </div>
          {this.state.toggle || window.innerWidth > 1024 ? (
            <MenuList />
          ) : (
            this.state.toggle
          )}
        </div>
      </div>
    )
  }
}
