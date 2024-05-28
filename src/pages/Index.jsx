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
          <p className="text-xl mb-8">Quality construction services you can trust</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">We are a leading construction company committed to delivering top-notch services and building lasting relationships with our clients. Our mission is to bring your vision to life with quality craftsmanship and exceptional customer service.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Residential Construction</h3>
              <p>Building beautiful and functional homes tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Commercial Construction</h3>
              <p>Delivering high-quality commercial spaces that meet your business requirements.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Renovations</h3>
              <p>Transforming existing spaces to enhance their beauty and functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>A brief description of the project.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>A brief description of the project.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-4 rounded"/>
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>A brief description of the project.</p>
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
              <FaPhone className="text-2xl mr-2"/>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4 md:mb-0 md:mr-8">
              <FaEnvelope className="text-2xl mr-2"/>
              <span>info@constructionco.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-2"/>
              <span>123 Construction Lane, Buildtown, USA</span>
            </div>
          </div>
          <form className="bg-white p-6 rounded shadow-md w-full md:w-1/2 mx-auto">
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;