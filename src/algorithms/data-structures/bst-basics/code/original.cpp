#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include<stack>
using namespace std;

struct Node {
    Node* bstBasicsLchild;
    int nodeValue;
    Node* bstBasicsRchild;
}*treeRoot=NULL;

struct Node* Rinsert(struct Node *currentNode,int searchKey)
{
    struct Node *swapValue;
    if(currentNode==NULL)
    {
        swapValue=new Node ;
        swapValue->nodeValue=searchKey;
        swapValue->bstBasicsLchild=swapValue->bstBasicsRchild=NULL;
        return swapValue;
    }
    if(currentNode->nodeValue>searchKey)
        currentNode->bstBasicsLchild=Rinsert(currentNode->bstBasicsLchild,searchKey);
    else if(currentNode->nodeValue<searchKey)
        currentNode->bstBasicsRchild=Rinsert(currentNode->bstBasicsRchild,searchKey);
    return currentNode;
}
void insert(int searchKey)
{
    Node *currentNode=treeRoot,*rightIndex;
    if(currentNode==NULL)
    {
        currentNode=new Node;
        currentNode->bstBasicsLchild=currentNode->bstBasicsRchild=NULL;
        currentNode->nodeValue=searchKey;
        treeRoot=currentNode;
        return;
    }
    else{
        while(currentNode!=NULL)
        {
            rightIndex=currentNode;
            if(currentNode->nodeValue<searchKey)
                currentNode=currentNode->bstBasicsRchild;
            else if(currentNode->nodeValue>searchKey)
                currentNode=currentNode->bstBasicsLchild;
            else 
                return;
        }
        currentNode=new Node;
        currentNode->bstBasicsLchild=currentNode->bstBasicsRchild=NULL;
        currentNode->nodeValue=searchKey;
        if(rightIndex->nodeValue<searchKey)
            rightIndex->bstBasicsRchild=currentNode;
        else
            rightIndex->bstBasicsLchild=currentNode;
    }
}

void inorder(Node *currentNode)
{
    if(currentNode)
    {
        inorder(currentNode->bstBasicsLchild);
        cout<<currentNode->nodeValue<<" "<<flush;
        inorder(currentNode->bstBasicsRchild);
    }
}

int Height(struct Node *swapValue)
{
    if(swapValue==NULL)
        return 0;
    int bstBasicsLh=Height(swapValue->bstBasicsLchild);
    int bstBasicsRh=Height(swapValue->bstBasicsRchild);
    return bstBasicsLh<bstBasicsRh?bstBasicsRh+1:bstBasicsLh+1;
}
struct Node *Inprec(Node *currentNode)
{
    while(currentNode && currentNode->bstBasicsRchild!=NULL)
        currentNode=currentNode->bstBasicsRchild;
    return currentNode;
}

struct Node *Insucc(Node *currentNode)
{
    while(currentNode && currentNode->bstBasicsLchild!=NULL)
        currentNode=currentNode->bstBasicsLchild;
    return currentNode;
}

struct Node *Delete(Node *currentNode,int searchKey)
{
    struct Node *swapValue=NULL;
    if (currentNode==NULL)
        return nullptr;
    if(currentNode->bstBasicsLchild==NULL && currentNode->bstBasicsRchild==NULL)
    {
        if (currentNode == treeRoot){
            treeRoot = nullptr;
        }
        delete currentNode;
        return nullptr;
    }
    if(currentNode->nodeValue>searchKey)
        currentNode->bstBasicsLchild=Delete(currentNode->bstBasicsLchild,searchKey);
    else if(currentNode->nodeValue<searchKey)
        currentNode->bstBasicsRchild=Delete(currentNode->bstBasicsRchild,searchKey);
    else
    {
        if(Height(currentNode->bstBasicsLchild)>Height(currentNode->bstBasicsRchild))
        {
            swapValue=Inprec(currentNode->bstBasicsLchild);
            currentNode->nodeValue=swapValue->nodeValue;
            currentNode->bstBasicsLchild=Delete(currentNode->bstBasicsLchild,swapValue->nodeValue);
        }
        else
        {
            swapValue=Insucc(currentNode->bstBasicsRchild);
            currentNode->nodeValue=swapValue->nodeValue;
            currentNode->bstBasicsRchild=Delete(currentNode->bstBasicsRchild,swapValue->nodeValue);
        }
    }
    return currentNode;
}

void CreatePre()
{
    int bstBasicsPre[]={30,20,10,15,25,40,50,45};
    int itemCount=8;
    stack<Node *> bstBasicsSt;
    Node *currentNode,*swapValue;
    treeRoot=new Node;
    int scanIndex=0;
    treeRoot->nodeValue=bstBasicsPre[scanIndex++];
    treeRoot->bstBasicsLchild=treeRoot->bstBasicsRchild=NULL;
    currentNode=treeRoot;
    while (scanIndex<itemCount)
    {
       if(currentNode->nodeValue>bstBasicsPre[scanIndex])
       {
        swapValue=new Node;
        swapValue->nodeValue=bstBasicsPre[scanIndex++];
        swapValue->bstBasicsLchild=swapValue->bstBasicsRchild=NULL;
        currentNode->bstBasicsLchild=swapValue;
        bstBasicsSt.emplace(currentNode);
        currentNode=swapValue;
       }
       else if(currentNode->nodeValue<bstBasicsPre[scanIndex] && bstBasicsSt.empty()?1:(bstBasicsSt.top()->nodeValue>bstBasicsPre[scanIndex]?1:0))
       {
        swapValue=new Node;
        swapValue->nodeValue=bstBasicsPre[scanIndex++];
        swapValue->bstBasicsLchild=swapValue->bstBasicsRchild=NULL;
        currentNode->bstBasicsRchild=swapValue;
        currentNode=swapValue;
       }
       else
        {
            currentNode=bstBasicsSt.top();
            bstBasicsSt.pop();
        }
    }
    
}
int main()
{
    int firstItems[]={30,20,10,15,25,40,50,45};
    CreatePre();
    inorder(treeRoot);
    return 0;
}