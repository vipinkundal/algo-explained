#include<iostream>

using namespace std;
class LinkedListNode{
    public:
        int linkedListNodeValue;
        LinkedListNode *linkedListNextLink;
};

class LinkedListLinkedList
{
private:
    LinkedListNode *linkedListFirstNode;
public:
    LinkedListLinkedList()
    {
        linkedListFirstNode=NULL;
    }
    LinkedListLinkedList(int linkedListFirstItems[],int linkedListItemCount);
    void display();
    int length();
    void insert(int linkedListTargetPosition ,int linkedListStoredValue);
    int del(int linkedListTargetIndex);
    ~LinkedListLinkedList();
    
};

LinkedListLinkedList::~LinkedListLinkedList()
{
    LinkedListNode *linkedListCurrentNode=linkedListFirstNode;
    while(linkedListFirstNode)
    {
        linkedListFirstNode=linkedListFirstNode->linkedListNextLink;
        delete linkedListCurrentNode;
        linkedListCurrentNode=linkedListFirstNode;
    }
}
int LinkedListLinkedList::del(int linkedListTargetIndex)
{
    LinkedListNode *linkedListNextNode=NULL,*linkedListCurrentNode=linkedListFirstNode;
    int linkedListInputValue=-1;//to store data of deleted node
    if(linkedListTargetIndex<0 || linkedListTargetIndex>length())
        return -1;
    if(linkedListTargetIndex==0)
    {
        linkedListInputValue=linkedListFirstNode->linkedListNodeValue;
        linkedListFirstNode=linkedListFirstNode->linkedListNextLink;
    }
    else
    {
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex;linkedListScanIndex++)
        {
            linkedListNextNode=linkedListCurrentNode;
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        }
        linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
        linkedListNextNode->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
    }

    delete linkedListCurrentNode;
    return linkedListInputValue;
}
LinkedListLinkedList::LinkedListLinkedList(int linkedListFirstItems[],int linkedListItemCount)
    {
        int linkedListScanIndex;
        LinkedListNode *linkedListLastNode, *linkedListSwapValue;
        linkedListFirstNode=new LinkedListNode;
        linkedListFirstNode->linkedListNodeValue=linkedListFirstItems[0];
        linkedListFirstNode->linkedListNextLink=NULL;
        linkedListLastNode=linkedListFirstNode;//addreess is passed and now first is refferd as last

        for(int linkedListScanIndex=1;linkedListScanIndex<linkedListItemCount;linkedListScanIndex++)
        {
            linkedListSwapValue=new LinkedListNode;
            linkedListSwapValue->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
            linkedListSwapValue->linkedListNextLink=NULL;
            linkedListLastNode->linkedListNextLink=linkedListSwapValue;//putting address of current node in the next of last node 
            linkedListLastNode=linkedListSwapValue;//assigning current node as last node
        }
    }
int LinkedListLinkedList::length()//counting of nodes
{
    int linkedListColumnIndex=0;
    LinkedListNode *linkedListCurrentNode;
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        linkedListColumnIndex++;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    return linkedListColumnIndex;
}
void LinkedListLinkedList::display()
{
    LinkedListNode *linkedListCurrentNode;
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode!=NULL)
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<endl;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
}
void LinkedListLinkedList::insert(int linkedListTargetPosition ,int linkedListStoredValue)
{
    if(linkedListTargetPosition<0 || linkedListTargetPosition>length())
    return ;

    LinkedListNode * linkedListCurrentNode;
    LinkedListNode *linkedListSwapValue;
    linkedListCurrentNode=linkedListFirstNode;
    linkedListSwapValue=new LinkedListNode;
    if(linkedListTargetPosition==0)
    {
        linkedListSwapValue->linkedListNodeValue=linkedListStoredValue;
        linkedListSwapValue->linkedListNextLink=linkedListFirstNode;
        linkedListFirstNode=linkedListSwapValue;
    }
    else if(linkedListTargetPosition>0)
    {
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetPosition-1 && linkedListCurrentNode;linkedListScanIndex++)//as it go to next node after one loop  and the node starts from 0
                                    //where as position starts from 1
        {
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        }
        linkedListSwapValue->linkedListNodeValue=linkedListStoredValue;
        linkedListSwapValue->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
        linkedListCurrentNode->linkedListNextLink=linkedListSwapValue;
    }
}
int main()
{
    int linkedListFirstItems[]={1,6,8,12,56};
    LinkedListLinkedList linkedListLeftIndex(linkedListFirstItems,5);
   
    linkedListLeftIndex.insert(2,67);

     linkedListLeftIndex.display();

    cout<<"lenght "<<linkedListLeftIndex.length()<<endl;


    linkedListLeftIndex.del(1);
    cout<<"After deletion"<<endl;
    linkedListLeftIndex.display();
    return  0;
}
