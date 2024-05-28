import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center p-5">
          <div className="text-2xl font-bold">Construction Co.</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
          <p className="text-xl mb-8">Quality construction for your future</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8">We are a leading construction company committed to delivering high-quality projects that meet our clients' needs and exceed their expectations. Our mission is to build a better future through innovative and sustainable construction practices.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Residential Construction</h3>
                <p>Building homes that stand the test of time with quality materials and craftsmanship.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Commercial Construction</h3>
                <p>Creating commercial spaces that are functional, modern, and tailored to your business needs.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Renovations</h3>
                <p>Transforming existing spaces to meet new demands and aesthetic preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/400x300" alt="Project 1" className="mb-4 rounded"/>
                <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                <p>A brief description of the project.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/400x300" alt="Project 2" className="mb-4 rounded"/>
                <h3 className="text-2xl font-bold mb-2">Project 2</h3>
                <p>A brief description of the project.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/400x300" alt="Project 3" className="mb-4 rounded"/>
                <h3 className="text-2xl font-bold mb-2">Project 3</h3>
                <p>A brief description of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-8">We'd love to hear from you! Reach out to us using the information below or fill out the contact form.</p>
          <div className="flex flex-wrap justify-center mb-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaPhone className="text-2xl mb-2"/>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaEnvelope className="text-2xl mb-2"/>
                <p>info@constructionco.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaMapMarkerAlt className="text-2xl mb-2"/>
                <p>123 Construction Lane, Buildtown, USA</p>
              </div>
            </div>
          </div>
          <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email"/>
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
    </div>
  );
};

export default Index;