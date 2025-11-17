import React from "react";
import "./Certification.css";
// correct relative import from components/Certification -> src/Assets/indilearn.png
import indilearnCert from "../../Assets/indilearn.png";
import dataAnalysisCert from "../../Assets/Projects/DataAnalysisCertificate.png";

import tataForageCert from "../../Assets/Projects/tata-forage.png";
import indibusCert from "../../Assets/Projects/indibus.png";

const certifications = [
  {
    id: 1,
    title: "JavaScript Programming Certification",
    description:
      "Successfully completed the JavaScript Programming Course with Grade B, conducted by IndiLearn & ABESIT from April 2024 to July 2024.",
    img: indilearnCert,
  },
  {
    id: 2,
    title: "Data Analysis using Excel, SQL & Tableau",
    description:
      "Completed a 60-hour Summer Internship Training Program on Data Analysis using Excel, SQL, and Tableau at ABESIT from 31 June 2025 to 26 July 2025.",
    img: dataAnalysisCert,
  },
  {
  id: 3,
  title: "GenAI Powered Data Analytics Job Simulation – TATA Forage",
  description:
    "Completed the GenAI Powered Data Analytics Job Simulation by TATA Forage, covering exploratory data analysis, AI-based delinquency prediction, business reporting, data storytelling, and AI-driven collection strategy.",
  img: tataForageCert,
}
,{
  id: 4,
  title: "UI/UX Design Internship – Indibus Softwares",
  description:
    "Completed a 3-Month Internship as a UI/UX Designer at Indibus Softwares, working on wireframes, modern UI layouts, user flows, and responsive interactive designs.",
  img: indibusCert, // imported image
}

  
];

function Certification() {
  return (
    <section className="certification-page">
      

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className="cert-card">
            <div className="cert-media" aria-hidden>
              <img src={cert.img} alt={cert.title} className="cert-img" />
            </div>

            <div className="cert-body">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-actions">
                <a className="cert-btn" href={cert.img} target="_blank" rel="noreferrer">
                  View
                </a>
                <a className="cert-btn ghost" href={cert.img} download>
                  Download
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certification;
