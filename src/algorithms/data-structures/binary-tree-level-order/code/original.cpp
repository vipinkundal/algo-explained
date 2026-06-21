#include<iostream>
#include<stdlib.h>
using namespace std;
#include<queue>
#include "Node.h"

class binaryTreeState
{
    public:
    Node *binaryTreeCurrentNode,*binaryTreeSwapValue;
    int binaryTreeInputValue;
    queue<Node*> binaryTreeNextNode;
    binaryTreeState();
    void Levelorder();
    
};
void binaryTreeState::Levelorder()
{
    queue<Node*> binaryTreeNextNode;
    Node *binaryTreeSwapValue=binaryTreeTreeRoot;
    binaryTreeNextNode.emplace(binaryTreeSwapValue);
    while(!binaryTreeNextNode.empty())
    {
        binaryTreeSwapValue=binaryTreeNextNode.front();
        binaryTreeNextNode.pop();
        std::cout<<binaryTreeSwapValue->binaryTreeNodeValue<<" ";
        if(binaryTreeSwapValue->leftChild)
        {
            binaryTreeNextNode.emplace(binaryTreeSwapValue->leftChild);
        }
        if(binaryTreeSwapValue->rightChild)
        {
            binaryTreeNextNode.emplace(binaryTreeSwapValue->rightChild);
        }
        
    }

    
}
binaryTreeState::binaryTreeState()
{   
        cout<<"Enter the root Node data  ";
        cin>>binaryTreeTreeRoot->binaryTreeNodeValue;
        binaryTreeTreeRoot->leftChild=binaryTreeTreeRoot->rightChild=NULL;
        binaryTreeNextNode.emplace(binaryTreeTreeRoot);
        while(!binaryTreeNextNode.empty())
        {
            binaryTreeCurrentNode=binaryTreeNextNode.front();
            binaryTreeNextNode.pop();
            cout<<"Enter the value of left child of "<<binaryTreeCurrentNode->binaryTreeNodeValue<<" ";
            cin>>binaryTreeInputValue;
            if(binaryTreeInputValue!=-1)
            {
                binaryTreeSwapValue=new Node;
                binaryTreeSwapValue->binaryTreeNodeValue=binaryTreeInputValue;
                binaryTreeSwapValue->leftChild=binaryTreeSwapValue->rightChild=nullptr;
                binaryTreeCurrentNode->leftChild=binaryTreeSwapValue;
                binaryTreeNextNode.emplace(binaryTreeSwapValue);
            }
            cout<<"Enter the value of right child of  "<<binaryTreeCurrentNode->binaryTreeNodeValue<<" ";
            cin>>binaryTreeInputValue;
            if(binaryTreeInputValue!=-1)
            {
                binaryTreeSwapValue=new Node;
                binaryTreeSwapValue->binaryTreeNodeValue=binaryTreeInputValue;
                binaryTreeSwapValue->leftChild=binaryTreeSwapValue->rightChild=nullptr;
                binaryTreeCurrentNode->rightChild=binaryTreeSwapValue;
                binaryTreeNextNode.emplace(binaryTreeSwapValue);
            }

        }
    }

int main()
{
    binaryTreeState binaryTreeSwapValue;
    binaryTreeSwapValue.Levelorder();
    return 0;
}