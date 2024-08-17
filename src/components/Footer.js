import React from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt="Logo" />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='company-details'>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/> 123 Towncity, USA</li>
              <li>Phone: <br/> + 0123 456 789</li>
              <li>Email: <br/> little@lemon.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <Link to="https://github.com/vivekmishra4/meta-front-end-developer-capstone-project-main/" target='_blank'>
          Little Lemon 2023 © All rights reserved
        </Link>
      </div>
    </footer>
  )
}

export default Footer
