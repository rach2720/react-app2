import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className=" flex-item about_cards">
            
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Education</h5>
              <small>BTech in Electrical Engineering, IIT Mandi</small>
            </article>

          </div>

          <p className='flex-item'>
          I'm a passionate beginner in the world of full-stack web development. I believe that the web is a canvas where creativity and technology converge to build amazing digital experiences. My goal is to continually refine my skills, collaborate with fellow developers, and contribute to projects that make a positive impact.
          </p>

          <div className='about_btn flex-item'>
            <a href="#contact" className='btn btn-primary about_btn2'>Let's Talk</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
