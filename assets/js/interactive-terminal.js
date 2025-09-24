/**
 * Interactive Terminal for Hero Section
 */

class InteractiveTerminal {
  constructor() {
    this.commands = {
      'help': '📋 Available commands:\n• help - Show this help message\n• about - Display detailed personal info\n• skills - Show technical skills with progress\n• projects - Browse security projects interactively\n• cv - Display resume/education timeline\n• contact - Show contact information\n• social - Open social media links\n• github - Browse GitHub repositories\n• certs - List cybersecurity certifications\n• tools - Show preferred security tools\n• nmap - Simulate network scan\n• whoami - Quick personal info\n• clear - Clear terminal screen\n• theme - Change terminal color theme\n• ascii - Show ASCII art banner',
      
      'about': '👤 Detailed Profile:\n\n• Name: Wendy Rosettini\n• Role: Cybersecurity Engineer & Penetration Tester\n• Education: MSc Cybersecurity @ Sapienza University of Rome\n• Location: L\'Aquila, Italy\n• Languages: Italian (Native), English (C1 Certified)\n• Interests: Ethical Hacking, Malware Analysis, CTF Competitions\n• Status: Open to cybersecurity opportunities\n• Motto: "Security through knowledge, protection through innovation"',
      
      'skills': '🛡️ Technical Skills Overview:\n\n🔍 Penetration Testing: ████████████ 95%\n🌐 Network Security:   ██████████ 88%\n🦠 Malware Analysis:   ████████ 82%\n🔐 Cryptography:       ███████ 75%\n🐍 Python Scripting:   ██████████ 90%\n🔧 Security Tools:     █████████ 85%\n☁️ Cloud Security:     ███████ 78%\n📊 Threat Intelligence: ████████ 80%\n\nType "tools" to see preferred security tools',
      
      'projects': '🚀 Interactive Project Browser:\n\n[1] 🔍 Network Vulnerability Scanner\n    Advanced pentesting tool with CVSS scoring\n    Tech: Python, Nmap, Custom CVE Database\n    Status: ✅ Complete | Type "project 1" for details\n\n[2] 🦠 Malware Analysis Toolkit\n    Static & dynamic analysis framework\n    Tech: C++, Assembly, Reverse Engineering\n    Status: ✅ Complete | Type "project 2" for details\n\n[3] 🚗 Automotive Security Research\n    CAN bus security & HSM implementation\n    Tech: Hardware Security, Cryptography\n    Status: 🔬 Research | Type "project 3" for details\n\n[4] 🌐 Web App Pentest Framework\n    OWASP Top 10 automated testing suite\n    Tech: Python, Web Security, Burp Extensions\n    Status: ✅ Complete | Type "project 4" for details',
      
      'cv': '🎓 Education & Experience Timeline:\n\n2023-Present │ MSc Cybersecurity - Sapienza University\n             │ Specialization: Offensive Security & Malware Analysis\n             │ Thesis: Automotive Security Systems\n\n2022-2023    │ Junior Penetration Tester - SecureIT Solutions\n             │ Web app testing, network analysis, security training\n\n2021-2022    │ Cybersecurity Intern - TechGuard Corp\n             │ Vulnerability assessments, security tool evaluation\n\n2020-2023    │ BSc Computer Science - University of L\'Aquila\n             │ Graduated with Honors (110/110 cum laude)\n             │ Thesis: ML Applications in Cybersecurity',
      
      'contact': '📧 Contact Information:\n\n• Email: wendy.rosettini@gmail.com\n• LinkedIn: /in/wendy-rosettini-9130a3289/\n• GitHub: github.com/wendytrilly00w\n• Location: L\'Aquila, Italy\n\n💼 Open to cybersecurity opportunities!\n\nType "social" to open links directly',
      
      'social': 'OPEN_SOCIAL_LINKS',
      
      'github': 'OPEN_GITHUB',
      
      'certs': '🏆 Cybersecurity Certifications:\n\n✅ CompTIA Security+ (SY0-601) - Valid until 2026\n✅ CEH - Certified Ethical Hacker - Valid until 2025\n🔄 OSCP - Offensive Security (In Progress)\n🎯 CISSP - Planned for 2024\n✅ AWS Security Specialty - Valid until 2025\n📜 English C1 Certificate - Cambridge\n\n📅 All certifications are current and verified',
      
      'tools': '� Preferred Security Tools:\n\n�🔍 Reconnaissance:\n  • Nmap, Masscan, Amass, Subfinder\n\n🦠 Malware Analysis:\n  • IDA Pro, Ghidra, x64dbg, Wireshark\n\n🌐 Web Testing:\n  • Burp Suite, OWASP ZAP, Sqlmap, Gobuster\n\n🏗️ Frameworks:\n  • Metasploit, Cobalt Strike, Empire\n\n☁️ Cloud Security:\n  • AWS CLI, Scout Suite, CloudMapper\n\n📊 OSINT:\n  • Maltego, theHarvester, Shodan, Censys',
      
      'nmap': '🔍 Network Scan Simulation:\n\nStarting advanced Nmap scan on target network...\n\n┌─[wendy@kali]─[~]\n└──╼ $ nmap -sS -sV -O target.local\n\nPORT     STATE    SERVICE     VERSION\n22/tcp   open     ssh         OpenSSH 8.9p1\n80/tcp   open     http        Apache/2.4.52\n443/tcp  open     https       Apache/2.4.52 (SSL)\n3306/tcp filtered mysql       \n5432/tcp open     postgresql  PostgreSQL 14.2\n8080/tcp open     http-proxy  Squid 4.13\n\nOS: Linux 5.15.0 (Ubuntu 22.04)\n\n✅ Scan completed in 4.67 seconds\n💡 Tip: Type "tools" to see real pentesting tools',
      
      'theme': 'CHANGE_THEME',
      
      'ascii': '     ██╗    ██╗███████╗███╗   ██╗██████╗ ██╗   ██╗\n     ██║    ██║██╔════╝████╗  ██║██╔══██╗╚██╗ ██╔╝\n     ██║ █╗ ██║█████╗  ██╔██╗ ██║██║  ██║ ╚████╔╝ \n     ██║███╗██║██╔══╝  ██║╚██╗██║██║  ██║  ╚██╔╝  \n     ╚███╔███╔╝███████╗██║ ╚████║██████╔╝   ██║   \n      ╚══╝╚══╝ ╚══════╝╚═╝  ╚═══╝╚═════╝    ╚═╝   \n\n    🛡️  C Y B E R S E C U R I T Y   E N G I N E E R  🛡️\n    ════════════════════════════════════════════════\n           "Securing the digital frontier"\n',
      
      'whoami': '� Quick Info:\n• Wendy Rosettini - Cybersecurity Engineer\n• MSc @ Sapienza University | Penetration Testing Specialist\n• Location: L\'Aquila, Italy\n• Type "about" for detailed profile',
      
      'clear': 'CLEAR_TERMINAL'
    };
    
    this.currentTheme = 'matrix'; // matrix, blue, purple, red
    this.themes = {
      matrix: { primary: '#00ff88', accent: '#00d4ff' },
      blue: { primary: '#00d4ff', accent: '#0088ff' },
      purple: { primary: '#a855f7', accent: '#ec4899' },
      red: { primary: '#ef4444', accent: '#f97316' }
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

    // Handle special commands first
    if (command === 'clear') {
      this.clearTerminal();
      return;
    }

    // Handle project-specific commands
    if (command.startsWith('project ')) {
      this.showProjectDetails(command);
      return;
    }

    // Handle special interactive commands
    if (this.commands[command]) {
      if (command === 'social') {
        this.openSocialLinks();
        return;
      }
      
      if (command === 'github') {
        this.openGitHub();
        return;
      }
      
      if (command === 'theme') {
        this.changeTheme();
        return;
      }

      // Regular command output
      const outputDiv = document.createElement('div');
      outputDiv.className = 'terminal-output';
      terminalBody.insertBefore(outputDiv, inputLine);
      
      this.typewriterEffect(this.commands[command], outputDiv);
    } else {
      // Unknown command
      const outputDiv = document.createElement('div');
      outputDiv.className = 'terminal-output';
      outputDiv.innerHTML = `<div style="color: #ff6b6b;">❌ Command not found: ${command}</div><div>💡 Type 'help' for available commands</div>`;
      terminalBody.insertBefore(outputDiv, inputLine);
      this.scrollToBottom();
    }

    // Keep input focused
    setTimeout(() => {
      const input = inputLine.querySelector('.terminal-input');
      input.focus();
    }, 100);
  }

  showProjectDetails(command) {
    const projectNum = command.split(' ')[1];
    const projects = {
      '1': '🔍 Network Vulnerability Scanner - Detailed View:\n\n📋 Description:\nAdvanced network scanning tool with integrated CVE database lookup\nand automated report generation for penetration testing engagements.\n\n🛠️ Technologies:\n• Python 3.9+ with asyncio for concurrent scanning\n• Nmap Python library integration\n• Custom CVE database with CVSS scoring\n• HTML/PDF report generation\n• REST API for CI/CD integration\n\n✨ Key Features:\n• Multi-threaded scanning for speed\n• False positive reduction algorithms\n• Custom vulnerability signatures\n• Integration with OWASP Top 10\n• Automated remediation suggestions\n\n📊 Status: Production Ready | Used in 15+ security assessments',
      
      '2': '🦠 Malware Analysis Toolkit - Detailed View:\n\n📋 Description:\nComprehensive malware analysis framework supporting both static\nand dynamic analysis with automated threat intelligence integration.\n\n🛠️ Technologies:\n• C++ core engine for performance\n• Python API for automation\n• Assembly language analysis\n• Virtual machine integration\n• Machine learning classification\n\n✨ Key Features:\n• Behavioral analysis sandbox\n• Static code disassembly\n• Network traffic monitoring\n• Yara rule integration\n• Threat intelligence feeds\n• Automated family classification\n\n📊 Status: Research Complete | 2 CVEs discovered',
      
      '3': '🚗 Automotive Security Research - Detailed View:\n\n📋 Description:\nSecurity assessment framework for automotive systems focusing\non CAN bus protocols and Hardware Security Module implementation.\n\n🛠️ Technologies:\n• Hardware Security Modules (HSM)\n• CAN bus protocol analysis\n• Cryptographic implementations\n• Real-time system security\n• Embedded systems programming\n\n✨ Key Features:\n• CAN message injection testing\n• ECU firmware analysis\n• Cryptographic key management\n• Real-time attack detection\n• Secure boot verification\n\n📊 Status: Active Research | Thesis Topic | 3 Papers in Progress',
      
      '4': '🌐 Web App Pentest Framework - Detailed View:\n\n📋 Description:\nAutomated web application security testing framework with\nOWASP Top 10 coverage and custom vulnerability detection.\n\n🛠️ Technologies:\n• Python with Selenium automation\n• Burp Suite API integration\n• Custom payload generation\n• Machine learning for detection\n• REST API testing capabilities\n\n✨ Key Features:\n• OWASP Top 10 automated testing\n• Custom vulnerability signatures\n• Authentication bypass testing\n• SQL injection detection\n• XSS payload generation\n• API security assessment\n\n📊 Status: Production Ready | Used by 3 security firms'
    };

    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    const terminalBody = document.querySelector('#terminal-content');
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(outputDiv, inputLine);

    if (projects[projectNum]) {
      this.typewriterEffect(projects[projectNum], outputDiv);
    } else {
      outputDiv.innerHTML = `<div style="color: #ff6b6b;">❌ Project ${projectNum} not found</div><div>💡 Type 'projects' to see available projects</div>`;
      this.scrollToBottom();
    }
  }

  openSocialLinks() {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    const terminalBody = document.querySelector('#terminal-content');
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(outputDiv, inputLine);

    outputDiv.innerHTML = `
      <div>🌐 Opening social media links...</div>
      <div style="margin: 1rem 0;">
        <a href="https://linkedin.com/in/wendy-rosettini-9130a3289/" target="_blank" style="color: var(--primary-color); text-decoration: none;">
          📘 LinkedIn Profile → Opening...
        </a>
      </div>
      <div style="margin: 1rem 0;">
        <a href="https://github.com/wendytrilly00w" target="_blank" style="color: var(--primary-color); text-decoration: none;">
          🐙 GitHub Profile → Opening...
        </a>
      </div>
      <div>✅ Links opened in new tabs</div>
    `;

    // Actually open the links
    setTimeout(() => {
      window.open('https://linkedin.com/in/wendy-rosettini-9130a3289/', '_blank');
      window.open('https://github.com/wendytrilly00w', '_blank');
    }, 1000);

    this.scrollToBottom();
  }

  openGitHub() {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    const terminalBody = document.querySelector('#terminal-content');
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(outputDiv, inputLine);

    this.typewriterEffect('🐙 GitHub Repository Browser:\n\n📁 Featured Repositories:\n• network-vuln-scanner - Python vulnerability scanner\n• malware-toolkit - C++ malware analysis framework\n• automotive-security - Vehicle security research\n• webapp-pentest - Web application testing suite\n• ctf-writeups - Capture The Flag solutions\n• security-scripts - Automation scripts collection\n\n🔗 Opening GitHub profile...', outputDiv);

    setTimeout(() => {
      window.open('https://github.com/wendytrilly00w', '_blank');
    }, 2000);
  }

  changeTheme() {
    const themes = Object.keys(this.themes);
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.currentTheme = themes[nextIndex];

    const theme = this.themes[this.currentTheme];
    
    // Update CSS custom properties
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);

    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    const terminalBody = document.querySelector('#terminal-content');
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(outputDiv, inputLine);

    outputDiv.innerHTML = `
      <div>🎨 Theme changed to: <span style="color: ${theme.primary}; font-weight: bold;">${this.currentTheme}</span></div>
      <div>Available themes: matrix, blue, purple, red</div>
      <div>💡 Type 'theme' again to cycle through themes</div>
    `;

    this.scrollToBottom();
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
