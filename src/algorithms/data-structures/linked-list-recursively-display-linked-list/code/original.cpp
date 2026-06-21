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

void Display(struct LinkedListNode *linkedListCurrentNode) //display using recurssion
{
    if(linkedListCurrentNode!=NULL)
    {
        cout<<linkedListCurrentNode->linkedListNodeValue<<endl;
    }
    Display(linkedListCurrentNode->linkedListNextLink);
}
void RDisplay(struct LinkedListNode *linkedListCurrentNode)// reverse display using recurssion
{
    if(linkedListCurrentNode!=NULL)
    {
        RDisplay(linkedListCurrentNode->linkedListNextLink);
        cout<<linkedListCurrentNode->linkedListNodeValue<<endl;
    }
    
}

int main()
{
    int linkedListFirstItems[]={4,5,8,9,7};
    create(linkedListFirstItems,5);
    RDisplay(linkedListFirstNode);

    return 0;
}