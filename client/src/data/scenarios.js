export const scenariosData = [
  {
    id: 'scenario-1',
    title: 'The Impersonating IT Helpdesk Call',
    category: 'Social Engineering',
    difficulty: 'Beginner',
    context: 'You receive an urgent phone call at 4:45 PM on a Friday. The caller identifies themselves as "Alex from Corporate IT Support". They tell you there is an active cyber attack targeting company accounts and they urgently need your Multi-Factor Authentication (MFA) push code or OTP to apply a security patch to your workstation.',
    options: [
      {
        id: 'a',
        text: 'Approve the MFA prompt on your phone so IT can quickly fix the vulnerability before the weekend.',
        isCorrect: false,
        feedback: 'Dangerous! Approval grants the attacker immediate access to your account. Legitimate IT departments never request MFA push approvals or OTPs over the phone.'
      },
      {
        id: 'b',
        text: 'Ask the caller for their full name, end the call, and independently call your company official IT Helpdesk hotline to verify the request.',
        isCorrect: true,
        feedback: 'Correct! Out-of-band verification via official channels neutralizes phone social engineering (vishing) attempts.'
      },
      {
        id: 'c',
        text: 'Offer to dictate your primary domain password instead so they do not need the temporary MFA code.',
        isCorrect: false,
        feedback: 'Catastrophic risk! Never share passwords under any circumstances.'
      }
    ],
    takeaway: 'MFA codes and passwords are strictly private tokens. Always verify unexpected incoming phone requests through established official directory numbers.'
  },
  {
    id: 'scenario-2',
    title: 'The Found USB Flash Drive',
    category: 'Device Security',
    difficulty: 'Beginner',
    context: 'While walking across the company parking lot, you find a slick USB flash drive labeled "Executive Salary Review Q4 - CONFIDENTIAL". You are curious to see if it belongs to someone in HR or Management.',
    options: [
      {
        id: 'a',
        text: 'Plug the drive into your office laptop to open the files and identify the owner.',
        isCorrect: false,
        feedback: 'High Risk! USB baiting is a common tactic. Unrecognized flash drives can execute autorun malware or hardware keystroke injection payloads (Rubber Ducky).'
      },
      {
        id: 'b',
        text: 'Plug it into a personal home computer instead so corporate network scanners do not alert.',
        isCorrect: false,
        feedback: 'Unsafe! This puts your personal devices and data at risk.'
      },
      {
        id: 'c',
        text: 'Do not plug it in. Hand the flash drive directly to your IT Security / Facilities team for safe isolated inspection.',
        isCorrect: true,
        feedback: 'Spot on! Physical media dropped in parking lots or lobbies should be treated as untrusted hardware.'
      }
    ],
    takeaway: 'Never insert untrusted USB drives or accessories into any computer. Report found hardware to IT Security.'
  },
  {
    id: 'scenario-3',
    title: 'Executive Wire Transfer Request (CEO Fraud)',
    category: 'Phishing',
    difficulty: 'Intermediate',
    context: 'You work in accounting. You receive an email appearing to come from the CEO: "I am in an urgent confidential meeting with auditors. We must execute a wire transfer of $45,000 to vendor account #88921 immediately. Do not call my mobile as I am presenting." The email sender address is ceo-office@company-corp-group.com.',
    options: [
      {
        id: 'a',
        text: 'Execute the wire transfer immediately because the CEO specified it is urgent and confidential.',
        isCorrect: false,
        feedback: 'Critical error! Business Email Compromise (BEC) costs organizations billions annually through fake executive requests.'
      },
      {
        id: 'b',
        text: 'Inspect the domain closely ("company-corp-group.com" vs legitimate "company.com"), halt the transaction, and call the CEO or CFO using pre-established internal numbers.',
        isCorrect: true,
        feedback: 'Excellent detection! Notice the lookalike domain spoofing and the attempt to block telephone verification.'
      },
      {
        id: 'c',
        text: 'Reply to the email asking for a secondary signature invoice copy before wiring.',
        isCorrect: false,
        feedback: 'Risky! Replying to a spoofed email communicates directly with the scammer, who will happily send a fake invoice.'
      }
    ],
    takeaway: 'Always perform dual-authorization verification for financial transactions outside of email, especially when email domain lookalikes or artificial urgency are detected.'
  },
  {
    id: 'scenario-4',
    title: 'Public Airport Wi-Fi Warning',
    category: 'Network Security',
    difficulty: 'Intermediate',
    context: 'You are waiting at the airport gate and need to access your online banking and corporate email. You see two Wi-Fi networks: "Airport_Guest_Free" (Open) and "Airport_Premium_WiFi" (Open).',
    options: [
      {
        id: 'a',
        text: 'Connect to "Airport_Guest_Free", open your browser, and conduct banking transactions directly.',
        isCorrect: false,
        feedback: 'Unsafe! Open networks permit packet sniffing and Evil Twin access points.'
      },
      {
        id: 'b',
        text: 'Enable your smartphone cellular hotspot or activate your enterprise VPN before logging into sensitive accounts.',
        isCorrect: true,
        feedback: 'Correct! Mobile hotspots or VPN tunnels protect your payload from local network interception.'
      },
      {
        id: 'c',
        text: 'Connect to Wi-Fi using Private Browsing Mode thinking it encrypts network traffic.',
        isCorrect: false,
        feedback: 'Misconception! Private/Incognito mode only prevents local history logging; it does NOT encrypt Wi-Fi traffic.'
      }
    ],
    takeaway: 'Public Wi-Fi is inherently untrusted. Use cellular tethering or an encrypted VPN for sensitive internet traffic.'
  },
  {
    id: 5,
    id: 'scenario-5',
    title: 'The Too-Good-To-Be-True Remote Job Offer',
    category: 'Social Engineering',
    difficulty: 'Beginner',
    context: 'You receive a message on Telegram from a "Senior Talent Recruiter at TechGlobal". They offer a remote job paying $85/hour for 10 hours of work a week. No interview is required, but they ask you to deposit a $500 check they email you to purchase workspace equipment from their supplier.',
    options: [
      {
        id: 'a',
        text: 'Deposit the check, buy the equipment, and start working.',
        isCorrect: false,
        feedback: 'Classic Fake Check Scam! The check will bounce after a few days, leaving you liable for the spent funds.'
      },
      {
        id: 'b',
        text: 'Recognize the red flags (overpayment scam, no real interview, communications on Telegram) and block/report the recruiter.',
        isCorrect: true,
        feedback: 'Great eye! Legitimate corporate job offers require real interviews, secure official communication, and never send upfront fake checks for equipment.'
      },
      {
        id: 'c',
        text: 'Send your passport scan and SSN/Tax ID right away so they can draft your offer letter.',
        isCorrect: false,
        feedback: 'Dangerous! Sharing identity credentials with unverified online recruiters leads to identity theft.'
      }
    ],
    takeaway: 'Be suspicious of job offers without formal interviews, communications on informal messenger apps, or requests involving upfront check deposits.'
  },
  {
    id: 'scenario-6',
    title: 'Dine-In Restaurant QR Code Table Sticker',
    category: 'Mobile Security',
    difficulty: 'Intermediate',
    context: 'At a busy downtown restaurant, you notice a QR code sticker placed over the table corner with text: "Scan for Menu & 25% Off Bill". Upon scanning, your phone browser opens `http://pay-table-discount-deal.site/menu` asking for your phone number and credit card details.',
    options: [
      {
        id: 'a',
        text: 'Enter your credit card details immediately to claim the 25% discount.',
        isCorrect: false,
        feedback: 'Quishing attack! Malicious stickers are often pasted over real QR codes in public places to direct victims to phishing pages.'
      },
      {
        id: 'b',
        text: 'Check if the physical sticker is overlaid over another, inspect the destination domain, and ask restaurant staff to confirm the official web address.',
        isCorrect: true,
        feedback: 'Excellent defense! Always verify physical QR stickers in public spaces before submitting payment or personal info.'
      },
      {
        id: 'c',
        text: 'Scan it using a secondary scanner app that promises automatic auto-fill.',
        isCorrect: false,
        feedback: 'Unsafe practice. Auto-filling credit card credentials into unverified domains exposes your bank account.'
      }
    ],
    takeaway: 'Inspect physical QR codes for tamper overlays ("Quishing") and verify destination domains prior to entering payment details.'
  },
  {
    id: 'scenario-7',
    title: 'The Critical Software Update Popup on Web Page',
    category: 'Safe Browsing',
    difficulty: 'Beginner',
    context: 'While reading an news article online, a flashy modal popup appears blocking the screen: "CRITICAL ALERT: Your Chrome Browser is outdated and infected with 3 viruses! Click UPDATE NOW to install Security Patch v12.4.exe".',
    options: [
      {
        id: 'a',
        text: 'Click "UPDATE NOW" to install the executable patch and remove viruses.',
        isCorrect: false,
        feedback: 'Fake Update Malware! Browsers do not issue executable downloads via third-party website popups.'
      },
      {
        id: 'b',
        text: 'Close the browser tab/window immediately. Check update status directly inside official browser settings (`chrome://settings/help`).',
        isCorrect: true,
        feedback: 'Spot on! Never trust browser update popups on random web pages.'
      },
      {
        id: 'c',
        text: 'Click "Cancel" inside the popup window.',
        isCorrect: false,
        feedback: 'Caution! Clicking "Cancel" or "X" buttons inside malicious popups can sometimes trigger malware downloads. Close the entire tab or browser window.'
      }
    ],
    takeaway: 'Only update web browsers and OS software through official built-in system update dialogs.'
  },
  {
    id: 'scenario-8',
    title: 'Social Media Quiz: "Your Star Sign & First Pet\'s Name"',
    category: 'Privacy',
    difficulty: 'Beginner',
    context: 'A viral social media post asks: "Find out your Secret Superhero Name! Take the first pet you ever had + your mother\'s maiden name + the street you grew up on! Share yours in the comments below!"',
    options: [
      {
        id: 'a',
        text: 'Post your answer in the comments because it looks like fun engagement with friends.',
        isCorrect: false,
        feedback: 'Privacy vulnerability! These viral games harvest common security verification questions used for account recovery.'
      },
      {
        id: 'b',
        text: 'Ignore the post and do not share security question answers publicly on social media.',
        isCorrect: true,
        feedback: 'Smart privacy protection! Cybercriminals harvest OSINT from social media quizzes to reset victim account passwords.'
      },
      {
        id: 'c',
        text: 'Direct message the page host your details instead of posting in public comments.',
        isCorrect: false,
        feedback: 'Still insecure! You are still giving personal data to unknown entities.'
      }
    ],
    takeaway: 'Social media "fun quizzes" are frequently designed for Open Source Intelligence (OSINT) gathering of security answers.'
  },
  {
    id: 'scenario-9',
    title: 'Password Reuse Alert Notification',
    category: 'Password Security',
    difficulty: 'Intermediate',
    context: 'You read news that a niche online gaming forum you registered for 3 years ago suffered a data breach exposing user passwords. You used the exact same master password for that forum as your primary email account and online banking.',
    options: [
      {
        id: 'a',
        text: 'Do nothing unless the gaming forum explicitly emails you to change your password.',
        isCorrect: false,
        feedback: 'Dangerous procrastination! Attackers automate credential stuffing across major platforms within hours of data leaks.'
      },
      {
        id: 'b',
        text: 'Immediately update your primary email and banking passwords to unique, strong passphrases and enable MFA.',
        isCorrect: true,
        feedback: 'Proactive defense! Remediating credential reuse immediately prevents chain-reaction compromises.'
      },
      {
        id: 'c',
        text: 'Change only the gaming forum password.',
        isCorrect: false,
        feedback: 'Incomplete protection! Your email and banking accounts remain exposed to credential stuffing attacks.'
      }
    ],
    takeaway: 'Never reuse passwords across services. If one service breaches, all accounts sharing that password are at risk.'
  },
  {
    id: 'scenario-10',
    title: 'Suspicious Microsoft 365 Password Expiration Email',
    category: 'Phishing',
    difficulty: 'Advanced',
    context: 'You receive an email from `notifications@microsoft-auth-portal-sec.online` with logo: "Your Office 365 Password expires in 4 hours. Keep Same Password". Clicking the button takes you to a page looking identical to Microsoft login, but the address bar shows `https://login.microsoft.com.auth-verify-session.biz/signin`.',
    options: [
      {
        id: 'a',
        text: 'Type your current password into the page so it does not expire.',
        isCorrect: false,
        feedback: 'Credential Harvesting! Notice the subdomain trick: `auth-verify-session.biz` is the real root domain, not `microsoft.com`.'
      },
      {
        id: 'b',
        text: 'Recognize the domain spoofing, do not enter credentials, and report the email via your email client\'s Phishing Report button.',
        isCorrect: true,
        feedback: 'Master level spot! Subdomain manipulation (e.g. `microsoft.com.fake domain.com`) is a classic phishing technique.'
      },
      {
        id: 'c',
        text: 'Enter a fake password first to test if the website validates it.',
        isCorrect: false,
        feedback: 'Risky practice! Phishing sites record all submissions regardless of validity, and testing live phishing links exposes your device to scripts.'
      }
    ],
    takeaway: 'Always read domain names from right to left starting from the top-level domain (TLD) to identify real site ownership.'
  }
];
