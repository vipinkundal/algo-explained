#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

struct AvlLlNode {
    AvlLlNode* leftChild;
    int avlLlNodeValue;
    int avlLlNodeHeight;
    AvlLlNode* rightChild;
}*avlLlTreeRoot=NULL;

int NodeHeight(struct AvlLlNode *avlLlCurrentNode)
{
    if(avlLlCurrentNode==NULL)
        return 0;
    int avlLlState3,avlLlState4;
    avlLlState3=avlLlCurrentNode && avlLlCurrentNode->leftChild?avlLlCurrentNode->leftChild->avlLlNodeHeight:0;
    avlLlState4=avlLlCurrentNode && avlLlCurrentNode->rightChild?avlLlCurrentNode->rightChild->avlLlNodeHeight:0;

    return avlLlState3>avlLlState4?avlLlState3+1:avlLlState4+1;
}

int BalanceFactor(struct AvlLlNode *avlLlCurrentNode)
{
    int avlLlState3,avlLlState4;
    avlLlState3=avlLlCurrentNode && avlLlCurrentNode->leftChild?avlLlCurrentNode->leftChild->avlLlNodeHeight:0;
    avlLlState4=avlLlCurrentNode && avlLlCurrentNode->rightChild?avlLlCurrentNode->rightChild->avlLlNodeHeight:0;
    return  avlLlState3-avlLlState4;
}

struct AvlLlNode * LLRotation(struct AvlLlNode *avlLlCurrentNode)
{
    AvlLlNode *avlLlState5=avlLlCurrentNode->leftChild;
    AvlLlNode *avlLlState=avlLlState5->rightChild;

    avlLlCurrentNode->leftChild=avlLlState;
    avlLlState5->rightChild=avlLlCurrentNode;

    avlLlCurrentNode->avlLlNodeHeight=NodeHeight(avlLlCurrentNode);
    avlLlState5->avlLlNodeHeight=NodeHeight(avlLlState5);

    if(avlLlCurrentNode==avlLlTreeRoot)
    {   avlLlTreeRoot=avlLlState5;
        return avlLlState5;
    }
    return avlLlCurrentNode;

}





struct AvlLlNode * RRRotation(struct AvlLlNode *avlLlCurrentNode)
{
    AvlLlNode *avlLlState6=avlLlCurrentNode->rightChild;
    AvlLlNode *avlLlState2=avlLlState6->leftChild;

    avlLlCurrentNode->rightChild=avlLlState2;
    avlLlState6->leftChild=avlLlCurrentNode;

    avlLlCurrentNode->avlLlNodeHeight=NodeHeight(avlLlCurrentNode);
    avlLlState6->avlLlNodeHeight=NodeHeight(avlLlState6);

    if(avlLlCurrentNode==avlLlTreeRoot)
    {  
       avlLlTreeRoot=avlLlState6;
        return avlLlState6;
    }

    return avlLlCurrentNode;

}

struct AvlLlNode * LRRotation(struct AvlLlNode *avlLlCurrentNode)
{
    AvlLlNode *avlLlState5=avlLlCurrentNode->leftChild;
    AvlLlNode *avlLlState=avlLlState5->rightChild;

    avlLlState5->rightChild=avlLlState->leftChild;
    avlLlCurrentNode->leftChild=avlLlState->rightChild;
    avlLlState->leftChild=avlLlState5;
    avlLlState->rightChild=avlLlCurrentNode;

    avlLlCurrentNode->avlLlNodeHeight=NodeHeight(avlLlCurrentNode);
    avlLlState5->avlLlNodeHeight=NodeHeight(avlLlState5);
    avlLlState->avlLlNodeHeight=NodeHeight(avlLlState);

    if(avlLlCurrentNode==avlLlTreeRoot)
        avlLlTreeRoot=avlLlState;

    return avlLlState;

}

struct AvlLlNode * RLRotation(struct AvlLlNode *avlLlCurrentNode)
{
    AvlLlNode *avlLlState6=avlLlCurrentNode->rightChild;
    AvlLlNode *avlLlState2=avlLlState6->leftChild;

    avlLlCurrentNode->rightChild=avlLlState2->leftChild;
    avlLlState6->leftChild=avlLlState2->rightChild;
    avlLlState2->leftChild=avlLlCurrentNode;
    avlLlState2->rightChild=avlLlState6;

    avlLlCurrentNode->avlLlNodeHeight=NodeHeight(avlLlCurrentNode);
    avlLlState6->avlLlNodeHeight=NodeHeight(avlLlState6);
    avlLlState2->avlLlNodeHeight=NodeHeight(avlLlState2);

    if(avlLlCurrentNode==avlLlTreeRoot)
        avlLlTreeRoot=avlLlState2;

    return avlLlState2;

}


struct AvlLlNode* Rinsert(struct AvlLlNode *avlLlCurrentNode,int avlLlSearchKey)
{
    struct AvlLlNode *avlLlSwapValue;
    if(avlLlCurrentNode==NULL)
    {
        avlLlSwapValue=new AvlLlNode ;
        avlLlSwapValue->avlLlNodeValue=avlLlSearchKey;
        avlLlSwapValue->avlLlNodeHeight=1;
        avlLlSwapValue->leftChild=avlLlSwapValue->rightChild=NULL;
        return avlLlSwapValue;
    }
    if(avlLlCurrentNode->avlLlNodeValue>avlLlSearchKey)
        avlLlCurrentNode->leftChild=Rinsert(avlLlCurrentNode->leftChild,avlLlSearchKey);
    else if(avlLlCurrentNode->avlLlNodeValue<avlLlSearchKey)
        avlLlCurrentNode->rightChild=Rinsert(avlLlCurrentNode->rightChild,avlLlSearchKey);
    avlLlCurrentNode->avlLlNodeHeight=NodeHeight(avlLlCurrentNode);

    if(BalanceFactor(avlLlCurrentNode)==2 && BalanceFactor(avlLlCurrentNode->leftChild)==1)
        return LLRotation(avlLlCurrentNode);
    else if(BalanceFactor(avlLlCurrentNode)==2 && BalanceFactor(avlLlCurrentNode->leftChild)==-1)
        return LRRotation(avlLlCurrentNode);
    else if(BalanceFactor(avlLlCurrentNode)==-2 && BalanceFactor(avlLlCurrentNode->rightChild)==1)
        return RLRotation(avlLlCurrentNode);
    else if(BalanceFactor(avlLlCurrentNode)==-2 && BalanceFactor(avlLlCurrentNode->rightChild)==-1)
        return RRRotation(avlLlCurrentNode);
    return avlLlCurrentNode;
}
struct AvlLlNode *Inprec(AvlLlNode *avlLlCurrentNode)
{
    while(avlLlCurrentNode && avlLlCurrentNode->rightChild!=NULL)
        avlLlCurrentNode=avlLlCurrentNode->rightChild;
    return avlLlCurrentNode;
}

struct AvlLlNode *Insucc(AvlLlNode *avlLlCurrentNode)
{
    while(avlLlCurrentNode && avlLlCurrentNode->leftChild!=NULL)
        avlLlCurrentNode=avlLlCurrentNode->leftChild;
    return avlLlCurrentNode;
}
struct AvlLlNode *Delete(AvlLlNode *avlLlCurrentNode,int avlLlSearchKey)
{
    struct AvlLlNode *avlLlSwapValue=NULL;
    if (avlLlCurrentNode==NULL)
        return nullptr;
    if(avlLlCurrentNode->leftChild==NULL && avlLlCurrentNode->rightChild==NULL)
    {
        if (avlLlCurrentNode == avlLlTreeRoot){
            avlLlTreeRoot = nullptr;
        }
        delete avlLlCurrentNode;
        return nullptr;
    }
    if(avlLlCurrentNode->avlLlNodeValue>avlLlSearchKey)
    {
        avlLlCurrentNode->leftChild=Delete(avlLlCurrentNode->leftChild,avlLlSearchKey);
    }
    else if(avlLlCurrentNode->avlLlNodeValue<avlLlSearchKey)
        avlLlCurrentNode->rightChild=Delete(avlLlCurrentNode->rightChild,avlLlSearchKey);
    else
    {
        if(NodeHeight(avlLlCurrentNode->leftChild)>NodeHeight(avlLlCurrentNode->rightChild))
        {
            avlLlSwapValue=Inprec(avlLlCurrentNode->leftChild);
            avlLlCurrentNode->avlLlNodeValue=avlLlSwapValue->avlLlNodeValue;
            avlLlCurrentNode->leftChild=Delete(avlLlCurrentNode->leftChild,avlLlSwapValue->avlLlNodeValue);

        }
        else
        {
            avlLlSwapValue=Insucc(avlLlCurrentNode->rightChild);
            avlLlCurrentNode->avlLlNodeValue=avlLlSwapValue->avlLlNodeValue;
            avlLlCurrentNode->rightChild=Delete(avlLlCurrentNode->rightChild,avlLlSwapValue->avlLlNodeValue);
        }
    }
     // Update height
    avlLlCurrentNode->avlLlNodeHeight = NodeHeight(avlLlCurrentNode);
 
    // Balance Factor and Rotation
    if (BalanceFactor(avlLlCurrentNode) == 2 && BalanceFactor(avlLlCurrentNode->leftChild) == 1) {  // L1 Rotation
        return LLRotation(avlLlCurrentNode);
    } else if (BalanceFactor(avlLlCurrentNode) == 2 && BalanceFactor(avlLlCurrentNode->leftChild) == -1){  // L-1 Rotation
        return LRRotation(avlLlCurrentNode);
    } else if (BalanceFactor(avlLlCurrentNode) == -2 && BalanceFactor(avlLlCurrentNode->rightChild) == -1){  // R-1 Rotation
        return RRRotation(avlLlCurrentNode);
    } else if (BalanceFactor(avlLlCurrentNode) == -2 && BalanceFactor(avlLlCurrentNode->rightChild) == 1){  // R1 Rotation
        return RLRotation(avlLlCurrentNode);
    } else if (BalanceFactor(avlLlCurrentNode) == 2 && BalanceFactor(avlLlCurrentNode->leftChild) == 0){  // L0 Rotation
        return LLRotation(avlLlCurrentNode);
    } else if (BalanceFactor(avlLlCurrentNode) == -2 && BalanceFactor(avlLlCurrentNode->rightChild) == 0){  // R0 Rotation
        return RRRotation(avlLlCurrentNode);
    }
 
    return avlLlCurrentNode;
}

void Display(struct AvlLlNode *avlLlCurrentNode)
{
    cout<<avlLlCurrentNode->avlLlNodeValue<<endl;
    if(avlLlCurrentNode->leftChild)
    {
        cout<<"left child of "<<avlLlCurrentNode->avlLlNodeValue<<" is ";
        Display(avlLlCurrentNode->leftChild);
    }
        
    if(avlLlCurrentNode->rightChild)
    {
        cout<<"right child of "<<avlLlCurrentNode->avlLlNodeValue<<" is ";
        Display(avlLlCurrentNode->rightChild);
    }
}


int main()
{
    avlLlTreeRoot=Rinsert(avlLlTreeRoot,50);
    Rinsert(avlLlTreeRoot,60);
    Rinsert(avlLlTreeRoot,40);
    Rinsert(avlLlTreeRoot,30);
    Rinsert(avlLlTreeRoot,55);
    Rinsert(avlLlTreeRoot,45);
    Rinsert(avlLlTreeRoot,35);

    Delete(avlLlTreeRoot,60);
    Display(avlLlTreeRoot);
    return 0;
}