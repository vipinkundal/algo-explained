// Coin Change
// Route: /algorithms/dynamic-programming/coin-change

#include <vector>
#include <algorithm>
#include <limits>
using namespace std;

int coinChange(const vector<int>& coins, int amount) {
    const int INF = numeric_limits<int>::max() / 4;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;
    for (int coin : coins) {
        for (int value = coin; value <= amount; value += 1) {
            dp[value] = min(dp[value], dp[value - coin] + 1);
        }
    }
    return dp[amount] == INF ? -1 : dp[amount];
}
