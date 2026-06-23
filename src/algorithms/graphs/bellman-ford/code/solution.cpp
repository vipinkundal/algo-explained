// Bellman-Ford Algorithm
// Route: /algorithms/graphs/bellman-ford

#include <bits/stdc++.h>
using namespace std;

struct BellmanFordResult {
    unordered_map<string, int> distance;
    bool hasNegativeCycle;
};

BellmanFordResult bellmanFord(const vector<string>& vertices, const vector<tuple<string, string, int>>& edges, const string& start) {
    const int INF = numeric_limits<int>::max() / 4;
    unordered_map<string, int> distance;
    for (const string& vertex : vertices) distance[vertex] = INF;
    distance[start] = 0;

    for (int pass = 1; pass < (int)vertices.size(); pass++) {
        for (const auto& [from, to, weight] : edges) {
            if (distance[from] != INF && distance[from] + weight < distance[to]) {
                distance[to] = distance[from] + weight;
            }
        }
    }

    bool hasNegativeCycle = false;
    for (const auto& [from, to, weight] : edges) {
        if (distance[from] != INF && distance[from] + weight < distance[to]) {
            hasNegativeCycle = true;
            break;
        }
    }

    return {distance, hasNegativeCycle};
}
