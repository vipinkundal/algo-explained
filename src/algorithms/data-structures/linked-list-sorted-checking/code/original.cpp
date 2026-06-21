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

bool isSorted(struct Node *currentNode)
{
    int itemCount=INT32_MIN;
    while(currentNode!=NULL)
    {
        if(currentNode->nodeValue<itemCount)
            return false;
        itemCount=currentNode->nodeValue;
        currentNode=currentNode->nextLink;
    }
    return true;
}

int main()
{
    int firstItems[]={4,7,19,12,18};
    create(firstItems,5);
    cout<<"Sorted : "<<isSorted(firstNode)<<endl;
    

    return 0;
}