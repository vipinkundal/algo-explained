//Mine not working  becz of some fault
#include<iostream>
#include<stdlib.h>
using namespace std;
#include"Node.h"
#include"Queue.h"
#include"Stack.h"


class binaryTreeCreatetree
{
    public:
    Node *currentNode,*swapValue;
    int inputValue;
    Queue nextNode;
    binaryTreeCreatetree();
    void display();
    void postorder();
    void preorder();
    void inorder();
    void rinorder(Node *);//recursive inorder
    
};
void binaryTreeCreatetree::rinorder(Node *swapValue)
{
    if(swapValue)
    {
        rinorder(swapValue->binaryTreeLchild);
        cout<<swapValue->nodeValue<<" ";
        rinorder(swapValue->binaryTreeRchild);
    }
    
}
void binaryTreeCreatetree::inorder()
{
     struct Stack binaryTreeSt;
    create(&binaryTreeSt);
    long int binaryTreeNum;
    Node *swapValue=treeRoot;
    while(swapValue || !isEmpty(binaryTreeSt))
    {
        if(swapValue!=NULL)
        {
            push(&binaryTreeSt,(long int)swapValue);//storing address in long int
            swapValue=swapValue->binaryTreeLchild;
        }
        else
        {
            binaryTreeNum=pop(&binaryTreeSt);
            swapValue=(Node *)binaryTreeNum;// long int to address
            cout<<swapValue->nodeValue<<" ";
            swapValue=swapValue->binaryTreeRchild;
        }
    }
}
void binaryTreeCreatetree::preorder()
{
    struct Stack binaryTreeSt;
    create(&binaryTreeSt);
    long int binaryTreeNum;
    Node *swapValue=treeRoot;
    while(swapValue || !isEmpty(binaryTreeSt))
    {
        if(swapValue!=NULL)
        {
            push(&binaryTreeSt,(long int)swapValue);
            cout<<swapValue->nodeValue<<" ";
            swapValue=swapValue->binaryTreeLchild;
        }
        else
        {
            binaryTreeNum=pop(&binaryTreeSt);
            swapValue=(Node *)binaryTreeNum;
            swapValue=swapValue->binaryTreeRchild;
        }
    }
}
void binaryTreeCreatetree::postorder()
{
    struct Stack binaryTreeSt;
    create(&binaryTreeSt);
    long int binaryTreeNum;
    Node *swapValue=treeRoot;
    while(swapValue || !isEmpty(binaryTreeSt))
    {
        if(swapValue!=NULL)
        {
            push(&binaryTreeSt,(long int)swapValue);
            swapValue=swapValue->binaryTreeLchild;
        }
        else
        {
            binaryTreeNum=pop(&binaryTreeSt);
            if(binaryTreeNum>0)
            {
                push(&binaryTreeSt,-1*binaryTreeNum);
                swapValue=((Node *)binaryTreeNum)->binaryTreeRchild;
            }
            else{
                cout<<((Node *)(-1*binaryTreeNum))->nodeValue<<" ";
                swapValue=NULL;
            }
        }
    }
}
void binaryTreeCreatetree::display()
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
binaryTreeCreatetree::binaryTreeCreatetree()
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
int main()
{
    binaryTreeCreatetree rightIndex;
    rightIndex.inorder();
    return 0;

}
