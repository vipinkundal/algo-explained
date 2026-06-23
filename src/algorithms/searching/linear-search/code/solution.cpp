// Linear Search
// Route: /algorithms/searching/linear-search

#include <vector>
using namespace std;

int linearSearch(const vector<int>& values, int target) {
    for (int index = 0; index < static_cast<int>(values.size()); index += 1) {
        if (values[index] == target) return index;
    }
    return -1;
}
