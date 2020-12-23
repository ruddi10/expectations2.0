import React, { Component } from "react"
import { Sticky, Dropdown, Menu, Icon, Image } from "semantic-ui-react"
import "../styles/navbar.css"
import { dropups } from "../data"
import { Link } from "gatsby"
const MenuList = () => (
  <Menu
    stackable
    widths={7}
    size="small"
    borderless
    className="navbar-menu"
    attached={"bottom"}
  >
    {dropups.map(dropup => (
      <Dropdown item text={dropup.value} className="box">
        <Dropdown.Menu>
          {dropup.fields.map(field => (
            <Dropdown.Item
              className="ditem"
              value={field}
              as={Link}
              to={`/${dropup.value}/${field}/`}
            >
              {field}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    ))}
  </Menu>
)
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth, toggle: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  handleClick() {
    this.setState({ toggle: !this.state.toggle })
  }
  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
    })
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
              to="/"
            />
            <Icon
              className="cond-icon"
              name="list"
              size={"large"}
              onClick={this.handleClick}
            />
          </div>
          {this.state.toggle || window.innerWidth > 800 ? (
            <MenuList />
          ) : (
            this.state.toggle
          )}
        </div>
      </div>
    )
  }
}
