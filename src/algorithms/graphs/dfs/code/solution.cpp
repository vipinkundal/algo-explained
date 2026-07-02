// Depth-First Search
// Route: /algorithms/graphs/dfs

#include <bits/stdc++.h>
using namespace std;

void dfsVisit(
    const unordered_map<string, vector<string>>& graph,
    const string& node,
    unordered_set<string>& visited,
    vector<string>& order
) {
    if (visited.count(node)) return;
    visited.insert(node);
    order.push_back(node);

    auto it = graph.find(node);
    if (it == graph.end()) return;
    for (const string& next : it->second) {
        dfsVisit(graph, next, visited, order);
    }
}

vector<string> dfs(const unordered_map<string, vector<string>>& graph, const string& start) {
    unordered_set<string> visited;
    vector<string> order;
    dfsVisit(graph, start, visited, order);
    return order;
}
