/**
 * Educational Heuristic URL Safety Analyzer
 * Analyzes structure, protocol, TLD, IP format, punycode, keyword density, and length.
 * DISCLAIMER: This tool uses educational heuristics only and does not guarantee URL safety.
 */

const SUSPICIOUS_TLDS = ['.xyz', '.top', '.site', '.info', '.biz', '.club', '.work', '.click', '.online', '.account', '.live'];
const SENSITIVE_KEYWORDS = ['login', 'signin', 'verify', 'account', 'banking', 'secure', 'update', 'pay', 'bonus', 'wallet', 'confirm', 'password'];

export function analyzeUrl(inputUrl) {
  if (!inputUrl || inputUrl.trim() === '') {
    return {
      riskLevel: 'Unknown',
      riskScore: 0,
      color: 'gray',
      indicators: [],
      disclaimer: 'Enter a valid URL to analyze educational security indicators.'
    };
  }

  let formattedUrl = inputUrl.trim();
  if (!/^https?:\/\//i.test(formattedUrl)) {
    formattedUrl = 'http://' + formattedUrl; // default protocol for parsing test
  }

  let parsed;
  try {
    parsed = new URL(formattedUrl);
  } catch (e) {
    return {
      riskLevel: 'Invalid URL',
      riskScore: 100,
      color: 'rose',
      indicators: [{ title: 'Malformed Format', detail: 'The entered text is not a valid URL structure.', risk: 'High' }],
      disclaimer: 'Educational heuristic estimate only. Not a safety guarantee.'
    };
  }

  const hostname = parsed.hostname.toLowerCase();
  const protocol = parsed.protocol.toLowerCase();
  const pathAndQuery = (parsed.pathname + parsed.search).toLowerCase();

  const indicators = [];
  let riskPoints = 0;

  // 1. Protocol check
  if (protocol !== 'https:') {
    riskPoints += 25;
    indicators.push({
      title: 'Unencrypted Protocol (HTTP)',
      detail: 'The URL uses unencrypted HTTP instead of HTTPS. Traffic can be eavesdropped on public networks.',
      risk: 'Medium'
    });
  } else {
    indicators.push({
      title: 'HTTPS Encrypted Protocol',
      detail: 'The connection uses TLS/HTTPS encryption, protecting transit data (Note: Phishers can also obtain HTTPS certificates).',
      risk: 'Low'
    });
  }

  // 2. IP address check
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (ipRegex.test(hostname)) {
    riskPoints += 35;
    indicators.push({
      title: 'Raw IP Address Hostname',
      detail: 'The URL uses a raw IP address (e.g. 192.168.1.1) rather than a registered domain name. Legitimate corporate portals rarely use bare IP links.',
      risk: 'High'
    });
  }

  // 3. Suspicious TLD check
  const matchesSuspiciousTld = SUSPICIOUS_TLDS.some(tld => hostname.endsWith(tld));
  if (matchesSuspiciousTld) {
    riskPoints += 20;
    indicators.push({
      title: 'High-Risk Top-Level Domain (TLD)',
      detail: `The TLD used in "${hostname}" belongs to a high-volume low-cost registration TLD frequently associated with disposable phishing campaigns.`,
      risk: 'Medium'
    });
  }

  // 4. Subdomain count check
  const hostParts = hostname.split('.');
  if (hostParts.length > 3) {
    riskPoints += 15;
    indicators.push({
      title: 'Excessive Subdomains',
      detail: `The domain contains ${hostParts.length - 2} subdomains. Attackers often prefix target domain names as subdomains (e.g., paypal.com.fake-login.biz).`,
      risk: 'Medium'
    });
  }

  // 5. Punycode check
  if (hostname.includes('xn--')) {
    riskPoints += 30;
    indicators.push({
      title: 'Punycode / Homograph Character Encoding',
      detail: 'The domain uses Punycode ("xn--"), which can mimic legitimate characters using lookalike Cyrillic or Greek symbols (Homograph Attack).',
      risk: 'High'
    });
  }

  // 6. Sensitive keyword density check
  const foundKeywords = SENSITIVE_KEYWORDS.filter(kw => hostname.includes(kw) || pathAndQuery.includes(kw));
  if (foundKeywords.length > 0) {
    if (!hostname.endsWith('paypal.com') && !hostname.endsWith('google.com') && !hostname.endsWith('microsoft.com') && !hostname.endsWith('github.com')) {
      riskPoints += 15;
      indicators.push({
        title: 'Sensitive Credential Keyword Presence',
        detail: `Contains sensitive keywords (${foundKeywords.join(', ')}) on an unverified domain host.`,
        risk: 'Medium'
      });
    }
  }

  // 7. Non-standard port check
  if (parsed.port && parsed.port !== '80' && parsed.port !== '443') {
    riskPoints += 15;
    indicators.push({
      title: 'Non-Standard Web Port',
      detail: `The URL specifies custom port ${parsed.port} rather than standard web ports (80 / 443).`,
      risk: 'Low'
    });
  }

  // Determine overall risk classification
  let riskLevel = 'Low Risk Indicators';
  let color = 'emerald';

  if (riskPoints >= 50) {
    riskLevel = 'High Risk Indicators Detected';
    color = 'rose';
  } else if (riskPoints >= 20) {
    riskLevel = 'Needs Educational Review';
    color = 'amber';
  }

  return {
    url: formattedUrl,
    hostname,
    riskLevel,
    riskScore: Math.min(100, riskPoints),
    color,
    indicators,
    disclaimer: 'THIS TOOL USES EDUCATIONAL HEURISTICS ONLY AND DOES NOT GUARANTEE THAT A WEBSITE IS SAFE OR MALICIOUS.'
  };
}
