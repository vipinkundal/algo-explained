// DP on Trees
// Route: /algorithms/dynamic-programming/dp-on-trees

#include <algorithm>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
};

struct TreeDpState {
    int take;
    int skip;
};

TreeDpState solveTreeDp(TreeNode* node) {
    if (!node) return {0, 0};
    TreeDpState left = solveTreeDp(node->left);
    TreeDpState right = solveTreeDp(node->right);
    return {
        node->value + left.skip + right.skip,
        max(left.take, left.skip) + max(right.take, right.skip)
    };
}

int dpOnTrees(TreeNode* root) {
    TreeDpState result = solveTreeDp(root);
    return max(result.take, result.skip);
}
