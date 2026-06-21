//Mine not working  becz of some fault
#include<iostream>
#include<stdlib.h>
using namespace std;
#include"Node.h"
#include"Queue.h"
#include"Stack.h"


class binaryTreeState
{
    public:
    Node *binaryTreeCurrentNode,*binaryTreeSwapValue;
    int binaryTreeInputValue;
    Queue binaryTreeNextNode;
    binaryTreeState();
    void display();
    void postorder();
    void preorder();
    void inorder();
    void rinorder(Node *);//recursive inorder
    
};
void binaryTreeState::rinorder(Node *binaryTreeSwapValue)
{
    if(binaryTreeSwapValue)
    {
        rinorder(binaryTreeSwapValue->leftChild);
        cout<<binaryTreeSwapValue->binaryTreeNodeValue<<" ";
        rinorder(binaryTreeSwapValue->rightChild);
    }
    
}
void binaryTreeState::inorder()
{
     struct BinaryTreeStackModel binaryTreeState3;
    create(&binaryTreeState3);
    long int binaryTreeState2;
    Node *binaryTreeSwapValue=binaryTreeTreeRoot;
    while(binaryTreeSwapValue || !isEmpty(binaryTreeState3))
    {
        if(binaryTreeSwapValue!=NULL)
        {
            push(&binaryTreeState3,(long int)binaryTreeSwapValue);//storing address in long int
            binaryTreeSwapValue=binaryTreeSwapValue->leftChild;
        }
        else
        {
            binaryTreeState2=pop(&binaryTreeState3);
            binaryTreeSwapValue=(Node *)binaryTreeState2;// long int to address
            cout<<binaryTreeSwapValue->binaryTreeNodeValue<<" ";
            binaryTreeSwapValue=binaryTreeSwapValue->rightChild;
        }
    }
}
void binaryTreeState::preorder()
{
    struct BinaryTreeStackModel binaryTreeState3;
    create(&binaryTreeState3);
    long int binaryTreeState2;
    Node *binaryTreeSwapValue=binaryTreeTreeRoot;
    while(binaryTreeSwapValue || !isEmpty(binaryTreeState3))
    {
        if(binaryTreeSwapValue!=NULL)
        {
            push(&binaryTreeState3,(long int)binaryTreeSwapValue);
            cout<<binaryTreeSwapValue->binaryTreeNodeValue<<" ";
            binaryTreeSwapValue=binaryTreeSwapValue->leftChild;
        }
        else
        {
            binaryTreeState2=pop(&binaryTreeState3);
            binaryTreeSwapValue=(Node *)binaryTreeState2;
            binaryTreeSwapValue=binaryTreeSwapValue->rightChild;
        }
    }
}
void binaryTreeState::postorder()
{
    struct BinaryTreeStackModel binaryTreeState3;
    create(&binaryTreeState3);
    long int binaryTreeState2;
    Node *binaryTreeSwapValue=binaryTreeTreeRoot;
    while(binaryTreeSwapValue || !isEmpty(binaryTreeState3))
    {
        if(binaryTreeSwapValue!=NULL)
        {
            push(&binaryTreeState3,(long int)binaryTreeSwapValue);
            binaryTreeSwapValue=binaryTreeSwapValue->leftChild;
        }
        else
        {
            binaryTreeState2=pop(&binaryTreeState3);
            if(binaryTreeState2>0)
            {
                push(&binaryTreeState3,-1*binaryTreeState2);
                binaryTreeSwapValue=((Node *)binaryTreeState2)->rightChild;
            }
            else{
                cout<<((Node *)(-1*binaryTreeState2))->binaryTreeNodeValue<<" ";
                binaryTreeSwapValue=NULL;
            }
        }
    }
}
void binaryTreeState::display()
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
binaryTreeState::binaryTreeState()
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
int main()
{
    binaryTreeState binaryTreeRightIndex;
    binaryTreeRightIndex.inorder();
    return 0;

}
