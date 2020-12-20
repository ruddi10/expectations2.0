import React, { Component } from "react"
import { Sticky, Dropdown, Menu } from "semantic-ui-react"
import "../styles/navbar.css"
import { dropups } from "../data"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = { activeItem: "Academics" }

  //handleItemClick = e => window.history.push(`/${e.value}`)

  render() {
    const { activeItem } = this.state
    return (
      <div className="navbar-container">
        <div className="navbar-header">
          <h2>Expectations iitr</h2>
          <Menu
            stackable
            widths={7}
            size="large"
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
                      to={`/${dropup.value}/${field}`}
                    >
                      {field}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </Menu>
        </div>
      </div>
    )
  }
}
