#include<iostream>
#include<stdlib.h>
using namespace std;

class Queue
{
    private:
        int itemCapacity;
        int queueFront;
        int queueRear;
        int *queueStorage;
    public:
        Queue();
        void enqueue(int inputValue);
        int dequeue();
        void display();
};
Queue::Queue()
{
    cout<<"Enter the size of queue\n";
    cin>>itemCapacity;
    queueStorage=new int[itemCapacity];
    queueFront=queueRear=-1;
}

void Queue::enqueue(int inputValue)
{
    if(queueRear==itemCapacity-1)
        cout<<"Queue is full\n";
    else{
        ++queueRear;
        queueStorage[queueRear]=inputValue;

    }
}

int Queue::dequeue()
{
    int inputValue=-1;
    if(queueFront==queueRear)
        cout<<"Queue is Empty\n";
    else{
        ++queueFront;
        inputValue=queueStorage[queueFront];
    }
    return inputValue;
}

void  Queue::display()
{
    int scanIndex=queueFront+1;
    for(;scanIndex<=queueRear;scanIndex++)
        cout<<queueStorage[scanIndex]<<" ";
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
    nextNode.display();
}