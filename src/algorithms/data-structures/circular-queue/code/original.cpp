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
    itemCapacity++;
    queueStorage=new int[itemCapacity];
    queueFront=queueRear=0;
}

void Queue::enqueue(int inputValue)
{
    if((queueRear+1)%itemCapacity==queueFront)
        cout<<"Queue is full\n";
    else{
        queueRear=(queueRear+1)%itemCapacity;
        queueStorage[queueRear]=inputValue;

    }
}

int Queue::dequeue()
{
    int inputValue=-1;
    if(queueFront==queueRear)
        cout<<"Queue is full\n";
    else{
        queueFront=(queueFront+1)%itemCapacity;
        inputValue=queueStorage[queueFront];
    }
    return inputValue;
}

void  Queue::display()
{
    int scanIndex=queueFront+1;
    do{
        cout<<queueStorage[scanIndex]<<" ";
        scanIndex=(scanIndex+1)%itemCapacity;
    }while(scanIndex!=(queueRear+1)%itemCapacity);
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
    nextNode.enqueue(67);
    nextNode.display();
}