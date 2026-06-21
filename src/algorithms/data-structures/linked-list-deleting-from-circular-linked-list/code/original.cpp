#include<iostream>
#include<stdlib.h>
using namespace std;
class Node{
    public:
        int nodeValue;
        Node *nextLink;
};

class CircularLinkedList{
    private:
        Node *Head;
    public:
    CircularLinkedList(){Head=NULL;}
    CircularLinkedList(int firstItems[],int itemCount);
    Node * getHead(){return Head;}
    void display();
    void Rdisplay(Node *currentNode);
    int length();
    void insert(int targetIndex,int storedValue);
    int Delete(int targetIndex);
};
int CircularLinkedList::Delete(int targetIndex)
{
    if(targetIndex<0 || targetIndex>length())
        return -1;
    Node *currentNode=Head,*nextNode;
    int inputValue,scanIndex;
    if(targetIndex==1)
    {
        while(currentNode->nextLink!=Head)
            currentNode=currentNode->nextLink;
        if(currentNode==Head)
        {
            inputValue=currentNode->nodeValue;
            delete currentNode;
            Head=NULL;
            return inputValue;
        }
        inputValue=Head->nodeValue;
        currentNode->nextLink=Head->nextLink;
        delete Head;
        Head=currentNode->nextLink;
        return inputValue;
    }
    else{
        for(scanIndex=0;scanIndex<targetIndex-2;scanIndex++)
            currentNode=currentNode->nextLink;
        nextNode=currentNode->nextLink;
        inputValue=nextNode->nodeValue;
        currentNode->nextLink=nextNode->nextLink;
        delete nextNode;
        return inputValue;
    }
}
void CircularLinkedList::insert(int targetIndex,int storedValue)
{
    if(targetIndex<0 || targetIndex>length())
        return ;
    Node *currentNode=Head,*swapValue;
    swapValue=new Node;
    swapValue->nodeValue=storedValue;
    if(targetIndex==0)
    {
        
        if(Head==NULL)
        {
            swapValue->nextLink=swapValue;
            Head=swapValue;
        }
        else
        {
            while(currentNode->nextLink!=Head)
                currentNode=currentNode->nextLink;
            swapValue->nextLink=currentNode->nextLink;
            currentNode->nextLink=swapValue;

        }
    }
    else{
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
            currentNode=currentNode->nextLink;
        swapValue->nextLink=currentNode->nextLink;
            currentNode->nextLink=swapValue;
    }
}
int CircularLinkedList::length()
{
    Node *currentNode=Head;
    int leftIndex=0;
    do
    {
        leftIndex++;
        currentNode=currentNode->nextLink;
    }while(currentNode!=Head);
    return leftIndex;

}
void CircularLinkedList::Rdisplay(Node *currentNode)
{
    static int linkedListFlag=0;
    if(currentNode!=Head || linkedListFlag==0)
    {
        linkedListFlag=1;
        cout<<currentNode->nodeValue<<"->";
        Rdisplay(currentNode->nextLink);
    }
    linkedListFlag=0;
}
void CircularLinkedList::display()
{
    Node *currentNode=Head;
    do{
        cout<<currentNode->nodeValue<<"->";
        currentNode=currentNode->nextLink;

    }while(currentNode!=Head);
    cout<<endl;
}
CircularLinkedList::CircularLinkedList(int firstItems[],int itemCount)
{
    Node *lastNode,*swapValue;
    
    Head=new Node;
    Head->nodeValue=firstItems[0];
    Head->nextLink=Head;
    lastNode=Head;
    for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
    {
        swapValue=new Node;
        swapValue->nodeValue=firstItems[scanIndex];
        swapValue->nextLink=lastNode->nextLink;
        lastNode->nextLink=swapValue;
        lastNode=swapValue;
    }
}

int main()
{
    
    int firstItems[]={1,3,5,8,9};
    CircularLinkedList leftIndex(firstItems,5);
    cout<<"Before :";
    leftIndex.display();
    cout<<"Deleted : "<<leftIndex.Delete(1)<<endl;
    cout<<"After : ";
    leftIndex.display();
    return 0;
}
