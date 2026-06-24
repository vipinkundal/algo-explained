// Fibonacci DP
// Route: /algorithms/dynamic-programming/fibonacci-dp

#include <vector>
using namespace std;

int fibonacciDp(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1, 0);
    dp[1] = 1;
    for (int index = 2; index <= n; index += 1) dp[index] = dp[index - 1] + dp[index - 2];
    return dp[n];
}
