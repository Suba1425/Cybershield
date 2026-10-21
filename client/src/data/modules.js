export const learningPaths = [
  {
    id: 'path-beginner',
    title: 'Beginner Cybersecurity Track',
    level: 'Beginner',
    description: 'Master essential cyber hygiene: password safety, basic phishing recognition, and safe web browsing habits.',
    estimatedHours: '1.5 hrs',
    modulesCount: 4,
    color: 'emerald',
    modules: ['mod-1', 'mod-2', 'mod-3', 'mod-4']
  },
  {
    id: 'path-intermediate',
    title: 'Intermediate Threat Defender',
    level: 'Intermediate',
    description: 'Understand social engineering tactics, multi-factor authentication, mobile security, and public Wi-Fi risks.',
    estimatedHours: '2.5 hrs',
    modulesCount: 4,
    color: 'amber',
    modules: ['mod-5', 'mod-6', 'mod-7', 'mod-8']
  },
  {
    id: 'path-advanced',
    title: 'Advanced Awareness & Incident Basics',
    level: 'Advanced',
    description: 'Learn spear phishing analysis, ransomware defense strategies, incident response containment, and data privacy rights.',
    estimatedHours: '3.0 hrs',
    modulesCount: 3,
    color: 'rose',
    modules: ['mod-9', 'mod-10', 'mod-11']
  }
];

export const modulesData = [
  {
    id: 'mod-1',
    title: 'Cybersecurity Basics & Threat Landscape',
    category: 'Fundamentals',
    level: 'Beginner',
    duration: '15 mins',
    summary: 'An introductory overview of the modern cyber threat ecosystem, attacker motives, and defensive posture.',
    content: `### Understanding Modern Cyber Threats\n\nCybersecurity is no longer just an IT concern—it is a critical life skill. Every day, individuals and organizations face millions of automated attack probes, malicious emails, and scam attempts.\n\n#### Key Threat Vectors\n1. **Phishing & Fraud**: Social engineering designed to steal logins or funds.\n2. **Malware & Ransomware**: Malicious code that infects devices to exfiltrate data or demand extortion money.\n3. **Credential Exploitation**: Reusing compromised passwords across multiple platforms.\n\n#### The Defense-in-Depth Principle\nEffective security relies on multiple overlapping layers of defense: strong authentication, software updates, data encryption, and active security awareness. You are the final and most crucial defense boundary!`
  },
  {
    id: 'mod-2',
    title: 'Password Security & Credential Hygiene',
    category: 'Password Security',
    level: 'Beginner',
    duration: '20 mins',
    summary: 'Learn why password length matters, how password managers work, and the dangers of password reuse.',
    content: `### Crafting Unhackable Passphrases\n\nTraditional advice forced users to create short, complex passwords like \`P@ssw0rd1!\`. However, modern automated cracking tools easily test billions of short combinations per second.\n\n#### The Power of Length\n- **8 characters**: Cracked in minutes.\n- **12 characters**: Cracked in days.\n- **16+ characters**: Requires centuries of supercomputer time!\n\n#### Best Practices\n- **Use a Password Manager**: Generate and store unique random 20-character passwords for every account.\n- **Adopt Passphrases**: Combine 4+ random words for master passwords.\n- **Never Reuse Passwords**: A single leak on a small forum shouldn't compromise your primary email or bank!`
  },
  {
    id: 'mod-3',
    title: 'Phishing & Smishing Detection',
    category: 'Phishing',
    level: 'Beginner',
    duration: '25 mins',
    summary: 'Identify the common red flags of malicious emails, fake login portals, and SMS smishing messages.',
    content: `### Spotting Social Engineering Red Flags\n\nPhishing attacks exploit human emotions—fear, curiosity, greed, or artificial urgency—to bypass technical filters.\n\n#### The Anatomy of a Phish\n1. **Deceptive Senders**: Look closely at the email domain after the \`@\` symbol (\`support@paypal-verify-alert.com\` vs \`paypal.com\`).\n2. **Urgent / Threatening Tone**: "Account suspended in 2 hours!"\n3. **Suspicious Hyperlinks**: Hovering over the button reveals a completely different destination address.\n4. **Requests for Sensitive Information**: Banks and legitimate platforms never ask for your password or PIN via email.`
  },
  {
    id: 'mod-4',
    title: 'Safe Web Browsing & HTTPS Security',
    category: 'Safe Browsing',
    level: 'Beginner',
    duration: '15 mins',
    summary: 'Master safe browsing habits, understand browser indicators, and avoid drive-by downloads.',
    content: `### Navigating the Web Securely\n\n#### What HTTPS Really Means\nHTTP encrypted via TLS (HTTPS) protects your data from being eavesdropped or modified while in transit between your browser and the website server.\n\n#### Common Misconceptions\n- **Myth**: A HTTPS padlock icon means the site is 100% trustworthy.\n- **Fact**: Phishers can easily obtain valid HTTPS certificates for malicious lookalike domains!\n\n#### Safe Browsing Rules\n- Type domain names directly instead of clicking search result ads for banking portals.\n- Keep browser extensions minimal and audited.\n- Block intrusive ads and popups using reputably maintained browser shields.`
  },
  {
    id: 'mod-5',
    title: 'Multi-Factor Authentication (MFA) In-Depth',
    category: 'Password Security',
    level: 'Intermediate',
    duration: '20 mins',
    summary: 'Explore MFA factors (Authenticator Apps, Security Keys) and guard against MFA fatigue attacks.',
    content: `### Upgrading Your Account Protection\n\nMulti-Factor Authentication adds vital security layers beyond passwords.\n\n#### Authentication Factors\n1. **Something You Know**: Password / PIN\n2. **Something You Have**: Authenticator App (TOTP), Hardware Key (YubiKey), SMS code\n3. **Something You Are**: Fingerprint / Face ID\n\n#### MFA Fatigue & Prompt Bombarding\nAttackers who possess your password may trigger dozens of MFA push notifications to your phone late at night hoping you accidentally click "Approve". **Never approve unexpected MFA prompts!**`
  },
  {
    id: 'mod-6',
    title: 'Social Engineering & Phone Vishing',
    category: 'Social Engineering',
    level: 'Intermediate',
    duration: '25 mins',
    summary: 'Deconstruct voice phishing (vishing), pretexting, tailgating, and authority impersonation.',
    content: `### Defending Against Human Hacking\n\nSocial engineering targets human psychology rather than software vulnerabilities.\n\n#### Common Social Engineering Pretexts\n- **The Helpful IT Specialist**: Calls asking for your password/OTP to complete an urgent patch.\n- **The Distressed Executive**: Emails asking for confidential wire transfers or gift cards.\n- **The Authority Figure**: Pretends to be from tax authorities or law enforcement.\n\n#### The Rule of Out-of-Band Verification\nWhen someone requests sensitive actions over phone or email, pause and verify their identity via a separate official communication channel!`
  }
];
