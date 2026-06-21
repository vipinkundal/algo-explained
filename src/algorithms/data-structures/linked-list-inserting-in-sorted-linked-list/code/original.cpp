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
        lastNode->nextLink=swapValue;//putting address of current node in the next of last node 
        lastNode=swapValue;//assigning current node as last node
    }
}

void Display()
{
    struct Node *currentNode;
    currentNode=firstNode;
    while(currentNode!=NULL)
    {
        cout<<currentNode->nodeValue<<endl;
        currentNode=currentNode->nextLink;
    }
}

void S_Insert(struct Node *currentNode,int storedValue)
{
    struct Node *nextNode;
    struct Node *swapValue;
    swapValue=new Node;
    swapValue->nodeValue=storedValue;
    swapValue->nextLink=NULL;

    if(firstNode==NULL)
        firstNode=swapValue;
    else
    {
        while (currentNode && currentNode->nodeValue<storedValue)
        {
            nextNode=currentNode;
            currentNode=currentNode->nextLink;
        }
        if(currentNode==firstNode)
        {
            swapValue->nextLink=firstNode;
            firstNode=swapValue;
        }
        else{
            nextNode->nextLink=swapValue;
            swapValue->nextLink=currentNode;
        }
        
    }

}

int main()
{
    int firstItems[]={4,7,9,12,18};
    create(firstItems,5);
    S_Insert(firstNode,8);
    Display();

    return 0;
}