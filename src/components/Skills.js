import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx"> 
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>Version Control/Git</h5>
                                    <p>I have consistently used Git for various projects throughout my degree and internships, both group and personal, for version control. Examples of my work can be seen on my GitHub.</p>
                                </div>
                                <div className="item">
                                    <h5>Social Media Marketing</h5>
                                    <p>As a Marketing and Communications intern at CerebralFix, I revitalized their social media presence, developing strategies and laying out a roadmap to sustain engagement and growth.</p>
                                </div>
                                <div className="item">
                                    <h5>Programming Languages</h5>
                                    <p>Over the course of my degree, I worked with multiple programming languages, applying them to a wide variety of projects, including web development (HTML, CSS, JavaScript) and software development (Python, C, Java). I also have experience with SQL for database management.</p>
                                </div>
                                <div className="item">
                                    <h5>Cybersecurity</h5>
                                    <p>My cybersecurity knowledge includes studying encryption algorithms, public-key cryptography (RSA, Diffie-Hellman), and security protocols, both in academic courses and self-study. I keep up to date with the latest industry trends and news in cybersecurity and cryptography.</p>
                                </div>
                                <div className="item">
                                    <h5>Agile Methodology</h5>
                                    <p>I have experience working in Agile environments, participating in sprints, sprint planning, daily stand-ups, reviews, and retros. This was further reinforced in both my academic projects and my work at CerebralFix.</p>
                                </div>
                                <div className="item">
                                    <h5>Algorithms & Data Structures</h5>
                                    <p>My studies have provided me with in-depth knowledge of algorithm design (divide and conquer, dynamic programming, greedy algorithms) and complexity analysis, with hands-on implementation in Python, Java, and C. I also have experience with fundamental data structures (stacks, queues, trees, graphs).</p>
                                </div>
                                <div className="item">
                                    <h5>Database Systems</h5>
                                    <p>I designed relational databases, created schemas, and wrote queries using SQL. My work included optimizing database performance and implementing relational algebra for more efficient query evaluation.</p>
                                </div>
                                <div className="item">
                                    <h5>Object-Oriented Design & Java Development</h5>
                                    <p>I designed and implemented Java programs, including graphical user interfaces (GUIs) and the use of UML for design and documentation. I also practiced a variety of software development tools and techniques.</p>
                                </div>
                                <div className="item">
                                    <h5>Embedded Systems & C Programming</h5>
                                    <p>I developed programs for embedded systems, interfacing microcontrollers (AVR) with peripherals, and building small projects. I also deepened my understanding of computer architecture.</p>
                                </div>
                                <div className="item">
                                    <h5>Mathematics and Cryptography</h5>
                                    <p>I studied discrete mathematics and cryptography, developing a strong foundation in number theory, modular arithmetic, graph theory, and encryption algorithms like RSA and ElGamal. This reinforced my ability to approach problems analytically.</p>
                                </div>
                                <div className="item">
                                    <h5>Risk Management</h5>
                                    <p>Through my engineering and leadership experiences in the NZCF, I have learned to perform risk analysis for project planning and execution, including active risk management and decision-making processes like fault tree analysis.</p>
                                </div>
                                <div className="item">
                                    <h5>Problem-Solving Mindset</h5>
                                    <p>Across various projects, I have employed problem-solving techniques, from optimizing processes at a prior workplace to automating tasks, and utilizing the "programmer mindset" to approach challenges efficiently.</p>
                                </div>
                                <div className="item">
                                    <h5>Leadership</h5>
                                    <p>With experience leading teams as a Senior Non-Commissioned Officer in the NZCF and on academic projects, I have theoretical and practical leadership experience. This includes managing cadets and leading programming or engineering teams.</p>
                                </div>
                                <div className="item">
                                    <h5>Collaboration & Tutoring</h5>
                                    <p>I have worked collaboratively on multiple group projects and engineering challenges. I have also been a tutor, teaching computer science topics and mentoring peers in various programming tasks.</p>
                                </div>
                                <div className="item">
                                    <h5>Adobe Software (Photoshop, InDesign, Illustrator)</h5>
                                    <p>I used Adobe InDesign to create marketing collateral for CerebralFix, including assets for social media and internal company documents.</p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}