import React from 'react'
import { Container, Row } from 'react-bootstrap'
import colorSharp2 from "../assets/img/color-sharp2.png"

export const About = () => {
  return (
    <section className='about' id='about'>
        <h1>About Me</h1>
        <Container>
            <Row>
                <p>Although I originally set out to study Mechanical or Mechatronics Engineering, I found myself drawn to the world of coding during my early courses, and the rest is history.
                I'm about to graduate with a Bachelor of Science, majoring in Computer Science and minoring in Marketing, alongside the equivalent of a minor in Māori and Indigenous Studies. My journey through academia has been diverse, reflecting my curiosity about various disciplines.
                In terms of skills, I'm well-versed in several coding languages, including Python, Java, C, and C++. Additionally, I've honed my abilities in teamwork and leadership through various university projects, work experiences, and my role as a Flight Sergeant in the NZCF Air Cadets.
                Some of my proudest moments include leading my team to a second-place finish in a university club hackathon and embarking on the journey to learn Te Reo Māori, exploring my culture and heritage.
                Beyond the world of tech, you'll often find me buried in a book, indulging my love for literature, or channeling my creativity into sewing and designing clothing and costumes. And when the snow falls, you can bet I'll be hitting the slopes, carving up the mountains on my skis.
                I strive to approach life with optimism and empathy, always seeking the best in others. Ultimately, my goal is to contribute to making my community a better place, whether through technology, language, or acts of kindness.
                Let's connect and make a positive impact together!</p>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}
