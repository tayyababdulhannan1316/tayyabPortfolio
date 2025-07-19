import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  ChevronDown
} from 'lucide-react';
import './styles/main.scss';
import tayyab from './assets/tayyab.jpg';

// Main App Component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'React Native', level: 90, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'JavaScript', level: 93, icon: <Globe className="w-6 h-6" /> },
    { name: 'HTML/CSS', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'Node.js/Express', level: 85, icon: <Server className="w-6 h-6" /> },
    { name: 'MongoDB', level: 80, icon: <Database className="w-6 h-6" /> },
    { name: 'Firebase', level: 88, icon: <Database className="w-6 h-6" /> },
    { name: 'Bootstrap', level: 92, icon: <Code className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-stack e-commerce mobile application built with React Native and Firebase',
      technologies: ['React Native', 'Firebase', 'Redux', 'Stripe API'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Task Management Web App',
      description: 'Collaborative task management platform with real-time updates',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Restaurant Booking System',
      description: 'Modern restaurant booking system with admin dashboard',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      technologies: ['React.js', 'Firebase', 'Chart.js', 'SCSS'],
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#'
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Portfolio
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item} className="nav-item">
                  <button
                    className={`nav-link btn btn-link ${activeSection === item ? 'active' : ''}`}
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content animate-fade-in-up">
                <h1 className="hero-title">
                  <span className="gradient-text">Full-Stack Developer</span>
                </h1>
                <p className="hero-subtitle mx-auto">
                  Crafting exceptional web and mobile experiences with React.js, React Native, and modern technologies
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="btn btn-primary-custom"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn btn-outline-custom"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-custom bg-dark-custom">
        <div className="container">
          <div className="section-title gradient-text">About Me</div>
          <div className="section-divider">
            

          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-content">
                <p>
                  I'm a passionate full-stack developer with expertise in building modern web and mobile applications. 
                  With a strong foundation in React.js and React Native, I create seamless user experiences across platforms.
                </p>
                <p>
                  My journey in development has led me to master various technologies including Node.js, Express, MongoDB, 
                  Firebase, and modern CSS frameworks. I'm constantly learning and adapting to new technologies to deliver 
                  cutting-edge solutions.
                </p>
                <div className="mt-4">
                  <span className="skill-badge">Frontend Development</span>
                  <span className="skill-badge">Mobile Development</span>
                  <span className="skill-badge">Backend Development</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <Code size={128} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-custom">
        <div className="container">
          <div className="section-title gradient-text">Skills & Technologies</div>
          <div className="section-divider"></div>
          
          <div className="row">
            {skills.map((skill, index) => (
              <div key={skill.name} className="col-md-6 mb-4">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-name">
                      <span className="skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-custom bg-dark-custom">
        <div className="container">
          <div className="section-title gradient-text">Featured Projects</div>
          <div className="section-divider"></div>
          
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="project-card h-100">
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid"
                    />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="project-link">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-custom">
        <div className="container">
          <div className="section-title gradient-text">Get In Touch</div>
          <div className="section-divider"></div>
          <div className="text-center mb-5">
            <p className="lead">Let's discuss your next project and bring your ideas to life</p>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>tayyab.abdulhannan@outlook.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p>+92 3346516372</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="#" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-custom">
        <div className="container">
          <p className="mb-0">
            © 2025 Portfolio By Tayyab Abdul Hannan.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;