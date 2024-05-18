import React, { useState, useEffect } from 'react';
import './Home.css';

import Three from './Images/Three.jpg';

const images = [Three];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="half-column">
        <div className="content-column">
        <div className="half-column">
        <div className="image-column">
          <div className="slideshow-container">
            <img className="slideshow-image" src={images[currentImage]} alt="Slideshow" />
          </div>
        </div>
      </div>
          
        </div>
      </div>
      
      <section className="headlines">
            <h2>Transport Logistics Headlines</h2>
            <ul>
              <li>Welcome to ACHA, where we redefine the standards of logistics excellence.
                With a relentless commitment to efficiency, reliability, and innovation, 
                we specialize in providing seamless transportation solutions tailored to meet the diverse needs of businesses across industries. </li>
              <li>Leveraging our extensive network and cutting-edge technologies, we ensure the swift and secure movement of goods, whether by road, rail, air, or sea. 
                At the heart of our operations lies a dedicated team of logistics experts, ready to optimize every aspect of your supply chain, from warehousing and distribution to freight management and beyond.</li>
              <li>With a focus on customer satisfaction and industry-leading service standards, we go above and beyond to exceed expectations and deliver results you can trust.
                Partner with us and experience the difference of a logistics provider that prioritizes your success, every step of the way."</li>
              {/* Add more headlines as needed */}
            </ul>
          </section>
      
          <footer className="copyright">
            &copy; {new Date().getFullYear()} [Company Name]. All rights reserved.
          </footer>
    </div>
  );
};

export default Home;
