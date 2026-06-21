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
        linkedListLastNode->linkedListNextLink=linkedListSwapValue;//putting address of current node in the next of last node 
        linkedListLastNode=linkedListSwapValue;//assigning current node as last node
    }
}

void Display()
{
    struct LinkedListNode *linkedListCurrentNode;
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode!=NULL)
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<endl;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
}

void S_Insert(struct LinkedListNode *linkedListCurrentNode,int linkedListStoredValue)
{
    struct LinkedListNode *linkedListNextNode;
    struct LinkedListNode *linkedListSwapValue;
    linkedListSwapValue=new LinkedListNode;
    linkedListSwapValue->linkedListNodeValue=linkedListStoredValue;
    linkedListSwapValue->linkedListNextLink=NULL;

    if(linkedListFirstNode==NULL)
        linkedListFirstNode=linkedListSwapValue;
    else
    {
        while (linkedListCurrentNode && linkedListCurrentNode->linkedListNodeValue<linkedListStoredValue)
        {
            linkedListNextNode=linkedListCurrentNode;
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        }
        if(linkedListCurrentNode==linkedListFirstNode)
        {
            linkedListSwapValue->linkedListNextLink=linkedListFirstNode;
            linkedListFirstNode=linkedListSwapValue;
        }
        else{
            linkedListNextNode->linkedListNextLink=linkedListSwapValue;
            linkedListSwapValue->linkedListNextLink=linkedListCurrentNode;
        }
        
    }

}

int main()
{
    int linkedListFirstItems[]={4,7,9,12,18};
    create(linkedListFirstItems,5);
    S_Insert(linkedListFirstNode,8);
    Display();

    return 0;
}