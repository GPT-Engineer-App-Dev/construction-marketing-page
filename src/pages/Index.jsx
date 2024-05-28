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
      <section id="about" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-center">We are a leading construction company committed to delivering high-quality projects that meet the needs and expectations of our clients. Our mission is to build a better future through innovative and sustainable construction practices.</p>
      </section>

      {/* Services */}
      <section id="services" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
            <p>Building homes that meet your needs and exceed your expectations.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
            <p>Constructing commercial spaces that are functional and aesthetically pleasing.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Renovations</h3>
            <p>Transforming existing spaces to better serve your needs.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-4 rounded"/>
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-4 rounded"/>
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-4 rounded"/>
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p>A brief description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
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
            <span>123 Construction Lane, Buildtown, BT 12345</span>
          </div>
          <form className="bg-white p-6 rounded shadow">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 Construction Co. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;