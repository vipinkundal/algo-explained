// Topological Sort
// Route: /algorithms/graphs/topological-sort

#include <bits/stdc++.h>
using namespace std;

vector<string> topologicalSort(const unordered_map<string, vector<string>>& graph) {
    unordered_map<string, int> indegree;
    for (const auto& [node, _] : graph) indegree[node] = 0;
    for (const auto& [_, edges] : graph) {
        for (const string& next : edges) indegree[next]++;
    }

    queue<string> ready;
    for (const auto& [node, count] : indegree) {
        if (count == 0) ready.push(node);
    }

    vector<string> order;
    while (!ready.empty()) {
        string node = ready.front();
        ready.pop();
        order.push_back(node);
        auto it = graph.find(node);
        if (it == graph.end()) continue;
        for (const string& next : it->second) {
            if (--indegree[next] == 0) ready.push(next);
        }
    }

    return order.size() == indegree.size() ? order : vector<string>{};
}
