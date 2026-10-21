export const tipCategories = [
  'All',
  'Password Security',
  'Email Security',
  'Mobile Security',
  'Social Media',
  'Public Wi-Fi',
  'Online Shopping',
  'Browser Security',
  'Device Security',
  'Data Privacy'
];

export const tipsData = [
  {
    id: 1,
    title: 'Use Long Passphrases Instead of Short Complex Passwords',
    category: 'Password Security',
    summary: 'Length beats complexity when resisting brute-force and dictionary attacks.',
    explanation: 'A 16-character passphrase composed of random words (e.g., `purple-dragon-dancing-tacos`) is mathematically vastly harder to crack than an 8-character string like `P@ssw0rd!`, while being significantly easier for humans to remember.',
    whyItMatters: 'Brute force tools test combinations exponentially faster for short strings regardless of character types.',
    action: 'Combine 4 or 5 random dictionary words separated by hyphens or spaces to craft memorable master passphrases.'
  },
  {
    id: 2,
    title: 'Enable Multi-Factor Authentication (MFA) Everywhere',
    category: 'Password Security',
    summary: 'MFA blocks over 99% of automated account takeover attempts.',
    explanation: 'MFA enforces a secondary check beyond your password. Prefer time-based authenticator apps (TOTP) or FIDO2 hardware keys over SMS text codes, which can be vulnerable to SIM-swapping.',
    whyItMatters: 'Even if your password is leaked in a third-party breach, attackers cannot access your account without the second factor.',
    action: 'Turn on MFA in security settings for email, banking, social media, and cloud storage accounts.'
  },
  {
    id: 3,
    title: 'Inspect Email Sender Domains and Links Before Clicking',
    category: 'Email Security',
    summary: 'Hover over hyperlinks to verify the actual destination URL before opening.',
    explanation: 'Display names in emails can be set to anything (e.g. "PayPal Support"). Always inspect the actual email address after the `@` symbol and hover over links to read the true destination host.',
    whyItMatters: 'Phishers create visually deceptive display names and buttons that lead to lookalike malicious landing pages.',
    action: 'Never enter login credentials or personal details on websites reached directly via unsolicited email links.'
  },
  {
    id: 4,
    title: 'Never Connect to Open Wi-Fi Without an Encrypted VPN',
    category: 'Public Wi-Fi',
    summary: 'Unencrypted Wi-Fi allows network eavesdroppers to intercept sensitive data.',
    explanation: 'Public networks at coffee shops, airports, and hotels often lack network isolation. Attackers can run packet sniffers or host rogue "Evil Twin" access points.',
    whyItMatters: 'Interception can expose unencrypted session tokens, credentials, and browsing activity to unauthorized actors.',
    action: 'Use your phone mobile hotspot or connect through a trusted VPN whenever using public Wi-Fi.'
  },
  {
    id: 5,
    title: 'Audit App Permissions on Mobile Devices',
    category: 'Mobile Security',
    summary: 'Restrict mobile applications from accessing location, camera, and contacts unnecessarily.',
    explanation: 'Many mobile apps request broad permissions that exceed their functional scope (e.g., a flashlight app requesting access to your contact list and microphone).',
    whyItMatters: 'Excessive permissions compromise privacy and create data exfiltration vectors if the app vendor is compromised.',
    action: 'Review iOS / Android Privacy & Security permission settings quarterly and revoke unnecessary permissions.'
  },
  {
    id: 6,
    title: 'Beware of Social Engineering Quizzes on Social Media',
    category: 'Social Media',
    summary: 'Avoid answering viral questionnaires asking for personal history.',
    explanation: 'Quizzes asking for your pet name, mother maiden name, high school mascot, or birth city are designed to harvest answers to common password reset questions.',
    whyItMatters: 'Cybercriminals aggregate public social media posts to answer security questions and takeover victim accounts.',
    action: 'Keep social media profiles private and never post security question answers online.'
  },
  {
    id: 7,
    title: 'Verify Online Retailers & Payment Security',
    category: 'Online Shopping',
    summary: 'Use virtual credit cards or trusted third-party payment gateways for new online stores.',
    explanation: 'When purchasing from unfamiliar web stores, avoid typing primary debit or credit card details directly. Use digital wallets (Apple Pay, Google Pay, PayPal) or virtual card numbers.',
    whyItMatters: 'Single-use virtual card numbers shield your main bank account from card skimmers and store database breaches.',
    action: 'Check domain age, reviews, and payment gateway options before checking out on unknown shopping sites.'
  },
  {
    id: 8,
    title: 'Keep Browsers & Operating Systems Automatically Updated',
    category: 'Browser Security',
    summary: 'Patching software fixes zero-day vulnerabilities and memory safety flaws.',
    explanation: 'Software updates deliver security patches that close known remote code execution (RCE) and memory corruption bugs used by exploit kits.',
    whyItMatters: 'Outdated web browsers allow malicious websites to execute drive-by malware downloads without user interaction.',
    action: 'Enable automatic software updates for Windows/macOS, browsers, and mobile operating systems.'
  },
  {
    id: 9,
    title: 'Apply the 3-2-1 Backup Strategy for Critical Data',
    category: 'Device Security',
    summary: 'Protect your files against ransomware, disk failure, and hardware theft.',
    explanation: 'The 3-2-1 rule dictates maintaining 3 copies of your important data, across 2 different media types, with 1 copy stored securely offsite or offline.',
    whyItMatters: 'Ransomware encrypts connected drives; an isolated offline copy guarantees full recovery without paying ransoms.',
    action: 'Perform weekly backups to an encrypted external hard drive that is unplugged after backup completion.'
  },
  {
    id: 10,
    title: 'Enable Device Lock Screens & Biometric Protection',
    category: 'Data Privacy',
    summary: 'Physical security is the first line of defense for lost or stolen hardware.',
    explanation: 'Require a strong PIN, passcode, or biometric authentication (Face ID / Fingerprint) to unlock laptops, tablets, and smartphones. Enable full disk encryption (BitLocker / FileVault).',
    whyItMatters: 'Without disk encryption and strong lock screen PINs, an attacker with physical access to your device can read all stored data.',
    action: 'Set automatic lock screen timeout to 2 minutes or less on all mobile and laptop hardware.'
  }
];
