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
void count()//counting of nodes
{
    int columnIndex=0;
    struct Node *currentNode;
    currentNode=firstNode;
    while(currentNode)
    {
        columnIndex++;
        currentNode=currentNode->nextLink;
    }
    cout<<" Count is "<<columnIndex<<endl;
}
int Rcount(struct Node *currentNode)//recursive counting of nodes
{
    if(currentNode)
        return Rcount(currentNode->nextLink)+1;
    return 0;
}
void sum()// sum of data of nodes
{
    int workingText=0;
    struct Node *currentNode;
    currentNode=firstNode;
    while(currentNode)
    {
        workingText=workingText+currentNode->nodeValue;
        currentNode=currentNode->nextLink;
    }
    cout<<" sum is "<<workingText<<endl;
}
int Rsum(struct Node *currentNode)// recursive sum of data of nodes
{
    if(currentNode)
        return currentNode->nodeValue+Rsum(currentNode->nextLink);
    return 0;
}

int main()
{
    int firstItems[]={4,5,8,9,7,1,9,4,7};
    create(firstItems,9);
    count();
    cout<<"count is : "<<Rcount(firstNode)<<endl;
    sum();
    cout<<"sum  is : "<<Rsum(firstNode)<<endl;
    return 0;
}