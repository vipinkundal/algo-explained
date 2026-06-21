#include<iostream>
#include<stdlib.h>
using namespace std;

struct LinkedListNode
{
    int linkedListNodeValue;
    struct LinkedListNode *linkedListNextLink;
}*linkedListFirstNode=NULL;

int count(struct LinkedListNode *linkedListCurrentNode)//counting of nodes
{
    int linkedListColumnIndex=0;
    
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        linkedListColumnIndex++;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    return linkedListColumnIndex;
}

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


void insert(int linkedListTargetPosition ,int linkedListStoredValue)
{
    if(linkedListTargetPosition<0 || linkedListTargetPosition>count(linkedListFirstNode))
    return ;

    struct LinkedListNode * linkedListCurrentNode;
    struct LinkedListNode *linkedListSwapValue;
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
    int linkedListFirstItems[]={4,5,8,9,7};
    create(linkedListFirstItems,5);
    cout<< " Before insert"<<endl;
    Display();
    insert(2,78);

    cout<< " After insert"<<endl;
    Display();

    return 0;
}