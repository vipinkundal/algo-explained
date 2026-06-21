#include<iostream>
#include<stdlib.h>
using namespace std;
class LinkedListNode {
    public:
    LinkedListNode *linkedListPreviousLink;
    int linkedListNodeValue;
    LinkedListNode *linkedListNextLink;
};
class LinkedListCDoublyLL
{
private:
    LinkedListNode *linkedListFirstNode=NULL;
public:
    LinkedListCDoublyLL()
        {linkedListFirstNode=NULL;}
    LinkedListCDoublyLL(int linkedListFirstItems[],int linkedListItemCount);
    void Display();
    int Length();
    void Insert(int linkedListTargetIndex,int linkedListInputValue);
    int Delete(int linkedListTargetIndex);
    ~LinkedListCDoublyLL();

};
LinkedListCDoublyLL::LinkedListCDoublyLL(int linkedListFirstItems[],int linkedListItemCount)
{
    LinkedListNode *linkedListLastNode,*linkedListSwapValue;
    linkedListFirstNode=new LinkedListNode;
    linkedListFirstNode->linkedListNodeValue=linkedListFirstItems[0];
    linkedListFirstNode->linkedListNextLink=linkedListFirstNode;
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
    linkedListFirstNode->linkedListPreviousLink=linkedListLastNode;
    
}

void LinkedListCDoublyLL::Display()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    do
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<"->";
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }while(linkedListCurrentNode!=linkedListFirstNode);
    cout<<"\n";
}

int LinkedListCDoublyLL::Length()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    if(linkedListFirstNode==NULL)
        return 0;
    int linkedListInputValue=0;
    do
    {
        ++linkedListInputValue;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }while(linkedListCurrentNode!=linkedListFirstNode);
    return linkedListInputValue;
}

int LinkedListCDoublyLL::Delete(int linkedListTargetIndex)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>Length())
        return -1;

    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    int linkedListInputValue;

    if(linkedListTargetIndex==1)
    {
        if(linkedListFirstNode->linkedListNextLink)
        {
            linkedListFirstNode->linkedListPreviousLink->linkedListNextLink=linkedListFirstNode->linkedListNextLink;
            linkedListFirstNode=linkedListFirstNode->linkedListNextLink;
            linkedListFirstNode->linkedListPreviousLink=linkedListCurrentNode->linkedListPreviousLink;
            linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
        }
        else{
            linkedListFirstNode=NULL;
        }
        delete linkedListCurrentNode;
        return linkedListInputValue;
    }
    else{
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-1;linkedListScanIndex++)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListCurrentNode->linkedListPreviousLink->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
        linkedListCurrentNode->linkedListNextLink->linkedListPreviousLink=linkedListCurrentNode->linkedListPreviousLink;
        linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
        delete linkedListCurrentNode;
        return linkedListInputValue;
    }
}
void LinkedListCDoublyLL::Insert(int linkedListTargetIndex,int linkedListInputValue)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>Length())
        return;
    LinkedListNode *linkedListSwapValue,*linkedListCurrentNode=linkedListFirstNode;
    linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNodeValue=linkedListInputValue;
    if(linkedListTargetIndex==0)//before first node
    {
        if(linkedListFirstNode)
        {
            linkedListSwapValue->linkedListNextLink=linkedListFirstNode;
            linkedListSwapValue->linkedListPreviousLink=linkedListFirstNode->linkedListPreviousLink;
            linkedListSwapValue->linkedListPreviousLink->linkedListNextLink=linkedListSwapValue;
            linkedListFirstNode->linkedListPreviousLink=linkedListSwapValue;
        }
        else{
            linkedListSwapValue->linkedListNextLink=linkedListSwapValue->linkedListPreviousLink=linkedListSwapValue;
        }
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




LinkedListCDoublyLL::~LinkedListCDoublyLL()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode,*linkedListNextNode;
    int linkedListTextLength=Length();
    while(linkedListTextLength>0)
    {
        linkedListNextNode=linkedListCurrentNode->linkedListNextLink;
        cout<<"Deleted :"<<linkedListCurrentNode->linkedListNodeValue<<endl;
        delete linkedListCurrentNode;
        linkedListCurrentNode=linkedListNextNode;
        --linkedListTextLength;
    }
}

int main()
{
    
    LinkedListCDoublyLL linkedListPrimaryValue;
    linkedListPrimaryValue.Insert(0,3);
    linkedListPrimaryValue.Insert(1,7);
    linkedListPrimaryValue.Insert(2,4);
    cout<<"Before"<<endl;
    linkedListPrimaryValue.Display();
    cout<<"Before Length : "<<linkedListPrimaryValue.Length()<<endl; 

    cout<<"Deleted : "<<linkedListPrimaryValue.Delete(1)<<endl;

    cout<<"After"<<endl;
    linkedListPrimaryValue.Display();
    cout<<"AFter Length : "<<linkedListPrimaryValue.Length()<<endl;

    
    return 0;
}