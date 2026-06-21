#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

struct Node {
    Node* avlLlLchild;
    int nodeValue;
    int nodeHeight;
    Node* avlLlRchild;
}*treeRoot=NULL;

int NodeHeight(struct Node *currentNode)
{
    if(currentNode==NULL)
        return 0;
    int avlLlHl,avlLlHr;
    avlLlHl=currentNode && currentNode->avlLlLchild?currentNode->avlLlLchild->nodeHeight:0;
    avlLlHr=currentNode && currentNode->avlLlRchild?currentNode->avlLlRchild->nodeHeight:0;

    return avlLlHl>avlLlHr?avlLlHl+1:avlLlHr+1;
}

int BalanceFactor(struct Node *currentNode)
{
    int avlLlHl,avlLlHr;
    avlLlHl=currentNode && currentNode->avlLlLchild?currentNode->avlLlLchild->nodeHeight:0;
    avlLlHr=currentNode && currentNode->avlLlRchild?currentNode->avlLlRchild->nodeHeight:0;
    return  avlLlHl-avlLlHr;
}

struct Node * LLRotation(struct Node *currentNode)
{
    Node *avlLlPl=currentNode->avlLlLchild;
    Node *avlLlPlr=avlLlPl->avlLlRchild;

    currentNode->avlLlLchild=avlLlPlr;
    avlLlPl->avlLlRchild=currentNode;

    currentNode->nodeHeight=NodeHeight(currentNode);
    avlLlPl->nodeHeight=NodeHeight(avlLlPl);

    if(currentNode==treeRoot)
    {   treeRoot=avlLlPl;
        return avlLlPl;
    }
    return currentNode;

}





struct Node * RRRotation(struct Node *currentNode)
{
    Node *avlLlPr=currentNode->avlLlRchild;
    Node *avlLlPrl=avlLlPr->avlLlLchild;

    currentNode->avlLlRchild=avlLlPrl;
    avlLlPr->avlLlLchild=currentNode;

    currentNode->nodeHeight=NodeHeight(currentNode);
    avlLlPr->nodeHeight=NodeHeight(avlLlPr);

    if(currentNode==treeRoot)
    {  
       treeRoot=avlLlPr;
        return avlLlPr;
    }

    return currentNode;

}

struct Node * LRRotation(struct Node *currentNode)
{
    Node *avlLlPl=currentNode->avlLlLchild;
    Node *avlLlPlr=avlLlPl->avlLlRchild;

    avlLlPl->avlLlRchild=avlLlPlr->avlLlLchild;
    currentNode->avlLlLchild=avlLlPlr->avlLlRchild;
    avlLlPlr->avlLlLchild=avlLlPl;
    avlLlPlr->avlLlRchild=currentNode;

    currentNode->nodeHeight=NodeHeight(currentNode);
    avlLlPl->nodeHeight=NodeHeight(avlLlPl);
    avlLlPlr->nodeHeight=NodeHeight(avlLlPlr);

    if(currentNode==treeRoot)
        treeRoot=avlLlPlr;

    return avlLlPlr;

}

struct Node * RLRotation(struct Node *currentNode)
{
    Node *avlLlPr=currentNode->avlLlRchild;
    Node *avlLlPrl=avlLlPr->avlLlLchild;

    currentNode->avlLlRchild=avlLlPrl->avlLlLchild;
    avlLlPr->avlLlLchild=avlLlPrl->avlLlRchild;
    avlLlPrl->avlLlLchild=currentNode;
    avlLlPrl->avlLlRchild=avlLlPr;

    currentNode->nodeHeight=NodeHeight(currentNode);
    avlLlPr->nodeHeight=NodeHeight(avlLlPr);
    avlLlPrl->nodeHeight=NodeHeight(avlLlPrl);

    if(currentNode==treeRoot)
        treeRoot=avlLlPrl;

    return avlLlPrl;

}


struct Node* Rinsert(struct Node *currentNode,int searchKey)
{
    struct Node *swapValue;
    if(currentNode==NULL)
    {
        swapValue=new Node ;
        swapValue->nodeValue=searchKey;
        swapValue->nodeHeight=1;
        swapValue->avlLlLchild=swapValue->avlLlRchild=NULL;
        return swapValue;
    }
    if(currentNode->nodeValue>searchKey)
        currentNode->avlLlLchild=Rinsert(currentNode->avlLlLchild,searchKey);
    else if(currentNode->nodeValue<searchKey)
        currentNode->avlLlRchild=Rinsert(currentNode->avlLlRchild,searchKey);
    currentNode->nodeHeight=NodeHeight(currentNode);

    if(BalanceFactor(currentNode)==2 && BalanceFactor(currentNode->avlLlLchild)==1)
        return LLRotation(currentNode);
    else if(BalanceFactor(currentNode)==2 && BalanceFactor(currentNode->avlLlLchild)==-1)
        return LRRotation(currentNode);
    else if(BalanceFactor(currentNode)==-2 && BalanceFactor(currentNode->avlLlRchild)==1)
        return RLRotation(currentNode);
    else if(BalanceFactor(currentNode)==-2 && BalanceFactor(currentNode->avlLlRchild)==-1)
        return RRRotation(currentNode);
    return currentNode;
}
struct Node *Inprec(Node *currentNode)
{
    while(currentNode && currentNode->avlLlRchild!=NULL)
        currentNode=currentNode->avlLlRchild;
    return currentNode;
}

struct Node *Insucc(Node *currentNode)
{
    while(currentNode && currentNode->avlLlLchild!=NULL)
        currentNode=currentNode->avlLlLchild;
    return currentNode;
}
struct Node *Delete(Node *currentNode,int searchKey)
{
    struct Node *swapValue=NULL;
    if (currentNode==NULL)
        return nullptr;
    if(currentNode->avlLlLchild==NULL && currentNode->avlLlRchild==NULL)
    {
        if (currentNode == treeRoot){
            treeRoot = nullptr;
        }
        delete currentNode;
        return nullptr;
    }
    if(currentNode->nodeValue>searchKey)
    {
        currentNode->avlLlLchild=Delete(currentNode->avlLlLchild,searchKey);
    }
    else if(currentNode->nodeValue<searchKey)
        currentNode->avlLlRchild=Delete(currentNode->avlLlRchild,searchKey);
    else
    {
        if(NodeHeight(currentNode->avlLlLchild)>NodeHeight(currentNode->avlLlRchild))
        {
            swapValue=Inprec(currentNode->avlLlLchild);
            currentNode->nodeValue=swapValue->nodeValue;
            currentNode->avlLlLchild=Delete(currentNode->avlLlLchild,swapValue->nodeValue);

        }
        else
        {
            swapValue=Insucc(currentNode->avlLlRchild);
            currentNode->nodeValue=swapValue->nodeValue;
            currentNode->avlLlRchild=Delete(currentNode->avlLlRchild,swapValue->nodeValue);
        }
    }
     // Update height
    currentNode->nodeHeight = NodeHeight(currentNode);
 
    // Balance Factor and Rotation
    if (BalanceFactor(currentNode) == 2 && BalanceFactor(currentNode->avlLlLchild) == 1) {  // L1 Rotation
        return LLRotation(currentNode);
    } else if (BalanceFactor(currentNode) == 2 && BalanceFactor(currentNode->avlLlLchild) == -1){  // L-1 Rotation
        return LRRotation(currentNode);
    } else if (BalanceFactor(currentNode) == -2 && BalanceFactor(currentNode->avlLlRchild) == -1){  // R-1 Rotation
        return RRRotation(currentNode);
    } else if (BalanceFactor(currentNode) == -2 && BalanceFactor(currentNode->avlLlRchild) == 1){  // R1 Rotation
        return RLRotation(currentNode);
    } else if (BalanceFactor(currentNode) == 2 && BalanceFactor(currentNode->avlLlLchild) == 0){  // L0 Rotation
        return LLRotation(currentNode);
    } else if (BalanceFactor(currentNode) == -2 && BalanceFactor(currentNode->avlLlRchild) == 0){  // R0 Rotation
        return RRRotation(currentNode);
    }
 
    return currentNode;
}

void Display(struct Node *currentNode)
{
    cout<<currentNode->nodeValue<<endl;
    if(currentNode->avlLlLchild)
    {
        cout<<"left child of "<<currentNode->nodeValue<<" is ";
        Display(currentNode->avlLlLchild);
    }
        
    if(currentNode->avlLlRchild)
    {
        cout<<"right child of "<<currentNode->nodeValue<<" is ";
        Display(currentNode->avlLlRchild);
    }
}


int main()
{
    treeRoot=Rinsert(treeRoot,50);
    Rinsert(treeRoot,60);
    Rinsert(treeRoot,40);
    Rinsert(treeRoot,30);
    Rinsert(treeRoot,55);
    Rinsert(treeRoot,45);
    Rinsert(treeRoot,35);

    Delete(treeRoot,60);
    Display(treeRoot);
    return 0;
}