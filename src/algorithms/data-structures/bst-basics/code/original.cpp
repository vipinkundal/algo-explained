#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

struct BstBasicsNode {
    BstBasicsNode* leftChild;
    int bstBasicsNodeValue;
    BstBasicsNode* rightChild;
}*bstBasicsTreeRoot=NULL;

struct BstBasicsNode* Rinsert(struct BstBasicsNode *bstBasicsCurrentNode,int bstBasicsSearchKey)
{
    struct BstBasicsNode *bstBasicsSwapValue;
    if(bstBasicsCurrentNode==NULL)
    {
        bstBasicsSwapValue=new BstBasicsNode ;
        bstBasicsSwapValue->bstBasicsNodeValue=bstBasicsSearchKey;
        bstBasicsSwapValue->leftChild=bstBasicsSwapValue->rightChild=NULL;
        return bstBasicsSwapValue;
    }
    if(bstBasicsCurrentNode->bstBasicsNodeValue>bstBasicsSearchKey)
        bstBasicsCurrentNode->leftChild=Rinsert(bstBasicsCurrentNode->leftChild,bstBasicsSearchKey);
    else if(bstBasicsCurrentNode->bstBasicsNodeValue<bstBasicsSearchKey)
        bstBasicsCurrentNode->rightChild=Rinsert(bstBasicsCurrentNode->rightChild,bstBasicsSearchKey);
    return bstBasicsCurrentNode;
}
void insert(int bstBasicsSearchKey)
{
    BstBasicsNode *bstBasicsCurrentNode=bstBasicsTreeRoot,*bstBasicsRightIndex;
    if(bstBasicsCurrentNode==NULL)
    {
        bstBasicsCurrentNode=new BstBasicsNode;
        bstBasicsCurrentNode->leftChild=bstBasicsCurrentNode->rightChild=NULL;
        bstBasicsCurrentNode->bstBasicsNodeValue=bstBasicsSearchKey;
        bstBasicsTreeRoot=bstBasicsCurrentNode;
        return;
    }
    else{
        while(bstBasicsCurrentNode!=NULL)
        {
            bstBasicsRightIndex=bstBasicsCurrentNode;
            if(bstBasicsCurrentNode->bstBasicsNodeValue<bstBasicsSearchKey)
                bstBasicsCurrentNode=bstBasicsCurrentNode->rightChild;
            else if(bstBasicsCurrentNode->bstBasicsNodeValue>bstBasicsSearchKey)
                bstBasicsCurrentNode=bstBasicsCurrentNode->leftChild;
            else 
                return;
        }
        bstBasicsCurrentNode=new BstBasicsNode;
        bstBasicsCurrentNode->leftChild=bstBasicsCurrentNode->rightChild=NULL;
        bstBasicsCurrentNode->bstBasicsNodeValue=bstBasicsSearchKey;
        if(bstBasicsRightIndex->bstBasicsNodeValue<bstBasicsSearchKey)
            bstBasicsRightIndex->rightChild=bstBasicsCurrentNode;
        else
            bstBasicsRightIndex->leftChild=bstBasicsCurrentNode;
    }
}

void inorder(BstBasicsNode *bstBasicsCurrentNode)
{
    if(bstBasicsCurrentNode)
    {
        inorder(bstBasicsCurrentNode->leftChild);
        cout<<bstBasicsCurrentNode->bstBasicsNodeValue<<" "<<flush;
        inorder(bstBasicsCurrentNode->rightChild);
    }
}

int Height(struct BstBasicsNode *bstBasicsSwapValue)
{
    if(bstBasicsSwapValue==NULL)
        return 0;
    int leftHeight=Height(bstBasicsSwapValue->leftChild);
    int rightHeight=Height(bstBasicsSwapValue->rightChild);
    return leftHeight<rightHeight?rightHeight+1:leftHeight+1;
}
struct BstBasicsNode *Inprec(BstBasicsNode *bstBasicsCurrentNode)
{
    while(bstBasicsCurrentNode && bstBasicsCurrentNode->rightChild!=NULL)
        bstBasicsCurrentNode=bstBasicsCurrentNode->rightChild;
    return bstBasicsCurrentNode;
}

struct BstBasicsNode *Insucc(BstBasicsNode *bstBasicsCurrentNode)
{
    while(bstBasicsCurrentNode && bstBasicsCurrentNode->leftChild!=NULL)
        bstBasicsCurrentNode=bstBasicsCurrentNode->leftChild;
    return bstBasicsCurrentNode;
}

struct BstBasicsNode *Delete(BstBasicsNode *bstBasicsCurrentNode,int bstBasicsSearchKey)
{
    struct BstBasicsNode *bstBasicsSwapValue=NULL;
    if (bstBasicsCurrentNode==NULL)
        return nullptr;
    if(bstBasicsCurrentNode->leftChild==NULL && bstBasicsCurrentNode->rightChild==NULL)
    {
        if (bstBasicsCurrentNode == bstBasicsTreeRoot){
            bstBasicsTreeRoot = nullptr;
        }
        delete bstBasicsCurrentNode;
        return nullptr;
    }
    if(bstBasicsCurrentNode->bstBasicsNodeValue>bstBasicsSearchKey)
        bstBasicsCurrentNode->leftChild=Delete(bstBasicsCurrentNode->leftChild,bstBasicsSearchKey);
    else if(bstBasicsCurrentNode->bstBasicsNodeValue<bstBasicsSearchKey)
        bstBasicsCurrentNode->rightChild=Delete(bstBasicsCurrentNode->rightChild,bstBasicsSearchKey);
    else
    {
        if(Height(bstBasicsCurrentNode->leftChild)>Height(bstBasicsCurrentNode->rightChild))
        {
            bstBasicsSwapValue=Inprec(bstBasicsCurrentNode->leftChild);
            bstBasicsCurrentNode->bstBasicsNodeValue=bstBasicsSwapValue->bstBasicsNodeValue;
            bstBasicsCurrentNode->leftChild=Delete(bstBasicsCurrentNode->leftChild,bstBasicsSwapValue->bstBasicsNodeValue);
        }
        else
        {
            bstBasicsSwapValue=Insucc(bstBasicsCurrentNode->rightChild);
            bstBasicsCurrentNode->bstBasicsNodeValue=bstBasicsSwapValue->bstBasicsNodeValue;
            bstBasicsCurrentNode->rightChild=Delete(bstBasicsCurrentNode->rightChild,bstBasicsSwapValue->bstBasicsNodeValue);
        }
    }
    return bstBasicsCurrentNode;
}

void CreatePre()
{
    int bstBasicsState[]={30,20,10,15,25,40,50,45};
    int bstBasicsItemCount=8;
    stack<BstBasicsNode *> bstBasicsState2;
    BstBasicsNode *bstBasicsCurrentNode,*bstBasicsSwapValue;
    bstBasicsTreeRoot=new BstBasicsNode;
    int bstBasicsScanIndex=0;
    bstBasicsTreeRoot->bstBasicsNodeValue=bstBasicsState[bstBasicsScanIndex++];
    bstBasicsTreeRoot->leftChild=bstBasicsTreeRoot->rightChild=NULL;
    bstBasicsCurrentNode=bstBasicsTreeRoot;
    while (bstBasicsScanIndex<bstBasicsItemCount)
    {
       if(bstBasicsCurrentNode->bstBasicsNodeValue>bstBasicsState[bstBasicsScanIndex])
       {
        bstBasicsSwapValue=new BstBasicsNode;
        bstBasicsSwapValue->bstBasicsNodeValue=bstBasicsState[bstBasicsScanIndex++];
        bstBasicsSwapValue->leftChild=bstBasicsSwapValue->rightChild=NULL;
        bstBasicsCurrentNode->leftChild=bstBasicsSwapValue;
        bstBasicsState2.emplace(bstBasicsCurrentNode);
        bstBasicsCurrentNode=bstBasicsSwapValue;
       }
       else if(bstBasicsCurrentNode->bstBasicsNodeValue<bstBasicsState[bstBasicsScanIndex] && bstBasicsState2.empty()?1:(bstBasicsState2.top()->bstBasicsNodeValue>bstBasicsState[bstBasicsScanIndex]?1:0))
       {
        bstBasicsSwapValue=new BstBasicsNode;
        bstBasicsSwapValue->bstBasicsNodeValue=bstBasicsState[bstBasicsScanIndex++];
        bstBasicsSwapValue->leftChild=bstBasicsSwapValue->rightChild=NULL;
        bstBasicsCurrentNode->rightChild=bstBasicsSwapValue;
        bstBasicsCurrentNode=bstBasicsSwapValue;
       }
       else
        {
            bstBasicsCurrentNode=bstBasicsState2.top();
            bstBasicsState2.pop();
        }
    }
    
}
int main()
{
    int bstBasicsFirstItems[]={30,20,10,15,25,40,50,45};
    CreatePre();
    inorder(bstBasicsTreeRoot);
    return 0;
}