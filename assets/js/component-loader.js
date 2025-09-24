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
    <p class="hero-subtitle">Cybersecurity Specialist & Penetration Tester</p>
    <p class="hero-description">
      Laureata in Ingegneria Informatica presso l'Università dell'Aquila. Attualmente specializzanda in Cybersecurity presso La Sapienza di Roma. 
      Esperienza di 6 mesi come tirocinante Red Team presso Leonardo S.p.A., con focus su AI-driven penetration testing.
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
  <h2 class="section-title">Progetti di Sicurezza</h2>
  <p class="section-subtitle">Implementazioni reali e ricerca in cybersecurity</p>
</div>

<div class="projects-grid reveal">
  <div class="project-card">
    <div class="project-header">
      <h3>AI-Driven Penetration Testing Framework</h3>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">LLM</span>
        <span class="tag">MCP</span>
        <span class="tag">Multi-Agent</span>
      </div>
    </div>
    <p class="project-description">
      Framework modulare che automatizza il penetration testing tramite agenti LLM e Model Context Protocol. 
      Integra strumenti Kali Linux con orchestrazione intelligente e controllo human-in-the-loop.
    </p>
    <div class="project-features">
      <span class="feature">• Orchestrazione multi-agente AI</span>
      <span class="feature">• Integrazione Nmap, SQLMap, Nikto</span>
      <span class="feature">• Post-exploitation automatizzata</span>
    </div>
    <div class="project-links">
      <a href="https://drive.google.com/file/d/1oZJRywM75ihs5xgnwREWP5k1kdHpqao6/view" target="_blank" class="project-link">
        <i class="bi bi-file-earmark-pdf"></i> Tesi
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>Sicurezza Veicolare - Crittografia HSM</h3>
      <div class="project-tags">
        <span class="tag">ESP32</span>
        <span class="tag">AES</span>
        <span class="tag">ECTAKS</span>
        <span class="tag">CAN Bus</span>
      </div>
    </div>
    <p class="project-description">
      Tesi triennale sulla sicurezza automobilistica con focus su Hardware Security Modules. 
      Sperimentazione di protocolli crittografici AES e ECTAKS su microcontrollori ESP32.
    </p>
    <div class="project-features">
      <span class="feature">• Analisi vulnerabilità CAN bus</span>
      <span class="feature">• Implementazione HSM/TPM</span>
      <span class="feature">• Crittografia curve ellittiche</span>
    </div>
    <div class="project-links">
      <a href="https://drive.google.com/file/d/1oZJRywM75ihs5xgnwREWP5k1kdHpqao6/view" target="_blank" class="project-link">
        <i class="bi bi-file-earmark-pdf"></i> Tesi Completa
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>Macchina Virtuale Penetration Testing</h3>
      <div class="project-tags">
        <span class="tag">SQL Injection</span>
        <span class="tag">Privilege Escalation</span>
        <span class="tag">File Upload</span>
      </div>
    </div>
    <p class="project-description">
      VM dedicata al penetration testing con 6 livelli di difficoltà (3 per accesso locale, 3 per privilege escalation). 
      Vulnerabilità realistiche: SQL injection, cookie hijacking, file upload insicuri.
    </p>
    <div class="project-features">
      <span class="feature">• 6 livelli di sfida progressivi</span>
      <span class="feature">• Vulnerabilità OWASP Top 10</span>
      <span class="feature">• Scenari realistici di pentesting</span>
    </div>
    <div class="project-links">
      <a href="https://drive.google.com/file/d/1IUo7KfHntAANG9wObcx0sIHjdGM0Lb32/view" target="_blank" class="project-link">
        <i class="bi bi-download"></i> VM Download
      </a>
      <a href="https://drive.google.com/file/d/1T5A-cu5uWGLb_VUzgbMPETPmF-R5ZNY9/view" target="_blank" class="project-link">
        <i class="bi bi-file-text"></i> Guida
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3>FoodRescue - Sviluppo Web</h3>
      <div class="project-tags">
        <span class="tag">HTML/CSS</span>
        <span class="tag">JavaScript</span>
        <span class="tag">PHP</span>
        <span class="tag">Frontend/Backend</span>
      </div>
    </div>
    <p class="project-description">
      Piattaforma web collaborativa per la riduzione degli sprechi alimentari. 
      Responsabile del design e programmazione frontend/backend con focus su UX e security.
    </p>
    <div class="project-features">
      <span class="feature">• Design responsive e accessibile</span>
      <span class="feature">• Backend PHP sicuro</span>
      <span class="feature">• Gestione database MySQL</span>
    </div>
    <div class="project-links">
      <a href="https://foodrescue.altervista.org/foodrescue/" target="_blank" class="project-link">
        <i class="bi bi-globe"></i> Sito Live
      </a>
    </div>
  </div>
</div>`,

      experience: `<!-- Experience Section Component -->
<div class="section-header reveal">
  <h2 class="section-title">Percorso Professionale</h2>
  <p class="section-subtitle">Esperienza accademica e professionale in cybersecurity</p>
</div>

<div class="timeline reveal">
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">Attuale</div>
      <h3>MSc Cybersecurity</h3>
      <p>Università La Sapienza - Roma</p>
      <p>Specializzazione in cybersecurity con focus su penetration testing, malware analysis e difesa delle reti. Ricerca su tecniche di AI-driven security testing.</p>
    </div>
    <div></div>
  </div>
  
  <div class="timeline-item">
    <div></div>
    <div class="timeline-content">
      <div class="timeline-date">Mar 2025 - Set 2025</div>
      <h3>Tirocinante Red Team</h3>
      <p>Leonardo S.p.A.</p>
      <p>Tirocinio di 6 mesi focalizzato su penetration testing automatizzato con AI. Sviluppo di framework basato su LLM per testing multi-dominio (reti, web app, IoT). Partecipazione a CTF (Global HTB, Red Hot Cyber).</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">2020 - 2023</div>
      <h3>Laurea Triennale in Ingegneria Informatica</h3>
      <p>Università degli Studi dell'Aquila</p>
      <p>Tesi: "Sicurezza in ambito veicolare: studio, sviluppo e sperimentazione di schemi crittografici basati su HSM". Sperimentazione di protocolli AES e ECTAKS su microcontrollori ESP32.</p>
    </div>
    <div></div>
  </div>
  
  <div class="timeline-item">
    <div></div>
    <div class="timeline-content">
      <div class="timeline-date">2024</div>
      <h3>Progetti di Sicurezza</h3>
      <p>Sviluppo Personale</p>
      <p>Creazione di macchina virtuale per penetration testing con 3 livelli di privilege escalation. Configurazione firewall OPNsense e implementazione SIEM/IDS in ambiente Proxmox.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <div class="timeline-date">2021 - 2022</div>
      <h3>Sviluppo Web</h3>
      <p>Progetto Collaborativo</p>
      <p>Sviluppo di sito web FoodRescue con focus su frontend/backend. Utilizzo di HTML, CSS, JavaScript e PHP per piattaforma di riduzione sprechi alimentari.</p>
    </div>
    <div></div>
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
        <i class="bi bi-telephone"></i>
      </div>
      <a href="tel:+393279994218" class="contact-link">
        (+39) 327 999 4218
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
