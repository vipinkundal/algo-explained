// Breadth-First Search
// Route: /algorithms/graphs/bfs

#include <bits/stdc++.h>
using namespace std;

vector<string> bfs(const unordered_map<string, vector<string>>& graph, const string& start) {
    unordered_set<string> visited{start};
    queue<string> frontier;
    vector<string> order;
    frontier.push(start);

    while (!frontier.empty()) {
        string node = frontier.front();
        frontier.pop();
        order.push_back(node);

        auto it = graph.find(node);
        if (it == graph.end()) continue;
        for (const string& next : it->second) {
            if (visited.count(next)) continue;
            visited.insert(next);
            frontier.push(next);
        }
    }

    return order;
}
