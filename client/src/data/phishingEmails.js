export const simulatedPhishingData = [
  {
    id: 'phish-1',
    type: 'Email',
    senderName: 'Security Team Alert',
    senderEmail: 'security-update@account-verify-demo.com',
    subject: 'URGENT: Unauthorized Login Detected on Your Account',
    date: '10 mins ago',
    body: `Dear Valued User,\n\nWe detected a login attempt to your online banking account from an unrecognized IP address (185.220.101.5) in Moscow, Russia.\n\nIf this was not you, your access will be permanently suspended within 2 hours unless you immediately re-verify your security credentials and primary password.\n\nPlease click the button below to secure your portal:`,
    ctaText: 'Verify Account Credentials Now',
    simulatedLink: 'http://account-verify-demo.com/login?token=892314',
    isPhishing: true,
    indicators: [
      { tag: 'Suspicious Domain', detail: 'Sender domain "account-verify-demo.com" is not your official bank domain.' },
      { tag: 'Artificial Urgency', detail: 'Threatens permanent suspension within "2 hours" to trigger panic.' },
      { tag: 'HTTP Link', detail: 'Directs to an unencrypted HTTP link requesting credentials.' },
      { tag: 'Generic Greeting', detail: 'Uses "Dear Valued User" instead of your actual name.' }
    ],
    explanation: 'This is a classic Credential Harvesting Phishing Email. Criminals use fake IP alerts and strict deadlines to trick users into giving away logins.'
  },
  {
    id: 'phish-2',
    type: 'Email',
    senderName: 'HR Payroll Department',
    senderEmail: 'payroll-bonus@company-payroll-portal.net',
    subject: 'Annual Performance Bonus & Payroll Update',
    date: '1 hour ago',
    body: `Hello Team,\n\nExecutive management has approved an early annual bonus disbursement of $1,250 for eligible employees.\n\nTo ensure your direct deposit reaches your account by Friday, please review and confirm your bank routing number using the attached portal form link immediately.`,
    ctaText: 'Claim Your Bonus Payment',
    simulatedLink: 'http://company-payroll-portal.net/bonus-form',
    isPhishing: true,
    indicators: [
      { tag: 'Spoofed Domain', detail: 'Domain is "company-payroll-portal.net" instead of your internal company.com domain.' },
      { tag: 'Financial Bait', detail: 'Offers unexpected financial rewards ($1,250 bonus) to entice clicks.' },
      { tag: 'Credential Request', detail: 'Asks for sensitive direct deposit routing information.' }
    ],
    explanation: 'Financial baiting is a frequent spear-phishing tactic. Always verify payroll communications through your official internal HR software.'
  },
  {
    id: 'phish-3',
    type: 'Email',
    senderName: 'GitHub Security',
    senderEmail: 'noreply@github.com',
    subject: '[GitHub] Personal access token expiration notice',
    date: 'Yesterday',
    body: `Hi developer,\n\nYour personal access token (deploy-key-prod) will expire in 7 days.\n\nIf you wish to extend or revoke this token, please visit your account developer settings in GitHub settings.\n\nThank you,\nThe GitHub Team`,
    ctaText: 'View Developer Settings',
    simulatedLink: 'https://github.com/settings/tokens',
    isPhishing: false,
    indicators: [
      { tag: 'Official Sender Domain', detail: 'Sender domain `@github.com` matches official entity.' },
      { tag: 'Valid HTTPS Link', detail: 'Link points directly to legitimate `github.com` settings.' },
      { tag: 'No Threatening Language', detail: 'Informs about normal 7-day token expiration without aggressive demands.' }
    ],
    explanation: 'This is a legitimate notification email. It does not ask for sensitive credentials on external sites or create fake panic.'
  },
  {
    id: 'phish-4',
    type: 'SMS',
    senderName: '+1 (800) 555-0199',
    senderEmail: 'SMS Text Message',
    subject: 'Delivery Exception Notice',
    date: '2 hours ago',
    body: `[ALERT] Express Courier: Your package #US-98214 could not be delivered due to an invalid street address. Update your address and pay $0.99 redelivery fee here: http://track-express-pkg.info/address`,
    ctaText: 'Update Delivery Info',
    simulatedLink: 'http://track-express-pkg.info/address',
    isPhishing: true,
    indicators: [
      { tag: 'Smishing Attack', detail: 'SMS text message containing suspicious external link.' },
      { tag: 'Unrecognized Domain', detail: 'Domain `track-express-pkg.info` is not a legitimate postal service.' },
      { tag: 'Micro-Fee Trick', detail: 'Asking for small $0.99 fee to harvest credit card numbers.' }
    ],
    explanation: 'Smishing scams ask for tiny fees to steal full credit card details and personal identity information.'
  },
  {
    id: 'phish-5',
    type: 'QR Code',
    senderName: 'Coffee Shop Table Promo',
    senderEmail: 'Public QR Code Sticker',
    subject: 'Free Coffee & Wi-Fi Access',
    date: 'Today',
    body: `Scan QR Code for 1 Free Latte & High-Speed Customer Wi-Fi!\n\nDirects to: http://free-latte-wifi-login.site/claim`,
    ctaText: 'Scan QR Code',
    simulatedLink: 'http://free-latte-wifi-login.site/claim',
    isPhishing: true,
    indicators: [
      { tag: 'Quishing Threat', detail: 'Public physical QR sticker pasted over table.' },
      { tag: 'Suspicious TLD', detail: 'Uses `.site` top-level domain requesting phone & payment details.' }
    ],
    explanation: 'Quishing uses QR codes to hide malicious destination URLs from casual inspection.'
  }
];
