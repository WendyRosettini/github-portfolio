/**
 * Interactive Terminal for Hero Section
 */

class InteractiveTerminal {
  constructor() {
    this.commands = {
      'help': '📋 Available commands:\n• help - Show this help message\n• about - Display detailed personal info\n• skills - Show technical skills with progress\n• projects - Browse security projects interactively\n• cv - Display resume/education timeline\n• contact - Show contact information\n• social - Open social media links\n• github - Browse GitHub repositories\n• certs - List cybersecurity certifications\n• tools - Show preferred security tools\n• nmap - Simulate network scan\n• whoami - Quick personal info\n• clear - Clear terminal screen\n• theme - Change terminal color theme\n• ascii - Show ASCII art banner',
      
      'about': '👤 Profilo Dettagliato:\n\n• Nome: Wendy Rosettini\n• Ruolo: Cybersecurity Specialist & Penetration Tester\n• Nascita: 10/09/2000, L\'Aquila, Italia\n• Educazione: MSc Cybersecurity @ La Sapienza Roma\n• Esperienza: 6 mesi Red Team @ Leonardo S.p.A.\n• Lingue: Italiano (Nativo), Inglese (C1), Tedesco (B1), Francese (B1)\n• Interessi: AI-driven Pentesting, Automotive Security, CTF\n• Status: Aperta a opportunità in cybersecurity\n• Contatto: (+39) 327 999 4218',
      
      'skills': '🛡️ Technical Skills Overview:\n\n🔍 Penetration Testing: ████████████ 95%\n🌐 Network Security:   ██████████ 88%\n🦠 Malware Analysis:   ████████ 82%\n🔐 Cryptography:       ███████ 75%\n🐍 Python Scripting:   ██████████ 90%\n🔧 Security Tools:     █████████ 85%\n☁️ Cloud Security:     ███████ 78%\n📊 Threat Intelligence: ████████ 80%\n\nType "tools" to see preferred security tools',
      
      'projects': '🚀 Browser Progetti Interattivo:\n\n[1] 🤖 AI-Driven Penetration Testing Framework\n    Framework LLM per pentesting automatizzato\n    Tech: Python, LLM, MCP, Multi-Agent Architecture\n    Status: ✅ Tesi Magistrale | Type "project 1" for details\n\n[2] 🚗 Sicurezza Veicolare - Crittografia HSM\n    Implementazione HSM per sicurezza automotive\n    Tech: ESP32, AES, ECTAKS, Hardware Security\n    Status: ✅ Tesi Triennale | Type "project 2" for details\n\n[3] � Macchina Virtuale Penetration Testing\n    VM con 6 livelli di difficoltà per pentesting\n    Tech: SQL Injection, Privilege Escalation, File Upload\n    Status: ✅ Completo | Type "project 3" for details\n\n[4] 🌐 FoodRescue - Piattaforma Web\n    Riduzione sprechi alimentari con focus security\n    Tech: HTML/CSS, JavaScript, PHP, MySQL\n    Status: ✅ Live | Type "project 4" for details',
      
      'cv': '🎓 Timeline Educazione & Esperienza:\n\nAttuale      │ MSc Cybersecurity - La Sapienza Roma\n             │ Specializzazione: Offensive Security & AI-driven Testing\n             │ Tesi: Framework AI per Penetration Testing automatizzato\n\nMar-Set 2025 │ Tirocinante Red Team - Leonardo S.p.A.\n             │ Sviluppo framework LLM per pentesting automatizzato\n             │ Partecipazione CTF (Global HTB, Red Hot Cyber)\n             │ Testing WAPT, DAST/SAST, privilege escalation\n\n2020-2023    │ BSc Ingegneria Informatica - Univ. L\'Aquila\n             │ Tesi: Sicurezza veicolare con crittografia HSM\n             │ Sperimentazione AES/ECTAKS su ESP32\n\n2024         │ Progetti Personali - Cybersecurity\n             │ VM penetration testing, configurazione firewall\n             │ Implementazione SIEM/IDS su Proxmox',
      
      'contact': '📧 Informazioni di Contatto:\n\n• Email: wendy.rosettini@gmail.com\n• Telefono: (+39) 327 999 4218\n• LinkedIn: /in/wendy-rosettini-9130a3289/\n• GitHub: github.com/WendyRosettini\n• Indirizzo: Via Luigi Sturzo, 67100 L\'Aquila\n\n💼 Aperta a opportunità in cybersecurity!\n\nDigita "social" per aprire i link direttamente',
      
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
        <a href="https://github.com/WendyRosettini?tab=repositories" target="_blank" style="color: var(--primary-color); text-decoration: none;">
          🐙 GitHub Repositories → Opening...
        </a>
      </div>
      <div>✅ Links opened in new tabs</div>
    `;

    // Actually open the links
    setTimeout(() => {
      window.open('https://linkedin.com/in/wendy-rosettini-9130a3289/', '_blank');
      window.open('https://github.com/WendyRosettini?tab=repositories', '_blank');
    }, 1000);

    this.scrollToBottom();
  }

  openGitHub() {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    const terminalBody = document.querySelector('#terminal-content');
    const inputLine = terminalBody.querySelector('.input-line');
    terminalBody.insertBefore(outputDiv, inputLine);

    this.typewriterEffect('🐙 GitHub Repository Browser:\n\n📁 Repository Portfolio:\n• github-portfolio - Portfolio cybersecurity interattivo\n• AI-driven-penetration-testing - Framework LLM per pentesting\n• automotive-security-hsm - Ricerca sicurezza veicolare\n• penetration-vm - Macchina virtuale per testing\n• foodrescue-platform - Piattaforma web collaborativa\n• security-tools - Strumenti e script di sicurezza\n\n🔗 Opening GitHub repositories...', outputDiv);

    setTimeout(() => {
      window.open('https://github.com/WendyRosettini?tab=repositories', '_blank');
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
