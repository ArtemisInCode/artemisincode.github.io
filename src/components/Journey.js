import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import colorSharp from "../assets/img/color-sharp.png"

// CSS for formatting & position + navbar links
export const Journey = () => {
  return (
    <section className="journey" id="journey"> 
    <h1>My Journey</h1>
    <Container>
        <Row>
            <Col>
            {/* Empty */}
            </Col>
            <Col>
                <h3>BSc • University of Canterbury</h3>
                <h5>2019 – 2024</h5>
                <p>Major in Computer Science, Minors in Marketing, and Māori & Indigenous Studies</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Marketing and Communications Intern • CerebralFix</h3>
                <h5>Nov 2023 – Feb 2024</h5>
                <p>Reviewing current profiles across social media platforms and drafting a schedule for them, drafting marketing campaigns and working on collateral for deployable games and products.</p>
            </Col>
            <Col>
            {/* Empty */}
            </Col>
        </Row>
        <Row>
            <Col>
            {/* Empty */}
            </Col>
            <Col>
                <h3>Workshop Coordinator • WiTSoc UC</h3>
                <h5>Dec 2022 – Dec 2023</h5>
                <p>Worked as part of the Women in Tech Society to create and coordinate workshops to help the personal development of members.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Merchandiser • Pernod Ricard</h3>
                <h5>Aug 2020 – Nov 2023</h5>
                <p>Working as a merchandiser and in-store support, creating promotional displays and carrying out tastings, both in-store and at events.</p>
            </Col>
            <Col>
            {/* Empty */}
            </Col>
        </Row>
        <Row>
            <Col>
            {/* Empty */}
            </Col>
            <Col>
                <h3>Invoicing Coordinator • Pernod Ricard</h3>
                <h5>Nov 2021 – Mar 2022</h5>
                <p>5 months full time as the NZ grocery Invoicing Coordinator, data input and validation, communicating with individual supermarkets, Foodstuffs and Woolworths, coordinated and followed up with territory managers and sales reps, streamlining Excel processes and created and implemented processes still in use.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Residential Assistant • University of Canterbury</h3>
                <h5>Jan 2021, Jan 2022</h5>
                <p>Residential Assistant for the WiECan program - looking after and encouraging young women in STEM.</p>
            </Col>
            <Col>
            {/* Empty */}
            </Col>
        </Row>
        <Row>
            <Col>
            {/* Empty */}
            </Col>
            <Col>
                <h3>NZCF Air Cadets</h3>
                <h5>2016 - 2021</h5>
                <p>Flight sergeant at Air Cadets, from leading and looking after cadets, to teaching them and taking lessons. Learned skills surrounding bushcraft, aviation, teaching, presenting and leading, including going on multiple week-long leadership courses at Burnham Military Camp.</p>
            </Col>
        </Row>
    </Container>
    <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
