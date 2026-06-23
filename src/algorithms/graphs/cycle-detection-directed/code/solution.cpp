// Cycle Detection in Directed Graph
// Route: /algorithms/graphs/cycle-detection-directed

#include <bits/stdc++.h>
using namespace std;

bool visitDirected(
    const unordered_map<string, vector<string>>& graph,
    const string& node,
    unordered_set<string>& visited,
    unordered_set<string>& active
) {
    if (active.count(node)) return true;
    if (visited.count(node)) return false;

    visited.insert(node);
    active.insert(node);

    auto it = graph.find(node);
    if (it != graph.end()) {
        for (const string& next : it->second) {
            if (visitDirected(graph, next, visited, active)) return true;
        }
    }

    active.erase(node);
    return false;
}

bool cycleDetectionDirected(const unordered_map<string, vector<string>>& graph) {
    unordered_set<string> visited;
    unordered_set<string> active;
    for (const auto& [node, _] : graph) {
        if (visitDirected(graph, node, visited, active)) return true;
    }
    return false;
}
