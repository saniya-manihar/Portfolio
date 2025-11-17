import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const quotes = [
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why was the JavaScript developer sad? Because he didn't nullify his feelings.",
    "I would love to change the world, but they won't give me the source code.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "I'm not lazy; I'm just on energy-saving mode.","Real programmers count from 0.",
    "The best thing about a Boolean is that even if you are wrong, you are only off by a bit.",
    "Software developers like to solve problems. If there are no problems handily available, they will create their own problems.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saniya Manihar </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am in currently enrolled in a Full Stack Web Development bootcamp from Microverse
            <br />
            Additionally, I am a self-taught programmer and I love to build
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Ai animated videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{quotes[currentQuoteIndex]}"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
