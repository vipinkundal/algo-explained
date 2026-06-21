#include<iostream>
#include<stdlib.h>
using namespace std;
class Node{
public:
    int nodeValue;
    Node *nextLink;
};
class Queue
{
    private:
        Node *queueFront;
        Node *queueRear;
    public:
        Queue(){queueFront=queueRear=NULL;}
        void enqueue(int inputValue);
        int dequeue();
        void display();
};

void Queue::enqueue(int inputValue)
{
    Node *swapValue;
    swapValue=new Node;
    if(swapValue==NULL)
        cout<<"Queue is full\n";
    else{
        swapValue->nodeValue=inputValue;
        swapValue->nextLink=NULL;
        if(queueFront==NULL)
            queueFront=queueRear=swapValue;
        else{
            queueRear->nextLink=swapValue;
            queueRear=swapValue;
        }
    }
}

int Queue::dequeue()
{
    int inputValue=-1;
    Node *swapValue;
    if(queueFront==NULL)
        cout<<"Queue is Empty\n";
    else{
        swapValue=queueFront;
        if(queueFront->nextLink)
            queueFront=queueFront->nextLink;
        else
            queueFront=NULL;
        inputValue=swapValue->nodeValue;
        delete swapValue;
    }
    return inputValue;
}

void  Queue::display()
{
    Node *scanIndex=queueFront;
    while(scanIndex)
    {
        cout<<scanIndex->nodeValue<<" ";
        scanIndex=scanIndex->nextLink;
    }
    cout<<"\n";
}
int main()
{
    Queue nextNode;
    nextNode.enqueue(1);
    nextNode.enqueue(2);
    nextNode.enqueue(3);
    nextNode.enqueue(4);
    nextNode.enqueue(5);
    cout<<"Deleted "<<nextNode.dequeue()<<endl;
    nextNode.enqueue(14);
    nextNode.enqueue(15);

    nextNode.display();
}