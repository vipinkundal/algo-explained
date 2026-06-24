// Matrix Chain Multiplication
// Route: /algorithms/dynamic-programming/matrix-chain-multiplication

#include <vector>
#include <algorithm>
#include <limits>
using namespace std;

int matrixChainMultiplication(const vector<int>& dimensions) {
    int n = static_cast<int>(dimensions.size()) - 1;
    if (n <= 1) return 0;
    const int INF = numeric_limits<int>::max() / 4;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int length = 2; length <= n; length += 1) {
        for (int left = 0; left + length - 1 < n; left += 1) {
            int right = left + length - 1;
            dp[left][right] = INF;
            for (int split = left; split < right; split += 1) {
                int cost = dp[left][split] + dp[split + 1][right] + dimensions[left] * dimensions[split + 1] * dimensions[right + 1];
                dp[left][right] = min(dp[left][right], cost);
            }
        }
    }
    return dp[0][n - 1];
}
