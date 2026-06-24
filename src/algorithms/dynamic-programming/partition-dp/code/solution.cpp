// Partition DP
// Route: /algorithms/dynamic-programming/partition-dp

#include <vector>
#include <numeric>
using namespace std;

bool partitionDp(const vector<int>& array) {
    int total = accumulate(array.begin(), array.end(), 0);
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> possible(target + 1, false);
    possible[0] = true;
    for (int value : array) {
        for (int sum = target; sum >= value; sum -= 1) {
            possible[sum] = possible[sum] || possible[sum - value];
        }
    }
    return possible[target];
}
