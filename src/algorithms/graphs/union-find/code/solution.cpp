// Disjoint Set Union / Union Find
// Route: /algorithms/graphs/union-find

#include <bits/stdc++.h>
using namespace std;

class UnionFind {
    vector<int> parent;
    vector<int> rank;

public:
    explicit UnionFind(int size) : parent(size), rank(size, 0) {
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int node) {
        if (parent[node] != node) parent[node] = find(parent[node]);
        return parent[node];
    }

    bool unite(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        if (rootA == rootB) return false;
        if (rank[rootA] < rank[rootB]) swap(rootA, rootB);
        parent[rootB] = rootA;
        if (rank[rootA] == rank[rootB]) rank[rootA]++;
        return true;
    }
};
