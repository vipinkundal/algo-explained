// KMP Algorithm
// Route: /algorithms/strings/kmp

#include <string>
#include <vector>
using namespace std;

vector<int> kmp(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    vector<int> lps(pattern.size(), 0);
    for (int index = 1, length = 0; index < static_cast<int>(pattern.size());) {
        if (pattern[index] == pattern[length]) lps[index++] = ++length;
        else if (length > 0) length = lps[length - 1];
        else lps[index++] = 0;
    }
    vector<int> matches;
    for (int i = 0, j = 0; i < static_cast<int>(text.size());) {
        if (text[i] == pattern[j]) {
            i += 1;
            j += 1;
            if (j == static_cast<int>(pattern.size())) {
                matches.push_back(i - j);
                j = lps[j - 1];
            }
        } else if (j > 0) j = lps[j - 1];
        else i += 1;
    }
    return matches;
}
