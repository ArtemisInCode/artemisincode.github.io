import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tsPitch from "../assets/img/ts-pitch.png";
import rayTracer from "../assets/img/ray-tracer.png";
import alienWorld from "../assets/img/alien-world.png";
import tsLogo from "../assets/img/ts-logo.png";
import wtLogo from "../assets/img/wt-logo.png";
import ucFunKit from "../assets/img/uckunkit.png";
import cwbPitch from "../assets/img/cwb-pitch.jpg";
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
      description: "Used C/C++ and OpenGL API to develop an OpenGL program to display a scene where On a remote planet, a few aliens are preparing a spaceship for liftoff.",
      imgUrl: alienWorld,
      link: "https://github.com/ArtemisInCode/Alien-World-OpenGL",
    },
    {
      title: "Ray Tracer",
      description: "Implemented a ray tracer hat can handle different types of geometric objects and global illumination features, and demonstrate its capability in enhancing the visual realism of a rendered scene.",
      imgUrl: rayTracer,
      link: "https://github.com/ArtemisInCode/Ray-Tracer",
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
      title: "Maze Runner Game",
      description: "Description",
      imgUrl: ucFunKit,
      link: "https://github.com/ArtemisInCode/Maze-Runner",
    },
  ];

  const marketing = [
    {
      title: "Third Space Pitch",
      description: "Description",
      imgUrl: tsPitch,
      link: "https://youtu.be/rkGpzHMlPmY",
    },
    {
      title: "Weta Bar",
      description: "Description",
      imgUrl: cwbPitch,
      link: "",
    },
    // {
    //   title: "Cool Project",
    //   description: "Description",
    //   imgUrl: projImg3,
    //   link: "",
    // },
  ];

  const hobbies = [
    // {
    //   title: "Cool Project",
    //   description: "Description",
    //   imgUrl: projImg1,
    //   link: "",
    // },
    // {
    //   title: "Cool Project",
    //   description: "Description",
    //   imgUrl: projImg2,
    //   link: "",
    // },
    // {
    //   title: "Cool Project",
    //   description: "Description",
    //   imgUrl: projImg3,
    //   link: "",
    // },
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
                {/* <p>I will add all my cool projects soon</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Technical</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Marketing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hobbies</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
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
                      <Row>
                        {
                          marketing.map((project, index) => {
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