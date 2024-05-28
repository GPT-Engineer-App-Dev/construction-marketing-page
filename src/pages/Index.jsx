import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Construction Co.</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
          <p className="text-xl mb-8">Quality construction for your future</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">Get Started</button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">We are a leading construction company committed to delivering high-quality projects that meet the needs and expectations of our clients. Our mission is to build a better future through innovative and sustainable construction practices.</p>
      </section>

      {/* Services */}
      <section id="services" className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="w-1/3 p-4 bg-white shadow-md m-2">
            <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
            <p>Building homes that stand the test of time.</p>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md m-2">
            <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
            <p>Creating commercial spaces that drive business success.</p>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md m-2">
            <h3 className="text-xl font-bold mb-2">Renovations</h3>
            <p>Transforming spaces to meet modern needs.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="w-1/3 p-4">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-2"/>
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>Modern residential building.</p>
          </div>
          <div className="w-1/3 p-4">
            <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-2"/>
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>State-of-the-art commercial complex.</p>
          </div>
          <div className="w-1/3 p-4">
            <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-2"/>
            <h3 className="text-xl font-bold">Project 3</h3>
            <p>Luxury home renovation.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <span>info@constructionco.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2" />
            <span>123 Construction Lane, Buildtown, USA</span>
          </div>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;