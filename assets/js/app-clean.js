// Portfolio Application - Clean version without terminal conflicts

// Navigation Class
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupSmoothScroll();
    this.setupScrollSpy();
  }

  setupMobileMenu() {
    window.toggleMenu = () => {
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
    };
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        document.getElementById('nav').classList.remove('active');
      });
    });
  }

  setupScrollSpy() {
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }
}

// Animations Class
class Animations {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollReveal();
    this.setupTypingEffect();
    this.setupDynamicYear();
    this.setupConsoleEasterEgg();
  }

  setupScrollReveal() {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();
  }

  setupTypingEffect() {
    const terminalText = document.querySelector('.terminal-text');
    if (terminalText) {
      const text = terminalText.textContent;
      terminalText.textContent = '';
      let index = 0;
      
      const type = () => {
        if (index < text.length) {
          terminalText.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100);
        }
      };
      
      setTimeout(type, 500);
    }
  }

  setupDynamicYear() {
    document.addEventListener('DOMContentLoaded', () => {
      const year = new Date().getFullYear();
      const copyrightText = document.querySelector('.footer p');
      if (copyrightText) {
        copyrightText.innerHTML = copyrightText.innerHTML.replace('2024', year);
      }
    });
  }

  setupConsoleEasterEgg() {
    console.log('%c🔒 Security First! 🔒', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
    console.log('%cInterested in cybersecurity? Let\'s connect!', 'font-size: 14px; color: #00ff88;');
    console.log('%cEmail: wendy.rosettini@gmail.com', 'font-size: 12px; color: #a8b2d1;');
  }
}

// Main Application - No Terminal conflicts
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Only initialize Navigation and Animations
    // Terminal is handled by interactive-terminal.js
    this.navigation = new Navigation();
    this.animations = new Animations();

    this.setupUtilities();
  }

  setupUtilities() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
      }
    });
  }
}

// Initialize the application
const app = new PortfolioApp();
