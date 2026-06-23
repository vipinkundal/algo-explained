// Selection Sort
// Route: /algorithms/sorting/selection-sort

#include <vector>
#include <algorithm>
using namespace std;

vector<int> selectionSort(vector<int> values) {
    for (int start = 0; start < static_cast<int>(values.size()); start += 1) {
        int minIndex = start;
        for (int index = start + 1; index < static_cast<int>(values.size()); index += 1) {
            if (values[index] < values[minIndex]) minIndex = index;
        }
        swap(values[start], values[minIndex]);
    }
    return values;
}
