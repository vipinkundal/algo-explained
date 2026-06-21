#include<iostream>

using namespace std;
class Node{
    public:
        int nodeValue;
        Node *nextLink;
};

class LinkedList
{
private:
    Node *firstNode;
public:
    LinkedList()
    {
        firstNode=NULL;
    }
    LinkedList(int firstItems[],int itemCount);
    void display();
    int length();
    void insert(int targetPosition ,int storedValue);
    int del(int targetIndex);
    ~LinkedList();
    
};

LinkedList::~LinkedList()
{
    Node *currentNode=firstNode;
    while(firstNode)
    {
        firstNode=firstNode->nextLink;
        delete currentNode;
        currentNode=firstNode;
    }
}
int LinkedList::del(int targetIndex)
{
    Node *nextNode=NULL,*currentNode=firstNode;
    int inputValue=-1;//to store data of deleted node
    if(targetIndex<0 || targetIndex>length())
        return -1;
    if(targetIndex==0)
    {
        inputValue=firstNode->nodeValue;
        firstNode=firstNode->nextLink;
    }
    else
    {
        for(int scanIndex=0;scanIndex<targetIndex;scanIndex++)
        {
            nextNode=currentNode;
            currentNode=currentNode->nextLink;
        }
        inputValue=currentNode->nodeValue;
        nextNode->nextLink=currentNode->nextLink;
    }

    delete currentNode;
    return inputValue;
}
LinkedList::LinkedList(int firstItems[],int itemCount)
    {
        int scanIndex;
        Node *lastNode, *swapValue;
        firstNode=new Node;
        firstNode->nodeValue=firstItems[0];
        firstNode->nextLink=NULL;
        lastNode=firstNode;//addreess is passed and now first is refferd as last

        for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
        {
            swapValue=new Node;
            swapValue->nodeValue=firstItems[scanIndex];
            swapValue->nextLink=NULL;
            lastNode->nextLink=swapValue;//putting address of current node in the next of last node 
            lastNode=swapValue;//assigning current node as last node
        }
    }
int LinkedList::length()//counting of nodes
{
    int columnIndex=0;
    Node *currentNode;
    currentNode=firstNode;
    while(currentNode)
    {
        columnIndex++;
        currentNode=currentNode->nextLink;
    }
    return columnIndex;
}
void LinkedList::display()
{
    Node *currentNode;
    currentNode=firstNode;
    while(currentNode!=NULL)
    {
        cout<<currentNode->nodeValue<<endl;
        currentNode=currentNode->nextLink;
    }
}
void LinkedList::insert(int targetPosition ,int storedValue)
{
    if(targetPosition<0 || targetPosition>length())
    return ;

    Node * currentNode;
    Node *swapValue;
    currentNode=firstNode;
    swapValue=new Node;
    if(targetPosition==0)
    {
        swapValue->nodeValue=storedValue;
        swapValue->nextLink=firstNode;
        firstNode=swapValue;
    }
    else if(targetPosition>0)
    {
        for(int scanIndex=0;scanIndex<targetPosition-1 && currentNode;scanIndex++)//as it go to next node after one loop  and the node starts from 0
                                    //where as position starts from 1
        {
            currentNode=currentNode->nextLink;
        }
        swapValue->nodeValue=storedValue;
        swapValue->nextLink=currentNode->nextLink;
        currentNode->nextLink=swapValue;
    }
}
int main()
{
    int firstItems[]={1,6,8,12,56};
    LinkedList leftIndex(firstItems,5);
   
    leftIndex.insert(2,67);

     leftIndex.display();

    cout<<"lenght "<<leftIndex.length()<<endl;


    leftIndex.del(1);
    cout<<"After deletion"<<endl;
    leftIndex.display();
    return  0;
}
