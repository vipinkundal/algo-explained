// Radix Sort
// Route: /algorithms/sorting/radix-sort

#include <vector>
#include <algorithm>
using namespace std;

vector<int> radixSort(vector<int> values) {
    int maxValue = values.empty() ? 0 : *max_element(values.begin(), values.end());
    for (int place = 1; maxValue / place > 0; place *= 10) {
        vector<vector<int>> buckets(10);
        for (int value : values) buckets[(value / place) % 10].push_back(value);
        values.clear();
        for (const auto& bucket : buckets) values.insert(values.end(), bucket.begin(), bucket.end());
    }
    return values;
}
