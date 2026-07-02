import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

function readPageData(filePath) {
  const source = readFileSync(filePath, "utf8");
  const json = source.match(/export const algorithmPage = ([\s\S]*);\s*$/)?.[1];
  if (!json) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(json);
}

function writePageData(filePath, data) {
  writeFileSync(
    filePath,
    `// AUTO-GENERATED ALGORITHM PAGE\n// Edit this file to customize this algorithm page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(data, null, 2)};\n`,
    "utf8",
  );
}

function writeSolution(folder, code) {
  writeFileSync(
    path.join(root, "src", "algorithms", "graphs", folder, "code", "solution.js"),
    `${code.trim()}\n`,
    "utf8",
  );
}

function writeCpp(folder, code) {
  writeFileSync(
    path.join(root, "src", "algorithms", "graphs", folder, "code", "solution.cpp"),
    `${code.trim()}\n`,
    "utf8",
  );
}

const traversalNodes = [
  { id: "A", label: "A", x: 90, y: 150 },
  { id: "B", label: "B", x: 230, y: 70 },
  { id: "C", label: "C", x: 230, y: 230 },
  { id: "D", label: "D", x: 390, y: 55 },
  { id: "E", label: "E", x: 390, y: 150 },
  { id: "F", label: "F", x: 540, y: 230 },
];

const traversalEdges = [
  { from: "A", to: "B", directed: true },
  { from: "A", to: "C", directed: true },
  { from: "B", to: "D", directed: true },
  { from: "B", to: "E", directed: true },
  { from: "C", to: "F", directed: true },
];

const pages = {
  bfs: {
    folder: "bfs",
    patch: {
      problem: "Breadth-First Search explores a graph in layers from a start vertex.",
      concept: "BFS uses a FIFO queue so every vertex at distance k is processed before any vertex at distance k + 1.",
      logicSummary: "Mark the start vertex, push it into the queue, pop from the front, and enqueue each unseen neighbor.",
      transitionSummary: "One transition removes the queue front, appends it to traversal order, and adds newly discovered neighbors to the back.",
      codeInsight: "The queue is the algorithm: replacing it with a stack would change the page into DFS.",
      realLifeExample: "Use BFS for shortest path length in unweighted graphs, level-order traversal, friend-of-friend expansion, and nearest target searches.",
      whenToUse: "Use BFS when edges are unweighted and the answer depends on levels, minimum edge count, or exploring all near states first.",
      memoryTrick: "BFS is a ripple: everything one edge away is handled before anything two edges away.",
      visualizerCaption: "Watch the queue frontier expand level by level while visited prevents repeated work.",
      logicSteps: [
        { title: "Seed the queue", text: "Add the start vertex and mark it visited immediately." },
        { title: "Pop the front", text: "The oldest discovered vertex becomes the current vertex." },
        { title: "Discover neighbors", text: "Every unseen neighbor is marked and pushed to the back of the queue." },
        { title: "Return traversal order", text: "The order records the level-by-level visit sequence." },
      ],
      variables: [
        { name: "graph, start", purpose: "Adjacency list and the vertex where BFS begins." },
        { name: "queue", purpose: "FIFO frontier of discovered vertices waiting to be processed." },
        { name: "visited", purpose: "Set that prevents the same vertex from entering the queue twice." },
        { name: "order", purpose: "The level-order traversal returned by the algorithm." },
      ],
      dryRun: [
        { label: "Start", title: "Mark A and enqueue it", note: "A is discovered before its neighbors, so it enters the queue first.", activeLine: 5, codeInsight: "visited starts with A because discovery and marking happen together." },
        { label: "Layer 1", title: "Pop A, enqueue B and C", note: "Both neighbors of A are now known and will be processed before deeper vertices.", activeLine: 10, codeInsight: "queue.shift() gives FIFO behavior: A leaves before B and C run." },
        { label: "Expand B", title: "Pop B, enqueue D and E", note: "D and E are distance two from A, so they are appended behind C.", activeLine: 13, codeInsight: "New neighbors are marked before enqueueing so no later edge can enqueue duplicates." },
        { label: "Expand C", title: "Pop C, enqueue F", note: "C is still in the first layer, then F joins the next layer.", activeLine: 13, codeInsight: "The same loop handles every adjacency list without mixing traversal rules." },
        { label: "Finish", title: "Drain the queue and return order", note: "D, E, and F have no unseen outgoing neighbors, so the traversal is complete.", activeLine: 16, codeInsight: "order is the only returned value; queue and visited are internal control state." },
      ],
      runnerInput: [
        { A: ["B", "C"], B: ["D", "E"], C: ["F"], D: [], E: [], F: [] },
        "A",
      ],
      animation: {
        type: "graph-flow",
        title: "BFS queue frontier",
        ruleLabel: "Queue invariant",
        rule: "Vertices leave the queue in the same order they were discovered.",
        nodes: traversalNodes,
        edges: traversalEdges,
        steps: [
          { phase: "Queue: [A]", title: "A is discovered first", note: "visited = {A}; queue holds only the start.", ruleLabel: "Queue", rule: "[A]", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["A"] },
          { phase: "Queue: [B, C]", title: "A expands to B and C", note: "The first layer is discovered from A.", ruleLabel: "Queue", rule: "[B, C]", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["B", "C"], activeEdge: { from: "A", to: "C" } },
          { phase: "Queue: [C, D, E]", title: "B expands next", note: "B leaves the front; D and E join the back.", ruleLabel: "Queue", rule: "[C, D, E]", activeNode: "B", visitedNodes: ["A", "B", "C"], frontierNodes: ["C", "D", "E"], activeEdge: { from: "B", to: "E" } },
          { phase: "Queue: [D, E, F]", title: "C expands before D", note: "C was discovered before D, so C runs first and discovers F.", ruleLabel: "Queue", rule: "[D, E, F]", activeNode: "C", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: ["D", "E", "F"], activeEdge: { from: "C", to: "F" } },
          { phase: "Queue: []", title: "Traversal is complete", note: "All discovered vertices were processed once.", ruleLabel: "Order", rule: "A, B, C, D, E, F", activeNode: "F", visitedNodes: ["A", "B", "C", "D", "E", "F"], frontierNodes: [] },
        ],
      },
      complexity: { time: "O(V + E).", space: "O(V)." },
    },
    js: `// Breadth-First Search
// Route: /algorithms/graphs/bfs

export function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (const next of graph[node] || []) {
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push(next);
    }
  }

  return order;
}`,
    cpp: `// Breadth-First Search
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
}`,
  },
  dfs: {
    folder: "dfs",
    patch: {
      problem: "Depth-First Search follows one graph branch until it cannot continue, then backtracks.",
      concept: "DFS uses recursion or an explicit stack to keep the current path active while deeper vertices are explored first.",
      logicSummary: "Visit a node, mark it, recursively visit each unseen neighbor, then backtrack to the previous call.",
      transitionSummary: "One transition pushes the next unseen neighbor onto the active path; a later transition returns from that path.",
      codeInsight: "The recursive call stack is the frontier, so the visualizer highlights the active path instead of a queue.",
      realLifeExample: "Use DFS for connected components, cycle checks, topological ordering, maze exploration, and tree-style graph problems.",
      whenToUse: "Use DFS when the answer depends on reachability, exhaustive branch exploration, or entry/exit timing.",
      memoryTrick: "DFS dives first, then comes back for siblings.",
      visualizerCaption: "Watch the recursion path grow and shrink as DFS explores one branch before its siblings.",
      logicSteps: [
        { title: "Enter a vertex", text: "If it was already visited, return immediately." },
        { title: "Mark and record", text: "Mark the vertex visited and append it to traversal order." },
        { title: "Recurse into neighbors", text: "The first unseen neighbor becomes the next active call." },
        { title: "Backtrack", text: "When a node has no unseen neighbors, control returns to its parent call." },
      ],
      variables: [
        { name: "graph, start", purpose: "Adjacency list and starting vertex." },
        { name: "visited", purpose: "Set of vertices already entered by DFS." },
        { name: "call stack", purpose: "Implicit recursion frontier that stores the current path." },
        { name: "order", purpose: "Vertices in first-entry order." },
      ],
      dryRun: [
        { label: "Enter A", title: "Start recursion at A", note: "A becomes the root of the current DFS path.", activeLine: 8, codeInsight: "The visited guard prevents repeated recursion into the same vertex." },
        { label: "Dive to B", title: "A calls B", note: "DFS chooses one neighbor and follows it before checking C.", activeLine: 12, codeInsight: "The for loop calls visit(next), so the next vertex is stacked above the current one." },
        { label: "Dive to D", title: "B calls D", note: "D has no children, so it returns after being recorded.", activeLine: 10, codeInsight: "order.push(node) records first entry, not exit time." },
        { label: "Visit E", title: "Back at B, visit E", note: "After D returns, B continues scanning its remaining neighbors.", activeLine: 12, codeInsight: "Backtracking is just the recursive call returning to its caller." },
        { label: "Finish C/F", title: "Return to A, then visit C and F", note: "DFS finishes the B branch before A's C branch.", activeLine: 16, codeInsight: "The final order is driven by adjacency order and recursion depth." },
      ],
      runnerInput: [
        { A: ["B", "C"], B: ["D", "E"], C: ["F"], D: [], E: [], F: [] },
        "A",
      ],
      animation: {
        type: "graph-flow",
        title: "DFS recursion path",
        ruleLabel: "Recursion invariant",
        rule: "The active path contains the current chain of unfinished calls.",
        nodes: traversalNodes,
        edges: traversalEdges,
        steps: [
          { phase: "Path: A", title: "Enter A", note: "A is marked and placed on the active path.", ruleLabel: "Call stack", rule: "A", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["A"] },
          { phase: "Path: A -> B", title: "Dive into B", note: "DFS follows B before C.", ruleLabel: "Call stack", rule: "A -> B", activeNode: "B", visitedNodes: ["A", "B"], frontierNodes: ["A", "B"], activeEdge: { from: "A", to: "B" } },
          { phase: "Path: A -> B -> D", title: "Dive into D", note: "D is the deepest active call on this branch.", ruleLabel: "Call stack", rule: "A -> B -> D", activeNode: "D", visitedNodes: ["A", "B", "D"], frontierNodes: ["A", "B", "D"], activeEdge: { from: "B", to: "D" } },
          { phase: "Path: A -> B -> E", title: "Backtrack and visit E", note: "D returns, then B's next neighbor E becomes active.", ruleLabel: "Call stack", rule: "A -> B -> E", activeNode: "E", visitedNodes: ["A", "B", "D", "E"], frontierNodes: ["A", "B", "E"], activeEdge: { from: "B", to: "E" } },
          { phase: "Path: A -> C -> F", title: "Finish the C branch", note: "Only after B finishes does A recurse into C and then F.", ruleLabel: "Order", rule: "A, B, D, E, C, F", activeNode: "F", visitedNodes: ["A", "B", "C", "D", "E", "F"], frontierNodes: ["A", "C", "F"], activeEdge: { from: "C", to: "F" } },
        ],
      },
      complexity: { time: "O(V + E).", space: "O(V) for visited plus recursion stack." },
    },
    js: `// Depth-First Search
// Route: /algorithms/graphs/dfs

export function dfs(graph, start) {
  const visited = new Set();
  const order = [];

  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    order.push(node);

    for (const next of graph[node] || []) {
      visit(next);
    }
  }

  visit(start);
  return order;
}`,
    cpp: `// Depth-First Search
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
}`,
  },
};

pages["cycle-detection-directed"] = {
  folder: "cycle-detection-directed",
  patch: {
    problem: "Directed cycle detection finds a back edge into the active DFS recursion stack.",
    concept: "A directed graph has a cycle when DFS reaches a vertex that is already on the current recursion path.",
    logicSummary: "Keep two sets: visited for fully discovered vertices and active for the current DFS path.",
    transitionSummary: "Entering a node adds it to active; leaving removes it; seeing an active neighbor proves a cycle.",
    codeInsight: "The active set is separate from visited because a previously finished vertex is safe, but an active vertex is a back edge.",
    realLifeExample: "Use directed cycle detection for dependency graphs, course prerequisites, build pipelines, and import graphs.",
    whenToUse: "Use it when edges have direction and you need to know whether any dependency chain loops back on itself.",
    memoryTrick: "Directed cycle: visited means seen before; active means still on the current path.",
    visualizerCaption: "Watch the recursion stack highlight the back edge that proves a directed cycle.",
    logicSteps: [
      { title: "Start DFS", text: "Pick any unvisited vertex and begin a DFS path." },
      { title: "Mark active", text: "A vertex is active while its outgoing edges are still being explored." },
      { title: "Check outgoing edges", text: "A neighbor already in active is a back edge." },
      { title: "Unwind or return true", text: "Remove safe vertices from active, or stop immediately when a back edge is found." },
    ],
    variables: [
      { name: "graph", purpose: "Directed adjacency list." },
      { name: "visited", purpose: "Vertices that have been entered at least once." },
      { name: "active", purpose: "Vertices currently on the recursion path." },
      { name: "cycle found", purpose: "Boolean returned as soon as a back edge is detected." },
    ],
    dryRun: [
      { label: "Enter A", title: "A starts the DFS path", note: "A is visited and active while its edge to B is explored.", activeLine: 10, codeInsight: "visited and active are both updated on entry." },
      { label: "Enter B", title: "B joins the active path", note: "The path is now A -> B.", activeLine: 14, codeInsight: "The recursive call keeps A active while B runs." },
      { label: "Enter C", title: "C joins the active path", note: "The path is now A -> B -> C.", activeLine: 14, codeInsight: "A finished vertex would be ignored, but active vertices are still dangerous." },
      { label: "Back edge", title: "D points back to B", note: "B is active, so D -> B closes a directed cycle.", activeLine: 8, codeInsight: "active.has(node) returning true is the exact cycle proof." },
      { label: "Return true", title: "Propagate the cycle result", note: "Every recursive caller returns true immediately.", activeLine: 18, codeInsight: "some(...) stops once any DFS root reports a cycle." },
    ],
    runnerInput: [
      { A: ["B"], B: ["C"], C: ["D", "E"], D: ["B"], E: [] },
    ],
    animation: {
      type: "graph-flow",
      title: "Directed cycle recursion stack",
      ruleLabel: "Back-edge rule",
      rule: "An edge into active recursion state proves a directed cycle.",
      nodes: [
        { id: "A", label: "A", x: 90, y: 150 },
        { id: "B", label: "B", x: 220, y: 70 },
        { id: "C", label: "C", x: 360, y: 150 },
        { id: "D", label: "D", x: 500, y: 70 },
        { id: "E", label: "E", x: 500, y: 230 },
      ],
      edges: [
        { from: "A", to: "B", directed: true },
        { from: "B", to: "C", directed: true },
        { from: "C", to: "D", directed: true },
        { from: "D", to: "B", directed: true, label: "back" },
        { from: "C", to: "E", directed: true },
      ],
      steps: [
        { phase: "Active: A", title: "A enters recursion", note: "A is visited and active.", ruleLabel: "Active set", rule: "{A}", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["A"] },
        { phase: "Active: A, B", title: "B enters recursion", note: "B is now on the active path.", ruleLabel: "Active set", rule: "{A, B}", activeNode: "B", visitedNodes: ["A", "B"], frontierNodes: ["A", "B"], activeEdge: { from: "A", to: "B" } },
        { phase: "Active: A, B, C", title: "C enters recursion", note: "The search is still inside A -> B -> C.", ruleLabel: "Active set", rule: "{A, B, C}", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "B", to: "C" } },
        { phase: "Back edge D -> B", title: "D sees active B", note: "B has not been removed from active, so this edge proves a cycle.", ruleLabel: "Cycle proof", rule: "D -> B where B is active", activeNode: "D", visitedNodes: ["A", "B", "C", "D"], frontierNodes: ["A", "B", "C", "D"], activeEdge: { from: "D", to: "B" } },
        { phase: "Cycle: true", title: "Return true", note: "The recursive result propagates to the top-level call.", ruleLabel: "Answer", rule: "cycle found", activeNode: "B", visitedNodes: ["A", "B", "C", "D"], frontierNodes: ["B", "C", "D"], activeEdge: { from: "D", to: "B" } },
      ],
    },
    complexity: { time: "O(V + E).", space: "O(V)." },
  },
  js: `// Cycle Detection in Directed Graph
// Route: /algorithms/graphs/cycle-detection-directed

export function cycleDetectionDirected(graph) {
  const visited = new Set();
  const active = new Set();

  function visit(node) {
    if (active.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    active.add(node);

    for (const next of graph[node] || []) {
      if (visit(next)) return true;
    }

    active.delete(node);
    return false;
  }

  return Object.keys(graph).some((node) => visit(node));
}`,
  cpp: `// Cycle Detection in Directed Graph
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
}`,
};

pages["cycle-detection-undirected"] = {
  folder: "cycle-detection-undirected",
  patch: {
    problem: "Undirected cycle detection uses the parent edge to distinguish normal backtracking from a real cycle.",
    concept: "In an undirected graph, seeing a visited neighbor is a cycle only when that neighbor is not the vertex you came from.",
    logicSummary: "DFS each component, pass the parent into the recursive call, and reject visited neighbors that are not the parent.",
    transitionSummary: "One transition visits an unseen neighbor with current as parent; another detects a visited non-parent neighbor.",
    codeInsight: "The parent parameter is what keeps A-B from being counted twice as a false cycle.",
    realLifeExample: "Use it for detecting loops in undirected networks, roads, cable layouts, and component validation.",
    whenToUse: "Use it when graph edges are bidirectional and you need to know whether any component contains a loop.",
    memoryTrick: "Undirected cycle: visited is okay only if it is your parent.",
    visualizerCaption: "Watch the DFS parent check separate the return edge from the edge that proves a cycle.",
    logicSteps: [
      { title: "Start a component", text: "Run DFS from any vertex that is not yet visited." },
      { title: "Carry parent", text: "Pass the previous vertex into the recursive call." },
      { title: "Check neighbors", text: "Recurse into unseen neighbors; visited non-parent neighbors prove a cycle." },
      { title: "Return result", text: "Stop when any component reports a cycle." },
    ],
    variables: [
      { name: "graph", purpose: "Undirected adjacency list where each edge appears both ways." },
      { name: "visited", purpose: "Vertices already reached in the current or earlier component." },
      { name: "parent", purpose: "The vertex that led into the current vertex." },
      { name: "cycle found", purpose: "Boolean answer returned after the first non-parent revisit." },
    ],
    dryRun: [
      { label: "Visit A", title: "Start from A", note: "A has no parent because it is the component root.", activeLine: 8, codeInsight: "visited.add(node) marks A before checking neighbors." },
      { label: "Visit B", title: "Move from A to B", note: "A becomes B's parent.", activeLine: 11, codeInsight: "The recursive call remembers where B came from." },
      { label: "Visit C", title: "Move from B to C", note: "B becomes C's parent.", activeLine: 11, codeInsight: "Unseen neighbors are explored normally." },
      { label: "Find A", title: "C sees visited A", note: "A is visited and A is not C's parent, so the triangle is a cycle.", activeLine: 12, codeInsight: "next !== parent is the exact undirected cycle check." },
      { label: "Return true", title: "Cycle found", note: "The true result bubbles out of the DFS.", activeLine: 16, codeInsight: "The outer some(...) only needs one component to report true." },
    ],
    runnerInput: [
      { A: ["B", "C"], B: ["A", "C"], C: ["A", "B", "D"], D: ["C"] },
    ],
    animation: {
      type: "graph-flow",
      title: "Undirected cycle parent check",
      ruleLabel: "Parent rule",
      rule: "A visited neighbor is safe only when it is the parent edge.",
      nodes: [
        { id: "A", label: "A", x: 140, y: 90 },
        { id: "B", label: "B", x: 340, y: 90 },
        { id: "C", label: "C", x: 240, y: 230 },
        { id: "D", label: "D", x: 500, y: 230 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "A" },
        { from: "C", to: "D" },
      ],
      steps: [
        { phase: "A parent: null", title: "Start DFS at A", note: "A is the root of this component.", ruleLabel: "Parent", rule: "A <- null", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["A"] },
        { phase: "B parent: A", title: "Traverse A-B", note: "B's parent is A, so the B-A edge is expected.", ruleLabel: "Parent", rule: "B <- A", activeNode: "B", visitedNodes: ["A", "B"], frontierNodes: ["A", "B"], activeEdge: { from: "A", to: "B" } },
        { phase: "C parent: B", title: "Traverse B-C", note: "C's parent is B.", ruleLabel: "Parent", rule: "C <- B", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "B", to: "C" } },
        { phase: "C sees A", title: "Visited non-parent neighbor", note: "A is visited and is not C's parent, so A-B-C-A is a cycle.", ruleLabel: "Cycle proof", rule: "A visited and A != parent(C)", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A"], activeEdge: { from: "C", to: "A" } },
        { phase: "Cycle: true", title: "Return true", note: "The component contains a cycle.", ruleLabel: "Answer", rule: "cycle found", activeNode: "A", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "C"], activeEdge: { from: "C", to: "A" } },
      ],
    },
    complexity: { time: "O(V + E).", space: "O(V)." },
  },
  js: `// Cycle Detection in Undirected Graph
// Route: /algorithms/graphs/cycle-detection-undirected

export function cycleDetectionUndirected(graph) {
  const visited = new Set();

  function visit(node, parent) {
    visited.add(node);

    for (const next of graph[node] || []) {
      if (!visited.has(next) && visit(next, node)) return true;
      if (visited.has(next) && next !== parent) return true;
    }

    return false;
  }

  return Object.keys(graph).some((node) => !visited.has(node) && visit(node, null));
}`,
  cpp: `// Cycle Detection in Undirected Graph
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
}`,
};

pages.dijkstra = {
  folder: "dijkstra",
  patch: {
    problem: "Dijkstra's Algorithm computes shortest path distances from one start vertex when all edge weights are non-negative.",
    concept: "Dijkstra repeatedly finalizes the unvisited vertex with the smallest known distance, then relaxes its outgoing weighted edges.",
    logicSummary: "Initialize all distances to infinity except the start, choose the smallest unvisited distance, and improve neighbors through relaxation.",
    transitionSummary: "One transition finalizes a vertex and replaces a neighbor distance only when current distance plus edge weight is smaller.",
    codeInsight: "The distance table is the answer in progress; visited means a vertex's shortest distance is finalized.",
    realLifeExample: "Use Dijkstra for route planning, network latency, game maps, and any non-negative shortest-path problem.",
    whenToUse: "Use it for single-source shortest paths on weighted graphs with no negative edge weights.",
    memoryTrick: "Dijkstra locks the nearest unlocked vertex, then offers better prices to its neighbors.",
    visualizerCaption: "Watch each edge relaxation update the distance table until all reachable shortest paths are finalized.",
    logicSteps: [
      { title: "Initialize distances", text: "Set start to 0 and every other vertex to infinity." },
      { title: "Pick closest unvisited", text: "Choose the unvisited vertex with the smallest known distance." },
      { title: "Relax outgoing edges", text: "If going through current is cheaper, update the neighbor distance and predecessor." },
      { title: "Return shortest paths", text: "Final distances and previous pointers describe the shortest-path tree." },
    ],
    variables: [
      { name: "graph, start", purpose: "Weighted adjacency list and source vertex." },
      { name: "distances", purpose: "Best known distance from start to each vertex." },
      { name: "previous", purpose: "Predecessor pointer for reconstructing shortest paths." },
      { name: "visited", purpose: "Vertices whose shortest distance is finalized." },
    ],
    dryRun: [
      { label: "Initialize", title: "Set A = 0 and others infinity", note: "Only the start vertex has a known distance.", activeLine: 6, codeInsight: "distances starts as a table so every vertex has an explicit best-known value." },
      { label: "Relax A", title: "Finalize A and relax A-B, A-C", note: "B becomes 4 and C becomes 2.", activeLine: 17, codeInsight: "candidate is the path cost through the current finalized vertex." },
      { label: "Relax C", title: "Finalize C and improve B", note: "C at distance 2 makes B cheaper: 2 + 1 = 3.", activeLine: 19, codeInsight: "A smaller candidate replaces both distances[next] and previous[next]." },
      { label: "Relax B", title: "Finalize B and improve D", note: "B at distance 3 improves D to 8.", activeLine: 19, codeInsight: "Visited vertices are not chosen again, which locks their shortest distance." },
      { label: "Finish", title: "Finalize remaining reachable vertices", note: "D, E, and F settle with distances 8, 10, and 13.", activeLine: 25, codeInsight: "The function returns both distances and previous so the page can explain paths, not just numbers." },
    ],
    runnerInput: [
      {
        A: [["B", 4], ["C", 2]],
        B: [["D", 5]],
        C: [["B", 1], ["D", 8], ["E", 10]],
        D: [["E", 2], ["F", 6]],
        E: [["F", 3]],
        F: [],
      },
      "A",
    ],
    animation: {
      type: "edge-relaxation",
      title: "Dijkstra weighted relaxation",
      nodes: [
        { id: "A", label: "A", x: 70, y: 150 },
        { id: "B", label: "B", x: 220, y: 75 },
        { id: "C", label: "C", x: 220, y: 225 },
        { id: "D", label: "D", x: 390, y: 90 },
        { id: "E", label: "E", x: 390, y: 220 },
        { id: "F", label: "F", x: 560, y: 150 },
      ],
      edges: [
        { from: "A", to: "B", weight: 4 },
        { from: "A", to: "C", weight: 2 },
        { from: "C", to: "B", weight: 1 },
        { from: "B", to: "D", weight: 5 },
        { from: "C", to: "D", weight: 8 },
        { from: "C", to: "E", weight: 10 },
        { from: "D", to: "E", weight: 2 },
        { from: "D", to: "F", weight: 6 },
        { from: "E", to: "F", weight: 3 },
      ],
      steps: [
        { pass: "Initialize", title: "Only A is known", note: "All distances start at infinity except A = 0.", distances: { A: 0 }, relaxedNode: "A" },
        { pass: "Finalize A", title: "Relax A's outgoing edges", note: "A -> B sets B = 4; A -> C sets C = 2.", distances: { A: 0, B: 4, C: 2 }, activeEdge: { from: "A", to: "C" }, relaxedNode: "C" },
        { pass: "Finalize C", title: "C improves B", note: "C -> B offers 2 + 1 = 3, better than 4.", distances: { A: 0, B: 3, C: 2, D: 10, E: 12 }, activeEdge: { from: "C", to: "B" }, relaxedNode: "B" },
        { pass: "Finalize B", title: "B improves D", note: "B -> D offers 3 + 5 = 8, better than 10.", distances: { A: 0, B: 3, C: 2, D: 8, E: 12 }, activeEdge: { from: "B", to: "D" }, relaxedNode: "D" },
        { pass: "Finalize D/E", title: "Finish shortest paths", note: "D improves E to 10, then E improves F to 13.", distances: { A: 0, B: 3, C: 2, D: 8, E: 10, F: 13 }, activeEdge: { from: "E", to: "F" }, relaxedNode: "F" },
      ],
    },
    complexity: { time: "O(V^2 + E) for this simple array-scan implementation; O((V + E) log V) with a priority queue.", space: "O(V)." },
  },
  js: `// Dijkstra's Algorithm
// Route: /algorithms/graphs/dijkstra

export function dijkstra(graph, start) {
  const distances = Object.fromEntries(Object.keys(graph).map((node) => [node, Infinity]));
  const previous = Object.fromEntries(Object.keys(graph).map((node) => [node, null]));
  const visited = new Set();

  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    const node = Object.keys(distances)
      .filter((candidate) => !visited.has(candidate))
      .sort((a, b) => distances[a] - distances[b])[0];

    if (node === undefined || distances[node] === Infinity) break;
    visited.add(node);

    for (const [next, weight] of graph[node] || []) {
      const candidate = distances[node] + weight;
      if (candidate < distances[next]) {
        distances[next] = candidate;
        previous[next] = node;
      }
    }
  }

  return { distances, previous };
}`,
  cpp: `// Dijkstra's Algorithm
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
}`,
};

pages["union-find"] = {
  folder: "union-find",
  patch: {
    problem: "Union Find tracks which vertices belong to the same component while merging sets quickly.",
    concept: "Disjoint Set Union represents each component as a parent tree; find returns the root and union attaches one root to another.",
    logicSummary: "Initialize every vertex as its own parent, compress paths during find, and union only when two roots differ.",
    transitionSummary: "One transition checks two roots; if they differ, the lower-rank root points at the higher-rank root.",
    codeInsight: "The parent array is the component map. Path compression edits parent pointers without changing the component answer.",
    realLifeExample: "Use Union Find for connectivity queries, Kruskal's MST, grouping accounts, and dynamic component merging.",
    whenToUse: "Use it when edges arrive as merge operations and you need fast same-component checks.",
    memoryTrick: "Union Find: ask each node for its root, then merge roots, not leaves.",
    visualizerCaption: "Watch parent trees merge and path compression flatten component lookups.",
    logicSteps: [
      { title: "Create singleton sets", text: "Every node starts as its own parent with rank 0." },
      { title: "Find roots", text: "Follow parent pointers until the component root is reached." },
      { title: "Union roots", text: "Attach one root under the other when the components differ." },
      { title: "Return merge results", text: "Each operation reports whether a real merge happened." },
    ],
    variables: [
      { name: "size, operations", purpose: "Number of vertices and the pairs to merge." },
      { name: "parent", purpose: "Parent pointer for each component tree." },
      { name: "rank", purpose: "Approximate tree height used to keep merges shallow." },
      { name: "merge result", purpose: "Boolean per operation: true when two components merged." },
    ],
    dryRun: [
      { label: "Singletons", title: "Each node is its own parent", note: "parent = [0, 1, 2, 3, 4].", activeLine: 5, codeInsight: "Array.from creates one component root per vertex." },
      { label: "Union 0-1", title: "Merge roots 0 and 1", note: "The roots differ, so 1 points to 0 and rank[0] grows.", activeLine: 13, codeInsight: "The code updates parent[rootB], not parent[b], so the whole component is merged." },
      { label: "Union 1-2", title: "Find compresses 1 to root 0", note: "1 already points to 0, so 2 joins the same component.", activeLine: 7, codeInsight: "find rewrites parent[node] to the root while returning it." },
      { label: "Union 3-4", title: "Build a second component", note: "3 and 4 form another component tree.", activeLine: 13, codeInsight: "Separate roots remain separate until a union connects them." },
      { label: "Union 2-4", title: "Merge the two components", note: "Root 0 and root 3 differ, so the two sets become one.", activeLine: 15, codeInsight: "Rank decides which root stays higher in the tree." },
    ],
    runnerInput: [5, [[0, 1], [1, 2], [3, 4], [2, 4]]],
    animation: {
      static: true,
      type: "tree-operation",
      title: "Union Find parent forest",
      nodes: [
        { id: "0", label: "0", x: 120, y: 80 },
        { id: "1", label: "1", x: 60, y: 190 },
        { id: "2", label: "2", x: 180, y: 190 },
        { id: "3", label: "3", x: 440, y: 90 },
        { id: "4", label: "4", x: 440, y: 210 },
      ],
      edges: [
        { from: "0", to: "1" },
        { from: "0", to: "2" },
        { from: "3", to: "4" },
      ],
      legend: [
        { className: "current", label: "Find root" },
        { className: "target", label: "Root being attached" },
        { className: "replacement", label: "Merged root" },
      ],
      steps: [
        { phase: "Make sets", title: "Start with five singleton components", note: "Each vertex is its own root before any union runs.", ruleLabel: "Parents", rule: "0->0, 1->1, 2->2, 3->3, 4->4", activeNode: "0", targetNode: "1", mutedNodes: ["1", "2", "3", "4"] },
        { phase: "union(0, 1)", title: "Attach 1 under 0", note: "find(0) and find(1) return different roots.", ruleLabel: "Parents", rule: "1 now points to 0", activeNode: "0", targetNode: "1", replacementNode: "0", mutedNodes: ["2", "3", "4"] },
        { phase: "union(1, 2)", title: "Compress 1, attach 2 under 0", note: "find(1) follows 1 -> 0, then 2 joins root 0.", ruleLabel: "Parents", rule: "2 now points to 0", activeNode: "1", targetNode: "2", replacementNode: "0", mutedNodes: ["3", "4"] },
        { phase: "union(3, 4)", title: "Create the second component", note: "3 and 4 merge separately from 0, 1, and 2.", ruleLabel: "Parents", rule: "4 now points to 3", activeNode: "3", targetNode: "4", replacementNode: "3" },
        { phase: "union(2, 4)", title: "Connect both components", note: "find(2) returns 0 and find(4) returns 3, so the components merge.", ruleLabel: "Answer", rule: "all five vertices are connected", activeNode: "2", targetNode: "4", replacementNode: "0" },
      ],
    },
    complexity: { time: "Almost O(1) amortized per operation with path compression and union by rank.", space: "O(V)." },
  },
  js: `// Disjoint Set Union / Union Find
// Route: /algorithms/graphs/union-find

export function unionFind(size, operations) {
  const parent = Array.from({ length: size }, (_, index) => index);
  const rank = Array(size).fill(0);

  function find(node) {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  }

  function unite(a, b) {
    let rootA = find(a);
    let rootB = find(b);
    if (rootA === rootB) return false;
    if (rank[rootA] < rank[rootB]) [rootA, rootB] = [rootB, rootA];
    parent[rootB] = rootA;
    if (rank[rootA] === rank[rootB]) rank[rootA] += 1;
    return true;
  }

  return operations.map(([a, b]) => unite(a, b));
}`,
  cpp: `// Disjoint Set Union / Union Find
// Route: /algorithms/graphs/union-find

#include <bits/stdc++.h>
using namespace std;

class UnionFind {
    vector<int> parent;
    vector<int> rank;

public:
    explicit UnionFind(int size) : parent(size), rank(size, 0) {
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int node) {
        if (parent[node] != node) parent[node] = find(parent[node]);
        return parent[node];
    }

    bool unite(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        if (rootA == rootB) return false;
        if (rank[rootA] < rank[rootB]) swap(rootA, rootB);
        parent[rootB] = rootA;
        if (rank[rootA] == rank[rootB]) rank[rootA]++;
        return true;
    }
};`,
};

pages["topological-sort"] = {
  folder: "topological-sort",
  patch: {
    problem: "Topological Sort orders a directed acyclic graph so every prerequisite appears before the work that depends on it.",
    concept: "Kahn's algorithm repeatedly removes zero-indegree vertices and decreases the indegree of their outgoing neighbors.",
    logicSummary: "Build indegree counts, enqueue every zero-indegree vertex, pop one safe vertex, and unlock neighbors as counts reach zero.",
    transitionSummary: "One transition emits a zero-indegree vertex and decrements each dependent neighbor's indegree.",
    codeInsight: "The queue contains only vertices whose prerequisites are already emitted; a leftover vertex means the graph had a cycle.",
    realLifeExample: "Use topological sort for course schedules, build steps, migration order, and dependency execution plans.",
    whenToUse: "Use it on directed acyclic graphs when dependencies must be respected.",
    memoryTrick: "Topo sort only releases a task when its prerequisite count reaches zero.",
    visualizerCaption: "Watch zero-indegree vertices leave the DAG and unlock the next tasks.",
    logicSteps: [
      { title: "Count prerequisites", text: "Compute indegree for every vertex." },
      { title: "Seed safe queue", text: "Add all vertices with indegree 0." },
      { title: "Emit and decrement", text: "Remove one safe vertex and decrement its outgoing neighbors." },
      { title: "Detect cycles", text: "If not every vertex is emitted, the graph was not a DAG." },
    ],
    variables: [
      { name: "graph", purpose: "Directed adjacency list of prerequisite edges." },
      { name: "indegree", purpose: "Number of unmet prerequisites per vertex." },
      { name: "queue", purpose: "Vertices currently safe to output." },
      { name: "order", purpose: "Final dependency-respecting order, or null if a cycle exists." },
    ],
    dryRun: [
      { label: "Count", title: "Build indegree table", note: "A and B have no prerequisites; C waits for A and B.", activeLine: 5, codeInsight: "The first pass creates an indegree slot for every vertex." },
      { label: "Queue", title: "Seed A and B", note: "Both A and B can run immediately.", activeLine: 7, codeInsight: "Only indegree-0 vertices enter the queue." },
      { label: "Emit A", title: "A unlocks one prerequisite for C", note: "C still waits for B.", activeLine: 13, codeInsight: "Decrementing indegree[next] models one prerequisite being completed." },
      { label: "Emit B", title: "B unlocks C", note: "C reaches indegree 0 and enters the queue.", activeLine: 14, codeInsight: "A neighbor is queued exactly when its count becomes zero." },
      { label: "Finish", title: "Return a full order", note: "The final order includes all vertices, so the graph is acyclic.", activeLine: 17, codeInsight: "The length check is the cycle guard." },
    ],
    runnerInput: [{ A: ["C"], B: ["C", "D"], C: ["E"], D: ["F"], E: ["F"], F: [] }],
    animation: {
      static: true,
      type: "graph-flow",
      title: "Topological Sort zero-indegree queue",
      ruleLabel: "DAG invariant",
      rule: "Only vertices with indegree 0 can be emitted.",
      nodes: [
        { id: "A", label: "A", x: 90, y: 90 },
        { id: "B", label: "B", x: 90, y: 220 },
        { id: "C", label: "C", x: 260, y: 150 },
        { id: "D", label: "D", x: 260, y: 250 },
        { id: "E", label: "E", x: 430, y: 110 },
        { id: "F", label: "F", x: 560, y: 190 },
      ],
      edges: [
        { from: "A", to: "C", directed: true },
        { from: "B", to: "C", directed: true },
        { from: "B", to: "D", directed: true },
        { from: "C", to: "E", directed: true },
        { from: "D", to: "F", directed: true },
        { from: "E", to: "F", directed: true },
      ],
      steps: [
        { phase: "Queue: [A, B]", title: "A and B have indegree 0", note: "They are safe because no prerequisites point into them.", ruleLabel: "Indegree", rule: "A=0, B=0, C=2, D=1, E=1, F=2", activeNode: "A", visitedNodes: [], frontierNodes: ["A", "B"] },
        { phase: "Emit A", title: "A reduces C", note: "C still has one unmet prerequisite after A is emitted.", ruleLabel: "Order", rule: "A", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["B"], activeEdge: { from: "A", to: "C" } },
        { phase: "Emit B", title: "B releases C and D", note: "C and D now reach indegree 0.", ruleLabel: "Queue", rule: "[C, D]", activeNode: "B", visitedNodes: ["A", "B"], frontierNodes: ["C", "D"], activeEdge: { from: "B", to: "D" } },
        { phase: "Emit C", title: "C releases E", note: "E is now safe to process.", ruleLabel: "Queue", rule: "[D, E]", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["D", "E"], activeEdge: { from: "C", to: "E" } },
        { phase: "Finish", title: "All vertices emitted", note: "D and E unlock F, then F closes the order.", ruleLabel: "Order", rule: "A, B, C, D, E, F", activeNode: "F", visitedNodes: ["A", "B", "C", "D", "E", "F"], frontierNodes: [] },
      ],
    },
    complexity: { time: "O(V + E).", space: "O(V)." },
  },
  js: `// Topological Sort
// Route: /algorithms/graphs/topological-sort

export function topologicalSort(graph) {
  const indegree = {};
  for (const node of Object.keys(graph)) indegree[node] = 0;
  for (const edges of Object.values(graph)) {
    for (const next of edges) indegree[next] = (indegree[next] ?? 0) + 1;
  }

  const queue = Object.keys(indegree).filter((node) => indegree[node] === 0);
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node] || []) {
      indegree[next] -= 1;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return order.length === Object.keys(indegree).length ? order : null;
}`,
  cpp: `// Topological Sort
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
}`,
};

pages["bellman-ford"] = {
  folder: "bellman-ford",
  patch: {
    problem: "Bellman-Ford computes single-source shortest paths even when some edges are negative.",
    concept: "Bellman-Ford relaxes every edge V - 1 times, then scans once more to detect a reachable negative cycle.",
    logicSummary: "Set the start distance to 0, scan every edge repeatedly, and keep any shorter candidate distance.",
    transitionSummary: "One transition tests distance[from] + weight against distance[to] and updates only when it improves.",
    codeInsight: "The final extra edge scan is not another shortest-path pass; it is the proof that a negative cycle exists or does not.",
    realLifeExample: "Use Bellman-Ford for graphs with rebates, penalties, currency arbitrage checks, or any shortest-path graph with negative edges.",
    whenToUse: "Use it when edge weights may be negative and you also need negative-cycle detection.",
    memoryTrick: "Bellman-Ford lets every edge make an offer, then asks if any offer is still improving.",
    visualizerCaption: "Watch repeated edge relaxation update the distance table and then test for a negative cycle.",
    logicSteps: [
      { title: "Initialize distances", text: "Start is 0; all other vertices are infinity." },
      { title: "Relax every edge", text: "Try to improve each destination using each source edge." },
      { title: "Repeat V - 1 times", text: "Enough passes allow paths with up to V - 1 edges." },
      { title: "Check one more pass", text: "Any remaining improvement means a negative cycle is reachable." },
    ],
    variables: [
      { name: "vertices, edges, start", purpose: "Graph vertex list, weighted directed edges, and source vertex." },
      { name: "distance", purpose: "Best known cost from start to each vertex." },
      { name: "pass", purpose: "The current full edge-scan iteration." },
      { name: "hasNegativeCycle", purpose: "True when an edge still improves after V - 1 passes." },
    ],
    dryRun: [
      { label: "Initialize", title: "Set A = 0", note: "B, C, and D start at infinity.", activeLine: 6, codeInsight: "Only the source can relax outgoing edges at first." },
      { label: "Relax A-B", title: "B becomes 4", note: "A -> B offers 0 + 4.", activeLine: 10, codeInsight: "The update only happens when the candidate is smaller." },
      { label: "Relax A-C", title: "C becomes 5", note: "A -> C offers 0 + 5.", activeLine: 10, codeInsight: "Every edge is tested in the same pass." },
      { label: "Relax B-C", title: "C improves to 2", note: "B has 4, and B -> C has weight -2, so C becomes 2.", activeLine: 10, codeInsight: "Negative edges are allowed because the algorithm repeats full passes." },
      { label: "Cycle check", title: "No further improvement", note: "The final scan finds no edge that can still lower a distance.", activeLine: 15, codeInsight: "The extra scan sets hasNegativeCycle." },
    ],
    runnerInput: [["A", "B", "C", "D"], [["A", "B", 4], ["A", "C", 5], ["B", "C", -2], ["C", "D", 3], ["B", "D", 6]], "A"],
    animation: {
      static: true,
      type: "edge-relaxation",
      title: "Bellman-Ford repeated relaxation",
      nodes: [
        { id: "A", label: "A", x: 90, y: 150 },
        { id: "B", label: "B", x: 260, y: 80 },
        { id: "C", label: "C", x: 260, y: 220 },
        { id: "D", label: "D", x: 480, y: 150 },
      ],
      edges: [
        { from: "A", to: "B", weight: 4 },
        { from: "A", to: "C", weight: 5 },
        { from: "B", to: "C", weight: -2 },
        { from: "C", to: "D", weight: 3 },
        { from: "B", to: "D", weight: 6 },
      ],
      steps: [
        { pass: "Initialize", title: "Only A is reachable", note: "distance[A] = 0; every other vertex starts at infinity.", distances: { A: 0 }, relaxedNode: "A" },
        { pass: "Pass 1", title: "Relax A -> B", note: "B improves from infinity to 4.", distances: { A: 0, B: 4 }, activeEdge: { from: "A", to: "B" }, relaxedNode: "B" },
        { pass: "Pass 1", title: "Relax A -> C", note: "C improves from infinity to 5.", distances: { A: 0, B: 4, C: 5 }, activeEdge: { from: "A", to: "C" }, relaxedNode: "C" },
        { pass: "Pass 1", title: "Relax B -> C", note: "The negative edge lowers C from 5 to 2.", distances: { A: 0, B: 4, C: 2 }, activeEdge: { from: "B", to: "C" }, relaxedNode: "C" },
        { pass: "Pass 2", title: "Relax C -> D", note: "D becomes 5 through A -> B -> C -> D.", distances: { A: 0, B: 4, C: 2, D: 5 }, activeEdge: { from: "C", to: "D" }, relaxedNode: "D" },
      ],
    },
    complexity: { time: "O(VE).", space: "O(V)." },
  },
  js: `// Bellman-Ford Algorithm
// Route: /algorithms/graphs/bellman-ford

export function bellmanFord(vertices, edges, start) {
  const distance = Object.fromEntries(vertices.map((vertex) => [vertex, Infinity]));
  distance[start] = 0;

  for (let pass = 1; pass < vertices.length; pass += 1) {
    for (const [from, to, weight] of edges) {
      const candidate = distance[from] + weight;
      if (distance[from] !== Infinity && candidate < distance[to]) {
        distance[to] = candidate;
      }
    }
  }

  const hasNegativeCycle = edges.some(([from, to, weight]) => (
    distance[from] !== Infinity && distance[from] + weight < distance[to]
  ));

  return { distance, hasNegativeCycle };
}`,
  cpp: `// Bellman-Ford Algorithm
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
}`,
};

pages["floyd-warshall"] = {
  folder: "floyd-warshall",
  patch: {
    problem: "Floyd-Warshall computes shortest paths between every pair of vertices.",
    concept: "The algorithm lets each vertex become an intermediate stop and asks whether i -> k -> j improves i -> j.",
    logicSummary: "Copy the distance matrix, choose an intermediate vertex, and update every from/to pair through that intermediate.",
    transitionSummary: "One transition replaces dist[from][to] with dist[from][mid] + dist[mid][to] only when that route is shorter.",
    codeInsight: "The loop order is the algorithm: mid is outside so each phase allows one more intermediate vertex.",
    realLifeExample: "Use Floyd-Warshall for all-pairs shortest paths on small dense graphs or route tables.",
    whenToUse: "Use it when you need every source-to-target shortest path and O(V^3) is acceptable.",
    memoryTrick: "Floyd-Warshall asks: would going through k make this pair cheaper?",
    visualizerCaption: "Watch a distance matrix improve as each vertex is allowed as an intermediate stop.",
    logicSteps: [
      { title: "Copy the matrix", text: "Start from direct edge distances." },
      { title: "Pick intermediate k", text: "Allow one vertex to be used as a bridge." },
      { title: "Update every pair", text: "Compare direct distance with from -> k -> to." },
      { title: "Return the matrix", text: "After all k phases, every pair has its shortest distance." },
    ],
    variables: [
      { name: "matrix", purpose: "Initial all-pairs distance table." },
      { name: "mid", purpose: "Intermediate vertex currently allowed." },
      { name: "from, to", purpose: "Pair being tested against the intermediate route." },
      { name: "dist", purpose: "Improving all-pairs shortest-path table." },
    ],
    dryRun: [
      { label: "Copy", title: "Copy direct distances", note: "A large value stands for no direct edge.", activeLine: 5, codeInsight: "The spread copy prevents the input matrix from being mutated." },
      { label: "Through B", title: "A reaches C through B", note: "A -> B -> C costs 3 + 2 = 5, better than infinity.", activeLine: 9, codeInsight: "The nested loops compare direct and through-mid costs." },
      { label: "Through C", title: "A reaches D through C", note: "A -> C -> D costs 5 + 1 = 6.", activeLine: 9, codeInsight: "Newly improved entries can help later intermediate phases." },
      { label: "Through D", title: "B reaches A through D", note: "B -> C -> D -> A becomes 6.", activeLine: 9, codeInsight: "Every ordered pair is checked, not just outgoing edges from one source." },
      { label: "Return", title: "Return all-pairs distances", note: "The matrix now stores the best known distance for every source and destination.", activeLine: 14, codeInsight: "The returned matrix is the answer, not a single path." },
    ],
    runnerInput: [[[0, 3, 99, 7], [8, 0, 2, 99], [5, 99, 0, 1], [2, 99, 99, 0]]],
    animation: {
      static: true,
      type: "matrix-flow",
      title: "Floyd-Warshall distance matrix",
      ruleLabel: "Intermediate rule",
      rule: "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])",
      matrix: [
        [0, 3, "∞", 7],
        [8, 0, 2, "∞"],
        [5, "∞", 0, 1],
        [2, "∞", "∞", 0],
      ],
      steps: [
        { phase: "Initial", title: "Direct distances only", note: "The matrix starts with edge weights and infinity for missing edges.", ruleLabel: "Allowed intermediates", rule: "none", activeCells: [[0, 1], [1, 2], [2, 3]], visitedCells: [] },
        { phase: "k = B", title: "A reaches C through B", note: "A -> B -> C costs 5, so A,C improves from infinity.", ruleLabel: "Update", rule: "dist[A][C] = 5", activeCells: [[0, 2]], visitedCells: [[0, 1], [1, 2], [0, 2]] },
        { phase: "k = C", title: "A reaches D through C", note: "A -> C -> D costs 6, better than 7.", ruleLabel: "Update", rule: "dist[A][D] = 6", activeCells: [[0, 3]], visitedCells: [[0, 2], [2, 3], [0, 3]] },
        { phase: "k = D", title: "B reaches A through D", note: "B -> C -> D -> A costs 6.", ruleLabel: "Update", rule: "dist[B][A] = 6", activeCells: [[1, 0]], visitedCells: [[1, 2], [2, 3], [3, 0], [1, 0]] },
        { phase: "Done", title: "All intermediates processed", note: "Every pair has been tested through every possible middle vertex.", ruleLabel: "Answer", rule: "all-pairs shortest paths", activeCells: [[0, 0], [1, 1], [2, 2], [3, 3]], visitedCells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0], [1, 1], [1, 2], [1, 3], [2, 0], [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [3, 2], [3, 3]] },
      ],
    },
    complexity: { time: "O(V^3).", space: "O(V^2)." },
  },
  js: `// Floyd-Warshall Algorithm
// Route: /algorithms/graphs/floyd-warshall

export function floydWarshall(matrix) {
  const dist = matrix.map((row) => [...row]);

  for (let mid = 0; mid < dist.length; mid += 1) {
    for (let from = 0; from < dist.length; from += 1) {
      for (let to = 0; to < dist.length; to += 1) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }

  return dist;
}`,
  cpp: `// Floyd-Warshall Algorithm
// Route: /algorithms/graphs/floyd-warshall

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> floydWarshall(vector<vector<int>> matrix) {
    int n = matrix.size();
    for (int mid = 0; mid < n; mid++) {
        for (int from = 0; from < n; from++) {
            for (int to = 0; to < n; to++) {
                if (matrix[from][mid] == INT_MAX || matrix[mid][to] == INT_MAX) continue;
                matrix[from][to] = min(matrix[from][to], matrix[from][mid] + matrix[mid][to]);
            }
        }
    }
    return matrix;
}`,
};

pages.kosaraju = {
  folder: "kosaraju",
  patch: {
    problem: "Kosaraju's Algorithm finds strongly connected components with two DFS passes.",
    concept: "The first DFS records finish order; the second DFS runs on the reversed graph in that order to collect SCCs.",
    logicSummary: "Run DFS to fill a stack by finish time, reverse every edge, then pop vertices and collect reversed-graph components.",
    transitionSummary: "One transition finishes a vertex into order; the second pass turns a popped root into one full component.",
    codeInsight: "The reversed graph is essential: finish order picks component sources, and reversed DFS gathers exactly that SCC.",
    realLifeExample: "Use Kosaraju for mutual reachability groups, module cycles, call graphs, and directed dependency analysis.",
    whenToUse: "Use it when you need all strongly connected components and a clear two-pass DFS is acceptable.",
    memoryTrick: "Kosaraju: finish order first, reverse roads second, collect islands third.",
    visualizerCaption: "Watch finish order and reversed-edge collection split the directed graph into SCCs.",
    logicSteps: [
      { title: "First DFS", text: "Push each vertex after all outgoing work finishes." },
      { title: "Reverse graph", text: "Build a graph where every edge points backward." },
      { title: "Pop finish order", text: "Use the latest finishing vertex as the next root." },
      { title: "Collect SCC", text: "DFS on the reversed graph emits one strongly connected component." },
    ],
    variables: [
      { name: "graph", purpose: "Original directed adjacency list." },
      { name: "order", purpose: "Vertices sorted by first-pass finish time." },
      { name: "reversed", purpose: "Graph with every edge reversed." },
      { name: "components", purpose: "List of strongly connected components." },
    ],
    dryRun: [
      { label: "Finish A/B/C", title: "First DFS closes the cycle", note: "A, B, and C finish after exploring each other.", activeLine: 9, codeInsight: "order.push(node) happens after recursion, so this is finish order." },
      { label: "Reverse", title: "Reverse every directed edge", note: "The second pass will walk incoming edges as outgoing edges.", activeLine: 15, codeInsight: "reversed[next].push(node) flips each edge." },
      { label: "Pop A", title: "Collect A, C, B", note: "The reversed DFS from A reaches exactly its SCC.", activeLine: 25, codeInsight: "collect pushes every vertex in the component." },
      { label: "Pop D", title: "Collect D and E", note: "D and E form the next SCC.", activeLine: 30, codeInsight: "Visited vertices from prior components are skipped." },
      { label: "Return", title: "Return all components", note: "Components are emitted as SCC groups.", activeLine: 35, codeInsight: "The result is a list of vertex groups, not traversal order." },
    ],
    runnerInput: [{ A: ["B"], B: ["C"], C: ["A", "D"], D: ["E"], E: ["D"] }],
    animation: {
      static: true,
      type: "graph-flow",
      title: "Kosaraju two-pass SCC trace",
      ruleLabel: "SCC invariant",
      rule: "Finish order on the original graph guides component collection on the reversed graph.",
      nodes: [
        { id: "A", label: "A", x: 120, y: 110 },
        { id: "B", label: "B", x: 260, y: 70 },
        { id: "C", label: "C", x: 220, y: 220 },
        { id: "D", label: "D", x: 420, y: 130 },
        { id: "E", label: "E", x: 540, y: 210 },
      ],
      edges: [
        { from: "A", to: "B", directed: true },
        { from: "B", to: "C", directed: true },
        { from: "C", to: "A", directed: true },
        { from: "C", to: "D", directed: true },
        { from: "D", to: "E", directed: true },
        { from: "E", to: "D", directed: true },
      ],
      steps: [
        { phase: "DFS pass 1", title: "Finish the A-B-C cycle", note: "A, B, and C share reachability before C leads to D.", ruleLabel: "Finish stack", rule: "C, B, A later than D/E", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "C", to: "A" } },
        { phase: "Reverse graph", title: "Flip every edge", note: "Incoming edges become outgoing edges for component collection.", ruleLabel: "Reversed edge", rule: "D -> C replaces C -> D", activeNode: "D", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: [], activeEdge: { from: "C", to: "D" } },
        { phase: "Collect SCC 1", title: "Pop A and collect A, C, B", note: "The reversed graph keeps this search inside the first SCC.", ruleLabel: "Component", rule: "{A, B, C}", activeNode: "A", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "A", to: "B" } },
        { phase: "Collect SCC 2", title: "Pop D and collect D, E", note: "D and E reach each other but not A/B/C in this pass.", ruleLabel: "Component", rule: "{D, E}", activeNode: "D", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: ["D", "E"], activeEdge: { from: "D", to: "E" } },
        { phase: "Done", title: "Return SCC groups", note: "Every vertex belongs to exactly one returned component.", ruleLabel: "Answer", rule: "[A,B,C], [D,E]", activeNode: "E", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: [] },
      ],
    },
    complexity: { time: "O(V + E).", space: "O(V + E)." },
  },
  js: `// Kosaraju's Algorithm
// Route: /algorithms/graphs/kosaraju

export function kosaraju(graph) {
  const visited = new Set();
  const order = [];

  function dfs(node) {
    visited.add(node);
    for (const next of graph[node] || []) {
      if (!visited.has(next)) dfs(next);
    }
    order.push(node);
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) dfs(node);
  }

  const reversed = {};
  for (const [node, edges] of Object.entries(graph)) {
    reversed[node] ||= [];
    for (const next of edges) {
      reversed[next] ||= [];
      reversed[next].push(node);
    }
  }

  visited.clear();
  const components = [];

  function collect(node, component) {
    visited.add(node);
    component.push(node);
    for (const next of reversed[node] || []) {
      if (!visited.has(next)) collect(next, component);
    }
  }

  while (order.length > 0) {
    const node = order.pop();
    if (visited.has(node)) continue;
    const component = [];
    collect(node, component);
    components.push(component);
  }

  return components;
}`,
  cpp: `// Kosaraju's Algorithm
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
}`,
};

pages.kruskal = {
  folder: "kruskal",
  patch: {
    problem: "Kruskal's Algorithm builds a minimum spanning tree by choosing the cheapest safe edge.",
    concept: "Sort edges by weight and use Union Find to reject any edge whose endpoints are already connected.",
    logicSummary: "Sort all edges, scan from cheapest to most expensive, and add an edge only when union succeeds.",
    transitionSummary: "One transition tests an edge against the component forest; accepted edges merge components and join the MST.",
    codeInsight: "Kruskal is an edge-first MST: Union Find is the safety check that prevents cycles.",
    realLifeExample: "Use Kruskal for connecting sites, cables, roads, or clusters with minimum total cost.",
    whenToUse: "Use it for undirected weighted graphs when an MST is needed and sorting edges is acceptable.",
    memoryTrick: "Kruskal buys the cheapest edge that does not close a cycle.",
    visualizerCaption: "Watch edges become accepted or skipped as Union Find protects the MST invariant.",
    logicSteps: [
      { title: "Sort edges", text: "Cheapest edges are considered first." },
      { title: "Find endpoints", text: "Use Union Find to get each endpoint's component." },
      { title: "Accept safe edge", text: "If roots differ, add the edge and merge components." },
      { title: "Return MST", text: "Stop after enough safe edges have been chosen." },
    ],
    variables: [
      { name: "vertexCount, edges", purpose: "Number of vertices and weighted undirected edges." },
      { name: "parent", purpose: "Union Find parent array for cycle checks." },
      { name: "edge", purpose: "Current cheapest remaining edge being tested." },
      { name: "mst", purpose: "Accepted edges in the minimum spanning tree." },
    ],
    dryRun: [
      { label: "Sort", title: "Sort edges by weight", note: "The scan starts with the cheapest candidate.", activeLine: 16, codeInsight: "Sorting defines Kruskal's global greedy order." },
      { label: "Accept 0-1", title: "Add edge 0-1 weight 1", note: "Different components merge safely.", activeLine: 17, codeInsight: "unite returns true only when no cycle is formed." },
      { label: "Accept 1-2", title: "Add edge 1-2 weight 2", note: "Vertex 2 joins the growing tree.", activeLine: 17, codeInsight: "The MST grows by edges, not by a start vertex." },
      { label: "Skip 0-2", title: "Reject cycle edge", note: "0 and 2 already share a component.", activeLine: 10, codeInsight: "Same-root endpoints prove the edge would create a cycle." },
      { label: "Finish", title: "Return accepted edges", note: "The accepted set spans all vertices with minimum total weight.", activeLine: 20, codeInsight: "mst contains exactly the safe edges chosen by the greedy scan." },
    ],
    runnerInput: [5, [[0, 1, 1], [1, 2, 2], [0, 2, 3], [2, 3, 4], [3, 4, 5], [1, 4, 8]]],
    animation: {
      static: true,
      type: "graph-flow",
      title: "Kruskal MST edge scan",
      ruleLabel: "MST invariant",
      rule: "Accept the cheapest edge that connects two different components.",
      nodes: [
        { id: "0", label: "0", x: 100, y: 120 },
        { id: "1", label: "1", x: 230, y: 70 },
        { id: "2", label: "2", x: 300, y: 210 },
        { id: "3", label: "3", x: 450, y: 130 },
        { id: "4", label: "4", x: 560, y: 230 },
      ],
      edges: [
        { from: "0", to: "1", weight: 1 },
        { from: "1", to: "2", weight: 2 },
        { from: "0", to: "2", weight: 3 },
        { from: "2", to: "3", weight: 4 },
        { from: "3", to: "4", weight: 5 },
        { from: "1", to: "4", weight: 8 },
      ],
      steps: [
        { phase: "Sort by weight", title: "Consider 0-1 first", note: "It is the cheapest edge.", ruleLabel: "Components", rule: "{0}, {1}, {2}, {3}, {4}", activeNode: "0", visitedNodes: [], frontierNodes: ["0", "1"], activeEdge: { from: "0", to: "1" } },
        { phase: "Accept 0-1", title: "Merge components 0 and 1", note: "The edge is safe and enters the MST.", ruleLabel: "MST", rule: "(0-1)", activeNode: "1", visitedNodes: ["0", "1"], frontierNodes: ["0", "1"], activeEdge: { from: "0", to: "1" } },
        { phase: "Accept 1-2", title: "Merge vertex 2", note: "1 and 2 are in different components.", ruleLabel: "MST", rule: "(0-1), (1-2)", activeNode: "2", visitedNodes: ["0", "1", "2"], frontierNodes: ["1", "2"], activeEdge: { from: "1", to: "2" } },
        { phase: "Skip 0-2", title: "Reject the cycle", note: "0 and 2 are already connected through 1.", ruleLabel: "Cycle check", rule: "same root", activeNode: "0", visitedNodes: ["0", "1", "2"], frontierNodes: ["0", "2"], activeEdge: { from: "0", to: "2" } },
        { phase: "Finish MST", title: "Accept 2-3 and 3-4", note: "The tree now spans all five vertices.", ruleLabel: "MST", rule: "total weight 12", activeNode: "4", visitedNodes: ["0", "1", "2", "3", "4"], frontierNodes: [], activeEdge: { from: "3", to: "4" } },
      ],
    },
    complexity: { time: "O(E log E).", space: "O(V)." },
  },
  js: `// Kruskal's Algorithm
// Route: /algorithms/graphs/kruskal

export function kruskal(vertexCount, edges) {
  const parent = Array.from({ length: vertexCount }, (_, index) => index);

  function find(node) {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  }

  function unite(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  }

  const mst = [];
  for (const edge of [...edges].sort((a, b) => a[2] - b[2])) {
    if (unite(edge[0], edge[1])) mst.push(edge);
  }
  return mst;
}`,
  cpp: `// Kruskal's Algorithm
// Route: /algorithms/graphs/kruskal

#include <bits/stdc++.h>
using namespace std;

int findRoot(vector<int>& parent, int node) {
    if (parent[node] != node) parent[node] = findRoot(parent, parent[node]);
    return parent[node];
}

bool unite(vector<int>& parent, int a, int b) {
    int rootA = findRoot(parent, a);
    int rootB = findRoot(parent, b);
    if (rootA == rootB) return false;
    parent[rootB] = rootA;
    return true;
}

vector<array<int, 3>> kruskal(int vertexCount, vector<array<int, 3>> edges) {
    vector<int> parent(vertexCount);
    iota(parent.begin(), parent.end(), 0);
    sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
        return a[2] < b[2];
    });

    vector<array<int, 3>> mst;
    for (const auto& edge : edges) {
        if (unite(parent, edge[0], edge[1])) mst.push_back(edge);
    }
    return mst;
}`,
};

pages.prim = {
  folder: "prim",
  patch: {
    problem: "Prim's Algorithm grows a minimum spanning tree from one start vertex.",
    concept: "Prim keeps a visited tree and repeatedly adds the cheapest edge crossing from visited to unvisited.",
    logicSummary: "Start with one vertex, scan all outgoing frontier edges, choose the cheapest safe edge, and add its far endpoint.",
    transitionSummary: "One transition adds the minimum crossing edge and moves exactly one new vertex into the tree.",
    codeInsight: "Prim is vertex-frontier MST growth; unlike Kruskal, it never considers edges wholly outside the current tree.",
    realLifeExample: "Use Prim when growing a minimum-cost network outward from a chosen starting site.",
    whenToUse: "Use it for connected undirected weighted graphs when MST growth from a start vertex is natural.",
    memoryTrick: "Prim grows one island by buying the cheapest bridge leaving it.",
    visualizerCaption: "Watch the tree expand through the cheapest edge that crosses the visited boundary.",
    logicSteps: [
      { title: "Choose a start", text: "The MST begins from one visited vertex." },
      { title: "Scan crossing edges", text: "Only edges from visited to unvisited vertices are candidates." },
      { title: "Add cheapest edge", text: "The best candidate joins the MST and visits one new vertex." },
      { title: "Return MST", text: "Stop when every vertex is included or no crossing edge remains." },
    ],
    variables: [
      { name: "graph, start", purpose: "Weighted undirected adjacency list and starting vertex." },
      { name: "visited", purpose: "Vertices already inside the growing MST." },
      { name: "best", purpose: "Cheapest crossing edge found during the current scan." },
      { name: "mst", purpose: "Edges accepted into the minimum spanning tree." },
    ],
    dryRun: [
      { label: "Start", title: "Visit A", note: "The tree begins at A.", activeLine: 5, codeInsight: "visited starts with the chosen root." },
      { label: "Add A-B", title: "Pick cheapest edge from A", note: "A-B is cheaper than A-C.", activeLine: 12, codeInsight: "best stores the cheapest crossing edge found so far." },
      { label: "Add B-C", title: "C joins through B", note: "The frontier now includes edges from A and B.", activeLine: 12, codeInsight: "Only edges to unvisited vertices are candidates." },
      { label: "Add C-D", title: "D joins next", note: "C-D is the cheapest crossing edge.", activeLine: 16, codeInsight: "Adding best[1] expands visited by one vertex." },
      { label: "Finish", title: "Add D-E and return MST", note: "All vertices are now included.", activeLine: 19, codeInsight: "mst records the accepted edge list." },
    ],
    runnerInput: [{
      A: [["B", 2], ["C", 3]],
      B: [["A", 2], ["C", 1], ["D", 4]],
      C: [["A", 3], ["B", 1], ["D", 5]],
      D: [["B", 4], ["C", 5], ["E", 2]],
      E: [["D", 2]],
    }, "A"],
    animation: {
      static: true,
      type: "graph-flow",
      title: "Prim MST frontier growth",
      ruleLabel: "Crossing-edge invariant",
      rule: "The next edge must be the cheapest edge from visited to unvisited.",
      nodes: [
        { id: "A", label: "A", x: 100, y: 150 },
        { id: "B", label: "B", x: 240, y: 80 },
        { id: "C", label: "C", x: 260, y: 230 },
        { id: "D", label: "D", x: 430, y: 150 },
        { id: "E", label: "E", x: 560, y: 220 },
      ],
      edges: [
        { from: "A", to: "B", weight: 2 },
        { from: "A", to: "C", weight: 3 },
        { from: "B", to: "C", weight: 1 },
        { from: "B", to: "D", weight: 4 },
        { from: "C", to: "D", weight: 5 },
        { from: "D", to: "E", weight: 2 },
      ],
      steps: [
        { phase: "Visited: A", title: "Start at A", note: "Only edges leaving A are candidates.", ruleLabel: "Candidates", rule: "A-B 2, A-C 3", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["B", "C"] },
        { phase: "Add A-B", title: "B joins the tree", note: "A-B is the cheapest crossing edge.", ruleLabel: "MST", rule: "(A-B)", activeNode: "B", visitedNodes: ["A", "B"], frontierNodes: ["C", "D"], activeEdge: { from: "A", to: "B" } },
        { phase: "Add B-C", title: "C joins with weight 1", note: "B-C is cheaper than A-C and B-D.", ruleLabel: "MST", rule: "(A-B), (B-C)", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["D"], activeEdge: { from: "B", to: "C" } },
        { phase: "Add B-D", title: "D joins with weight 4", note: "B-D beats C-D.", ruleLabel: "MST", rule: "(A-B), (B-C), (B-D)", activeNode: "D", visitedNodes: ["A", "B", "C", "D"], frontierNodes: ["E"], activeEdge: { from: "B", to: "D" } },
        { phase: "Add D-E", title: "E completes the tree", note: "Every vertex is now inside the MST.", ruleLabel: "Answer", rule: "total weight 9", activeNode: "E", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: [], activeEdge: { from: "D", to: "E" } },
      ],
    },
    complexity: { time: "O(VE) in this simple edge-scanning implementation.", space: "O(V)." },
  },
  js: `// Prim's Algorithm
// Route: /algorithms/graphs/prim

export function prim(graph, start) {
  const visited = new Set([start]);
  const mst = [];

  while (visited.size < Object.keys(graph).length) {
    let best = null;
    for (const from of visited) {
      for (const [to, weight] of graph[from] || []) {
        if (!visited.has(to) && (!best || weight < best[2])) {
          best = [from, to, weight];
        }
      }
    }
    if (!best) break;
    mst.push(best);
    visited.add(best[1]);
  }

  return mst;
}`,
  cpp: `// Prim's Algorithm
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
}`,
};

pages.tarjan = {
  folder: "tarjan",
  patch: {
    problem: "Tarjan's Algorithm finds strongly connected components in one DFS using low-link values.",
    concept: "Each vertex gets a discovery index and low-link value; when low[node] equals indices[node], node is the root of an SCC.",
    logicSummary: "Assign an index, push the node onto a stack, update low-link through tree/back edges, and pop a component at a root.",
    transitionSummary: "One transition lowers low[node] from an unclosed neighbor or emits a stack suffix as a completed SCC.",
    codeInsight: "The onStack set distinguishes back edges inside the current SCC search from edges to already-closed components.",
    realLifeExample: "Use Tarjan for dependency cycles, call graph SCCs, compiler analysis, and directed graph condensation.",
    whenToUse: "Use it when you need SCCs in one DFS pass with O(V + E) time.",
    memoryTrick: "Tarjan keeps a stack of unresolved nodes; a root pops one SCC.",
    visualizerCaption: "Watch discovery indices and low-link values decide when a stack segment becomes an SCC.",
    logicSteps: [
      { title: "Index node", text: "Give the node discovery and low-link values." },
      { title: "Push on stack", text: "The node remains unresolved while it is on the stack." },
      { title: "Update low-link", text: "Tree and back edges can lower the current node's low value." },
      { title: "Pop component", text: "When low equals index, pop until the root is removed." },
    ],
    variables: [
      { name: "graph", purpose: "Directed adjacency list." },
      { name: "indices, low", purpose: "Discovery time and lowest reachable active index per vertex." },
      { name: "stack, onStack", purpose: "Unresolved vertices that can still belong to the current SCC." },
      { name: "components", purpose: "Strongly connected components emitted by root checks." },
    ],
    dryRun: [
      { label: "Index A", title: "A enters stack", note: "A gets index 0 and low 0.", activeLine: 11, codeInsight: "indices[node] = low[node] = index++ creates the DFS timestamp." },
      { label: "Index B/C", title: "B and C join the stack", note: "The DFS follows A -> B -> C.", activeLine: 13, codeInsight: "onStack marks nodes that can still lower low-link values." },
      { label: "Back edge", title: "C points back to A", note: "A is on the stack, so low[C] becomes 0.", activeLine: 19, codeInsight: "A back edge updates low[node] with indices[next]." },
      { label: "Pop SCC", title: "A is an SCC root", note: "low[A] equals indices[A], so C, B, and A pop together.", activeLine: 23, codeInsight: "The do/while pop emits exactly the component rooted at node." },
      { label: "Return", title: "Return components", note: "All SCCs are collected after DFS visits every node.", activeLine: 34, codeInsight: "components is the final SCC list." },
    ],
    runnerInput: [{ A: ["B"], B: ["C"], C: ["A", "D"], D: ["E"], E: ["D"] }],
    animation: {
      static: true,
      type: "graph-flow",
      title: "Tarjan low-link stack",
      ruleLabel: "Low-link invariant",
      rule: "A node is an SCC root when low[node] equals indices[node].",
      nodes: [
        { id: "A", label: "A", x: 120, y: 110 },
        { id: "B", label: "B", x: 260, y: 70 },
        { id: "C", label: "C", x: 220, y: 220 },
        { id: "D", label: "D", x: 420, y: 130 },
        { id: "E", label: "E", x: 540, y: 210 },
      ],
      edges: [
        { from: "A", to: "B", directed: true },
        { from: "B", to: "C", directed: true },
        { from: "C", to: "A", directed: true, label: "back" },
        { from: "C", to: "D", directed: true },
        { from: "D", to: "E", directed: true },
        { from: "E", to: "D", directed: true, label: "back" },
      ],
      steps: [
        { phase: "Stack: A", title: "Index A", note: "A starts with index 0 and low 0.", ruleLabel: "low", rule: "A=0", activeNode: "A", visitedNodes: ["A"], frontierNodes: ["A"] },
        { phase: "Stack: A,B,C", title: "DFS reaches C", note: "A, B, and C are unresolved on the stack.", ruleLabel: "low", rule: "A=0, B=1, C=2", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "B", to: "C" } },
        { phase: "Back edge C -> A", title: "C lowers low-link to A", note: "Because A is onStack, low[C] falls to index[A].", ruleLabel: "low", rule: "low[C]=0", activeNode: "C", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"], activeEdge: { from: "C", to: "A" } },
        { phase: "Pop A/B/C", title: "A is the SCC root", note: "low[A] equals index[A], so the stack suffix forms one SCC.", ruleLabel: "Component", rule: "{A, B, C}", activeNode: "A", visitedNodes: ["A", "B", "C"], frontierNodes: ["A", "B", "C"] },
        { phase: "Pop D/E", title: "D and E form the next SCC", note: "The second back edge makes D the root of {D, E}.", ruleLabel: "Answer", rule: "[A,B,C], [D,E]", activeNode: "D", visitedNodes: ["A", "B", "C", "D", "E"], frontierNodes: ["D", "E"], activeEdge: { from: "E", to: "D" } },
      ],
    },
    complexity: { time: "O(V + E).", space: "O(V)." },
  },
  js: `// Tarjan's Algorithm
// Route: /algorithms/graphs/tarjan

export function tarjan(graph) {
  let index = 0;
  const stack = [];
  const onStack = new Set();
  const indices = {};
  const low = {};
  const components = [];

  function strongConnect(node) {
    indices[node] = low[node] = index;
    index += 1;
    stack.push(node);
    onStack.add(node);

    for (const next of graph[node] || []) {
      if (indices[next] === undefined) {
        strongConnect(next);
        low[node] = Math.min(low[node], low[next]);
      } else if (onStack.has(next)) {
        low[node] = Math.min(low[node], indices[next]);
      }
    }

    if (low[node] === indices[node]) {
      const component = [];
      let current;
      do {
        current = stack.pop();
        onStack.delete(current);
        component.push(current);
      } while (current !== node);
      components.push(component);
    }
  }

  for (const node of Object.keys(graph)) {
    if (indices[node] === undefined) strongConnect(node);
  }

  return components;
}`,
  cpp: `// Tarjan's Algorithm
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
};`,
};

let updated = 0;
for (const [id, spec] of Object.entries(pages)) {
  const dataPath = path.join(root, "src", "algorithms", "graphs", spec.folder, "data.js");
  const data = readPageData(dataPath);
  Object.assign(data, spec.patch);
  if (data.animation) data.animation.static = true;
  data.quiz = {
    question: `Which state keeps ${data.title} correct?`,
    options: [
      { key: "A", text: spec.patch.variables[1].name + " follows the page's own transition rule.", correct: true },
      { key: "B", text: "Reuse another graph algorithm's frontier and hope the result still matches.", correct: false },
      { key: "C", text: "Skip the stop condition once one edge has been inspected.", correct: false },
    ],
    correctText: "Correct. The page-specific state is what makes this algorithm different from the other graph pages.",
    incorrectText: "Not quite. This algorithm needs its own input, state, transition, and stop condition.",
  };
  writePageData(dataPath, data);
  writeSolution(spec.folder, spec.js);
  writeCpp(spec.folder, spec.cpp);
  updated += 1;
}

console.log(`Updated ${updated} requested graph pages.`);
