import React from 'react';
import './About.css';
import Express from './Images/Express.webp'
import One from './Images/One.jpg'
import Home3 from './Images/Home3.jpg'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="head">
        Welcome to <span className="company-name"> A C H A</span>, where we are committed to delivering exceptional service and ensuring that your shopping experience is smooth and satisfying. Our dedication to excellence is reflected not only in our products but also in our shipping options. We understand that getting your purchases to you quickly and safely is a top priority. That’s why we offer a range of shipping options tailored to meet your needs.
      </p>

      <h2>Our Shipping Options</h2>

      <div className="shipping-section">
        <img src={Express} alt="Express Shipping" className="shipping-image" />
        <div className="shipping-info">
          <h3>1. Express Shipping</h3>
          <p>
            When you need your items in a hurry, our Express Shipping option is the perfect solution. Designed for speed and reliability, this service ensures that your order is processed and delivered within 1-2 business days.
          </p>
          <ul>
            <li><strong>Delivery Time:</strong> 1-2 business days</li>
            <li><strong>Tracking:</strong> Real-time tracking updates</li>
            <li><strong>Ideal For:</strong> Urgent needs, last-minute gifts, special occasions</li>
          </ul>
        </div>
      </div>

      <div className="shipping-section reverse">
        <div className="shipping-info">
          <h3>2. Domestic Shipping</h3>
          <p>
            Our Domestic Shipping service is ideal for customers within the country who are looking for a balance between cost and delivery time. This option ensures that your package arrives within a standard timeframe.
          </p>
          <ul>
            <li><strong>Delivery Time:</strong> 3-5 business days</li>
            <li><strong>Tracking:</strong> Standard tracking updates</li>
            <li><strong>Ideal For:</strong> Everyday purchases, regular orders</li>
          </ul>
        </div>
        <img src={ One } alt="Domestic Shipping" className="shipping-image" />
      </div>

      <div className="shipping-section">
        <img src={Home3} alt="International Shipping" className="shipping-image" />
        <div className="shipping-info">
          <h3>3. International Shipping</h3>
          <p>
            We are proud to offer International Shipping to our customers around the globe. No matter where you are, we strive to deliver your products efficiently and securely.
          </p>
          <ul>
            <li><strong>Delivery Time:</strong> 7-14 business days, depending on destination</li>
            <li><strong>Tracking:</strong> Comprehensive international tracking</li>
            <li><strong>Ideal For:</strong> Overseas customers, global reach</li>
          </ul>
        </div>
      </div>

      <h2>Why Choose Us?</h2>
      <p>
        <strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We provide multiple shipping options to cater to your specific needs.<br />
        <strong>Reliable Delivery:</strong> We partner with trusted carriers to ensure your package arrives on time and in perfect condition.<br />
        <strong>Transparent Tracking:</strong> Stay informed with detailed tracking information from the moment your order is dispatched to its arrival.
      </p>

      <p>
        At <span className="company-name">A C H A</span>, we are here to make your shopping experience as seamless and enjoyable as possible. Thank you for choosing us for your needs. If you have any questions or need further assistance, please do not hesitate to contact our customer service team.
      </p>
    </div>
  );
};

export default About;
