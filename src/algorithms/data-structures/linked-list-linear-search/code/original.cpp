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

struct Node *Linear_Search(struct Node *currentNode,int searchKey)
{
    while(currentNode!=NULL)
    {
        if(currentNode->nodeValue == searchKey)
            return currentNode;
        currentNode=currentNode->nextLink;

    }
    return NULL;
}

struct Node *RLinear_Search(struct Node *currentNode,int searchKey)
{
    if(currentNode==NULL)
        return NULL;
    else if(currentNode->nodeValue == searchKey)
        return currentNode;
    else
        return RLinear_Search(currentNode->nextLink,searchKey);

}

struct Node *ILinear_Search(struct Node *currentNode,int searchKey)
{
    struct Node *nextNode;
    while(currentNode!=NULL)
    {
        if(currentNode->nodeValue == searchKey)
        {
            if(currentNode==firstNode)//  very  important as in case if the first element is same to key there
                        // wont be any value to q 
                return currentNode;
            else
            {
            nextNode->nextLink=currentNode->nextLink;
            currentNode->nextLink=firstNode;
            firstNode=currentNode;
            }
            return currentNode;
        }
        nextNode=currentNode;
        currentNode=currentNode->nextLink;
    }
    return NULL;
}


int main()
{
    int firstItems[]={4,5,8,9,7};
    create(firstItems,5);
    struct Node *temporaryValue;
    temporaryValue=ILinear_Search(firstNode,8);
    if(temporaryValue)
        cout<<"Key founded  "<<temporaryValue->nodeValue<<endl;
    else
        cout<<"Key not found"<<endl;
    Display();
    return 0;
}