// Heap Sort
// Route: /algorithms/sorting/heap-sort

#include <vector>
#include <algorithm>
using namespace std;

void heapify(vector<int>& values, int size, int root) {
    int largest = root;
    int left = root * 2 + 1;
    int right = root * 2 + 2;
    if (left < size && values[left] > values[largest]) largest = left;
    if (right < size && values[right] > values[largest]) largest = right;
    if (largest != root) {
        swap(values[root], values[largest]);
        heapify(values, size, largest);
    }
}

vector<int> heapSort(vector<int> values) {
    for (int index = static_cast<int>(values.size()) / 2 - 1; index >= 0; index -= 1) heapify(values, static_cast<int>(values.size()), index);
    for (int end = static_cast<int>(values.size()) - 1; end > 0; end -= 1) {
        swap(values[0], values[end]);
        heapify(values, end, 0);
    }
    return values;
}
