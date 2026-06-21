#include<iostream>
#include<stdlib.h>
using namespace std;
class Node {
    public:
    Node *previousLink;
    int nodeValue;
    Node *nextLink;
};
class CDoublyLL
{
private:
    Node *firstNode=NULL;
public:
    CDoublyLL()
        {firstNode=NULL;}
    CDoublyLL(int firstItems[],int itemCount);
    void Display();
    int Length();
    void Insert(int targetIndex,int inputValue);
    int Delete(int targetIndex);
    ~CDoublyLL();

};
CDoublyLL::CDoublyLL(int firstItems[],int itemCount)
{
    Node *lastNode,*swapValue;
    firstNode=new Node;
    firstNode->nodeValue=firstItems[0];
    firstNode->nextLink=firstNode;
    lastNode=firstNode;
    for(int scanIndex=1;scanIndex<itemCount;scanIndex++)
    {
        swapValue=new Node;
        swapValue->nextLink=lastNode->nextLink;
        swapValue->nodeValue=firstItems[scanIndex];
        swapValue->previousLink=lastNode;
        lastNode->nextLink=swapValue;
        lastNode=swapValue;
    }
    firstNode->previousLink=lastNode;
    
}

void CDoublyLL::Display()
{
    Node *currentNode=firstNode;
    do
    {
        cout<<currentNode->nodeValue<<"->";
        currentNode=currentNode->nextLink;
    }while(currentNode!=firstNode);
    cout<<"\n";
}

int CDoublyLL::Length()
{
    Node *currentNode=firstNode;
    if(firstNode==NULL)
        return 0;
    int inputValue=0;
    do
    {
        ++inputValue;
        currentNode=currentNode->nextLink;
    }while(currentNode!=firstNode);
    return inputValue;
}

int CDoublyLL::Delete(int targetIndex)
{
    if(targetIndex<0 || targetIndex>Length())
        return -1;

    Node *currentNode=firstNode;
    int inputValue;

    if(targetIndex==1)
    {
        if(firstNode->nextLink)
        {
            firstNode->previousLink->nextLink=firstNode->nextLink;
            firstNode=firstNode->nextLink;
            firstNode->previousLink=currentNode->previousLink;
            inputValue=currentNode->nodeValue;
        }
        else{
            firstNode=NULL;
        }
        delete currentNode;
        return inputValue;
    }
    else{
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
            currentNode=currentNode->nextLink;
        currentNode->previousLink->nextLink=currentNode->nextLink;
        currentNode->nextLink->previousLink=currentNode->previousLink;
        inputValue=currentNode->nodeValue;
        delete currentNode;
        return inputValue;
    }
}
void CDoublyLL::Insert(int targetIndex,int inputValue)
{
    if(targetIndex<0 || targetIndex>Length())
        return;
    Node *swapValue,*currentNode=firstNode;
    swapValue=new Node;
        swapValue->nodeValue=inputValue;
    if(targetIndex==0)//before first node
    {
        if(firstNode)
        {
            swapValue->nextLink=firstNode;
            swapValue->previousLink=firstNode->previousLink;
            swapValue->previousLink->nextLink=swapValue;
            firstNode->previousLink=swapValue;
        }
        else{
            swapValue->nextLink=swapValue->previousLink=swapValue;
        }
        firstNode=swapValue;
    }
    else{
        for(int scanIndex=0;scanIndex<targetIndex-1;scanIndex++)
            currentNode=currentNode->nextLink;
        swapValue->nextLink=currentNode->nextLink;
        if(currentNode->nextLink) 
            currentNode->nextLink->previousLink=swapValue;
        currentNode->nextLink=swapValue;
        swapValue->previousLink=currentNode;
    }
}




CDoublyLL::~CDoublyLL()
{
    Node *currentNode=firstNode,*nextNode;
    int textLength=Length();
    while(textLength>0)
    {
        nextNode=currentNode->nextLink;
        cout<<"Deleted :"<<currentNode->nodeValue<<endl;
        delete currentNode;
        currentNode=nextNode;
        --textLength;
    }
}

int main()
{
    
    CDoublyLL primaryValue;
    primaryValue.Insert(0,3);
    primaryValue.Insert(1,7);
    primaryValue.Insert(2,4);
    cout<<"Before"<<endl;
    primaryValue.Display();
    cout<<"Before Length : "<<primaryValue.Length()<<endl; 

    cout<<"Deleted : "<<primaryValue.Delete(1)<<endl;

    cout<<"After"<<endl;
    primaryValue.Display();
    cout<<"AFter Length : "<<primaryValue.Length()<<endl;

    
    return 0;
}