// Trie-Based Search
// Route: /algorithms/strings/trie-search

#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> next;
    bool terminal = false;
};

bool trieSearch(const vector<string>& words, const string& query) {
    TrieNode root;
    for (const string& word : words) {
        TrieNode* node = &root;
        for (char ch : word) {
            if (!node->next[ch]) node->next[ch] = new TrieNode();
            node = node->next[ch];
        }
        node->terminal = true;
    }
    TrieNode* node = &root;
    for (char ch : query) {
        if (!node->next.count(ch)) return false;
        node = node->next[ch];
    }
    return node->terminal;
}
