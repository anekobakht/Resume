import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Element } from "react-scroll";
import Fullpage from "../components/Fullpage";

class Header extends Component {
  state = {
    theme1: "first",
    theme2: "first2",
  };

  changeColor = () => {
    this.setState({
      // className:"first",//this.state.theme1 === "first" ? "first2" : "first",
      // color: this.state.color1 === "blue" ? "yellow" : "blue",
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
           
            <Col md={9}></Col>
            <Col md={3}>
              <ul class="nav">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                  delay={0}
                >
                  <li>
                    <a href="#about">About</a>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                  delay={0}
                >
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Header;
