/**
 * Local Client-Side Password Strength & Entropy Evaluator
 * 100% Zero-Trust: Never sends passwords over network.
 */

const COMMON_PATTERNS = [
  '123456', 'password', '12345678', 'qwerty', '123456789', '12345', '1234',
  '111111', '1234567', 'dragon', 'welcome', 'admin', 'iloveyou', 'sunshine',
  'monkey', 'password123', 'admin123', 'letmein', 'master', 'cyber'
];

export function evaluatePassword(pwd) {
  if (!pwd) {
    return {
      score: 0,
      label: 'Enter a Password',
      color: 'gray',
      entropy: 0,
      crackTime: 'Instant',
      metrics: { length: 0, hasLower: false, hasUpper: false, hasNumber: false, hasSymbol: false },
      suggestions: ['Enter a password to begin local analysis.'],
      warnings: []
    };
  }

  const length = pwd.length;
  const hasLower = /[a-z]/.test(pwd);
  const hasUpper = /[A-Z]/.test(pwd);
  const hasNumber = /[0-9]/.test(pwd);
  const hasSymbol = /[^a-zA-Z0-9]/.test(pwd);

  // Calculate pool size
  let poolSize = 0;
  if (hasLower) poolSize += 26;
  if (hasUpper) poolSize += 26;
  if (hasNumber) poolSize += 10;
  if (hasSymbol) poolSize += 32;
  if (poolSize === 0) poolSize = 1;

  // Calculate Shannon entropy (E = L * log2(R))
  let entropy = Math.floor(length * (Math.log2(poolSize)));

  // Deduct entropy for common sequential or repeated characters
  const lowerPwd = pwd.toLowerCase();
  const warnings = [];
  const suggestions = [];

  COMMON_PATTERNS.forEach(pat => {
    if (lowerPwd.includes(pat)) {
      entropy = Math.max(0, entropy - 25);
      warnings.push(`Contains a common dictionary pattern: "${pat}"`);
    }
  });

  if (/^(.)\1+$/.test(pwd)) {
    entropy = Math.max(0, entropy - 30);
    warnings.push('Contains repetitive single characters.');
  }

  // Determine score & label
  let score = 0; // 0 to 4
  let label = 'Very Weak';
  let color = 'rose';

  if (entropy < 28) {
    score = 0;
    label = 'Very Weak';
    color = 'rose';
  } else if (entropy < 45) {
    score = 1;
    label = 'Weak';
    color = 'amber';
  } else if (entropy < 65) {
    score = 2;
    label = 'Moderate';
    color = 'yellow';
  } else if (entropy < 85) {
    score = 3;
    label = 'Strong';
    color = 'teal';
  } else {
    score = 4;
    label = 'Very Strong';
    color = 'emerald';
  }

  // Crack time estimations (based on 10 billion guesses/sec)
  const combinations = Math.pow(poolSize, length);
  const seconds = combinations / 10000000000;
  let crackTime = 'Instant';

  if (seconds < 1) crackTime = 'Instant (< 1 sec)';
  else if (seconds < 60) crackTime = `${Math.round(seconds)} seconds`;
  else if (seconds < 3600) crackTime = `${Math.round(seconds / 60)} minutes`;
  else if (seconds < 86400) crackTime = `${Math.round(seconds / 3600)} hours`;
  else if (seconds < 31536000) crackTime = `${Math.round(seconds / 86400)} days`;
  else if (seconds < 3153600000) crackTime = `${Math.round(seconds / 31536000)} years`;
  else crackTime = 'Centuries (Essentially Uncrackable)';

  // Suggestions
  if (length < 12) suggestions.push('Increase length to at least 12–16 characters.');
  if (!hasUpper) suggestions.push('Add uppercase letters (A–Z).');
  if (!hasLower) suggestions.push('Add lowercase letters (a–z).');
  if (!hasNumber) suggestions.push('Include digits (0–9).');
  if (!hasSymbol) suggestions.push('Include special symbols (!@#$%^&*).');
  if (entropy >= 65 && suggestions.length === 0) {
    suggestions.push('Great job! This password has solid local entropy.');
  }

  return {
    score,
    label,
    color,
    entropy,
    crackTime,
    metrics: { length, hasLower, hasUpper, hasNumber, hasSymbol },
    suggestions,
    warnings
  };
}

export function generatePassphrase(wordCount = 4) {
  const wordList = [
    'cyber', 'shield', 'falcon', 'matrix', 'rocket', 'quantum', 'beacon', 'breeze',
    'mountain', 'harbor', 'shadow', 'nebula', 'glacier', 'thunder', 'vortex', 'orbit',
    'sentinel', 'prism', 'horizon', 'granite', 'titan', 'summit', 'atlas', 'phoenix'
  ];
  const chosen = [];
  for (let i = 0; i < wordCount; i++) {
    const idx = Math.floor(Math.random() * wordList.length);
    chosen.push(wordList[idx]);
  }
  const number = Math.floor(Math.random() * 90 + 10);
  const symbolList = ['!', '@', '#', '$', '%', '&', '*'];
  const symbol = symbolList[Math.floor(Math.random() * symbolList.length)];
  return `${chosen.join('-')}-${number}${symbol}`;
}
