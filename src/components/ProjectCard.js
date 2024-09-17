import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <Row>
          <span>{description}</span>
          </Row>
          <Row>
          {link && <a href={link}>Explore</a>}
          </Row>
        </div>
      </div>
    </Col>
  )
}