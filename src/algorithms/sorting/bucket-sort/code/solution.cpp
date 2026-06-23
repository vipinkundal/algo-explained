// Bucket Sort
// Route: /algorithms/sorting/bucket-sort

#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

vector<int> bucketSort(const vector<int>& values, int bucketCount) {
    if (values.size() <= 1) return values;
    int minValue = *min_element(values.begin(), values.end());
    int maxValue = *max_element(values.begin(), values.end());
    double width = static_cast<double>(maxValue - minValue + 1) / bucketCount;
    vector<vector<int>> buckets(bucketCount);
    for (int value : values) {
        int bucketIndex = min(bucketCount - 1, static_cast<int>((value - minValue) / width));
        buckets[bucketIndex].push_back(value);
    }
    vector<int> result;
    for (auto& bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        result.insert(result.end(), bucket.begin(), bucket.end());
    }
    return result;
}
