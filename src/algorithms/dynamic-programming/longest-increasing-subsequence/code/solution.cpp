// Longest Increasing Subsequence
// Route: /algorithms/dynamic-programming/longest-increasing-subsequence

#include <vector>
#include <algorithm>
using namespace std;

int longestIncreasingSubsequence(const vector<int>& nums) {
    vector<int> tails;
    for (int value : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), value);
        if (it == tails.end()) tails.push_back(value);
        else *it = value;
    }
    return static_cast<int>(tails.size());
}
