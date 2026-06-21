#include<iostream>
#include<stdlib.h>
using namespace std;

struct Node
{
    int nodeValue;
    struct Node *nextLink;
}*firstNode=NULL,*linkedListSecond=NULL,*linkedListThird=NULL;

void create1(int firstItems[],int itemCount)
{
    int scanIndex;
    struct Node *lastNode, *swapValue;
    firstNode=new Node;
    firstNode->nodeValue=firstItems[0];
    firstNode->nextLink=NULL;
    lastNode=firstNode;//addreess is passed and now first is refferd as last

    for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
    {
        swapValue=new Node;
        swapValue->nodeValue=firstItems[scanIndex];
        swapValue->nextLink=NULL;
        lastNode->nextLink=swapValue;//putting address of current node in the next of last node 
        lastNode=swapValue;//assigning current node as last node
    }
}
void create2(int firstItems[],int itemCount)
{
    int scanIndex;
    struct Node *lastNode, *swapValue;
    linkedListSecond=new Node;
    linkedListSecond->nodeValue=firstItems[0];
    linkedListSecond->nextLink=NULL;
    lastNode=linkedListSecond;//addreess is passed and now first is refferd as last

    for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
    {
        swapValue=new Node;
        swapValue->nodeValue=firstItems[scanIndex];
        swapValue->nextLink=NULL;
        lastNode->nextLink=swapValue;//putting address of current node in the next of last node 
        lastNode=swapValue;//assigning current node as last node
    }
}

void Display(struct Node *currentNode)
{

    while(currentNode!=NULL)
    {
        cout<<currentNode->nodeValue<<endl;
        currentNode=currentNode->nextLink;
    }
}


void Concatenate(struct Node *currentNode,struct Node *nextNode) 
{
    linkedListThird=currentNode;
    while(currentNode->nextLink)
        currentNode=currentNode->nextLink;
    currentNode->nextLink=nextNode;
}

void Merge(struct Node *currentNode,struct Node *nextNode)
{
    struct Node *lastNode;
    if(currentNode->nodeValue< nextNode->nodeValue)
    {
        linkedListThird=lastNode=currentNode;
        currentNode=currentNode->nextLink;
        linkedListThird->nextLink=NULL;
    }
    else{
        linkedListThird=lastNode=nextNode;
        nextNode=nextNode->nextLink;
        linkedListThird->nextLink=NULL;
    }
    while (currentNode && nextNode)
    {
        if(currentNode->nodeValue < nextNode->nodeValue)
        {
            lastNode->nextLink=currentNode;
            lastNode=currentNode;
            currentNode=currentNode->nextLink;
            lastNode->nextLink=NULL;
        }
        else
        {
            lastNode->nextLink=nextNode;
            lastNode=nextNode;
            nextNode=nextNode->nextLink;
            lastNode->nextLink=NULL;
        }
    }
    if(currentNode)
        lastNode->nextLink=currentNode;
    else
        lastNode->nextLink=nextNode;
    
}
int main()
{
    int firstItems[]={4,7,17,21,25,30};
    int secondItems[]={5,15,19,23,27,34,37};
    create1(firstItems,6);
    cout<<"First"<<endl;
    Display(firstNode);
    create2(secondItems,7);
    cout<<"second "<<endl;
    Display(linkedListSecond);    
    cout<<"third"<<endl;
    Merge(firstNode,linkedListSecond);
    Display(linkedListThird);
    

    return 0;
}