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
bool isloop(struct Node *linkedListF)
{
    struct Node *currentNode,*nextNode;
    currentNode=nextNode=linkedListF;
    do
    {
        currentNode=currentNode->nextLink;
        nextNode=nextNode->nextLink;
        nextNode=nextNode->nextLink!=NULL?nextNode->nextLink:NULL;
    } while (currentNode && nextNode && currentNode!=nextNode);
    
    return currentNode==nextNode?true:false;
}

int main()
{
    struct Node *currentNode,*nextNode;
    int firstItems[]={4,7,19,12,15,18};
    create(firstItems,6);   
    currentNode=firstNode->nextLink->nextLink;
    nextNode=firstNode->nextLink->nextLink->nextLink->nextLink->nextLink;
    nextNode->nextLink=currentNode;
    if(isloop(firstNode))
    {
        cout<<"there\'s  a loop";
    }
    else
        cout<<"Theres not  a loop";
   

    return 0;
}