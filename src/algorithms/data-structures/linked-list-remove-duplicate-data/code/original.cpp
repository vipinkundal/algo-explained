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

void Remove_Duplicate(struct LinkedListNode *linkedListCurrentNode)
{
    struct LinkedListNode *linkedListNextNode;
    linkedListNextNode=new LinkedListNode;
    linkedListNextNode=linkedListCurrentNode->linkedListNextLink;
    while(linkedListNextNode!=NULL)
    {
        if(linkedListCurrentNode->linkedListNodeValue!=linkedListNextNode->linkedListNodeValue)
        {
            linkedListCurrentNode=linkedListNextNode;
            linkedListNextNode=linkedListNextNode->linkedListNextLink;
        }
        else
        {
            linkedListCurrentNode->linkedListNextLink=linkedListNextNode->linkedListNextLink;
            delete linkedListNextNode;
            linkedListNextNode=linkedListCurrentNode->linkedListNextLink;
        }
    } 

}

int main()
{
    int linkedListFirstItems[]={4,7,7,7,12,12,15,18};
    create(linkedListFirstItems,8);
    cout<<"before\n";
    Display();
    cout<<"After\n";
    Remove_Duplicate(linkedListFirstNode);
    Display();
    
    

    return 0;
}