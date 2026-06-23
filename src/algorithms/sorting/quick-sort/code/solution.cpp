// Quick Sort
// Route: /algorithms/sorting/quick-sort

#include <vector>
#include <algorithm>
using namespace std;

int partition(vector<int>& values, int low, int high) {
    int pivot = values[high];
    int smaller = low;
    for (int index = low; index < high; index += 1) {
        if (values[index] <= pivot) {
            swap(values[smaller], values[index]);
            smaller += 1;
        }
    }
    swap(values[smaller], values[high]);
    return smaller;
}

void quickSortRange(vector<int>& values, int low, int high) {
    if (low >= high) return;
    int pivotIndex = partition(values, low, high);
    quickSortRange(values, low, pivotIndex - 1);
    quickSortRange(values, pivotIndex + 1, high);
}

vector<int> quickSort(vector<int> values) {
    quickSortRange(values, 0, static_cast<int>(values.size()) - 1);
    return values;
}
