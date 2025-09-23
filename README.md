my # Wendy Rosettini - Cybersecurity Portfolio

A modern, responsive portfolio website for a cybersecurity engineer with an interactive terminal and modular architecture.

## 🏗️ Modular Architecture

The portfolio has been reorganized with a clean, maintainable modular structure:

### 📁 Project Structure

```
github-portfolio/
├── index.html                 # Main entry point
├── index_backup.html          # Original backup
├── index_original.html        # Another backup copy
├── README.md                  # This file
├── assets/
│   ├── css/                   # Modular stylesheets
│   │   ├── main.css          # Main CSS file (imports all modules)
│   │   ├── variables.css     # CSS custom properties and variables
│   │   ├── base.css          # Base styles and animations
│   │   ├── header.css        # Header and navigation styles
│   │   ├── buttons.css       # Button components
│   │   ├── hero.css          # Hero section styles
│   │   ├── terminal.css      # Interactive terminal styles
│   │   ├── skills.css        # Skills section styles
│   │   ├── sections.css      # General section layouts
│   │   ├── projects.css      # Projects grid styles
│   │   ├── timeline.css      # Experience timeline styles
│   │   ├── contact.css       # Contact and stats styles
│   │   ├── footer.css        # Footer styles
│   │   └── responsive.css    # Mobile responsiveness
│   ├── js/                   # Modular JavaScript
│   │   ├── main.js          # Main application entry point
│   │   ├── terminal-commands.js  # Terminal command system
│   │   ├── terminal.js      # Terminal interaction logic
│   │   ├── navigation.js    # Navigation and menu functionality
│   │   └── animations.js    # Animations and effects
│   └── images/              # Image assets
│       └── photo_badge_1.jpg # Profile photo
└── components/              # HTML component templates
    ├── header.html         # Header component
    ├── hero.html          # Hero section component
    ├── stats.html         # Stats section component
    └── footer.html        # Footer component
```

## 🚀 Features

### Interactive Terminal
- **50+ Custom Commands**: Portfolio-specific commands like `about`, `projects`, `skills`
- **Security-themed Commands**: `nmap`, `metasploit`, `wireshark`, `hack`
- **Fun Commands**: `fortune`, `cowsay`, `matrix`, `coffee`
- **Real-time Interaction**: Live command execution with proper terminal styling

### Responsive Design
- **Mobile-first Approach**: Optimized for all screen sizes
- **Grid Layouts**: Modern CSS Grid and Flexbox
- **Touch-friendly**: Mobile menu and interactions

### Performance
- **Modular Loading**: Separate CSS and JS files for better caching
- **ES6 Modules**: Modern JavaScript module system
- **Optimized Assets**: Organized asset structure

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Grid, Flexbox
- **Icons**: Bootstrap Icons
- **Fonts**: Space Grotesk, JetBrains Mono
- **Architecture**: Component-based modular design

## 🎨 Design Features

### Cybersecurity Theme
- **Terminal Aesthetics**: Dark theme with neon accents
- **Security Colors**: Blue (#00d4ff), Pink (#ff0080), Green (#00ff88)
- **Animated Background**: Subtle rotating gradients
- **Matrix-inspired Elements**: Terminal prompts and hacker aesthetics

### Interactive Elements
- **Floating Animations**: Skill hexagons and profile photo
- **Hover Effects**: Cards, buttons, and links with smooth transitions
- **Scroll Animations**: Reveal effects on scroll
- **Typing Effects**: Terminal-style text animation

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full grid layout)
- **Tablet**: 768px-1199px (Adapted layouts)
- **Mobile**: <768px (Stacked layout, mobile menu)

## 🔧 Development

### CSS Architecture
- **Variables**: Centralized color and spacing system
- **Components**: Isolated, reusable styles
- **Utilities**: Helper classes for common patterns
- **Mobile-first**: Progressive enhancement approach

### JavaScript Architecture
- **ES6 Modules**: Import/export system
- **Class-based**: Object-oriented component structure
- **Event-driven**: Clean event handling
- **Separation of Concerns**: Each module has a specific purpose

## 🌟 Key Improvements from Modular Refactoring

1. **Maintainability**: Easier to update individual components
2. **Scalability**: Add new sections without touching existing code
3. **Reusability**: Components can be reused across projects
4. **Performance**: Better caching and loading optimization
5. **Collaboration**: Multiple developers can work on different modules
6. **Debugging**: Easier to isolate and fix issues

## 📄 License

© 2024 Wendy Rosettini | Cybersecurity Engineer

---

**Built with passion for security and clean code architecture** 🔒
