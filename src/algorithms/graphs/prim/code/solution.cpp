// Prim's Algorithm
// Route: /algorithms/graphs/prim

#include <bits/stdc++.h>
using namespace std;

vector<tuple<string, string, int>> prim(const unordered_map<string, vector<pair<string, int>>>& graph, const string& start) {
    unordered_set<string> visited{start};
    vector<tuple<string, string, int>> mst;

    while (visited.size() < graph.size()) {
        optional<tuple<string, string, int>> best;
        for (const string& from : visited) {
            auto it = graph.find(from);
            if (it == graph.end()) continue;
            for (const auto& [to, weight] : it->second) {
                if (!visited.count(to) && (!best || weight < get<2>(*best))) {
                    best = make_tuple(from, to, weight);
                }
            }
        }
        if (!best) break;
        mst.push_back(*best);
        visited.insert(get<1>(*best));
    }

    return mst;
}
