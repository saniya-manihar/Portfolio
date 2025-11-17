import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import toDoList from "../../Assets/Projects/toDoList.png"
import mathmagicians from "../../Assets/Projects/math-magicians.png"
import PizzaSale from "../../Assets/Projects/pixxasaleimage.png"
import RockPaperSci from "../../Assets/Projects/RockPaperSci.png"
import KisaanSetuImg from "../../Assets/Projects/KisaanSetu.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PizzaSale}
              isBlog={false}
              title="Pizza Sales"
             description="Pizza Sales Dashboard is an end-to-end data analytics project built using Power BI, designed to analyze sales performance across multiple dimensions like revenue, quantity, category, size, and customer behavior. The dashboard provides interactive KPIs including Total Revenue, Total Orders, Average Order Value, and Total Pizzas Sold. It highlights best-selling and worst-selling pizzas, top 5 and bottom 5 products by revenue and quantity, and category-wise contribution insights." 

              ghLink="https://github.com/saniya-manihar/Pizza_Sales_Analysis"
              demoLink="https://auto-docs-54hp.onrender.com/"
            />
          </Col>

          
        

          
          
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoList}
              isBlog={false}
              title="Todo List"
              description="Experience seamless task management with our To-Do list project. Add your daily tasks to the list and effortlessly remove them when completed. Enjoy the convenience of modern features like dynamic rendering, easy styling, and organized structure. Stay productive and in control of your tasks with this user-friendly web-based solution. "
              ghLink="https://github.com/DevKaranJ/ToDo-list"
              demoLink="https://todo-list-t5r6.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mathmagicians}
              isBlog={false}
              title="Math Magicians"
              description="Math Magicians is an educational web application built using React, designed for math enthusiasts. It features a versatile calculator for basic math operations and offers random math-related quotes for inspiration. The project provides hands-on learning in web development, divided into projects covering setup, component creation, event handling, data fetching, website structure, and testing. It aims to make math learning engaging and serves as a practical React development exercise."
              ghLink="https://github.com/DevKaranJ/math-magicians"
              demoLink="https://math-magicians-dnk4.onrender.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RockPaperSci}
    isBlog={false}
    title="Rock • Paper • Scissors Game"
    description="A modern, interactive Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. Features include animated 3D UI, hover effects, real-time score calculation, and dynamic game logic against the computer. The project demonstrates strong fundamentals of DOM manipulation, event handling, random choice algorithms, and responsive game UI."
              ghLink="https://github.com/saniya-manihar/Rock-Paper-and-Scissor-Game"
              demoLink="https://math-magicians-dnk4.onrender.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={KisaanSetuImg}
    isBlog={false}
    title="Kisaan Setu – MERN Based Smart Agriculture Platform"
    description="Kisaan Setu is a MERN-based smart agriculture platform designed to directly connect farmers and buyers. It allows farmers to list their crops, buyers to negotiate prices, and both parties to communicate without intermediaries. Features include crop posting, secured authentication, real-time updates, product bidding, and contractor modules. Built with a clean, modern UI focused on transparency and fair pricing."
    ghLink="https://github.com/yourusername/Kisaan-Setu"
    demoLink="https://your-demo-link.com"
  />
</Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
