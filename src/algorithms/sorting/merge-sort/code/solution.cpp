// Merge Sort
// Route: /algorithms/sorting/merge-sort

#include <vector>
using namespace std;

vector<int> mergeVectors(const vector<int>& left, const vector<int>& right) {
    vector<int> result;
    int i = 0;
    int j = 0;
    while (i < static_cast<int>(left.size()) && j < static_cast<int>(right.size())) {
        if (left[i] <= right[j]) result.push_back(left[i++]);
        else result.push_back(right[j++]);
    }
    while (i < static_cast<int>(left.size())) result.push_back(left[i++]);
    while (j < static_cast<int>(right.size())) result.push_back(right[j++]);
    return result;
}

vector<int> mergeSort(const vector<int>& values) {
    if (values.size() <= 1) return values;
    int mid = static_cast<int>(values.size()) / 2;
    vector<int> left(values.begin(), values.begin() + mid);
    vector<int> right(values.begin() + mid, values.end());
    return mergeVectors(mergeSort(left), mergeSort(right));
}
