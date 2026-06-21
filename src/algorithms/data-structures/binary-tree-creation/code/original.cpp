#include<iostream>
#include<stdlib.h>
#include"Node.h"
#include"Queue.h"
using namespace std;

class binaryTreeState
{
    public:
    Node *binaryTreeCurrentNode,*binaryTreeSwapValue;
    int binaryTreeInputValue;
    Queue binaryTreeNextNode;
   
    binaryTreeState()
    {   
        cout<<"Enter the root Node data  ";
        cin>>binaryTreeTreeRoot->binaryTreeNodeValue;
        binaryTreeTreeRoot->leftChild=binaryTreeTreeRoot->rightChild=NULL;
        binaryTreeNextNode.enqueue(binaryTreeTreeRoot);
        while(!binaryTreeNextNode.isEmpty())
        {
            binaryTreeCurrentNode=binaryTreeNextNode.dequeue();
            cout<<"Enter the value of left child of "<<binaryTreeCurrentNode->binaryTreeNodeValue<<" ";
            cin>>binaryTreeInputValue;
            if(binaryTreeInputValue!=-1)
            {
                binaryTreeSwapValue=new Node;
                binaryTreeSwapValue->binaryTreeNodeValue=binaryTreeInputValue;
                binaryTreeSwapValue->leftChild=binaryTreeSwapValue->rightChild=nullptr;
                binaryTreeCurrentNode->leftChild=binaryTreeSwapValue;
                binaryTreeNextNode.enqueue(binaryTreeSwapValue);
            }
            cout<<"Enter the value of right child of  "<<binaryTreeCurrentNode->binaryTreeNodeValue<<" ";
            cin>>binaryTreeInputValue;
            if(binaryTreeInputValue!=-1)
            {
                binaryTreeSwapValue=new Node;
                binaryTreeSwapValue->binaryTreeNodeValue=binaryTreeInputValue;
                binaryTreeSwapValue->leftChild=binaryTreeSwapValue->rightChild=nullptr;
                binaryTreeCurrentNode->rightChild=binaryTreeSwapValue;
                binaryTreeNextNode.enqueue(binaryTreeSwapValue);
            }

        }
    }

    void display()
    {
        Node *binaryTreeSwapValue;
        Queue binaryTreeNextNode;
        binaryTreeNextNode.enqueue(binaryTreeTreeRoot);
        while(!binaryTreeNextNode.isEmpty())
        {
            binaryTreeSwapValue=binaryTreeNextNode.dequeue();
            cout<<binaryTreeSwapValue->binaryTreeNodeValue<<" ";
            if(binaryTreeSwapValue->leftChild)
                binaryTreeNextNode.enqueue(binaryTreeSwapValue->leftChild);
            if(binaryTreeSwapValue->rightChild)
                binaryTreeNextNode.enqueue(binaryTreeSwapValue->rightChild);
        
        }

    }
};

int main()
{
    binaryTreeState binaryTreeRightIndex;
    binaryTreeRightIndex.display();
    return 0;

}