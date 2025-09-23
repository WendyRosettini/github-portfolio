// Animation and Effects Module
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
    // Scroll reveal animation
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
    reveal(); // Check on load
  }

  setupTypingEffect() {
    // Terminal typing effect for the hero section
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
    // Update copyright year dynamically
    document.addEventListener('DOMContentLoaded', () => {
      const year = new Date().getFullYear();
      const copyrightText = document.querySelector('.footer p');
      if (copyrightText) {
        copyrightText.innerHTML = copyrightText.innerHTML.replace('2024', year);
      }
    });
  }

  setupConsoleEasterEgg() {
    // Console easter egg for developers
    console.log('%c🔒 Security First! 🔒', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
    console.log('%cInterested in cybersecurity? Let\'s connect!', 'font-size: 14px; color: #00ff88;');
    console.log('%cEmail: wendy.rosettini@gmail.com', 'font-size: 12px; color: #a8b2d1;');
  }
}

export default Animations;
