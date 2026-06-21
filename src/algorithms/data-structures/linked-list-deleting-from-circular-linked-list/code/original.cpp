#include<iostream>
#include<stdlib.h>
using namespace std;
class LinkedListNode{
    public:
        int linkedListNodeValue;
        LinkedListNode *linkedListNextLink;
};

class LinkedListCircularLinkedList{
    private:
        LinkedListNode *Head;
    public:
    LinkedListCircularLinkedList(){Head=NULL;}
    LinkedListCircularLinkedList(int linkedListFirstItems[],int linkedListItemCount);
    LinkedListNode * getHead(){return Head;}
    void display();
    void Rdisplay(LinkedListNode *linkedListCurrentNode);
    int length();
    void insert(int linkedListTargetIndex,int linkedListStoredValue);
    int Delete(int linkedListTargetIndex);
};
int LinkedListCircularLinkedList::Delete(int linkedListTargetIndex)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>length())
        return -1;
    LinkedListNode *linkedListCurrentNode=Head,*linkedListNextNode;
    int linkedListInputValue,linkedListScanIndex;
    if(linkedListTargetIndex==1)
    {
        while(linkedListCurrentNode->linkedListNextLink!=Head)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        if(linkedListCurrentNode==Head)
        {
            linkedListInputValue=linkedListCurrentNode->linkedListNodeValue;
            delete linkedListCurrentNode;
            Head=NULL;
            return linkedListInputValue;
        }
        linkedListInputValue=Head->linkedListNodeValue;
        linkedListCurrentNode->linkedListNextLink=Head->linkedListNextLink;
        delete Head;
        Head=linkedListCurrentNode->linkedListNextLink;
        return linkedListInputValue;
    }
    else{
        for(linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-2;linkedListScanIndex++)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListNextNode=linkedListCurrentNode->linkedListNextLink;
        linkedListInputValue=linkedListNextNode->linkedListNodeValue;
        linkedListCurrentNode->linkedListNextLink=linkedListNextNode->linkedListNextLink;
        delete linkedListNextNode;
        return linkedListInputValue;
    }
}
void LinkedListCircularLinkedList::insert(int linkedListTargetIndex,int linkedListStoredValue)
{
    if(linkedListTargetIndex<0 || linkedListTargetIndex>length())
        return ;
    LinkedListNode *linkedListCurrentNode=Head,*linkedListSwapValue;
    linkedListSwapValue=new LinkedListNode;
    linkedListSwapValue->linkedListNodeValue=linkedListStoredValue;
    if(linkedListTargetIndex==0)
    {
        
        if(Head==NULL)
        {
            linkedListSwapValue->linkedListNextLink=linkedListSwapValue;
            Head=linkedListSwapValue;
        }
        else
        {
            while(linkedListCurrentNode->linkedListNextLink!=Head)
                linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
            linkedListSwapValue->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
            linkedListCurrentNode->linkedListNextLink=linkedListSwapValue;

        }
    }
    else{
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-1;linkedListScanIndex++)
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListSwapValue->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
            linkedListCurrentNode->linkedListNextLink=linkedListSwapValue;
    }
}
int LinkedListCircularLinkedList::length()
{
    LinkedListNode *linkedListCurrentNode=Head;
    int linkedListLeftIndex=0;
    do
    {
        linkedListLeftIndex++;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }while(linkedListCurrentNode!=Head);
    return linkedListLeftIndex;

}
void LinkedListCircularLinkedList::Rdisplay(LinkedListNode *linkedListCurrentNode)
{
    static int linkedListState=0;
    if(linkedListCurrentNode!=Head || linkedListState==0)
    {
        linkedListState=1;
        cout<<linkedListCurrentNode->linkedListNodeValue<<"->";
        Rdisplay(linkedListCurrentNode->linkedListNextLink);
    }
    linkedListState=0;
}
void LinkedListCircularLinkedList::display()
{
    LinkedListNode *linkedListCurrentNode=Head;
    do{
        cout<<linkedListCurrentNode->linkedListNodeValue<<"->";
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;

    }while(linkedListCurrentNode!=Head);
    cout<<endl;
}
LinkedListCircularLinkedList::LinkedListCircularLinkedList(int linkedListFirstItems[],int linkedListItemCount)
{
    LinkedListNode *linkedListLastNode,*linkedListSwapValue;
    
    Head=new LinkedListNode;
    Head->linkedListNodeValue=linkedListFirstItems[0];
    Head->linkedListNextLink=Head;
    linkedListLastNode=Head;
    for(int linkedListScanIndex=1;linkedListScanIndex<linkedListItemCount;linkedListScanIndex++)
    {
        linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
        linkedListSwapValue->linkedListNextLink=linkedListLastNode->linkedListNextLink;
        linkedListLastNode->linkedListNextLink=linkedListSwapValue;
        linkedListLastNode=linkedListSwapValue;
    }
}

int main()
{
    
    int linkedListFirstItems[]={1,3,5,8,9};
    LinkedListCircularLinkedList linkedListLeftIndex(linkedListFirstItems,5);
    cout<<"Before :";
    linkedListLeftIndex.display();
    cout<<"Deleted : "<<linkedListLeftIndex.Delete(1)<<endl;
    cout<<"After : ";
    linkedListLeftIndex.display();
    return 0;
}
