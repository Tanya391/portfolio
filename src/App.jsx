import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Terminal, Send, Menu, X, FileText, Download, Trophy, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications & Courses', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-white/5 backdrop-blur-lg ${
        scrolled ? 'py-2 shadow-lg shadow-emerald-500/10' : 'py-4'
      }`}
      style={{ backgroundColor: scrolled ? 'var(--nav-solid)' : 'var(--nav-soft)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tighter text-gradient">TB</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="theme-toggle p-2 rounded-md border text-zinc-300 hover:text-emerald-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center space-y-6 isolate overflow-visible group"
        >
          {/* Subtle glow that intensifies on hover */}
          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-tr from-emerald-400/30 via-cyan-400/18 to-transparent blur-[90px] opacity-25 group-hover:opacity-60 group-hover:blur-[110px] transition-all duration-500 mix-blend-screen z-0"
            aria-hidden="true"
          ></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Welcome to My Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">Tanya</span> <span className="text-white">Bharti</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">
              Full-Stack Developer | AI & Cloud Enthusiast
            </p>
            <p className="max-w-3xl mx-auto text-zinc-500 text-lg leading-relaxed">
              B.Tech Computer Science student at Lovely Professional University. I focus on building scalable applications
              and have a strong foundation in both front-end and back-end development.
            </p>

            <div className="flex items-center justify-center gap-6 pt-2">
              <a href="https://github.com/Tanya391" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tanya-bharti-602706292/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:bhartitanya685@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">About</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I am a third-year B.Tech Computer Science student at Lovely Professional University, Phagwara (Punjab), with a strong foundation in software development and a growing interest in building scalable, end-to-end systems. My academic focus, combined with hands-on experience, has enabled me to work across both frontend and backend technologies, particularly using the MERN stack and Python-based frameworks.
              </p>
              <p>
                I have practical experience in machine learning, including training Convolutional Neural Network (CNN) models and fine-tuning transformer-based models such as BERT. Alongside this, I am actively expanding my knowledge in cloud computing, DevOps, and AI-driven solutions, with a keen interest in deploying scalable and production-ready applications.
              </p>
              <p className="text-zinc-400">
                I enjoy working on projects that integrate multiple domains—combining intuitive user interfaces with robust backend architectures and intelligent systems. My approach emphasizes performance, scalability, and real-world applicability.
              </p>
              <p className="text-zinc-400">
                I am currently seeking part-time or full-time internship opportunities in Web Development, DevOps, or Machine Learning, where I can contribute, learn, and grow while building impactful solutions. I am highly enthusiastic about emerging technologies and continuously strive to enhance my technical skill set.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/20 relative max-w-md ml-auto">
              <img
                src="/images/profile.jpeg"
                alt="Portrait of Tanya Bharti"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Terminal className="text-emerald-400" />,
      skills: ['C','C++', 'Java', 'Python', 'JavaScript (ES6+)', 'Kotlin'],
    },
    {
      title: 'Technologies',
      icon: <Layout className="text-emerald-400" />,
      skills: ['React', 'Node.js', 'Express.js', 'Django', 'Tailwind CSS', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: <Database className="text-emerald-400" />,
      skills: ['Git', 'GitHub', 'Android Studio', 'MongoDB Compass & Atlas', 'Postman'],
    },
    {
      title: 'Concepts',
      icon: <Code2 className="text-emerald-400" />,
      skills: ['OS', 'DBMS', 'OOPS', 'Data Structures & Algorithms', 'REST APIs'],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Skills & Expertise</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-4 p-3 bg-emerald-500/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-zinc-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'PlantDocBot',
      description: 'AI assistant that identifies plant diseases from images and chat inputs, with guidance on symptoms and care recommendations.',
      tech: ['Streamlit', 'Django', 'Python', 'ResNet', 'MobileNet', 'BERT', 'REST APIs'],
      github: 'https://github.com/Tanya391/ai_plantdoc_bot',
      live: '',
      image: '',
    },
    {
      name: 'FinAgent AI',
      description: 'AI budget tracker that helps log daily expenses, plan future budgets, and get practical saving/investing guidance with grounded answers and transparent errors.',
      tech: [
        'React',
        'Tailwind CSS',
        'Django',
        'Django REST Framework',
        'MongoDB',
        'Python',
        'JWT',
        'Vector Search',
        'RAG',
        'Groq API',
        'Hugging Face',
        'Sentence Transformers',
      ],
      github: 'https://github.com/Tanya391/finagent-ai',
      live: '',
      image: '',
    },
    {
      name: 'UniEvent Pro',
      description: 'Campus event management platform with student and admin portals, one-click registrations, live announcements, and engagement analytics.',
      tech: ['React', 'Vite', 'React Router', 'Recharts', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Tanya391/UniEvent-Pro',
      live: 'https://uni-event-pro.vercel.app/',
      image: '/images/unievent-pro.png',
    },
  ];
  const placeholderGradients = [
    'from-emerald-500/20 via-cyan-500/10 to-zinc-950',
    'from-amber-500/20 via-rose-500/10 to-zinc-950',
    'from-sky-500/20 via-indigo-500/10 to-zinc-950',
    'from-lime-500/20 via-teal-500/10 to-zinc-950',
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden glass hover:border-emerald-500/30 transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-950/25 group-hover:bg-transparent transition-all duration-500"></div>
                  </>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${placeholderGradients[idx % placeholderGradients.length]} flex items-center justify-center`}
                  >
                    <span className="text-lg font-semibold text-emerald-100/80 px-6 text-center">
                      {project.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                {!project.live ? (
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 bg-emerald-500/15 border border-emerald-400/30">
                      In Progress
                    </span>
                    <div className="mt-2 h-1.5 rounded-full bg-emerald-500/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300"></div>
                    </div>
                  </div>
                ) : null}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certificatesLink = 'https://drive.google.com/drive/folders/1B-DySjgM6hLWowaK--oWUcnPGHsumHjR';
  const items = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL | IIT Kharagpur',
      year: 'Jan 2025',
      link: 'https://drive.google.com/file/d/12JRcy4O7S62YrtSFQkxIQz2nRm_w_BAX/view?usp=drive_link',
    },
    {
      title: 'Mastering DSA in C++',
      issuer: 'Cipher Schools',
      year: 'Jun 2025',
      link: 'https://drive.google.com/file/d/1IuVlUQYFu7TB9psztZ7F6zJLowbWUI2w/view?usp=drive_link',
    },
    {
      title: 'MongoDB Skill-a-thon',
      issuer: 'MongoDB',
      year: 'Jul 2025',
      link: 'https://drive.google.com/file/d/1xfgBV057XJMeIoa7XKvpxf9d5ctGHBr7/view?usp=drive_link',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Certifications & Courses</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3 gap-3">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 transition-colors text-xs font-semibold"
                  >
                    View
                  </a>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md">
                    {item.year}
                  </span>
                </div>
              </div>
              <p className="text-zinc-500 text-sm">{item.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const internships = [
    {
      company: 'Infosys Springboard',
      role: 'AI Intern',
      period: 'Feb 11, 2026 - Ongoing (8 weeks)',
      description: 'Building PlantDocBot, an AI assistant that diagnoses plant diseases from user chat and image uploads.',
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Experience</span>
        </h2>
        <div className="space-y-8">
          {internships.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:w-2 transition-all"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 font-medium">{exp.company}</p>
                </div>
                <p className="text-zinc-500 font-mono text-sm">{exp.period}</p>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    { title: 'LeetCode Contest Rank', detail: 'Highest contest ranking achieved: 1409.' },
    { title: '300+ DSA Problems Solved', detail: 'Solved 300+ questions across GFG, LeetCode, and Hackerrank.' },
  ];

  return (
    <section id="achievements" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Achievements</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass p-6 rounded-2xl border border-emerald-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300">
                  <Trophy size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-zinc-400 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">CV & Resume</span>
        </h2>
        <div className="max-w-2xl mx-auto glass p-10 rounded-3xl border-2 border-emerald-500/10">
          <div className="mb-8 p-6 bg-emerald-500/5 rounded-2xl inline-block">
            <FileText size={64} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Download My Resume</h3>
          <p className="text-zinc-400 mb-10">
            Interested in working together? Download my full resume to see my detailed 
            experience, education, and technical skills.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/updatedCV1.pdf"
              download
              className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Download CV
            </a>
            <a
              href="/updatedCV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 border border-zinc-700 hover:border-emerald-400 text-white font-bold rounded-xl transition-all text-center"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message || 'N/A'}`
    );

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bhartitanya685@gmail.com&su=${subject}&body=${body}`;
    window.location.href = gmailComposeUrl;
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
          <span className="inline-block border border-emerald-500/40 rounded-xl px-4 py-2">Get In Touch</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl text-left"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
        <div className="mt-12 text-zinc-500">
          <p>Or email me directly at:</p>
          <a href="mailto:bhartitanya685@gmail.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono">bhartitanya685@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Tanya Bharti. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Tanya391" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/tanya-bharti-602706292/" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:bhartitanya685@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return stored === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div data-theme={theme} className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 bg-zinc-950">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
