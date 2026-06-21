#include<iostream>
#include<stdlib.h>
using namespace std;

struct LinkedListNode
{
    int linkedListNodeValue;
    struct LinkedListNode *linkedListNextLink;
}*linkedListFirstNode=NULL;

void create(int linkedListFirstItems[],int linkedListItemCount)
{
    int linkedListScanIndex;
    struct LinkedListNode *linkedListLastNode, *linkedListSwapValue;
    linkedListFirstNode=new LinkedListNode;
    linkedListFirstNode->linkedListNodeValue=linkedListFirstItems[0];
    linkedListFirstNode->linkedListNextLink=NULL;
    linkedListLastNode=linkedListFirstNode;//addreess is passed and now first is refferd as last

    for(int linkedListScanIndex=1;linkedListScanIndex<linkedListItemCount;linkedListScanIndex++)
    {
        linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
        linkedListSwapValue->linkedListNextLink=NULL;
        linkedListLastNode->linkedListNextLink=linkedListSwapValue; //putting address of current node in the next of last node 
        linkedListLastNode=linkedListSwapValue; //assigning current node as last node
    }
}

int Max(struct LinkedListNode * linkedListCurrentNode)
{
    int linkedListState=INT32_MIN;
    while (linkedListCurrentNode!=NULL)
    {
        if(linkedListState<linkedListCurrentNode->linkedListNodeValue)
            linkedListState=linkedListCurrentNode->linkedListNodeValue;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    return linkedListState;
    
}

int RMax(struct LinkedListNode * linkedListCurrentNode)
{
    int linkedListInputValue=0;
    if(linkedListCurrentNode==0)
        return INT32_MIN;
    else
    {
        linkedListInputValue=RMax(linkedListCurrentNode->linkedListNextLink);
        if(linkedListInputValue>linkedListCurrentNode->linkedListNodeValue)
            return linkedListInputValue;
        else
            return linkedListCurrentNode->linkedListNodeValue;
    }
    
    
}

int main()
{
    int linkedListFirstItems[]={4,5,78,8,94,7222};
    create(linkedListFirstItems,6);
    cout<<RMax(linkedListFirstNode);

    return 0;
}