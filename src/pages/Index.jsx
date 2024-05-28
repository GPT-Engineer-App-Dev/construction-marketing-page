import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
          <p className="text-xl mb-8">Quality construction for your future</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">We are a leading construction company committed to delivering high-quality projects that meet the needs and expectations of our clients. Our mission is to build a better future through innovative and sustainable construction practices.</p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Residential Construction</h3>
              <p>Building homes that stand the test of time.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Commercial Construction</h3>
              <p>Creating commercial spaces that drive business success.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Renovations</h3>
              <p>Transforming existing spaces to meet modern needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>A brief description of Project 1.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>A brief description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">We'd love to hear from you! Reach out to us using the information below or fill out the contact form.</p>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaPhone className="text-2xl mb-2"/>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaEnvelope className="text-2xl mb-2"/>
              <p className="text-lg">info@constructionco.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-2xl mb-2"/>
              <p className="text-lg">1234 Construction Lane, Buildtown, USA</p>
            </div>
          </div>
        </div>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Construction Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;