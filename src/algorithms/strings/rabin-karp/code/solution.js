// Rabin-Karp Algorithm
// Route: /algorithms/strings/rabin-karp

export function rabinKarp(text, pattern) {
  if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);
  if (pattern.length > text.length) return [];

  const base = 256;
  const mod = 1_000_000_007;
  let highestPower = 1;
  for (let i = 1; i < pattern.length; i += 1) highestPower = (highestPower * base) % mod;

  let patternHash = 0;
  let windowHash = 0;
  for (let i = 0; i < pattern.length; i += 1) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    windowHash = (windowHash * base + text.charCodeAt(i)) % mod;
  }

  const matches = [];
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (patternHash === windowHash && text.slice(index, index + pattern.length) === pattern) matches.push(index);
    if (index < text.length - pattern.length) {
      windowHash = (windowHash - text.charCodeAt(index) * highestPower) % mod;
      if (windowHash < 0) windowHash += mod;
      windowHash = (windowHash * base + text.charCodeAt(index + pattern.length)) % mod;
    }
  }
  return matches;
}
