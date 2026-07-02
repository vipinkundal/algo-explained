// Cycle Detection in Undirected Graph
// Route: /algorithms/graphs/cycle-detection-undirected

#include <bits/stdc++.h>
using namespace std;

bool visitUndirected(
    const unordered_map<string, vector<string>>& graph,
    const string& node,
    const string& parent,
    unordered_set<string>& visited
) {
    visited.insert(node);

    auto it = graph.find(node);
    if (it == graph.end()) return false;
    for (const string& next : it->second) {
        if (!visited.count(next) && visitUndirected(graph, next, node, visited)) return true;
        if (visited.count(next) && next != parent) return true;
    }

    return false;
}

bool cycleDetectionUndirected(const unordered_map<string, vector<string>>& graph) {
    unordered_set<string> visited;
    for (const auto& [node, _] : graph) {
        if (!visited.count(node) && visitUndirected(graph, node, "", visited)) return true;
    }
    return false;
}
