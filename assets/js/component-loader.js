/**
 * Component Loader - Loads HTML components dynamically
 */

class ComponentLoader {
  constructor() {
    this.components = {};
    this.initializeComponents();
  }

  /**
   * Initialize components data - embedded in JS for file:// compatibility
   */
  initializeComponents() {
    // We'll embed the component HTML directly in JavaScript to avoid fetch issues
    this.components = {
      header: `<!-- Header Component -->
<div class="header-container">
  <a href="#" class="logo">wendy.rosettini</a>
  <nav class="nav" id="nav">
    <a href="#home" class="nav-link">Home</a>
    <a href="#skills" class="nav-link">Skills</a>
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#experience" class="nav-link">Experience</a>
    <a href="#contact" class="nav-link">Contact</a>
  </nav>
  <button class="mobile-menu-toggle" onclick="toggleMenu()">
    <i class="bi bi-list"></i>
  </button>
</div>`,
      
      hero: `<!-- Hero Section Component -->
<div class="hero-content">
  <!-- Main Text Section -->
  <div class="hero-text">
    <div class="terminal-text">$ whoami</div>
    <h1>Wendy Rosettini</h1>
    <p class="hero-subtitle">Cybersecurity Engineer & Penetration Tester</p>
    <p class="hero-description">
      MSc student at Sapienza University specializing in offensive security, malware analysis, and network defense. 
      Passionate about ethical hacking and securing digital infrastructures.
    </p>
    <div class="hero-buttons">
      <a href="#contact" class="btn-primary">
        <i class="bi bi-envelope"></i>
        Get In Touch
      </a>
      <a href="#projects" class="btn-secondary">
        <i class="bi bi-folder"></i>
        View Projects
      </a>
    </div>
  </div>

  <!-- Profile Photo -->
  <div class="hero-photo">
    <div class="photo-container">
      <img src="assets/images/photo_badge_1.jpg" alt="Wendy Rosettini" class="profile-photo">
      <div class="photo-border"></div>
    </div>
  </div>

  <!-- Terminal Section -->
  <div class="hero-terminal">
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-controls">
          <span class="control close"></span>
          <span class="control minimize"></span>
          <span class="control maximize"></span>
        </div>
        <span class="terminal-title">wendy@cybersec:~ (Interactive Terminal)</span>
      </div>
      <div class="terminal-body">
        <div id="terminal-content">
          <div class="terminal-line">
            <span class="prompt">wendy@cybersec:~$</span>
            <span class="command">whoami</span>
          </div>
          <div class="terminal-output">
            <div>👤 <strong>Wendy Rosettini</strong> - Cybersecurity Engineer</div>
            <div>🎯 Specialization: Penetration Testing & Network Defense</div>
            <div>🎓 MSc Cybersecurity @ Sapienza University</div>
          </div>
          <div class="terminal-line">
            <span class="prompt">wendy@cybersec:~$</span>
            <span class="command">cat ~/.skills</span>
          </div>
          <div class="terminal-output">
            <div>🔍 Penetration Testing: <span class="skill-bar"><span class="skill-fill" style="width: 95%">████████████</span></span> 95%</div>
            <div>🌐 Network Security:   <span class="skill-bar"><span class="skill-fill" style="width: 88%">██████████</span></span> 88%</div>
            <div>🦠 Malware Analysis:   <span class="skill-bar"><span class="skill-fill" style="width: 82%">████████</span></span> 82%</div>
            <div>🔐 Cryptography:       <span class="skill-bar"><span class="skill-fill" style="width: 75%">███████</span></span> 75%</div>
            <div>🐍 Python Scripting:   <span class="skill-bar"><span class="skill-fill" style="width: 90%">██████████</span></span> 90%</div>
          </div>
          <div class="terminal-line">
            <span class="prompt">wendy@cybersec:~$</span>
            <span class="command">echo "Type 'help' for available commands"</span>
          </div>
          <div class="terminal-output">
            <div>💡 Type 'help' for available commands</div>
          </div>
          <div class="terminal-line">
            <span class="prompt">wendy@cybersec:~$</span>
            <span class="cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

      footer: `<!-- Footer Component -->
<div class="social-links">
  <a href="https://github.com/wendytrilly00w" target="_blank" class="social-link">
    <i class="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/wendy-rosettini-9130a3289/" target="_blank" class="social-link">
    <i class="bi bi-linkedin"></i>
  </a>
  <a href="mailto:wendy.rosettini@gmail.com" class="social-link">
    <i class="bi bi-envelope"></i>
  </a>
  <a href="#" class="social-link">
    <i class="bi bi-twitter"></i>
  </a>
</div>
<p style="color: var(--text-secondary); font-size: 0.9rem;">
  © 2024 Wendy Rosettini | Cybersecurity Engineer | Built with passion for security
</p>
<p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 1rem;">
  <i class="bi bi-shield-check"></i> Securing the digital world, one vulnerability at a time
</p>`,

      skills: `<!-- Skills Section Component -->
<div class="section-header reveal">
  <h2 class="section-title">Technical Arsenal</h2>
  <p class="section-subtitle">Specialized tools and technologies for cybersecurity</p>
</div>

<div class="skills-grid reveal">
  <!-- Core Security Skills -->
  <div class="skill-category">
    <h3 class="category-title">
      <i class="bi bi-shield-check"></i>
      Core Security
    </h3>
    <div class="skills-list">
      <div class="skill-item">
        <span class="skill-name">Penetration Testing</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 90%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Network Security</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 85%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Malware Analysis</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 80%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Cryptography</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 75%"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tools & Frameworks -->
  <div class="skill-category">
    <h3 class="category-title">
      <i class="bi bi-tools"></i>
      Tools & Frameworks
    </h3>
    <div class="skills-list">
      <div class="skill-item">
        <span class="skill-name">Metasploit</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 85%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Burp Suite</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 90%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Nmap/Nessus</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 88%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Wireshark</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 82%"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Programming Languages -->
  <div class="skill-category">
    <h3 class="category-title">
      <i class="bi bi-code-slash"></i>
      Programming
    </h3>
    <div class="skills-list">
      <div class="skill-item">
        <span class="skill-name">Python</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 92%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">C/C++</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 78%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Bash/PowerShell</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 85%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">JavaScript</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 70%"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Specialized Areas -->
  <div class="skill-category">
    <h3 class="category-title">
      <i class="bi bi-cpu"></i>
      Specialized
    </h3>
    <div class="skills-list">
      <div class="skill-item">
        <span class="skill-name">OSINT</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 88%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Reverse Engineering</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 75%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Digital Forensics</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 72%"></div>
        </div>
      </div>
      <div class="skill-item">
        <span class="skill-name">Social Engineering</span>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 80%"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,

      projects: `<!-- Projects Section Component -->
<div class="section-header reveal">
  <h2 class="section-title">Security Projects</h2>
  <p class="section-subtitle">Real-world cybersecurity implementations and research</p>
</div>

<div class="projects-grid reveal">
  <div class="project-card">
    <div class="project-header">
      <h3>Network Vulnerability Scanner</h3>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Nmap</span>
        <span class="tag">Network Security</span>
      </div>
    </div>
    <p class="project-description">
      Advanced network vulnerability assessment tool with automated reporting and CVSS scoring. 
      Implements custom scanning modules for enterprise network analysis.
    </p>
    <div class="project-features">
      <span class="feature">• Automated vulnerability detection</span>
      <span class="feature">• Custom CVE database integration</span>
      <span class="feature">• Detailed security reports</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="bi bi-github"></i> View Code
      </a>
      <a href="#" class="project-link">
        <i class="bi bi-eye"></i> Live Demo
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>Malware Analysis Toolkit</h3>
      <div class="project-tags">
        <span class="tag">C++</span>
        <span class="tag">Reverse Engineering</span>
        <span class="tag">Static Analysis</span>
      </div>
    </div>
    <p class="project-description">
      Comprehensive malware analysis framework for static and dynamic analysis. 
      Features sandbox environment and behavioral analysis capabilities.
    </p>
    <div class="project-features">
      <span class="feature">• Static code analysis</span>
      <span class="feature">• Dynamic behavior monitoring</span>
      <span class="feature">• Threat intelligence integration</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="bi bi-github"></i> View Code
      </a>
      <a href="#" class="project-link">
        <i class="bi bi-file-text"></i> Documentation
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>Automotive Security Research</h3>
      <div class="project-tags">
        <span class="tag">CAN Bus</span>
        <span class="tag">Hardware Security</span>
        <span class="tag">Cryptography</span>
      </div>
    </div>
    <p class="project-description">
      Bachelor's thesis project on automotive cybersecurity focusing on CAN bus protocols 
      and Hardware Security Module (HSM) implementation for vehicle networks.
    </p>
    <div class="project-features">
      <span class="feature">• CAN bus security analysis</span>
      <span class="feature">• HSM integration research</span>
      <span class="feature">• Cryptographic protocols</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="bi bi-file-earmark-pdf"></i> Research Paper
      </a>
      <a href="#" class="project-link">
        <i class="bi bi-presentation"></i> Presentation
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>Web Application Penetration Testing Framework</h3>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Web Security</span>
        <span class="tag">OWASP</span>
      </div>
    </div>
    <p class="project-description">
      Automated web application security testing tool following OWASP Top 10 methodology. 
      Includes custom payload generation and vulnerability chaining detection.
    </p>
    <div class="project-features">
      <span class="feature">• OWASP Top 10 coverage</span>
      <span class="feature">• Custom payload library</span>
      <span class="feature">• Automated reporting</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="bi bi-github"></i> View Code
      </a>
      <a href="#" class="project-link">
        <i class="bi bi-play-circle"></i> Demo Video
      </a>
    </div>
  </div>
</div>`,

      experience: `<!-- Experience Section Component -->
<div class="section-header reveal">
  <h2 class="section-title">Professional Journey</h2>
  <p class="section-subtitle">Academic and professional milestones in cybersecurity</p>
</div>

<div class="timeline reveal">
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">2024 - Present</div>
      <h3>MSc Cybersecurity Engineering</h3>
      <p>Sapienza University of Rome</p>
      <p>Advanced studies in offensive security, malware analysis, and network defense strategies. Research focus on AI-driven threat detection and automotive security protocols.</p>
    </div>
    <div></div>
  </div>
  
  <div class="timeline-item">
    <div></div>
    <div class="timeline-content">
      <div class="timeline-date">2023 - 2024</div>
      <h3>Junior Penetration Tester</h3>
      <p>Freelance Security Consultant</p>
      <p>Conducted security assessments for small to medium enterprises. Specialized in web application testing, network infrastructure analysis, and security awareness training.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">2023</div>
      <h3>Bachelor's Degree Thesis</h3>
      <p>Automotive Security and Cryptography</p>
      <p>Research on Hardware Security Modules (HSM) implementation for vehicle security systems. Analyzed CAN bus vulnerabilities and proposed cryptographic solutions for automotive networks.</p>
    </div>
    <div></div>
  </div>
  
  <div class="timeline-item">
    <div></div>
    <div class="timeline-content">
      <div class="timeline-date">2020 - 2023</div>
      <h3>BSc Computer Engineering</h3>
      <p>Università degli Studi dell'Aquila</p>
      <p>Comprehensive foundation in computer systems with focus on: System Security, Cryptography, Network Protocols, Software Engineering, and Digital Signal Processing.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">2022 - Present</div>
      <h3>CTF Competitions & Security Research</h3>
      <p>Active Participant & Team Member</p>
      <p>Regular participation in Capture The Flag competitions including HackTheBox, TryHackMe, and international CTF events. Active contributor to cybersecurity research and vulnerability disclosure.</p>
    </div>
    <div></div>
  </div>
  
  <div class="timeline-item">
    <div></div>
    <div class="timeline-content">
      <div class="timeline-date">2021 - 2023</div>
      <h3>Cybersecurity Internship</h3>
      <p>Regional IT Department</p>
      <p>Gained hands-on experience in network security monitoring, incident response procedures, and security policy implementation. Assisted in vulnerability assessments and security audits.</p>
    </div>
  </div>
</div>`,

      contact: `<!-- Contact Section Component -->
<div class="section-header reveal">
  <h2 class="section-title">Let's Connect</h2>
  <p class="section-subtitle">Open to cybersecurity opportunities and collaborations</p>
</div>

<div class="contact-container reveal">
  <p style="color: var(--text-secondary); margin-bottom: 2rem;">
    I'm always interested in discussing cybersecurity challenges, penetration testing projects, 
    or potential collaboration opportunities. Feel free to reach out!
  </p>
  
  <div class="contact-grid">
    <div class="contact-item">
      <div class="contact-icon">
        <i class="bi bi-envelope"></i>
      </div>
      <a href="mailto:wendy.rosettini@gmail.com" class="contact-link">
        wendy.rosettini@gmail.com
      </a>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">
        <i class="bi bi-linkedin"></i>
      </div>
      <a href="https://linkedin.com/in/wendy-rosettini-9130a3289/" target="_blank" class="contact-link">
        LinkedIn Profile
      </a>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">
        <i class="bi bi-github"></i>
      </div>
      <a href="https://github.com/wendytrilly00w" target="_blank" class="contact-link">
        GitHub Projects
      </a>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">
        <i class="bi bi-geo-alt"></i>
      </div>
      <span class="contact-link">L'Aquila, Italy</span>
    </div>
  </div>

  <!-- Additional contact note -->
  <div style="margin-top: 3rem; text-align: center;">
    <div style="background: rgba(0, 255, 136, 0.1); border: 1px solid var(--primary-color); border-radius: 8px; padding: 1.5rem;">
      <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
        <i class="bi bi-terminal"></i> Ready to Connect
      </h3>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">
        Interested in cybersecurity collaboration or have questions about my projects?<br>
        Feel free to reach out through any of the contact methods above.
      </p>
      <p style="color: var(--accent-color); font-family: var(--font-mono); font-size: 0.9rem;">
        $ echo "Let's build secure digital solutions together!"
      </p>
    </div>
  </div>
</div>`
    };
  }

  /**
   * Load a component from embedded data
   * @param {string} componentName - Name of the component
   * @param {string} targetSelector - CSS selector for the target element
   */
  async loadComponent(componentName, targetSelector) {
    try {
      const html = this.components[componentName];
      
      if (!html) {
        throw new Error(`Component '${componentName}' not found`);
      }
      
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        targetElement.innerHTML = html;
        console.log(`✓ Component '${componentName}' loaded successfully`);
      } else {
        console.error(`Target element '${targetSelector}' not found for component '${componentName}'`);
      }
    } catch (error) {
      console.error(`Error loading component '${componentName}':`, error);
      // Fallback content or error handling
      this.showFallbackContent(targetSelector, componentName);
    }
  }

  /**
   * Load multiple components in parallel
   * @param {Array} components - Array of {name, target} objects
   */
  async loadComponents(components) {
    const loadPromises = components.map(component => 
      this.loadComponent(component.name, component.target)
    );
    
    try {
      await Promise.all(loadPromises);
      console.log('✓ All components loaded successfully');
      
      // Trigger custom event when all components are loaded
      document.dispatchEvent(new CustomEvent('componentsLoaded'));
    } catch (error) {
      console.error('Error loading some components:', error);
    }
  }

  /**
   * Show fallback content when component loading fails
   * @param {string} targetSelector - CSS selector for the target element
   * @param {string} componentName - Name of the failed component
   */
  showFallbackContent(targetSelector, componentName) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--error-color, #ff6b6b);">
          <p>⚠ Failed to load ${componentName} component</p>
          <p style="font-size: 0.9em; color: var(--text-secondary);">Please check your connection and refresh the page</p>
        </div>
      `;
    }
  }

  /**
   * Initialize component loading for the page
   */
  async init() {
    console.log('🔄 Initializing component loader...');
    
    // Show loading screen
    this.showLoading();
    
    // Define components to load
    const components = [
      { name: 'header', target: '#header-placeholder' },
      { name: 'hero', target: '#hero-placeholder' },
      { name: 'skills', target: '#skills-placeholder' },
      { name: 'projects', target: '#projects-placeholder' },
      { name: 'experience', target: '#experience-placeholder' },
      { name: 'contact', target: '#contact-placeholder' },
      { name: 'footer', target: '#footer-placeholder' }
    ];

    // Load all components
    await this.loadComponents(components);
    
    // Hide loading screen after components are loaded
    this.hideLoading();
  }

  /**
   * Show loading screen
   */
  showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'flex';
    }
  }

  /**
   * Hide loading screen with animation
   */
  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 1000);
    }
  }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new ComponentLoader();
  loader.init();
});

// Export for use in other modules
window.ComponentLoader = ComponentLoader;
