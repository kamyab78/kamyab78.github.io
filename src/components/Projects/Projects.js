import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import TopNoor from "../../Assets/Projects/topnoor.png";
import suicide from "../../Assets/Projects/suicide.png";
import Tickup from "../../Assets/Projects/tickup.png";
import Esti from "../../Assets/Projects/esti.png";
import Hub from '../../Assets/Projects/hub.png'
import DoNoghte from '../../Assets/Projects/donoghte.png'
import Rge from '../../Assets/Projects/rge.png'
import Form from '../../Assets/Projects/form.png'
import Hesspresso from '../../Assets/Projects/hesspresso.png'
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
              imgPath={TopNoor}
              isBlog={false}
              title="TopNoor"
              noGit={true}
              description="Online store to buy lighting equipment. our technology is ReactJs, JavaSpringBoot, Bootstrap"
              ghLink="#"
              demoLink="https://topnoor.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Esti}
              isBlog={false}
              noGit={true}
              title="EstiCast"
              description="EstiCast is personal website. Esticast Research & Consulting is a research firm providing research reports on various industries with a unique combination of authenticity, extensive research, and infallibility. our technology is ReactJs"
              ghLink="#"
              demoLink="http://esticast.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tickup}
              isBlog={false}
              noGit={true}
              title="TickUp"
              description="Tickup is an online trivia game. In this way, the user can participate in challenges and live. our technology is ReactNative , JavaSpringBoot"
              // ghLink="#"
              // demoLink="http://esticast.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hub}
              isBlog={false}
              noGit={true}
              title="IUST Game Hub"
              description="IUST Game hub is palce for Develop game with Publisher Mentoring. this website is interview for this place . our technology is React"
              // ghLink="#"
              demoLink="http://hubgame.ir/?i=2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoNoghte}
              isBlog={false}
              noGit={true}
              title="DoNoghte"
              description="DoNoghte is clone game base on TwoDots. our technology is Unity"
              // ghLink="#"
              demoLink="https://cafebazaar.ir/app/com.Bourna.DoNoghte"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rge}
              isBlog={false}
              title="RGE"
              description="This company has allocated its activities to the design and implementation of facade lighting, green space (Landscape) and interior lighting. this website is interview about this company. our technology is React, JavaSpringBoot"
              noGit={true}
              demoLink="https://rge.ir/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Form}
              isBlog={false}
              title="formCooperate"
              description="this site is about Cooperate between two university (IUST , SPBPU). our technology is React, JavaSpringBoot"
              noGit={true}
              // demoLink="https://rge.ir/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hesspresso}
              isBlog={false}
              title="Hesspresso Menu"
              description="Digital Menu. our technology is React, JavaSpringBoot"
              noGit={true}
              demoLink="http://hesspressocafe.com/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
