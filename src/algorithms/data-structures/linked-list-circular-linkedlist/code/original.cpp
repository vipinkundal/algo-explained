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
    LinkedListCircularLinkedList(int linkedListFirstItems[],int linkedListItemCount);
    LinkedListNode * getHead(){return Head;}
    void display();
    void Rdisplay(LinkedListNode *linkedListCurrentNode);
};
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
    linkedListLeftIndex.display();
    LinkedListNode *linkedListState2=linkedListLeftIndex.getHead();
    linkedListLeftIndex.Rdisplay(linkedListState2);
    return 0;
}
