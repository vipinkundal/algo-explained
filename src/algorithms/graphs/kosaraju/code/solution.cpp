// Kosaraju's Algorithm
// Route: /algorithms/graphs/kosaraju

#include <bits/stdc++.h>
using namespace std;

void fillOrder(const unordered_map<string, vector<string>>& graph, const string& node, unordered_set<string>& visited, vector<string>& order) {
    visited.insert(node);
    auto it = graph.find(node);
    if (it != graph.end()) {
        for (const string& next : it->second) {
            if (!visited.count(next)) fillOrder(graph, next, visited, order);
        }
    }
    order.push_back(node);
}

void collectComponent(const unordered_map<string, vector<string>>& graph, const string& node, unordered_set<string>& visited, vector<string>& component) {
    visited.insert(node);
    component.push_back(node);
    auto it = graph.find(node);
    if (it != graph.end()) {
        for (const string& next : it->second) {
            if (!visited.count(next)) collectComponent(graph, next, visited, component);
        }
    }
}

vector<vector<string>> kosaraju(const unordered_map<string, vector<string>>& graph) {
    unordered_set<string> visited;
    vector<string> order;
    for (const auto& [node, _] : graph) {
        if (!visited.count(node)) fillOrder(graph, node, visited, order);
    }

    unordered_map<string, vector<string>> reversed;
    for (const auto& [node, edges] : graph) {
        reversed[node];
        for (const string& next : edges) reversed[next].push_back(node);
    }

    visited.clear();
    vector<vector<string>> components;
    while (!order.empty()) {
        string node = order.back();
        order.pop_back();
        if (visited.count(node)) continue;
        vector<string> component;
        collectComponent(reversed, node, visited, component);
        components.push_back(component);
    }
    return components;
}
