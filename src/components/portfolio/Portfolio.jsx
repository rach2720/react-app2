import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My 1st Portfolio WebPage',
    tech_stack:'HTML, CSS',
    github: 'https://github.com/rach2720/portfolio',
    demo: 'https://rach2720.github.io/portfolio/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My 2nd Portfolio WebPage',
    tech_stack:'HTML, CSS',
    github: 'https://github.com/rach2720/Portfolio-website',
    demo: 'https://rach2720.github.io/Portfolio-website/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TinDog - Tinder for Dogs',
    tech_stack:'HTML, CSS, Bootstrap',
    github: 'https://github.com/rach2720/tindog',
    demo: 'https://rach2720.github.io/tindog/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Landing Page for Educational Platform',
    tech_stack:'HTML, CSS, Javascript',
    github: 'https://github.com/rach2720/landing-page-website',
    demo: 'https://rach2720.github.io/landing-page-website/'
  },

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Learning Journey</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, tech_stack, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img className='portfolio_image'src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>Tech-Stack used:</p>
                <p>{tech_stack}</p>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' >Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
