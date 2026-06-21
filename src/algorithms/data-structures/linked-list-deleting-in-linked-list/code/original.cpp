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

int Delete(struct Node *currentNode,int targetIndex)
{
    struct Node *nextNode=NULL;
    int inputValue=-1;//to store data of deleted node
    if(targetIndex<0 || targetIndex>count(currentNode))
        return -1;
    if(targetIndex==1)
    {
        inputValue=firstNode->nodeValue;
        firstNode=firstNode->nextLink;
    }
    else
    {
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
        {
            nextNode=currentNode;
            currentNode=currentNode->nextLink;
        }
        inputValue=currentNode->nodeValue;
        nextNode->nextLink=currentNode->nextLink;
    }

    delete currentNode;
    return inputValue;
}
int main()
{
    int firstItems[]={4,7,9,12,18};
    create(firstItems,5);
    cout<<"Deleted : "<<Delete(firstNode,3)<<endl;
    Display();

    return 0;
}