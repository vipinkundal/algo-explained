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

int count(struct Node *currentNode)//counting of nodes
{
    int columnIndex=0;
    
    currentNode=firstNode;
    while(currentNode)
    {
        columnIndex++;
        currentNode=currentNode->nextLink;
    }
    return columnIndex;
}

void reverse1(struct Node *currentNode)//Reverse using (Auxiliary)array
{
    int *firstItems,scanIndex=0;
    struct Node *nextNode;
    firstItems=new int[count(currentNode)];
    nextNode=currentNode;
    while(nextNode!=NULL)
    {
        firstItems[scanIndex]=nextNode->nodeValue;
        nextNode=nextNode->nextLink;
        scanIndex++;
    }
    nextNode=currentNode;
    scanIndex--;
    while(nextNode!=NULL)
    {
        nextNode->nodeValue=firstItems[scanIndex];
        nextNode=nextNode->nextLink;
        scanIndex--;
    }

}

void reverse2(struct Node *currentNode)//reversing by reversing the links
{
    struct Node *nextNode=NULL,*rightIndex=NULL;
    while(currentNode!=NULL)
    {
        rightIndex=nextNode;
        nextNode=currentNode;
        currentNode=currentNode->nextLink;
        nextNode->nextLink=rightIndex;
    }
    firstNode=nextNode;//make first the q as links are reveresed at q is at the last node after loop
}

void reverse3(struct Node *nextNode,struct Node *currentNode)
{
    if(currentNode!=NULL)
    {
        reverse3(currentNode,currentNode->nextLink);
        currentNode->nextLink=nextNode;
    }
    else
    {
        firstNode=nextNode;
    }
}



int main()
{
    int firstItems[]={4,7,19,12,15,18};
    create(firstItems,6);
    cout<<"Before"<<endl;
    Display();
    reverse3(NULL,firstNode);
    cout<<"After"<<endl;
    Display();    

    

    return 0;
}