/**
 * Interactive Terminal for Hero Section
 */

class InteractiveTerminal {
  constructor() {
    this.commands = {
      'help': 'Available commands: help, skills, projects, whoami, clear, contact',
      'whoami': 'wendy@cybersec: Cybersecurity Engineer & Penetration Tester',
      'skills': 'Core Skills:\n• Penetration Testing (Advanced)\n• Network Security (Expert)\n• Malware Analysis (Proficient)\n• Cryptography (Intermediate)',
      'projects': 'Featured Projects:\n• Network Vulnerability Scanner\n• Malware Analysis Toolkit\n• Automotive Security Research\n• Web App Pentest Framework',
      'contact': 'Contact Info:\n• Email: wendy.rosettini@gmail.com\n• LinkedIn: wendy-rosettini-9130a3289\n• GitHub: wendytrilly00w',
      'clear': 'CLEAR_TERMINAL'
    };
    
    this.initTerminal();
  }

  initTerminal() {
    // Wait for components to load
    document.addEventListener('componentsLoaded', () => {
      setTimeout(() => {
        this.setupTerminal();
      }, 1500);
    });
  }

  setupTerminal() {
    const terminalBody = document.querySelector('#terminal-content');
    if (!terminalBody) return;

    // Make terminal clickable
    terminalBody.addEventListener('click', () => {
      this.focusInput();
    });

    // Add input handling
    this.addInputLine();
  }

  addInputLine() {
    const terminalBody = document.querySelector('#terminal-content');
    if (!terminalBody) return;

    // Remove existing cursor
    const existingCursor = terminalBody.querySelector('.cursor');
    if (existingCursor) {
      existingCursor.remove();
    }

    // Create input line
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-line input-line';
    inputLine.innerHTML = `
      <span class="prompt">wendy@cybersec:~$</span>
      <input type="text" class="terminal-input" autocomplete="off" spellcheck="false">
    `;

    terminalBody.appendChild(inputLine);

    const input = inputLine.querySelector('.terminal-input');
    input.addEventListener('keydown', (e) => this.handleInput(e));
    input.focus();
  }

  handleInput(event) {
    if (event.key === 'Enter') {
      const input = event.target;
      const command = input.value.trim().toLowerCase();
      
      this.executeCommand(command);
      input.value = '';
    }
  }

  executeCommand(command) {
    const terminalBody = document.querySelector('#terminal-content');
    if (!terminalBody) return;

    // Add command to terminal
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `
      <span class="prompt">wendy@cybersec:~$</span>
      <span class="command">${command}</span>
    `;
    
    // Insert before input line
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(commandLine, inputLine);

    // Handle special commands
    if (command === 'clear') {
      this.clearTerminal();
      return;
    }

    // Add output
    const output = this.commands[command] || `Command not found: ${command}. Type 'help' for available commands.`;
    
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    outputDiv.innerHTML = output.split('\n').map(line => `<div>${line}</div>`).join('');
    
    terminalBody.insertBefore(outputDiv, inputLine);

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Keep input focused
    const input = inputLine.querySelector('.terminal-input');
    input.focus();
  }

  clearTerminal() {
    const terminalBody = document.querySelector('#terminal-content');
    if (!terminalBody) return;

    // Keep only the input line
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.innerHTML = '';
    terminalBody.appendChild(inputLine);

    const input = inputLine.querySelector('.terminal-input');
    input.focus();
  }

  focusInput() {
    const input = document.querySelector('.terminal-input');
    if (input) {
      input.focus();
    }
  }
}

// Initialize interactive terminal
document.addEventListener('DOMContentLoaded', () => {
  new InteractiveTerminal();
});
