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

void reverse1(struct LinkedListNode *linkedListCurrentNode)//Reverse using (Auxiliary)array
{
    int *linkedListFirstItems,linkedListScanIndex=0;
    struct LinkedListNode *linkedListNextNode;
    linkedListFirstItems=new int[count(linkedListCurrentNode)];
    linkedListNextNode=linkedListCurrentNode;
    while(linkedListNextNode!=NULL)
    {
        linkedListFirstItems[linkedListScanIndex]=linkedListNextNode->linkedListNodeValue;
        linkedListNextNode=linkedListNextNode->linkedListNextLink;
        linkedListScanIndex++;
    }
    linkedListNextNode=linkedListCurrentNode;
    linkedListScanIndex--;
    while(linkedListNextNode!=NULL)
    {
        linkedListNextNode->linkedListNodeValue=linkedListFirstItems[linkedListScanIndex];
        linkedListNextNode=linkedListNextNode->linkedListNextLink;
        linkedListScanIndex--;
    }

}

void reverse2(struct LinkedListNode *linkedListCurrentNode)//reversing by reversing the links
{
    struct LinkedListNode *linkedListNextNode=NULL,*linkedListRightIndex=NULL;
    while(linkedListCurrentNode!=NULL)
    {
        linkedListRightIndex=linkedListNextNode;
        linkedListNextNode=linkedListCurrentNode;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
        linkedListNextNode->linkedListNextLink=linkedListRightIndex;
    }
    linkedListFirstNode=linkedListNextNode;//make first the q as links are reveresed at q is at the last node after loop
}

void reverse3(struct LinkedListNode *linkedListNextNode,struct LinkedListNode *linkedListCurrentNode)
{
    if(linkedListCurrentNode!=NULL)
    {
        reverse3(linkedListCurrentNode,linkedListCurrentNode->linkedListNextLink);
        linkedListCurrentNode->linkedListNextLink=linkedListNextNode;
    }
    else
    {
        linkedListFirstNode=linkedListNextNode;
    }
}



int main()
{
    int linkedListFirstItems[]={4,7,19,12,15,18};
    create(linkedListFirstItems,6);
    cout<<"Before"<<endl;
    Display();
    reverse3(NULL,linkedListFirstNode);
    cout<<"After"<<endl;
    Display();    

    

    return 0;
}