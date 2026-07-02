// DP on Grids
// Route: /algorithms/dynamic-programming/dp-on-grids

#include <vector>
using namespace std;

int dpOnGrids(const vector<vector<int>>& grid) {
    int rows = static_cast<int>(grid.size());
    int cols = rows == 0 ? 0 : static_cast<int>(grid[0].size());
    vector<vector<int>> dp(rows, vector<int>(cols, 0));
    for (int row = 0; row < rows; row += 1) {
        for (int col = 0; col < cols; col += 1) {
            if (grid[row][col] == 1) continue;
            if (row == 0 && col == 0) dp[row][col] = 1;
            else dp[row][col] = (row > 0 ? dp[row - 1][col] : 0) + (col > 0 ? dp[row][col - 1] : 0);
        }
    }
    return rows == 0 || cols == 0 ? 0 : dp[rows - 1][cols - 1];
}
