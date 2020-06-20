import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./SkillSection.css";
import SkillCars from "../components/SkillCard";
import { Link, Element } from "react-scroll";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Element name="Skills" className="element">
        </Element>
        <Fullpage className="third">
          <h3>{data.sections[1].title}</h3>
          <CardDeck>
            {data.sections[1].items.map((eachskill) => {
              return (
                <SkillCars skill={eachskill} />
              );
            })}
          </CardDeck>
        </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
