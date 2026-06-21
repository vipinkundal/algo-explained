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

struct LinkedListNode *Linear_Search(struct LinkedListNode *linkedListCurrentNode,int linkedListSearchKey)
{
    while(linkedListCurrentNode!=NULL)
    {
        if(linkedListCurrentNode->linkedListNodeValue == linkedListSearchKey)
            return linkedListCurrentNode;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;

    }
    return NULL;
}

struct LinkedListNode *RLinear_Search(struct LinkedListNode *linkedListCurrentNode,int linkedListSearchKey)
{
    if(linkedListCurrentNode==NULL)
        return NULL;
    else if(linkedListCurrentNode->linkedListNodeValue == linkedListSearchKey)
        return linkedListCurrentNode;
    else
        return RLinear_Search(linkedListCurrentNode->linkedListNextLink,linkedListSearchKey);

}

struct LinkedListNode *ILinear_Search(struct LinkedListNode *linkedListCurrentNode,int linkedListSearchKey)
{
    struct LinkedListNode *linkedListNextNode;
    while(linkedListCurrentNode!=NULL)
    {
        if(linkedListCurrentNode->linkedListNodeValue == linkedListSearchKey)
        {
            if(linkedListCurrentNode==linkedListFirstNode)//  very  important as in case if the first element is same to key there
                        // wont be any value to q 
                return linkedListCurrentNode;
            else
            {
            linkedListNextNode->linkedListNextLink=linkedListCurrentNode->linkedListNextLink;
            linkedListCurrentNode->linkedListNextLink=linkedListFirstNode;
            linkedListFirstNode=linkedListCurrentNode;
            }
            return linkedListCurrentNode;
        }
        linkedListNextNode=linkedListCurrentNode;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    return NULL;
}


int main()
{
    int linkedListFirstItems[]={4,5,8,9,7};
    create(linkedListFirstItems,5);
    struct LinkedListNode *linkedListTemporaryValue;
    linkedListTemporaryValue=ILinear_Search(linkedListFirstNode,8);
    if(linkedListTemporaryValue)
        cout<<"Key founded  "<<linkedListTemporaryValue->linkedListNodeValue<<endl;
    else
        cout<<"Key not found"<<endl;
    Display();
    return 0;
}