#include<iostream>
#include<stdlib.h>
using namespace std;

struct Node
{
    int nodeValue;
    struct Node *nextLink;
}*firstNode=NULL;

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


void insert(int targetPosition ,int storedValue)
{
    if(targetPosition<0 || targetPosition>count(firstNode))
    return ;

    struct Node * currentNode;
    struct Node *swapValue;
    currentNode=firstNode;
    swapValue=new Node;
    if(targetPosition==0)
    {
        swapValue->nodeValue=storedValue;
        swapValue->nextLink=firstNode;
        firstNode=swapValue;
    }
    else if(targetPosition>0)
    {
        for(int scanIndex=0;scanIndex<targetPosition-1 && currentNode;scanIndex++)//as it go to next node after one loop  and the node starts from 0
                                    //where as position starts from 1
        {
            currentNode=currentNode->nextLink;
        }
        swapValue->nodeValue=storedValue;
        swapValue->nextLink=currentNode->nextLink;
        currentNode->nextLink=swapValue;
    }
}
int main()
{
    int firstItems[]={4,5,8,9,7};
    create(firstItems,5);
    cout<< " Before insert"<<endl;
    Display();
    insert(2,78);

    cout<< " After insert"<<endl;
    Display();

    return 0;
}