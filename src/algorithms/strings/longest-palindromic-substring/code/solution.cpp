// Longest Palindromic Substring
// Route: /algorithms/strings/longest-palindromic-substring

#include <string>
using namespace std;

string longestPalindromicSubstring(const string& text) {
    int bestStart = 0;
    int bestLength = 0;
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < static_cast<int>(text.size()) && text[left] == text[right]) {
            left -= 1;
            right += 1;
        }
        int length = right - left - 1;
        if (length > bestLength) {
            bestStart = left + 1;
            bestLength = length;
        }
    };
    for (int index = 0; index < static_cast<int>(text.size()); index += 1) {
        expand(index, index);
        expand(index, index + 1);
    }
    return text.substr(bestStart, bestLength);
}
