#include<iostream>
#include<stdlib.h>
using namespace std;
#include<queue>
#include "Node.h"

class binaryTreeCreatetree
{
    public:
    Node *currentNode,*swapValue;
    int inputValue;
    queue<Node*> nextNode;
    binaryTreeCreatetree();
    void Levelorder();
    
};
void binaryTreeCreatetree::Levelorder()
{
    queue<Node*> nextNode;
    Node *swapValue=treeRoot;
    nextNode.emplace(swapValue);
    while(!nextNode.empty())
    {
        swapValue=nextNode.front();
        nextNode.pop();
        std::cout<<swapValue->nodeValue<<" ";
        if(swapValue->binaryTreeLchild)
        {
            nextNode.emplace(swapValue->binaryTreeLchild);
        }
        if(swapValue->binaryTreeRchild)
        {
            nextNode.emplace(swapValue->binaryTreeRchild);
        }
        
    }

    
}
binaryTreeCreatetree::binaryTreeCreatetree()
{   
        cout<<"Enter the root Node data  ";
        cin>>treeRoot->nodeValue;
        treeRoot->binaryTreeLchild=treeRoot->binaryTreeRchild=NULL;
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
                swapValue->binaryTreeLchild=swapValue->binaryTreeRchild=nullptr;
                currentNode->binaryTreeLchild=swapValue;
                nextNode.emplace(swapValue);
            }
            cout<<"Enter the value of right child of  "<<currentNode->nodeValue<<" ";
            cin>>inputValue;
            if(inputValue!=-1)
            {
                swapValue=new Node;
                swapValue->nodeValue=inputValue;
                swapValue->binaryTreeLchild=swapValue->binaryTreeRchild=nullptr;
                currentNode->binaryTreeRchild=swapValue;
                nextNode.emplace(swapValue);
            }

        }
    }

int main()
{
    binaryTreeCreatetree swapValue;
    swapValue.Levelorder();
    return 0;
}