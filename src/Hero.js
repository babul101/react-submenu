import React from "react";
import phoneImg from "./images/Sound Wave.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1 style={{ color: "#a9bcca" }}>Lorem ipsum dolor sit</h1>
          <p style={{ color: "#a9bcca" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            dicta!
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
