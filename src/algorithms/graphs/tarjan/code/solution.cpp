// Tarjan's Algorithm
// Route: /algorithms/graphs/tarjan

#include <bits/stdc++.h>
using namespace std;

class TarjanScc {
    int index = 0;
    vector<string> stack;
    unordered_set<string> onStack;
    unordered_map<string, int> indices;
    unordered_map<string, int> low;
    vector<vector<string>> components;

    void strongConnect(const unordered_map<string, vector<string>>& graph, const string& node) {
        indices[node] = low[node] = index++;
        stack.push_back(node);
        onStack.insert(node);

        auto it = graph.find(node);
        if (it != graph.end()) {
            for (const string& next : it->second) {
                if (!indices.count(next)) {
                    strongConnect(graph, next);
                    low[node] = min(low[node], low[next]);
                } else if (onStack.count(next)) {
                    low[node] = min(low[node], indices[next]);
                }
            }
        }

        if (low[node] == indices[node]) {
            vector<string> component;
            string current;
            do {
                current = stack.back();
                stack.pop_back();
                onStack.erase(current);
                component.push_back(current);
            } while (current != node);
            components.push_back(component);
        }
    }

public:
    vector<vector<string>> run(const unordered_map<string, vector<string>>& graph) {
        for (const auto& [node, _] : graph) {
            if (!indices.count(node)) strongConnect(graph, node);
        }
        return components;
    }
};
