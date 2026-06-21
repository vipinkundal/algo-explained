#include<iostream>
#include<stdlib.h>
using namespace std;

struct Node
{
    int nodeValue;
    struct Node *nextLink;
}*firstNode=NULL;

void create(int firstItems[],int itemCount)
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
        lastNode->nextLink=swapValue; //putting address of current node in the next of last node 
        lastNode=swapValue; //assigning current node as last node
    }
}

int Max(struct Node * currentNode)
{
    int linkedListMax=INT32_MIN;
    while (currentNode!=NULL)
    {
        if(linkedListMax<currentNode->nodeValue)
            linkedListMax=currentNode->nodeValue;
        currentNode=currentNode->nextLink;
    }
    return linkedListMax;
    
}

int RMax(struct Node * currentNode)
{
    int inputValue=0;
    if(currentNode==0)
        return INT32_MIN;
    else
    {
        inputValue=RMax(currentNode->nextLink);
        if(inputValue>currentNode->nodeValue)
            return inputValue;
        else
            return currentNode->nodeValue;
    }
    
    
}

int main()
{
    int firstItems[]={4,5,78,8,94,7222};
    create(firstItems,6);
    cout<<RMax(firstNode);

    return 0;
}