// Manacher’s Algorithm
// Route: /algorithms/strings/manachers-algorithm

#include <string>
#include <vector>
using namespace std;

string manachersAlgorithm(const string& text) {
    if (text.empty()) return "";
    string transformed = "^#";
    for (char ch : text) {
        transformed += ch;
        transformed += '#';
    }
    transformed += '$';
    vector<int> radius(transformed.size(), 0);
    int center = 0;
    int right = 0;
    int bestCenter = 0;
    int bestRadius = 0;
    for (int index = 1; index < static_cast<int>(transformed.size()) - 1; index += 1) {
        int mirror = 2 * center - index;
        if (index < right) radius[index] = min(right - index, radius[mirror]);
        while (transformed[index + radius[index] + 1] == transformed[index - radius[index] - 1]) radius[index] += 1;
        if (index + radius[index] > right) {
            center = index;
            right = index + radius[index];
        }
        if (radius[index] > bestRadius) {
            bestRadius = radius[index];
            bestCenter = index;
        }
    }
    int start = (bestCenter - bestRadius) / 2;
    return text.substr(start, bestRadius);
}
