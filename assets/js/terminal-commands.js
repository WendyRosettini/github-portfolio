// Terminal Command System
class TerminalCommands {
  constructor() {
    this.commands = {
      'help': 'Available commands:\n' +
              'Portfolio: about | education | skills | projects | experience | contact | resume\n' +
              'Projects: projects --automotive | projects --pentest | projects --ctf\n' +
              'Security: nmap wendy.dev | exploit --show-skills | metasploit | wireshark\n' +
              'System: whoami | ls -la | ps aux | netstat | clear\n' +
              'Fun: fortune | cowsay | matrix | hack | coffee\n' +
              'Use "man [command]" for detailed help',
              
      'about': 'Wendy Rosettini - Cybersecurity Engineer\n' +
               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
               'MSc Computer Engineering (Cybersecurity) @ Sapienza University\n' +
               'Specializing in: Offensive Security, Malware Analysis, Network Defense\n' +
               'Location: L\'Aquila, Italy\n' +
               'Passion: Finding vulnerabilities before the bad guys do\n' +
               'Status: Ready to secure the digital world!',
               
      'education': 'Educational Background:\n' +
                   '━━━━━━━━━━━━━━━━━━━━━\n' +
                   '[2023-Present] MSc Computer Engineering - Cybersecurity\n' +
                   '               Sapienza University of Rome\n' +
                   '               Focus: Penetration Testing, Digital Forensics\n\n' +
                   '[2020-2023]   BSc Computer Engineering\n' +
                   '               Università degli Studi dell\'Aquila\n' +
                   '               Thesis: Automotive Security & HSM Cryptography\n\n' +
                   '[Certifications] C1 English Level, CTF Competitor',
                   
      'skills': 'Technical Arsenal:\n' +
                '━━━━━━━━━━━━━━━━━\n' +
                'Offensive Security: Penetration Testing, Web App Security, SQL Injection\n' +
                'Security Tools: Metasploit, Burp Suite, Nmap, Wireshark, John the Ripper\n' +
                'Programming: Python, Bash, JavaScript, C/C++, PHP, SQL\n' +
                'Infrastructure: Linux, Docker, Proxmox, OPNsense, SIEM, IDS/IPS\n' +
                'Specialties: Malware Analysis, Network Defense, Cryptography',
                
      'projects': 'Security Projects Portfolio:\n' +
                  '━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                  '[1] Automotive Security: HSM-based Cryptography\n' +
                  '[2] Custom Penetration Testing Lab\n' +
                  '[3] Enterprise Network Defense System\n' +
                  '[4] CTF Challenge Platform\n' +
                  '[5] Malware Analysis Sandbox\n' +
                  '[6] FoodRescue Security Audit\n\n' +
                  'Use "projects --[name]" for details (e.g., projects --automotive)',
                  
      'projects --automotive': 'Project: Automotive Security - HSM Implementation\n' +
                               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                               'Technologies: Cryptography, HSM, ESP32, AES, ECTAKS\n' +
                               'Description: Developed cryptographic schemes for vehicle security\n' +
                               '            using Hardware Security Modules. Analyzed automotive\n' +
                               '            vulnerabilities and tested secure communication protocols.\n' +
                               'Research Paper: Available on Google Drive\n' +
                               'Impact: Enhanced in-vehicle communication security',
                               
      'projects --pentest': 'Project: Custom Penetration Testing Lab\n' +
                            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                            'Technologies: VM Development, Linux, Exploitation\n' +
                            'Features: Multiple privilege escalation paths\n' +
                            '         SQL injection, XSS, file upload exploits\n' +
                            '         Realistic vulnerable environment\n' +
                            'Purpose: Educational penetration testing practice\n' +
                            'Documentation: Comprehensive setup and exploitation guides',
                            
      'projects --ctf': 'Project: CTF Challenge Platform\n' +
                        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                        'Technologies: Python, Docker, Web Security\n' +
                        'Challenges: Web exploitation, Cryptography, Reverse Engineering\n' +
                        'Features: Automated deployment, Scalable infrastructure\n' +
                        'Purpose: Competition hosting and security education\n' +
                        'Deployment: Containerized for easy scaling',
                        
      'experience': 'Professional Journey:\n' +
                    '━━━━━━━━━━━━━━━━━━━━━\n' +
                    '[2023-Present] MSc Student & Security Researcher\n' +
                    '               Sapienza University of Rome\n' +
                    '               Research focus: Advanced penetration testing\n\n' +
                    '[2023]        Bachelor\'s Thesis Researcher\n' +
                    '               Automotive Security & HSM Cryptography\n\n' +
                    '[Ongoing]     CTF Competitor & Security Enthusiast\n' +
                    '               Active in cybersecurity competitions',
                    
      'contact': 'Contact Information:\n' +
                 '━━━━━━━━━━━━━━━━━━━━\n' +
                 'Email: wendy.rosettini@gmail.com\n' +
                 'GitHub: github.com/wendytrilly00w\n' +
                 'LinkedIn: linkedin.com/in/wendy-rosettini-9130a3289\n' +
                 'Location: L\'Aquila, Italy\n' +
                 'Status: Open to cybersecurity opportunities',
                 
      'resume': 'Generating resume download link...\n' +
                'Resume available in portfolio links above.\n' +
                'For detailed CV, please contact via email.',
                
      'nmap wendy.dev': 'Starting Nmap 7.94 scan on wendy.dev...\n' +
                        'Host is up (0.001s latency)\n' +
                        'PORT     STATE SERVICE    VERSION\n' +
                        '22/tcp   open  ssh        Secure Shell (skills: advanced)\n' +
                        '80/tcp   open  http       Portfolio Web Server\n' +
                        '443/tcp  open  https      Encrypted Portfolio (TLS 1.3)\n' +
                        '1337/tcp open  elite      Penetration Testing Skills\n' +
                        '3306/tcp open  mysql      Database Security Knowledge\n' +
                        '8080/tcp open  http-proxy Malware Analysis Lab\n\n' +
                        'Scan complete. Target shows strong security posture!',
                        
      'exploit --show-skills': 'Metasploit Framework v6.3.42\n' +
                               'Exploiting target: wendy_rosettini\n' +
                               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                               '[+] Vulnerability found: HIGHLY_SKILLED\n' +
                               '[+] Exploiting penetration_testing_module... SUCCESS\n' +
                               '[+] Exploiting malware_analysis_module... SUCCESS\n' +
                               '[+] Exploiting network_security_module... SUCCESS\n' +
                               '[+] Exploiting python_programming_module... SUCCESS\n' +
                               '[+] Session opened successfully!\n' +
                               '[+] Target compromised by expertise!',
                               
      'metasploit': 'msf6 > search wendy\n' +
                    'Matching Modules:\n' +
                    '━━━━━━━━━━━━━━━━━\n' +
                    'exploit/cybersec/wendy_automotive_hsm    Automotive Security Research\n' +
                    'exploit/pentest/wendy_custom_lab         Custom Penetration Lab\n' +
                    'exploit/network/wendy_defense_system     Network Defense Implementation\n' +
                    'auxiliary/analysis/wendy_malware_sandbox Malware Analysis Tools\n\n' +
                    'msf6 > use exploit/cybersec/wendy_automotive_hsm\n' +
                    'msf6 exploit(wendy_automotive_hsm) > show options\n' +
                    'Target configured for vehicle security research!',
                    
      'wireshark --analyze-wendy': 'Wireshark Network Analysis\n' +
                                   '━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                                   'Capturing packets from wendy.network...\n' +
                                   'Protocol distribution:\n' +
                                   '• HTTPS (Portfolio): 35%\n' +
                                   '• SSH (Secure Admin): 25%\n' +
                                   '• TCP (Pentest Tools): 20%\n' +
                                   '• ICMP (Network Recon): 15%\n' +
                                   '• Custom (Security Research): 5%\n\n' +
                                   'Analysis: High security posture detected!',
                                   
      'fortune': 'Fortune Cookie - Cybersecurity Edition:\n' +
                 '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                 '"The best defense is a good offense...and Wendy\'s got both!"\n\n' +
                 '"In cybersecurity, there are two types of companies:\n' +
                 ' those that have been hacked, and those that don\'t know it yet."\n\n' +
                 '"Trust, but verify. Then penetration test."',
                 
      'cowsay': ' _________________________________\n' +
                '< Wendy: Securing the digital world >\n' +
                ' ---------------------------------\n' +
                '        \\   ^__^\n' +
                '         \\  (oo)\\_______\n' +
                '            (__)\\       )\\/\\\n' +
                '                ||----w |\n' +
                '                ||     ||',
                
      'matrix': 'Wake up, Neo... The Matrix has you...\n' +
                '01001000 01100001 01100011 01101011\n' +
                '01110100 01101000 01100101 01110000\n' +
                '01101100 01100001 01101110 01100101\n' +
                '01110100 00100001 00100000 \n\n' +
                'Translation: "Hack the planet!" - Wendy\'s mission',
                
      'hack': 'Initiating ethical hacking sequence...\n' +
              '[████████████████████████████████████████] 100%\n' +
              'Target: Corporate Network\n' +
              'Status: Penetration test completed successfully!\n' +
              'Vulnerabilities found: 7 critical, 12 high, 23 medium\n' +
              'Report generated for client security improvement.\n' +
              'Remember: Always hack ethically! 🛡️',
              
      'coffee': 'Caffeine Level Monitor:\n' +
                '━━━━━━━━━━━━━━━━━━━━━\n' +
                'Current Level: ████████░░ 80%\n' +
                'Status: OPTIMAL for cybersecurity work\n' +
                'Next refill: In 2 hours\n' +
                'Recommended: Italian espresso for maximum hacking efficiency',
                
      'whoami': 'wendy\nCybersecurity Engineer & Penetration Tester',
      'ls -la': 'total 42\ndrwxr-xr-x  5 wendy wendy 4096 Dec 20 10:30 .\ndrwxr-xr-x  3 root  root  4096 Dec 19 15:22 ..\n-rw-r--r--  1 wendy wendy  220 Dec 19 15:22 .bash_logout\n-rw-r--r--  1 wendy wendy 3771 Dec 19 15:22 .bashrc\ndrwxr-xr-x  2 wendy wendy 4096 Dec 20 10:30 exploits/\ndrwxr-xr-x  2 wendy wendy 4096 Dec 20 09:15 malware_samples/\ndrwxr-xr-x  2 wendy wendy 4096 Dec 20 08:45 pentest_reports/\n-rwxr-xr-x  1 wendy wendy 1337 Dec 20 09:15 automotive_hsm.py\n-rwxr-xr-x  1 wendy wendy  666 Dec 20 10:00 network_scanner.sh',
      'ps aux': 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1  19696  2984 ?        Ss   09:15   0:01 /sbin/init\nroot       234  0.0  0.2  45320  4832 ?        S    09:15   0:00 /usr/sbin/sshd\nwendy      666  0.1  0.8  87432 16724 ?        S    09:30   0:02 metasploit\nwendy     1337  0.2  1.5 234567 31024 pts/0    S+   10:30   0:05 python3 exploit_dev.py\nwendy     1984  1.5  2.1 156789 42856 pts/1    S+   10:45   0:15 burpsuite\nwendy     2001  0.0  0.1  21532  3456 pts/2    R+   11:00   0:00 ps aux',
      'netstat': 'Active Internet connections:\nProto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN\ntcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN\ntcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN\ntcp        0      0 127.0.0.1:8080          0.0.0.0:*               LISTEN  # Burp Suite\ntcp        0      0 127.0.0.1:1337          0.0.0.0:*               LISTEN  # Metasploit'
    };
  }

  execute(cmd) {
    // Handle clear command
    if (cmd === 'clear') {
      return { type: 'clear' };
    }
    
    // Handle man command
    if (cmd.startsWith('man ')) {
      const manCmd = cmd.replace('man ', '');
      if (this.commands[manCmd]) {
        const manOutput = `MANUAL PAGE FOR ${manCmd.toUpperCase()}\n` +
                         `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                         `${this.commands[manCmd]}\n\n` +
                         `For more commands, type 'help'`;
        return { type: 'output', content: manOutput };
      } else {
        return { type: 'output', content: `No manual entry for ${manCmd}` };
      }
    }
    
    // Handle regular commands
    if (this.commands[cmd]) {
      return { type: 'output', content: this.commands[cmd] };
    } else {
      return { type: 'output', content: `bash: ${cmd}: command not found\nType 'help' for available commands` };
    }
  }
}

// Export for use in other modules
export default TerminalCommands;
