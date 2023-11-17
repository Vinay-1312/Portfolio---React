import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Netflix-Symbol.png";
import swiggy from "../../Assets/Projects/swiggy.jpg";
import cv from "../../Assets/Projects/computervision.jpg";
import chatify from "../../Assets/Projects/data-analysis.jpg";
import mask from "../../Assets/Projects/masknomask.jpg";
import resume from "../../Assets/Projects/ResumeMatcher.png";
import hotel from "../../Assets/Projects/hotell.jpg"
import chatAI from "../../Assets/Projects/chatAI.jpg"
import mi from "../../Assets/Projects/mi.png"
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
              imgPath={chatify}
              isBlog={false}
              title="Job Market Data Analysis "
              video = "Data Analysis-Demo.mp4"
              description="A robust job data analysis system leveraging web scraping with Selenium for comprehensive job-related information, implementing a resume-matching system with 87% accuracy using Natural Language Processing and Python, integrating ChatGPT and Azure APIs to enhance skills extraction from job descriptions."
              ghLink="https://github.com/Vinay-1312/Job-Market-Data-Analysis"
              isvideoPresent = {true}
              isGitHubPresent = {true}

        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="ResumeMatcher and Skills Extractor"
              video="ResumeMatcher.mp4"
              description="This web application, featuring a Python backend with FastAPI for the API and a React frontend, provides personalized job listings from Reed.co.uk. It leverages an AI-driven NLP engine to evaluate CVs, generating a comprehensive skill-matching score, and incorporates a visual word cloud to highlight essential job skills. The result is a streamlined and user-centric platform for efficient job searching and skill assessment."
              ghLink="https://github.com/Vinay-1312/ResumeMatcher-React-FastAPI"
              isvideoPresent = {true}
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cv}
        
              video="hillClimbRacing.mp4"
              title="GestureRacer: Hands-Free Gaming with Computer Vision"
              description="A computer vision application employs OpenCV for visual recognition, utilizing deep learning techniques to analyze hand gestures, enabling hands-free control of the Hill Climb Racing game. Programmed in Python, the system seamlessly combines computer vision and deep learning to create an interactive and gesture-driven gaming experience."  
              isGitHubPresent = {false}         
              isvideoPresent = {true}  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              video = "Netflix.mp4"
              title="Netflix Clone"
              description="Netflix clone with personalized ChatGPT recommendations, crafted in React with Redux and Firebase. Live on Netlify, seamlessly fetching movie data and trailers for an enriched streaming experience."
              ghLink="https://github.com/Vinay-1312/Netflix-GPT-React"
              demoLink="https://chic-muffin-2e8651.netlify.app/"
              isvideoPresent = {true}  
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask}
            
              title="Mask Detection"
              description="Real-time mask detection system, implemented with Python, OpenCV, and deep learning(CNN), utilizes computer vision to distinguish between masked and unmasked individuals. Leveraging cutting-edge technologies, the application provides instantaneous feedback on mask adherence, contributing to public health and safety measures."
              ghLink="https://github.com/Vinay-1312/Computer-Vision"
              isvideoPresent = {false}
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              video = "Swiggy.mp4"
              title="Food Ordering Web Application"
              description="
              Developed a dynamic food-ordering web app that fetches real-time data from a popular food service via API calls, with styling powered by Tailwind CSS. Throughout this project, I acquired in-depth knowledge of React routing, state management, JSX, Redux, and explored the intricacies of React Fiber. Additionally, honed CSS skills using Tailwind and tackled real-world data challenges, including seamless integration with Firebase. 🍔💻"
              ghLink="https://github.com/Vinay-1312/Food-Ordering-Web-application-React"
              isvideoPresent = {true}
              isGitHubPresent = {true}

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
             
              title= "Hotel Booking Website"
              description="A user-friendly hotel booking website with an intuitive interface using JavaScript, HTML, and CSS. Powered by Node.js on the backend for efficient data processing, the site offers dynamic web pages, real-time updates, and secure OTP validation for enhanced user interaction and safety. PostgreSQL ensures reliable data management, providing users with a seamless and visually appealing booking experience. 🏨💻"
              ghLink="https://github.com/akshatasp05/The-Earlham-Hotel---WD29"
              isvideoPresent = {false}
              isGitHubPresent = {true}

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatAI}
              isBlog={false}
              
              title="Personal AI assistant"
              description=" A responsive bot activated by the greeting 'Hello Friday,' excelling in answering queries across Mathematics, Physics, and General Knowledge. With the ability to open websites on command, the bot gracefully exits upon receiving the instruction 'goodbye.' Developed using Python, the application integrates cutting-edge technologies, including text-to-speech and speech-to-text, ensuring an engaging and interactive user experience. 🤖🌐🔍"
              isvideoPresent = {false}
              isGitHubPresent = {false}
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:6710782917318111232/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mi}
              isBlog={false}
              video = "Swiggy.mp4"
              title="Math's Interpreter Using C#"
              description="A C# and WPF-based Math Interpreter for efficient mathematical visualization. Leveraged C# for expression evaluation, variable/function handling, and advanced features like zero crossings and differentiation. 🧮💻"
              ghLink="https://github.com/akshatasp05/Maths-Interpreter"
              isvideoPresent = {false}
              isGitHubPresent = {true}

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
