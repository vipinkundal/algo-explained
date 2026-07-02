// Floyd-Warshall Algorithm
// Route: /algorithms/graphs/floyd-warshall

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> floydWarshall(vector<vector<int>> matrix) {
    int n = matrix.size();
    for (int mid = 0; mid < n; mid++) {
        for (int from = 0; from < n; from++) {
            for (int to = 0; to < n; to++) {
                if (matrix[from][mid] == INT_MAX || matrix[mid][to] == INT_MAX) continue;
                matrix[from][to] = min(matrix[from][to], matrix[from][mid] + matrix[mid][to]);
            }
        }
    }
    return matrix;
}
