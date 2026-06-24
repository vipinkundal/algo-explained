// 0/1 Knapsack
// Route: /algorithms/dynamic-programming/zero-one-knapsack

#include <vector>
#include <algorithm>
using namespace std;

int zeroOneKnapsack(const vector<int>& weights, const vector<int>& values, int capacity) {
    vector<int> dp(capacity + 1, 0);
    for (int item = 0; item < static_cast<int>(weights.size()); item += 1) {
        for (int cap = capacity; cap >= weights[item]; cap -= 1) {
            dp[cap] = max(dp[cap], dp[cap - weights[item]] + values[item]);
        }
    }
    return dp[capacity];
}
