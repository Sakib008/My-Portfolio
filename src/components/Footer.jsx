import React from 'react'
import imgFooter from '../assets/imgfooter.png'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={imgFooter} alt="" />
        <h2>Mohammad Sakib</h2>
        <p>Motivation is temporary but decipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com">
            <AiFillYoutube />
          </a>
        </article>
        <article>
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
        </article>
        <article>
          <a href="https://www.github.com/sakib008">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer
