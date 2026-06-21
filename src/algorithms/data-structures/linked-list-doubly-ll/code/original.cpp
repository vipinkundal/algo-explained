#include<iostream>
#include<stdlib.h>
using namespace std;
class Node {
    public:
    Node *previousLink;
    int nodeValue;
    Node *nextLink;
};
class DoublyLL
{
private:
    Node *firstNode=NULL;
public:
    DoublyLL(int firstItems[],int itemCount);
    void Display();
    int Length();
    void Insert(int targetIndex,int inputValue);
    int Delete(int targetIndex);
    void Reverse();
    ~DoublyLL();

};
void DoublyLL::Reverse()
{
    Node *temporaryValue,*currentNode=firstNode;
    while(currentNode)
    {
        temporaryValue=currentNode->previousLink;
        currentNode->previousLink=currentNode->nextLink;
        currentNode->nextLink=temporaryValue;
        currentNode=currentNode->previousLink;
        if(currentNode && currentNode->nextLink==NULL)//
            firstNode=currentNode;
    }
}
int DoublyLL::Delete(int targetIndex)
{
    if(targetIndex<0 || targetIndex>Length())
        return -1;

    Node *currentNode=firstNode;
    int inputValue;

    if(targetIndex==1)
    {
        firstNode=firstNode->nextLink;
        inputValue=currentNode->nodeValue;
        delete currentNode;
        if(firstNode)
            firstNode->previousLink=NULL;
        return inputValue;
    }
    else{
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
            currentNode=currentNode->nextLink;
        currentNode->previousLink->nextLink=currentNode->nextLink;
        if(currentNode->nextLink)
            currentNode->nextLink->previousLink=currentNode->previousLink;
        inputValue=currentNode->nodeValue;
        delete currentNode;
        return inputValue;
    }
}
void DoublyLL::Insert(int targetIndex,int inputValue)
{
    if(targetIndex<0 || targetIndex>Length())
        return;
    Node *swapValue,*currentNode=firstNode;
    swapValue=new Node;
        swapValue->nodeValue=inputValue;
    if(targetIndex==0)//before first node
    {
        swapValue->nextLink=firstNode;
        swapValue->previousLink=NULL;
        firstNode=swapValue;
    }
    else{
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
            currentNode=currentNode->nextLink;
        swapValue->nextLink=currentNode->nextLink;
        if(currentNode->nextLink) 
            currentNode->nextLink->previousLink=swapValue;
        currentNode->nextLink=swapValue;
        swapValue->previousLink=currentNode;
    }
}
int DoublyLL::Length()
{
    Node *currentNode=firstNode;
    int inputValue=0;
    while(currentNode)
    {
        ++inputValue;
        currentNode=currentNode->nextLink;
    }
    return inputValue;
}
void DoublyLL::Display()
{
    Node *currentNode=firstNode;
    while(currentNode)
    {
        cout<<currentNode->nodeValue<<"->";
        currentNode=currentNode->nextLink;
    }
    cout<<"\n";
}
DoublyLL::DoublyLL(int firstItems[],int itemCount)
{
    Node *lastNode,*swapValue;
    firstNode=new Node;
    firstNode->nodeValue=firstItems[0];
    firstNode->previousLink=firstNode->nextLink=NULL;
    lastNode=firstNode;
    for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
    {
        swapValue=new Node;
        swapValue->nextLink=lastNode->nextLink;
        swapValue->nodeValue=firstItems[scanIndex];
        swapValue->previousLink=lastNode;
        lastNode->nextLink=swapValue;
        lastNode=swapValue;
    }
    
}

DoublyLL::~DoublyLL()
{
    Node *currentNode=firstNode,*nextNode;
    while(currentNode)
    {
        nextNode=currentNode;
        currentNode=currentNode->nextLink;
        cout<<"\n"<<"Deleted :"<<nextNode->nodeValue;
        delete nextNode;
    }
}

int main()
{
    int firstItems[]={1,4,6,7,9};
    DoublyLL primaryValue(firstItems,5);
    cout<<"Before "<<endl;
    primaryValue.Display();
    primaryValue.Reverse();
    cout<<"After "<<endl;
    primaryValue.Display();
    cout<<"\nLength : "<<primaryValue.Length();
    return 0;
}