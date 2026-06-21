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
void count()//counting of nodes
{
    int linkedListColumnIndex=0;
    struct LinkedListNode *linkedListCurrentNode;
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        linkedListColumnIndex++;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    cout<<" Count is "<<linkedListColumnIndex<<endl;
}
int Rcount(struct LinkedListNode *linkedListCurrentNode)//recursive counting of nodes
{
    if(linkedListCurrentNode)
        return Rcount(linkedListCurrentNode->linkedListNextLink)+1;
    return 0;
}
void sum()// sum of data of nodes
{
    int linkedListWorkingText=0;
    struct LinkedListNode *linkedListCurrentNode;
    linkedListCurrentNode=linkedListFirstNode;
    while(linkedListCurrentNode)
    {
        linkedListWorkingText=linkedListWorkingText+linkedListCurrentNode->linkedListNodeValue;
        linkedListCurrentNode=linkedListCurrentNode->linkedListNextLink;
    }
    cout<<" sum is "<<linkedListWorkingText<<endl;
}
int Rsum(struct LinkedListNode *linkedListCurrentNode)// recursive sum of data of nodes
{
    if(linkedListCurrentNode)
        return linkedListCurrentNode->linkedListNodeValue+Rsum(linkedListCurrentNode->linkedListNextLink);
    return 0;
}

int main()
{
    int linkedListFirstItems[]={4,5,8,9,7,1,9,4,7};
    create(linkedListFirstItems,9);
    count();
    cout<<"count is : "<<Rcount(linkedListFirstNode)<<endl;
    sum();
    cout<<"sum  is : "<<Rsum(linkedListFirstNode)<<endl;
    return 0;
}