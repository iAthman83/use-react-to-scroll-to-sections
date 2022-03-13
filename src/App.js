import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(services)} className="link">
            Services
          </li>
          <li onClick={() => scrollToSection(blog)} className="link">
            Blog
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Contact
          </li>
        </ul>
      </div>
      <div ref={services} className="services">
        <h3>Services</h3>
      </div>
      <div ref={blog} className="blog">
        <h3>Blog</h3>
      </div>
      <div ref={contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
