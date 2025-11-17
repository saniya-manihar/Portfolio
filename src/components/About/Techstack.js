import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiRedux,

  SiHtml5,
  SiCss3,
  SiJquery,
} from "react-icons/si";

function Techstack() {
  const techStackStyle = {
    fontSize: "14px", // Adjust the font size as needed
    textAlign: "center",
    marginTop: "5px", // Adjust the spacing as needed
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML icon */}
        <div style={techStackStyle}>HTML</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> {/* CSS icon */}
        <div style={techStackStyle}>CSS</div> {/* Tech stack name */}
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript icon */}
        <div style={techStackStyle}>JavaScript</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js icon */}
        <div style={techStackStyle}>Node.js</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React icon */}
        <div style={techStackStyle}>React</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB icon */}
        <div style={techStackStyle}>MongoDB</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git icon */}
        <div style={techStackStyle}>Git</div> {/* Tech stack name */}
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL icon */}
        <div style={techStackStyle}>PostgreSQL</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux /> {/* Redux icon */}
        <div style={techStackStyle}>Redux</div> {/* Tech stack name */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery /> {/* Sql icon */}
        <div style={techStackStyle}>SQL</div> {/* Tech stack name */}
      </Col>
    </Row>
  );
}

export default Techstack;
