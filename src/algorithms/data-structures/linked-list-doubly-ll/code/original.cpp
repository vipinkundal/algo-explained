#include<iostream>
#include<stdlib.h>
using namespace std;
class LinkedListNode {
    public:
    LinkedListNode *linkedListPreviousLink;
    int linkedListNodeValue;
    LinkedListNode *linkedListNextLink;
};
class LinkedListDoublyLL
{
private:
    LinkedListNode *linkedListFirstNode=NULL;
public:
    LinkedListDoublyLL(int linkedListFirstItems[],int linkedListItemCount);
    void Display();
    int Length();
    void Insert(int linkedListTargetIndex,int linkedListInputValue);
    int Delete(int linkedListTargetIndex);
    void Reverse();
    ~LinkedListDoublyLL();

};
void LinkedListDoublyLL::Reverse()
{
    LinkedListNode *linkedListTemporaryValue,*linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        linkedListTemporaryValue=linkedListCurrentNode->linkedListPreviousLink;
        linkedListCurrentNode->linkedListPreviousLink=linkedListCurrentNode->linkedListNextLink;
        linkedListCurrentNode->linkedListNextLink=linkedListTemporaryValue;
        linkedListCurrentNode=linkedListCurrentNode->linkedListPreviousLink;
        if(linkedListCurrentNode && linkedListCurrentNode->linkedListNextLink==NULL)//
            linkedListFirstNode=linkedListCurrentNode;
    }
}
int LinkedListDoublyLL::Delete(int linkedListTargetIndex)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>Length())
        return -1;

    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    int linkedListInputValue;

    if(linkedListTargetIndex==1)
    {
        linkedListFirstNode=linkedListFirstNode->linkedListNextLink;
        linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
        delete linkedListCurrentNode;
        if(linkedListFirstNode)
            linkedListFirstNode->linkedListPreviousLink=NULL;
        return linkedListInputValue;
    }
    else{
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-1;linkedListScanIndex++)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListCurrentNode->linkedListPreviousLink->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
        if(linkedListCurrentNode->linkedListNextLink)
            linkedListCurrentNode->linkedListNextLink->linkedListPreviousLink=linkedListCurrentNode->linkedListPreviousLink;
        linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
        delete linkedListCurrentNode;
        return linkedListInputValue;
    }
}
void LinkedListDoublyLL::Insert(int linkedListTargetIndex,int linkedListInputValue)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>Length())
        return;
    LinkedListNode *linkedListSwapValue,*linkedListCurrentNode=linkedListFirstNode;
    linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNodeValue=linkedListInputValue;
    if(linkedListTargetIndex==0)//before first node
    {
        linkedListSwapValue->linkedListNextLink=linkedListFirstNode;
        linkedListSwapValue->linkedListPreviousLink=NULL;
        linkedListFirstNode=linkedListSwapValue;
    }
    else{
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-1;linkedListScanIndex++)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListSwapValue->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
        if(linkedListCurrentNode->linkedListNextLink) 
            linkedListCurrentNode->linkedListNextLink->linkedListPreviousLink=linkedListSwapValue;
        linkedListCurrentNode->linkedListNextLink=linkedListSwapValue;
        linkedListSwapValue->linkedListPreviousLink=linkedListCurrentNode;
    }
}
int LinkedListDoublyLL::Length()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    int linkedListInputValue=0;
    while(linkedListCurrentNode)
    {
        ++linkedListInputValue;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    return linkedListInputValue;
}
void LinkedListDoublyLL::Display()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<"->";
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    cout<<"\n";
}
LinkedListDoublyLL::LinkedListDoublyLL(int linkedListFirstItems[],int linkedListItemCount)
{
    LinkedListNode *linkedListLastNode,*linkedListSwapValue;
    linkedListFirstNode=new LinkedListNode;
    linkedListFirstNode->linkedListNodeValue=linkedListFirstItems[0];
    linkedListFirstNode->linkedListPreviousLink=linkedListFirstNode->linkedListNextLink=NULL;
    linkedListLastNode=linkedListFirstNode;
    for(int linkedListScanIndex=1;linkedListScanIndex<linkedListItemCount;linkedListScanIndex++)
    {
        linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNextLink=linkedListLastNode->linkedListNextLink;
        linkedListSwapValue->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
        linkedListSwapValue->linkedListPreviousLink=linkedListLastNode;
        linkedListLastNode->linkedListNextLink=linkedListSwapValue;
        linkedListLastNode=linkedListSwapValue;
    }
    
}

LinkedListDoublyLL::~LinkedListDoublyLL()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode,*linkedListNextNode;
    while(linkedListCurrentNode)
    {
        linkedListNextNode=linkedListCurrentNode;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        cout<<"\n"<<"Deleted :"<<linkedListNextNode->linkedListNodeValue;
        delete linkedListNextNode;
    }
}

int main()
{
    int linkedListFirstItems[]={1,4,6,7,9};
    LinkedListDoublyLL linkedListPrimaryValue(linkedListFirstItems,5);
    cout<<"Before "<<endl;
    linkedListPrimaryValue.Display();
    linkedListPrimaryValue.Reverse();
    cout<<"After "<<endl;
    linkedListPrimaryValue.Display();
    cout<<"\nLength : "<<linkedListPrimaryValue.Length();
    return 0;
}