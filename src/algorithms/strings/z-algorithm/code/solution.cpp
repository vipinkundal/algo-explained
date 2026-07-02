// Z Algorithm
// Route: /algorithms/strings/z-algorithm

#include <string>
#include <vector>
using namespace std;

vector<int> zAlgorithm(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    string combined = pattern + "$" + text;
    vector<int> z(combined.size(), 0);
    for (int index = 1, left = 0, right = 0; index < static_cast<int>(combined.size()); index += 1) {
        if (index <= right) z[index] = min(right - index + 1, z[index - left]);
        while (index + z[index] < static_cast<int>(combined.size()) && combined[z[index]] == combined[index + z[index]]) z[index] += 1;
        if (index + z[index] - 1 > right) {
            left = index;
            right = index + z[index] - 1;
        }
    }
    vector<int> matches;
    for (int index = static_cast<int>(pattern.size()) + 1; index < static_cast<int>(combined.size()); index += 1) {
        if (z[index] == static_cast<int>(pattern.size())) matches.push_back(index - static_cast<int>(pattern.size()) - 1);
    }
    return matches;
}
