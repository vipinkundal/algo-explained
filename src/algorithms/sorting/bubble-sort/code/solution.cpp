// Bubble Sort
// Route: /algorithms/sorting/bubble-sort

#include <vector>
#include <algorithm>
using namespace std;

vector<int> bubbleSort(vector<int> values) {
    for (int end = static_cast<int>(values.size()) - 1; end > 0; end -= 1) {
        bool swapped = false;
        for (int index = 0; index < end; index += 1) {
            if (values[index] > values[index + 1]) {
                swap(values[index], values[index + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return values;
}
