// Longest Common Subsequence
// Route: /algorithms/dynamic-programming/longest-common-subsequence

#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int longestCommonSubsequence(const string& a, const string& b) {
    vector<vector<int>> dp(a.size() + 1, vector<int>(b.size() + 1, 0));
    for (int i = 1; i <= static_cast<int>(a.size()); i += 1) {
        for (int j = 1; j <= static_cast<int>(b.size()); j += 1) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[a.size()][b.size()];
}
