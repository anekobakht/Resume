import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./paragraphs.css";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="Second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            <p>{data.sections[0].items[0].content}</p>
          </div>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
