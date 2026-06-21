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

void Display(struct Node *currentNode) //display using recurssion
{
    if(currentNode!=NULL)
    {
        cout<<currentNode->nodeValue<<endl;
    }
    Display(currentNode->nextLink);
}
void RDisplay(struct Node *currentNode)// reverse display using recurssion
{
    if(currentNode!=NULL)
    {
        RDisplay(currentNode->nextLink);
        cout<<currentNode->nodeValue<<endl;
    }
    
}

int main()
{
    int firstItems[]={4,5,8,9,7};
    create(firstItems,5);
    RDisplay(firstNode);

    return 0;
}