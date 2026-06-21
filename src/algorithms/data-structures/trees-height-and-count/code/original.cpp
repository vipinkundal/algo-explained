#include<iostream>
#include<stdlib.h>
using namespace std;
#include<queue>
#include "Node.h"

class treesHeightCreatetree
{
    public:
    Node *currentNode,*swapValue;
    int inputValue;
    queue<Node*> nextNode;
    treesHeightCreatetree();
    void Levelorder();
    int count(Node *currentNode);
    int count(){ count(treeRoot); }
    int height(Node *currentNode);
    int height(){height(treeRoot);}
    int leafNodeCount(Node *currentNode);
    int leafNodeCount(){ leafNodeCount(treeRoot); }
};
int treesHeightCreatetree::leafNodeCount(Node *currentNode) {
    int inputValue;
    int compareValue;
    if (currentNode != nullptr){
        inputValue = leafNodeCount(currentNode->treesHeightLchild);
        compareValue = leafNodeCount(currentNode->treesHeightRchild);
        if (currentNode->treesHeightLchild == nullptr && currentNode->treesHeightRchild == nullptr){
            return inputValue + compareValue + 1;
        } else {
            return inputValue + compareValue;
        }
    }
    return 0;
}
int treesHeightCreatetree::count(Node *currentNode)
{
    if(currentNode!=NULL)
        return count(currentNode->treesHeightLchild)+count(currentNode->treesHeightRchild)+1;
    
    return 0;
}
int treesHeightCreatetree::height(Node *currentNode)
{
    int inputValue,compareValue;
    if(currentNode)
    {
        inputValue=height(currentNode->treesHeightLchild);
        compareValue=height(currentNode->treesHeightRchild);
        if(inputValue>compareValue)
            return inputValue+1;
        else
            return compareValue+1;
    }
    return 0;
}
void treesHeightCreatetree::Levelorder()
{
    queue<Node*> nextNode;
    Node *swapValue=treeRoot;
    nextNode.emplace(swapValue);
    while(!nextNode.empty())
    {
        swapValue=nextNode.front();
        nextNode.pop();
        std::cout<<swapValue->nodeValue<<" ";
        if(swapValue->treesHeightLchild)
        {
            nextNode.emplace(swapValue->treesHeightLchild);
        }
        if(swapValue->treesHeightRchild)
        {
            nextNode.emplace(swapValue->treesHeightRchild);
        }
        
    }

    
}
treesHeightCreatetree::treesHeightCreatetree()
{   
        cout<<"Enter the root Node data  ";
        cin>>treeRoot->nodeValue;
        treeRoot->treesHeightLchild=treeRoot->treesHeightRchild=NULL;
        nextNode.emplace(treeRoot);
        while(!nextNode.empty())
        {
            currentNode=nextNode.front();
            nextNode.pop();
            cout<<"Enter the value of left child of "<<currentNode->nodeValue<<" ";
            cin>>inputValue;
            if(inputValue!=-1)
            {
                swapValue=new Node;
                swapValue->nodeValue=inputValue;
                swapValue->treesHeightLchild=swapValue->treesHeightRchild=nullptr;
                currentNode->treesHeightLchild=swapValue;
                nextNode.emplace(swapValue);
            }
            cout<<"Enter the value of right child of  "<<currentNode->nodeValue<<" ";
            cin>>inputValue;
            if(inputValue!=-1)
            {
                swapValue=new Node;
                swapValue->nodeValue=inputValue;
                swapValue->treesHeightLchild=swapValue->treesHeightRchild=nullptr;
                currentNode->treesHeightRchild=swapValue;
                nextNode.emplace(swapValue);
            }

        }
    }

int main()
{
    treesHeightCreatetree swapValue;
    cout<<"\nleaf Node "<<swapValue.leafNodeCount();
    return 0;
}