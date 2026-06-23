// Counting Sort
// Route: /algorithms/sorting/counting-sort

#include <vector>
#include <algorithm>
using namespace std;

vector<int> countingSort(const vector<int>& values) {
    if (values.empty()) return {};
    int minValue = *min_element(values.begin(), values.end());
    int maxValue = *max_element(values.begin(), values.end());
    vector<int> counts(maxValue - minValue + 1, 0);
    for (int value : values) counts[value - minValue] += 1;
    vector<int> result;
    for (int offset = 0; offset < static_cast<int>(counts.size()); offset += 1) {
        for (int copy = 0; copy < counts[offset]; copy += 1) result.push_back(offset + minValue);
    }
    return result;
}
