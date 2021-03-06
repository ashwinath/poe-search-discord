import * as React from "react";
import { NavigationState } from "../Interfaces";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavigationBar.css"

class NavigationBar extends React.Component<{}, NavigationState> {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  public render() {
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand className="nav-bar-text" href="/">PoeSearch</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink
                  className="nav-bar-item"
                  href="https://github.com/ashwinath/poe-search-discord">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  private toggle() {
    this.setState(() => {
      return {
        ...this.state,
        isOpen: !this.state.isOpen,
      }
    });
  }
}

export default NavigationBar;
