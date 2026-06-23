// Insertion Sort
// Route: /algorithms/sorting/insertion-sort

#include <vector>
using namespace std;

vector<int> insertionSort(vector<int> values) {
    for (int index = 1; index < static_cast<int>(values.size()); index += 1) {
        int current = values[index];
        int scan = index - 1;
        while (scan >= 0 && values[scan] > current) {
            values[scan + 1] = values[scan];
            scan -= 1;
        }
        values[scan + 1] = current;
    }
    return values;
}
