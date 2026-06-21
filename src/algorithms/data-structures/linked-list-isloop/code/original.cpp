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
bool isloop(struct LinkedListNode *linkedListState)
{
    struct LinkedListNode *linkedListCurrentNode,*linkedListNextNode;
    linkedListCurrentNode=linkedListNextNode=linkedListState;
    do
    {
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListNextNode=linkedListNextNode->linkedListNextLink;
        linkedListNextNode=linkedListNextNode->linkedListNextLink!=NULL?linkedListNextNode->linkedListNextLink:NULL;
    } while (linkedListCurrentNode && linkedListNextNode && linkedListCurrentNode!=linkedListNextNode);
    
    return linkedListCurrentNode==linkedListNextNode?true:false;
}

int main()
{
    struct LinkedListNode *linkedListCurrentNode,*linkedListNextNode;
    int linkedListFirstItems[]={4,7,19,12,15,18};
    create(linkedListFirstItems,6);   
    linkedListCurrentNode=linkedListFirstNode->linkedListNextLink->linkedListNextLink;
    linkedListNextNode=linkedListFirstNode->linkedListNextLink->linkedListNextLink->linkedListNextLink->linkedListNextLink->linkedListNextLink;
    linkedListNextNode->linkedListNextLink=linkedListCurrentNode;
    if(isloop(linkedListFirstNode))
    {
        cout<<"there\'s  a loop";
    }
    else
        cout<<"Theres not  a loop";
   

    return 0;
}