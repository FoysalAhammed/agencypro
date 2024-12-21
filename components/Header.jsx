import React, { useEffect } from 'react'

const Header = () => {
    useEffect(()=>{
        const handleScroll = ()=>{
            const header = document.querySelector("header");
            header.classList.toggle("sticky",window.scrollY > 200)
        }
        window.addEventListener("scroll",handleScroll);
        
        return()=>{
          window.removeEventListener("scroll",handleScroll)
        }
    },[])
  return (
    <header>
    <div class="flex flex-sb">
      <div class="logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <a href="#demos">Demos</a>
          </li>
          <li>
            <a href="#readysection">Pages Section</a>
          </li>
          <li>
            <a href="#boostsales">Features</a>
          </li>
          <li>
            <a href="#googleseo">Performance</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
            <a href="#"
            target="_blank">Open Your Store</a>
          </li>
        </ul>
      </nav>
      <div type="button" class="light_skew_hover">
        <div class="effect_parent"></div><a href=
        "/" target="_blank" class=
        "light_skew"><svg stroke="currentcolor" fill=
        "currentcolor" stroke-width="0" viewbox="0 0 640 512"
        height="1em" width="1em" xmlns=
        "http://www.w3.org/2000/svg">
        <path d=
        "M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z">
        </path></svg><span class="cta_text">Buy Now</span></a>
      </div>
    </div>
  </header>
  )
}

export default Header