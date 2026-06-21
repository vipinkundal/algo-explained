#include<iostream>
#include<stdlib.h>
#include"Node.h"
#include"Queue.h"
using namespace std;

class binaryTreeCreatetree
{
    public:
    Node *currentNode,*swapValue;
    int inputValue;
    Queue nextNode;
   
    binaryTreeCreatetree()
    {   
        cout<<"Enter the root Node data  ";
        cin>>treeRoot->nodeValue;
        treeRoot->binaryTreeLchild=treeRoot->binaryTreeRchild=NULL;
        nextNode.enqueue(treeRoot);
        while(!nextNode.isEmpty())
        {
            currentNode=nextNode.dequeue();
            cout<<"Enter the value of left child of "<<currentNode->nodeValue<<" ";
            cin>>inputValue;
            if(inputValue!=-1)
            {
                swapValue=new Node;
                swapValue->nodeValue=inputValue;
                swapValue->binaryTreeLchild=swapValue->binaryTreeRchild=nullptr;
                currentNode->binaryTreeLchild=swapValue;
                nextNode.enqueue(swapValue);
            }
            cout<<"Enter the value of right child of  "<<currentNode->nodeValue<<" ";
            cin>>inputValue;
            if(inputValue!=-1)
            {
                swapValue=new Node;
                swapValue->nodeValue=inputValue;
                swapValue->binaryTreeLchild=swapValue->binaryTreeRchild=nullptr;
                currentNode->binaryTreeRchild=swapValue;
                nextNode.enqueue(swapValue);
            }

        }
    }

    void display()
    {
        Node *swapValue;
        Queue nextNode;
        nextNode.enqueue(treeRoot);
        while(!nextNode.isEmpty())
        {
            swapValue=nextNode.dequeue();
            cout<<swapValue->nodeValue<<" ";
            if(swapValue->binaryTreeLchild)
                nextNode.enqueue(swapValue->binaryTreeLchild);
            if(swapValue->binaryTreeRchild)
                nextNode.enqueue(swapValue->binaryTreeRchild);
        
        }

    }
};

int main()
{
    binaryTreeCreatetree rightIndex;
    rightIndex.display();
    return 0;

}