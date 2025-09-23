// Main Application Entry Point
import Terminal from './terminal.js';
import Navigation from './navigation.js';
import Animations from './animations.js';

class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Initialize all modules
    this.terminal = new Terminal('terminal');
    this.navigation = new Navigation();
    this.animations = new Animations();

    // Make terminal globally accessible for inline onclick handlers
    window.terminal = this.terminal;

    // Initialize any additional functionality
    this.setupUtilities();
  }

  setupUtilities() {
    // Add any additional utility functions or event listeners here
    
    // Example: Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+` to focus terminal (if needed in future)
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        // Focus terminal or show/hide it
      }
    });
  }
}

// Initialize the application
const app = new PortfolioApp();
