import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
     
        <Card bg="success" style={{
          height:"300px"
        }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + skill.content.image}
            style={{
              maxWidth: "50px",
            }}
          />
          <Card.Body>
            <Card.Header
            
              style={{
                color: "black",
                backgroundColor:"white"
              }}
            >
              {skill.content.title}
            </Card.Header>

            <Card.Text
              style={{
                color: "black",
              }}
            >
              <br/>
              {skill.content.desc}
            </Card.Text>
          </Card.Body>
        </Card>
       

      //   <div className="card">
      //   <div className="image-wrapper">
      //     <img src={skill.content.image} />
      //   </div>
      //   <div className="skill-title-wrapper">
      //     <h4>{skill.content.title}</h4>
      //   </div>
      // </div>
    );
  }
}

export default SkillCard;
