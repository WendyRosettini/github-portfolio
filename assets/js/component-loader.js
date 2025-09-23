/**
 * Component Loader - Loads HTML components dynamically
 */

class ComponentLoader {
  constructor() {
    this.componentsPath = './components/';
  }

  /**
   * Load a component from HTML file
   * @param {string} componentName - Name of the component file (without .html)
   * @param {string} targetSelector - CSS selector for the target element
   */
  async loadComponent(componentName, targetSelector) {
    try {
      const response = await fetch(`${this.componentsPath}${componentName}.html`);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentName}`);
      }
      
      const html = await response.text();
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
      { name: 'stats', target: '#stats-placeholder' },
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
