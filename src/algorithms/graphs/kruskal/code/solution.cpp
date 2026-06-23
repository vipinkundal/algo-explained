// Kruskal's Algorithm
// Route: /algorithms/graphs/kruskal

#include <bits/stdc++.h>
using namespace std;

int findRoot(vector<int>& parent, int node) {
    if (parent[node] != node) parent[node] = findRoot(parent, parent[node]);
    return parent[node];
}

bool unite(vector<int>& parent, int a, int b) {
    int rootA = findRoot(parent, a);
    int rootB = findRoot(parent, b);
    if (rootA == rootB) return false;
    parent[rootB] = rootA;
    return true;
}

vector<array<int, 3>> kruskal(int vertexCount, vector<array<int, 3>> edges) {
    vector<int> parent(vertexCount);
    iota(parent.begin(), parent.end(), 0);
    sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
        return a[2] < b[2];
    });

    vector<array<int, 3>> mst;
    for (const auto& edge : edges) {
        if (unite(parent, edge[0], edge[1])) mst.push_back(edge);
    }
    return mst;
}
