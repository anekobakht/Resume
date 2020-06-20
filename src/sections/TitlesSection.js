import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class TitlesSection extends Component {
  state = {
    color: "white",
    theme: "first2",
  };

  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white",
    });
  };

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === "first2" ? "first" : "first2",
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={2}>
              <Button variant="link" onClick={() => this.changeTheme()}>
                Change Color
              </Button>
            </Col>
            <Col md={10}></Col>
          </Row>
        </Container>

        <Fullpage className={this.state.theme}>
          <h1
            className="title"
            style={{
              color: this.state.color,
            }}
            onMouseOver={() => this.changeColor()}
            onMouseLeave={() => this.changeColor()}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>

          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
            delay={0}
          >
            <DownIcon
              icon={data.icons.down}
              // onClick={() => console.log(`i m working`)}
            ></DownIcon>
          </Link>
        </Fullpage>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesSection;
