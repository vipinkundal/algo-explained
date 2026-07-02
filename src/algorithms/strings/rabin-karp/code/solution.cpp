// Rabin-Karp Algorithm
// Route: /algorithms/strings/rabin-karp

#include <string>
#include <vector>
using namespace std;

vector<int> rabinKarp(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    if (pattern.size() > text.size()) return {};
    const long long base = 256;
    const long long mod = 1000000007;
    long long highestPower = 1;
    for (int i = 1; i < static_cast<int>(pattern.size()); i += 1) highestPower = (highestPower * base) % mod;
    long long patternHash = 0;
    long long windowHash = 0;
    for (int i = 0; i < static_cast<int>(pattern.size()); i += 1) {
        patternHash = (patternHash * base + pattern[i]) % mod;
        windowHash = (windowHash * base + text[i]) % mod;
    }
    vector<int> matches;
    for (int index = 0; index <= static_cast<int>(text.size() - pattern.size()); index += 1) {
        if (patternHash == windowHash && text.substr(index, pattern.size()) == pattern) matches.push_back(index);
        if (index < static_cast<int>(text.size() - pattern.size())) {
            windowHash = (windowHash - text[index] * highestPower) % mod;
            if (windowHash < 0) windowHash += mod;
            windowHash = (windowHash * base + text[index + pattern.size()]) % mod;
        }
    }
    return matches;
}
