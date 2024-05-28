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
      <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
          <p className="text-xl mb-8">Quality construction services you can trust.</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">We are a leading construction company dedicated to providing top-notch services to our clients. Our mission is to build high-quality structures that stand the test of time. We value integrity, excellence, and customer satisfaction.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
              <p>Building beautiful and functional homes tailored to your needs.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
              <p>Constructing commercial spaces that meet your business requirements.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Renovations</h3>
              <p>Transforming existing spaces to enhance their functionality and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img src="https://via.placeholder.com/300" alt="Project 1" className="mb-2 rounded-lg shadow-md" />
              <h3 className="text-xl font-bold">Project 1</h3>
              <p>Short description of Project 1.</p>
            </div>
            <div className="p-4">
              <img src="https://via.placeholder.com/300" alt="Project 2" className="mb-2 rounded-lg shadow-md" />
              <h3 className="text-xl font-bold">Project 2</h3>
              <p>Short description of Project 2.</p>
            </div>
            <div className="p-4">
              <img src="https://via.placeholder.com/300" alt="Project 3" className="mb-2 rounded-lg shadow-md" />
              <h3 className="text-xl font-bold">Project 3</h3>
              <p>Short description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">Get in touch with us for any queries or to discuss your project.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xl" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <span>info@constructionco.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>123 Main St, Anytown, USA</span>
            </div>
          </div>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-2 border rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Construction Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;