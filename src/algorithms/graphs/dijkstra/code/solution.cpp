// Dijkstra's Algorithm
// Route: /algorithms/graphs/dijkstra

#include <bits/stdc++.h>
using namespace std;

struct DijkstraResult {
    unordered_map<string, int> distances;
    unordered_map<string, string> previous;
};

DijkstraResult dijkstra(const unordered_map<string, vector<pair<string, int>>>& graph, const string& start) {
    const int INF = numeric_limits<int>::max() / 4;
    unordered_map<string, int> distances;
    unordered_map<string, string> previous;
    unordered_set<string> visited;

    for (const auto& [node, _] : graph) {
        distances[node] = INF;
        previous[node] = "";
    }
    distances[start] = 0;

    while (visited.size() < graph.size()) {
        string node;
        int best = INF;
        for (const auto& [candidate, distance] : distances) {
            if (!visited.count(candidate) && distance < best) {
                best = distance;
                node = candidate;
            }
        }

        if (node.empty()) break;
        visited.insert(node);

        auto it = graph.find(node);
        if (it == graph.end()) continue;
        for (const auto& [next, weight] : it->second) {
            if (distances[node] + weight < distances[next]) {
                distances[next] = distances[node] + weight;
                previous[next] = node;
            }
        }
    }

    return {distances, previous};
}
