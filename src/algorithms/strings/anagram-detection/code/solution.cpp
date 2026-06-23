// Anagram Detection
// Route: /algorithms/strings/anagram-detection

#include <string>
#include <unordered_map>
using namespace std;

bool anagramDetection(const string& first, const string& second) {
    if (first.size() != second.size()) return false;
    unordered_map<char, int> counts;
    for (char ch : first) counts[ch] += 1;
    for (char ch : second) {
        if (counts[ch] == 0) return false;
        counts[ch] -= 1;
    }
    return true;
}
