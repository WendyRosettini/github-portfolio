// Terminal Interactive Module
import TerminalCommands from './terminal-commands.js';

class Terminal {
  constructor(terminalElementId) {
    this.terminal = document.getElementById(terminalElementId);
    this.commands = new TerminalCommands();
    this.init();
  }

  init() {
    this.updateInteractiveButtons();
  }

  runCommand(cmd) {
    if (!this.terminal) return;

    const cursor = this.terminal.querySelector('.terminal-cursor');
    
    // Create new command line
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="terminal-prompt">wendy@cybersec:~$</span> <span class="terminal-command">${cmd}</span>`;
    
    // Insert before cursor line
    const cursorLine = cursor.parentElement;
    this.terminal.insertBefore(commandLine, cursorLine);
    
    // Execute command
    const result = this.commands.execute(cmd);
    
    if (result.type === 'clear') {
      this.clearTerminal();
      return;
    }
    
    if (result.type === 'output') {
      this.displayOutput(result.content, cursorLine);
    }
  }

  displayOutput(output, cursorLine) {
    const outputLines = output.split('\n');
    outputLines.forEach(line => {
      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-line';
      outputLine.innerHTML = `<span class="terminal-output">${line}</span>`;
      this.terminal.insertBefore(outputLine, cursorLine);
    });
    
    // Scroll to bottom
    this.terminal.scrollTop = this.terminal.scrollHeight;
  }

  clearTerminal() {
    const lines = this.terminal.querySelectorAll('.terminal-line:not(:last-child)');
    lines.forEach(line => line.remove());
  }

  updateInteractiveButtons() {
    const interactiveDiv = this.terminal?.querySelector('.terminal-interactive');
    if (interactiveDiv) {
      interactiveDiv.innerHTML = `
        <button class="terminal-button" onclick="terminal.runCommand('help')">help</button>
        <button class="terminal-button" onclick="terminal.runCommand('about')">about</button>
        <button class="terminal-button" onclick="terminal.runCommand('projects')">projects</button>
        <button class="terminal-button" onclick="terminal.runCommand('skills')">skills</button>
        <button class="terminal-button" onclick="terminal.runCommand('hack')">hack</button>
        <button class="terminal-button" onclick="terminal.runCommand('clear')">clear</button>
      `;
    }
  }
}

export default Terminal;
