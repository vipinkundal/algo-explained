#include<iostream>
#include<stdlib.h>
using namespace std;

struct LinkedListNode
{
    int linkedListNodeValue;
    struct LinkedListNode *linkedListNextLink;
}*linkedListFirstNode=NULL,*linkedListState=NULL,*linkedListState2=NULL;

void create1(int linkedListFirstItems[],int linkedListItemCount)
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
void create2(int linkedListFirstItems[],int linkedListItemCount)
{
    int linkedListScanIndex;
    struct LinkedListNode *linkedListLastNode, *linkedListSwapValue;
    linkedListState=new LinkedListNode;
    linkedListState->linkedListNodeValue=linkedListFirstItems[0];
    linkedListState->linkedListNextLink=NULL;
    linkedListLastNode=linkedListState;//addreess is passed and now first is refferd as last

    for(int linkedListScanIndex=1;linkedListScanIndex<linkedListItemCount;linkedListScanIndex++)
    {
        linkedListSwapValue=new LinkedListNode;
        linkedListSwapValue->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
        linkedListSwapValue->linkedListNextLink=NULL;
        linkedListLastNode->linkedListNextLink=linkedListSwapValue;//putting address of current node in the next of last node 
        linkedListLastNode=linkedListSwapValue;//assigning current node as last node
    }
}

void Display(struct LinkedListNode *linkedListCurrentNode)
{

    while(linkedListCurrentNode!=NULL)
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<endl;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
}


void Concatenate(struct LinkedListNode *linkedListCurrentNode,struct LinkedListNode *linkedListNextNode) 
{
    linkedListState2=linkedListCurrentNode;
    while(linkedListCurrentNode->linkedListNextLink)
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    linkedListCurrentNode->linkedListNextLink=linkedListNextNode;
}

void Merge(struct LinkedListNode *linkedListCurrentNode,struct LinkedListNode *linkedListNextNode)
{
    struct LinkedListNode *linkedListLastNode;
    if(linkedListCurrentNode->linkedListNodeValue< linkedListNextNode->linkedListNodeValue)
    {
        linkedListState2=linkedListLastNode=linkedListCurrentNode;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListState2->linkedListNextLink=NULL;
    }
    else{
        linkedListState2=linkedListLastNode=linkedListNextNode;
        linkedListNextNode=linkedListNextNode->linkedListNextLink;
        linkedListState2->linkedListNextLink=NULL;
    }
    while (linkedListCurrentNode && linkedListNextNode)
    {
        if(linkedListCurrentNode->linkedListNodeValue < linkedListNextNode->linkedListNodeValue)
        {
            linkedListLastNode->linkedListNextLink=linkedListCurrentNode;
            linkedListLastNode=linkedListCurrentNode;
            linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
            linkedListLastNode->linkedListNextLink=NULL;
        }
        else
        {
            linkedListLastNode->linkedListNextLink=linkedListNextNode;
            linkedListLastNode=linkedListNextNode;
            linkedListNextNode=linkedListNextNode->linkedListNextLink;
            linkedListLastNode->linkedListNextLink=NULL;
        }
    }
    if(linkedListCurrentNode)
        linkedListLastNode->linkedListNextLink=linkedListCurrentNode;
    else
        linkedListLastNode->linkedListNextLink=linkedListNextNode;
    
}
int main()
{
    int linkedListFirstItems[]={4,7,17,21,25,30};
    int linkedListSecondItems[]={5,15,19,23,27,34,37};
    create1(linkedListFirstItems,6);
    cout<<"First"<<endl;
    Display(linkedListFirstNode);
    create2(linkedListSecondItems,7);
    cout<<"second "<<endl;
    Display(linkedListState);    
    cout<<"third"<<endl;
    Merge(linkedListFirstNode,linkedListState);
    Display(linkedListState2);
    

    return 0;
}