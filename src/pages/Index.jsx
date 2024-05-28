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
          <p className="text-xl mb-8">Quality construction for your needs</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">We are a leading construction company committed to delivering high-quality projects that meet the needs and expectations of our clients. Our mission is to build lasting relationships through integrity, performance, and client satisfaction.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Residential Construction</h3>
              <p>Building homes that meet your needs and exceed your expectations.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Commercial Construction</h3>
              <p>Delivering high-quality commercial projects on time and within budget.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Renovations</h3>
              <p>Transforming spaces to enhance functionality and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>Short description of Project 1.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>Short description of Project 2.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>Short description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">We'd love to hear from you! Reach out to us using the information below or fill out the contact form.</p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0 md:mr-8">
              <FaPhone className="text-2xl mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4 md:mb-0 md:mr-8">
              <FaEnvelope className="text-2xl mr-2" />
              <span>info@constructionco.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-2" />
              <span>123 Construction Lane, Buildtown, USA</span>
            </div>
          </div>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;