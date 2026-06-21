#include<iostream>
#include<stdlib.h>
using namespace std;
#include<queue>
#include "Node.h"

class treesHeightState
{
    public:
    Node *treesHeightCurrentNode,*treesHeightSwapValue;
    int treesHeightInputValue;
    queue<Node*> treesHeightNextNode;
    treesHeightState();
    void Levelorder();
    int count(Node *treesHeightCurrentNode);
    int count(){ count(treesHeightTreeRoot); }
    int height(Node *treesHeightCurrentNode);
    int height(){height(treesHeightTreeRoot);}
    int leafNodeCount(Node *treesHeightCurrentNode);
    int leafNodeCount(){ leafNodeCount(treesHeightTreeRoot); }
};
int treesHeightState::leafNodeCount(Node *treesHeightCurrentNode) {
    int treesHeightInputValue;
    int treesHeightCompareValue;
    if (treesHeightCurrentNode != nullptr){
        treesHeightInputValue = leafNodeCount(treesHeightCurrentNode->leftChild);
        treesHeightCompareValue = leafNodeCount(treesHeightCurrentNode->rightChild);
        if (treesHeightCurrentNode->leftChild == nullptr && treesHeightCurrentNode->rightChild == nullptr){
            return treesHeightInputValue + treesHeightCompareValue + 1;
        } else {
            return treesHeightInputValue + treesHeightCompareValue;
        }
    }
    return 0;
}
int treesHeightState::count(Node *treesHeightCurrentNode)
{
    if(treesHeightCurrentNode!=NULL)
        return count(treesHeightCurrentNode->leftChild)+count(treesHeightCurrentNode->rightChild)+1;
    
    return 0;
}
int treesHeightState::height(Node *treesHeightCurrentNode)
{
    int treesHeightInputValue,treesHeightCompareValue;
    if(treesHeightCurrentNode)
    {
        treesHeightInputValue=height(treesHeightCurrentNode->leftChild);
        treesHeightCompareValue=height(treesHeightCurrentNode->rightChild);
        if(treesHeightInputValue>treesHeightCompareValue)
            return treesHeightInputValue+1;
        else
            return treesHeightCompareValue+1;
    }
    return 0;
}
void treesHeightState::Levelorder()
{
    queue<Node*> treesHeightNextNode;
    Node *treesHeightSwapValue=treesHeightTreeRoot;
    treesHeightNextNode.emplace(treesHeightSwapValue);
    while(!treesHeightNextNode.empty())
    {
        treesHeightSwapValue=treesHeightNextNode.front();
        treesHeightNextNode.pop();
        std::cout<<treesHeightSwapValue->treesHeightNodeValue<<" ";
        if(treesHeightSwapValue->leftChild)
        {
            treesHeightNextNode.emplace(treesHeightSwapValue->leftChild);
        }
        if(treesHeightSwapValue->rightChild)
        {
            treesHeightNextNode.emplace(treesHeightSwapValue->rightChild);
        }
        
    }

    
}
treesHeightState::treesHeightState()
{   
        cout<<"Enter the root Node data  ";
        cin>>treesHeightTreeRoot->treesHeightNodeValue;
        treesHeightTreeRoot->leftChild=treesHeightTreeRoot->rightChild=NULL;
        treesHeightNextNode.emplace(treesHeightTreeRoot);
        while(!treesHeightNextNode.empty())
        {
            treesHeightCurrentNode=treesHeightNextNode.front();
            treesHeightNextNode.pop();
            cout<<"Enter the value of left child of "<<treesHeightCurrentNode->treesHeightNodeValue<<" ";
            cin>>treesHeightInputValue;
            if(treesHeightInputValue!=-1)
            {
                treesHeightSwapValue=new Node;
                treesHeightSwapValue->treesHeightNodeValue=treesHeightInputValue;
                treesHeightSwapValue->leftChild=treesHeightSwapValue->rightChild=nullptr;
                treesHeightCurrentNode->leftChild=treesHeightSwapValue;
                treesHeightNextNode.emplace(treesHeightSwapValue);
            }
            cout<<"Enter the value of right child of  "<<treesHeightCurrentNode->treesHeightNodeValue<<" ";
            cin>>treesHeightInputValue;
            if(treesHeightInputValue!=-1)
            {
                treesHeightSwapValue=new Node;
                treesHeightSwapValue->treesHeightNodeValue=treesHeightInputValue;
                treesHeightSwapValue->leftChild=treesHeightSwapValue->rightChild=nullptr;
                treesHeightCurrentNode->rightChild=treesHeightSwapValue;
                treesHeightNextNode.emplace(treesHeightSwapValue);
            }

        }
    }

int main()
{
    treesHeightState treesHeightSwapValue;
    cout<<"\nleaf Node "<<treesHeightSwapValue.leafNodeCount();
    return 0;
}