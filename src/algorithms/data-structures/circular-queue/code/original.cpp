#include<iostream>
#include<stdlib.h>
using namespace std;

class CircularQueueQueueModel
{
    private:
        int circularQueueItemCapacity;
        int circularQueueQueueFront;
        int circularQueueQueueRear;
        int *circularQueueQueueStorage;
    public:
        CircularQueueQueueModel();
        void enqueue(int circularQueueInputValue);
        int dequeue();
        void display();
};
CircularQueueQueueModel::CircularQueueQueueModel()
{
    cout<<"Enter the size of queue\n";
    cin>>circularQueueItemCapacity;
    circularQueueItemCapacity++;
    circularQueueQueueStorage=new int[circularQueueItemCapacity];
    circularQueueQueueFront=circularQueueQueueRear=0;
}

void CircularQueueQueueModel::enqueue(int circularQueueInputValue)
{
    if((circularQueueQueueRear+1)%circularQueueItemCapacity==circularQueueQueueFront)
        cout<<"Queue is full\n";
    else{
        circularQueueQueueRear=(circularQueueQueueRear+1)%circularQueueItemCapacity;
        circularQueueQueueStorage[circularQueueQueueRear]=circularQueueInputValue;

    }
}

int CircularQueueQueueModel::dequeue()
{
    int circularQueueInputValue=-1;
    if(circularQueueQueueFront==circularQueueQueueRear)
        cout<<"Queue is full\n";
    else{
        circularQueueQueueFront=(circularQueueQueueFront+1)%circularQueueItemCapacity;
        circularQueueInputValue=circularQueueQueueStorage[circularQueueQueueFront];
    }
    return circularQueueInputValue;
}

void  CircularQueueQueueModel::display()
{
    int circularQueueScanIndex=circularQueueQueueFront+1;
    do{
        cout<<circularQueueQueueStorage[circularQueueScanIndex]<<" ";
        circularQueueScanIndex=(circularQueueScanIndex+1)%circularQueueItemCapacity;
    }while(circularQueueScanIndex!=(circularQueueQueueRear+1)%circularQueueItemCapacity);
    cout<<"\n";
}
int main()
{
    CircularQueueQueueModel circularQueueNextNode;
    circularQueueNextNode.enqueue(1);
    circularQueueNextNode.enqueue(2);
    circularQueueNextNode.enqueue(3);
    circularQueueNextNode.enqueue(4);
    circularQueueNextNode.enqueue(5);
    cout<<"Deleted "<<circularQueueNextNode.dequeue()<<endl;
    circularQueueNextNode.enqueue(67);
    circularQueueNextNode.display();
}