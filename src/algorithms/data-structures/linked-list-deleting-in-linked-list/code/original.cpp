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

int Delete(struct LinkedListNode *linkedListCurrentNode,int linkedListTargetIndex)
{
    struct LinkedListNode *linkedListNextNode=NULL;
    int linkedListInputValue=-1;//to store data of deleted node
    if(linkedListTargetIndex<0 || linkedListTargetIndex>count(linkedListCurrentNode))
        return -1;
    if(linkedListTargetIndex==1)
    {
        linkedListInputValue=linkedListFirstNode->linkedListNodeValue;
        linkedListFirstNode=linkedListFirstNode->linkedListNextLink;
    }
    else
    {
        for(int linkedListScanIndex=0;linkedListScanIndex<linkedListTargetIndex-1;linkedListScanIndex++)
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
int main()
{
    int linkedListFirstItems[]={4,7,9,12,18};
    create(linkedListFirstItems,5);
    cout<<"Deleted : "<<Delete(linkedListFirstNode,3)<<endl;
    Display();

    return 0;
}