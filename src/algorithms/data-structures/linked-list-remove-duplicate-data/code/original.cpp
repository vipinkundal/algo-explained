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

void Remove_Duplicate(struct Node *currentNode)
{
    struct Node *nextNode;
    nextNode=new Node;
    nextNode=currentNode->nextLink;
    while(nextNode!=NULL)
    {
        if(currentNode->nodeValue!=nextNode->nodeValue)
        {
            currentNode=nextNode;
            nextNode=nextNode->nextLink;
        }
        else
        {
            currentNode->nextLink=nextNode->nextLink;
            delete nextNode;
            nextNode=currentNode->nextLink;
        }
    } 

}

int main()
{
    int firstItems[]={4,7,7,7,12,12,15,18};
    create(firstItems,8);
    cout<<"before\n";
    Display();
    cout<<"After\n";
    Remove_Duplicate(firstNode);
    Display();
    
    

    return 0;
}