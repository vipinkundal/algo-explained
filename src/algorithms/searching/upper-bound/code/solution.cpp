// Upper Bound
// Route: /algorithms/searching/upper-bound

#include <vector>
using namespace std;

int upperBound(const vector<int>& values, int target) {
    int low = 0;
    int high = static_cast<int>(values.size());
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (values[mid] <= target) low = mid + 1;
        else high = mid;
    }
    return low;
}
