import React from 'react';
import Layout from '@theme/Layout';
import './styles.css';

export default function Home() {
  return (
    <Layout
      title="Rishab Pandey — Portfolio"
      description="Software Engineer — Backend · APIs · Cloud"
    >
      <main className="astro-bg">

        {/* Hero Section */}
        <section id="hero" className="astro-hero fade-in">
          <div className="hero-content">
            <img src="img/avatar.png" alt="Rishab Pandey" className="avatar" />
            <h1 className="astro-title">Rishab Pandey</h1>
            <p className="astro-subtitle">Software Engineer — Backend · APIs · Cloud</p>
            <div className="astro-links">
              <a href="mailto:work.rishabpandey@gmail.com" className="social-link">
                <img src="img/email.svg" alt="Email" /> Email
              </a>
              <a href="https://www.linkedin.com/in/rishab-pandey-8a8276184/" className="social-link">
                <img src="img/linkedin.svg" alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://github.com/Rishabrp99" className="social-link">
                <img src="img/github.svg" alt="GitHub" /> GitHub
              </a>
              <a href="resume.pdf" target="_blank" rel="noreferrer" className="resume-link">
                📄 Resume
              </a>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <nav className="quick-nav fade-in">
          <a href="#experience">
            <img src="img/experience.svg" alt="Experience" />
            Experience
          </a>
          <a href="#projects">
            <img src="img/projects.svg" alt="Projects" />
            Projects
          </a>
          <a href="#skills">
            <img src="img/skills.svg" alt="Skills" />
            Skills
          </a>
          <a href="#leadership">
            <img src="img/leadership.svg" alt="Leadership" />
            Leadership
          </a>
          <a href="#contact">
            <img src="img/contact.svg" alt="Contact" />
            Contact
          </a>
        </nav>

        {/* Experience */}
        <section id="experience" className="section fade-in">
          <div className="section-header">
            <img src="img/experience.svg" alt="Experience" className="section-icon" />
            <h2>Experience</h2>
          </div>

          <div className="card experience-card">
            <div className="card-header">
              <h3>Oracle India Pvt Ltd — Software Engineer</h3>
              <span className="duration">2023–Present</span>
            </div>
            <ul>
              <li>Developed and customized <strong>RESTful APIs</strong> using Core Java, Spring Boot, Jakarta, and Oracle DB.</li>
              <li>Designed and maintained <strong>microservices</strong> for modularity and scalability.</li>
              <li>Conducted <strong>unit</strong> & <strong>performance testing</strong> with JMeter.</li>
              <li>Integrated APIs in <strong>CI/CD</strong> pipelines and deployed to cloud environments.</li>
            </ul>
          </div>

          <div className="card experience-card">
            <div className="card-header">
              <h3>Streak (YC 2022) — Backend Developer</h3>
              <span className="duration">2023</span>
            </div>
            <ul>
              <li>Optimized DB performance using <strong>ETL</strong> techniques.</li>
              <li>Migrated backend from Golang to Python (Django).</li>
              <li>Built serverless pipelines with <strong>AWS Lambda</strong> and S3.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section fade-in">
          <div className="section-header">
            <img src="img/projects.svg" alt="Projects" className="section-icon" />
            <h2>Projects</h2>
          </div>
          
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="img/project1.svg" alt="EHR Project" />
              </div>
              <div className="project-content">
                <h4>Electronic Health Record</h4>
                <p>FHIR-compliant EHR integrated with ABHA; built in FastAPI & MongoDB.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="img/project2.svg" alt="Fadustry App" />
              </div>
              <div className="project-content">
                <h4>Fadustry</h4>
                <p>E-commerce app for farmers to buy/sell agricultural waste using Flutter.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="img/project3.svg" alt="Kitchen Waste Management" />
              </div>
              <div className="project-content">
                <h4>Kitchen Waste Management</h4>
                <p>CRUD app using Java Servlets for waste reduction & sharing tips.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section fade-in">
          <div className="section-header">
            <img src="img/skills.svg" alt="Skills" className="section-icon" />
            <h2>Skills</h2>
          </div>
          
          <div className="skills-grid">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">Django</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">CI/CD</span>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section fade-in">
          <div className="section-header">
            <img src="img/leadership.svg" alt="Leadership" className="section-icon" />
            <h2>Leadership</h2>
          </div>
          
          <div className="leadership-grid">
            <div className="leadership-item">
              <span className="leadership-badge">NSS Volunteer</span>
              <p>Community service and social responsibility initiatives.</p>
            </div>
            <div className="leadership-item">
              <span className="leadership-badge">Oracle Volunteer</span>
              <p>CSR programs and corporate social responsibility.</p>
            </div>
            <div className="leadership-item">
              <span className="leadership-badge">Co-founder</span>
              <p>TCET Opensource community building and open source advocacy.</p>
            </div>
            <div className="leadership-item">
              <span className="leadership-badge">Web Lead</span>
              <p>Google Developer Student Clubs technical leadership.</p>
            </div>
          </div>
        </section>

        {/* Certificates / Achievements */}
        <section id="certificates" className="section fade-in">
          <div className="section-header">
            <img src="img/certificates.svg" alt="Certificates" className="section-icon" />
            <h2>Certificates & Achievements</h2>
          </div>

          {/* Image-based items */}
          <div className="project-grid">
            <div className="project-card certificate-card">
              <div className="project-image">
                <img src="img/streak-internship.jpg" alt="Streak Internship Completion Letter" />
              </div>
              <div className="project-content">
                <h4>Internship Completion Letter — Streak</h4>
                <p>Engineering Intern (Feb 2023 – Jun 2023)</p>
              </div>
            </div>

            <div className="project-card certificate-card">
              <div className="project-image">
                <img src="img/gdsc-certificate.jpg" alt="GDSC Core Team Certificate" />
              </div>
              <div className="project-content">
                <h4>GDSC Core Team — Certificate of Appreciation</h4>
                <p>Google Developer Student Clubs (2021–2022)</p>
              </div>
            </div>
          </div>

          {/* PDF links */}
          <div className="cert-links">
            <a href="certs/coursera-config-mgmt.pdf" target="_blank" rel="noreferrer" className="cert-link">
              <span className="cert-icon">📚</span>
              Google: Configuration Management & the Cloud (Coursera)
            </a>
            <a href="certs/coursera-ml-andrewmg.pdf" target="_blank" rel="noreferrer" className="cert-link">
              <span className="cert-icon">🤖</span>
              Stanford/Andrew Ng: Machine Learning (Coursera)
            </a>
            <a href="certs/coursera-automating-tasks.pdf" target="_blank" rel="noreferrer" className="cert-link">
              <span className="cert-icon">⚡</span>
              Google: Automating Real-World Tasks with Python (Coursera)
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section fade-in">
          <div className="section-header">
            <img src="img/contact.svg" alt="Contact" className="section-icon" />
            <h2>Contact</h2>
          </div>
          
          <div className="contact-grid">
            <a href="mailto:work.rishabpandey@gmail.com" className="contact-item">
              <img src="img/email.svg" alt="Email" />
              <span>work.rishabpandey@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/rishab-pandey-8a8276184/" className="contact-item">
              <img src="img/linkedin.svg" alt="LinkedIn" />
              <span>linkedin.com/in/rishabpandey</span>
            </a>
            <a href="https://github.com/Rishabrp99" className="contact-item">
              <img src="img/github.svg" alt="GitHub" />
              <span>github.com/Rishabrp99</span>
            </a>
          </div>
        </section>

      </main>
    </Layout>
  );
}
