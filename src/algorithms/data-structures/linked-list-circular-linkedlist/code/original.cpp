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
    CircularLinkedList(int firstItems[],int itemCount);
    Node * getHead(){return Head;}
    void display();
    void Rdisplay(Node *currentNode);
};
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
    leftIndex.display();
    Node *linkedListH=leftIndex.getHead();
    leftIndex.Rdisplay(linkedListH);
    return 0;
}
