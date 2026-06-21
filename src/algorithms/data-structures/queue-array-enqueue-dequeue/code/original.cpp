#include<iostream>
#include<stdlib.h>
using namespace std;

class QueueArrayQueueModel
{
    private:
        int queueArrayItemCapacity;
        int queueArrayQueueFront;
        int queueArrayQueueRear;
        int *queueArrayQueueStorage;
    public:
        QueueArrayQueueModel();
        void enqueue(int queueArrayInputValue);
        int dequeue();
        void display();
};
QueueArrayQueueModel::QueueArrayQueueModel()
{
    cout<<"Enter the size of queue\n";
    cin>>queueArrayItemCapacity;
    queueArrayQueueStorage=new int[queueArrayItemCapacity];
    queueArrayQueueFront=queueArrayQueueRear=-1;
}

void QueueArrayQueueModel::enqueue(int queueArrayInputValue)
{
    if(queueArrayQueueRear==queueArrayItemCapacity-1)
        cout<<"Queue is full\n";
    else{
        ++queueArrayQueueRear;
        queueArrayQueueStorage[queueArrayQueueRear]=queueArrayInputValue;

    }
}

int QueueArrayQueueModel::dequeue()
{
    int queueArrayInputValue=-1;
    if(queueArrayQueueFront==queueArrayQueueRear)
        cout<<"Queue is Empty\n";
    else{
        ++queueArrayQueueFront;
        queueArrayInputValue=queueArrayQueueStorage[queueArrayQueueFront];
    }
    return queueArrayInputValue;
}

void  QueueArrayQueueModel::display()
{
    int queueArrayScanIndex=queueArrayQueueFront+1;
    for(;queueArrayScanIndex<=queueArrayQueueRear;queueArrayScanIndex++)
        cout<<queueArrayQueueStorage[queueArrayScanIndex]<<" ";
    cout<<"\n";
}
int main()
{
    QueueArrayQueueModel queueArrayNextNode;
    queueArrayNextNode.enqueue(1);
    queueArrayNextNode.enqueue(2);
    queueArrayNextNode.enqueue(3);
    queueArrayNextNode.enqueue(4);
    queueArrayNextNode.enqueue(5);
    cout<<"Deleted "<<queueArrayNextNode.dequeue()<<endl;
    queueArrayNextNode.display();
}