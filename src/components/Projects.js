import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tsPitch from "../assets/img/ts-pitch.png";
import rayTracer from "../assets/img/ray-tracer.png";
import alienWorld from "../assets/img/alien-world.png";
import tsLogo from "../assets/img/ts-logo.png";
import wtLogo from "../assets/img/wt-logo.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Alien World",
      description: "Description",
      imgUrl: alienWorld,
      link: "",
    },
    {
      title: "Ray Tracer",
      description: "Description",
      imgUrl: rayTracer,
      link: "",
    },
    {
      title: "Third Space Site",
      description: "Description",
      imgUrl: tsLogo,
      link: "https://mable2818.softr.app/",
    },
    {
      title: "Third Space Pitch",
      description: "Description",
      imgUrl: tsPitch,
      link: "https://youtu.be/rkGpzHMlPmY",
    },
    {
      title: "Waka Tours",
      description: "Description",
      imgUrl: wtLogo,
      link: "https://roscoe1883.softr.app/",
    },
    {
      title: "Argonauts Game",
      description: "Description",
      imgUrl: projImg3,
      link: "",
    },
  ];

  const hobbies = [
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg1,
      link: "",
    },
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg3,
      link: "",
    },
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg1,
      link: "",
    },
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "Cool Project",
      description: "Description",
      imgUrl: projImg3,
      link: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>I will add all my cool projects soon</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Technical Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Hobbies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Things I like to do for fun</p>
                      <Row>
                        {
                          hobbies.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Not sure what to put in this section ngl</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}