/**
 * Interactive Terminal for Hero Section
 */

class InteractiveTerminal {
  constructor() {
    this.commands = {
      'help': '📋 Available commands:\n• help - Show this help message\n• skills - Display technical skills with progress bars\n• projects - List featured cybersecurity projects\n• whoami - Show personal information\n• contact - Display contact information\n• nmap - Simulate network scan\n• ls - List directory contents\n• cat - Display file contents\n• ps - Show running processes\n• clear - Clear terminal screen',
      
      'whoami': '👤 Personal Information:\n• Name: Wendy Rosettini\n• Role: Cybersecurity Engineer & Penetration Tester\n• Education: MSc Cybersecurity @ Sapienza University\n• Location: L\'Aquila, Italy\n• Status: Available for opportunities',
      
      'skills': '🛡️ Technical Skills Overview:\n\n🔍 Penetration Testing: ████████████ 95%\n🌐 Network Security:   ██████████ 88%\n🦠 Malware Analysis:   ████████ 82%\n🔐 Cryptography:       ███████ 75%\n🐍 Python Scripting:   ██████████ 90%\n🔧 Security Tools:     █████████ 85%\n☁️ Cloud Security:     ███████ 78%\n📊 Threat Intelligence: ████████ 80%',
      
      'projects': '🚀 Featured Security Projects:\n\n1. 🔍 Network Vulnerability Scanner\n   → Advanced pentesting tool with CVSS scoring\n   → Technologies: Python, Nmap, Custom CVE DB\n\n2. 🦠 Malware Analysis Toolkit\n   → Static & dynamic analysis framework\n   → Technologies: C++, Reverse Engineering\n\n3. 🚗 Automotive Security Research\n   → CAN bus security & HSM implementation\n   → Technologies: Hardware Security, Cryptography\n\n4. 🌐 Web App Pentest Framework\n   → OWASP Top 10 automated testing\n   → Technologies: Python, Web Security',
      
      'contact': '📧 Contact Information:\n\n• Email: wendy.rosettini@gmail.com\n• LinkedIn: /in/wendy-rosettini-9130a3289/\n• GitHub: github.com/wendytrilly00w\n• Location: L\'Aquila, Italy\n\n💼 Open to cybersecurity opportunities!',
      
      'nmap': '🔍 Network Scan Results:\n\nStarting Nmap scan on localhost...\n\nPORT     STATE    SERVICE     VERSION\n22/tcp   open     ssh         OpenSSH 8.9\n80/tcp   open     http        Apache 2.4.52\n443/tcp  open     https       Apache 2.4.52 (SSL)\n3306/tcp filtered mysql       \n5432/tcp open     postgresql  PostgreSQL 14.2\n\n✅ Scan completed in 2.34 seconds',
      
      'ls': '📁 Directory Contents:\n\ndrwxr-xr-x  2 wendy wendy 4096 Dec 19 14:30 projects/\ndrwxr-xr-x  2 wendy wendy 4096 Dec 19 14:30 skills/\n-rw-r--r--  1 wendy wendy 2048 Dec 19 14:30 resume.pdf\n-rw-r--r--  1 wendy wendy 1024 Dec 19 14:30 certifications.txt\n-rwxr-xr-x  1 wendy wendy 8192 Dec 19 14:30 portfolio.sh',
      
      'cat': '📄 File: certifications.txt\n\n🎓 Cybersecurity Certifications:\n\n• CompTIA Security+ (SY0-601)\n• CEH - Certified Ethical Hacker\n• OSCP - Offensive Security Certified Professional\n• CISSP - Certified Information Systems Security Professional\n• AWS Security Specialty\n\n📅 All certifications are current and valid.',
      
      'ps': '⚡ Running Processes:\n\nPID    COMMAND           CPU    MEM\n1337   portfolio.exe     2.1%   64MB\n2048   security-scan     15.3%  128MB\n4096   malware-analysis  8.7%   256MB\n8192   network-monitor   1.2%   32MB\n\n✅ All security processes running normally',
      
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

    // Add output with typewriter effect
    const output = this.commands[command] || `❌ Command not found: ${command}. Type 'help' for available commands.`;
    
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    terminalBody.insertBefore(outputDiv, inputLine);
    
    // Use typewriter effect for command output
    this.typewriterEffect(output, outputDiv);

    // Keep input focused
    setTimeout(() => {
      const input = inputLine.querySelector('.terminal-input');
      input.focus();
    }, 100);
  }
  
  typewriterEffect(text, container) {
    const lines = text.split('\n');
    let lineIndex = 0;
    
    const typeLine = () => {
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        const lineElement = document.createElement('div');
        container.appendChild(lineElement);
        
        let charIndex = 0;
        const typeChar = () => {
          if (charIndex < line.length) {
            lineElement.textContent += line[charIndex];
            charIndex++;
            setTimeout(typeChar, 15); // Typing speed
          } else {
            lineIndex++;
            setTimeout(typeLine, 50); // Delay between lines
          }
        };
        
        if (line.trim() === '') {
          // Empty line, just add and continue
          lineIndex++;
          setTimeout(typeLine, 50);
        } else {
          typeChar();
        }
      } else {
        // Scroll to bottom when typing is complete
        this.scrollToBottom();
      }
    };
    
    typeLine();
  }
  
  scrollToBottom() {
    const terminalBody = document.querySelector('#terminal-content');
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
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
