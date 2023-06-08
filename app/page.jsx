"use client"

import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import style from "../public/styles/paralax.css";

import html from "../public/assets/html.png";
import css from "../public/assets/css.png";
import es6 from "../public/assets/es6.png";
import react from "../public/assets/react.png";
import logo2 from "../public/assets/logo2.svg";

const Page = () => {

  const containerRef = useRef();
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav>
        <Image src={logo2} alt="logo"/>
        <a href="#"> Home </a>
        <a href="#"> Skills </a>
        <a href="#"> Contact </a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2>Hi, Im Peter</h2>
          <h3>Frontend Developer</h3>
          <div className="Buttons">
            <Link className="Sign" href={'/login'}>Sign In</Link>
            <Link className="Sign2" href={'/register'}>Sign up</Link>
          </div>
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <Image src={html} alt="logo"/>
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <Image src={css} alt="logo"/>
          <h2>CSS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="description panel blue">
          <Image src={es6} alt="logo"/>
          <h2>ES6</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <Image src={react} alt="logo"/>
          <h2>React JS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
      </div>
      <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
        </form>
      </section>
    </>
  )
}

export default page
