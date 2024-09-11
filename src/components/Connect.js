import colorSharp from "../assets/img/color-sharp.png"
import liIcon from '../assets/img/nav-icon1.svg';
import ghIcon from '../assets/img/gh-icon.svg';
import emailIcon from '../assets/img/email-icon.svg';

import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Connect = () => {
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
        <section className="project" id="connect">
            <Container>
                <Row>
                    <Col>
                        <div> 
                            <h2>
                                Get In Touch!
                            </h2>
                            <p>Find me at:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <a href="mailto:artemis.hingston@gmail.com">
                                    <img src={emailIcon} alt="Email" />
                                    </a>
                                    <h5>Email</h5>
                                </div>
                                <div className="item">
                                    <a href="https://www.linkedin.com/in/artemis-hingston/">
                                    <img src={liIcon} alt="LinkedIn" />
                                    </a>
                                    <h5>LinkedIn</h5>
                                </div>
                                <div className="item">
                                    <a href="https://github.com/ArtemisInCode">
                                    <img src={ghIcon} alt="GitHub" />
                                    </a>
                                    <h5>GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}
        </section>
    )

}