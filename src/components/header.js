import React, { Component } from "react"
import { Sticky, Dropdown, Menu } from "semantic-ui-react"
import "../styles/navbar.css"
import { dropops } from "../data"

export default class MenuExampleSizeHuge extends Component {
  state = { activeItem: "Academics" }

  handleItemClick = (e, { text }) => this.setState({ activeItem: text })

  render() {
    const { activeItem } = this.state

    return (
      <Sticky className="navbar-header">
        <Menu
          stackable
          borderless
          fluid
          widths={7}
          size="large"
          className="navbar-menu"
        >
          {dropops.map(dropop => (
            <Dropdown
              item
              text={dropop.value}
              className="box"
              onClick={this.handleItemClick}
            >
              <Dropdown.Menu>
                {dropop.fields.map(field => (
                  <Dropdown.Item className="ditem">{field}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Menu>
      </Sticky>
    )
  }
}
