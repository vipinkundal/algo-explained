#include<iostream>
#include<stdlib.h>
using namespace std;
class QueueUsingNode{
public:
    int queueUsingNodeValue;
    QueueUsingNode *queueUsingNextLink;
};
class QueueUsingQueueModel
{
    private:
        QueueUsingNode *queueUsingQueueFront;
        QueueUsingNode *queueUsingQueueRear;
    public:
        QueueUsingQueueModel(){queueUsingQueueFront=queueUsingQueueRear=NULL;}
        void enqueue(int queueUsingInputValue);
        int dequeue();
        void display();
};

void QueueUsingQueueModel::enqueue(int queueUsingInputValue)
{
    QueueUsingNode *queueUsingSwapValue;
    queueUsingSwapValue=new QueueUsingNode;
    if(queueUsingSwapValue==NULL)
        cout<<"Queue is full\n";
    else{
        queueUsingSwapValue->queueUsingNodeValue=queueUsingInputValue;
        queueUsingSwapValue->queueUsingNextLink=NULL;
        if(queueUsingQueueFront==NULL)
            queueUsingQueueFront=queueUsingQueueRear=queueUsingSwapValue;
        else{
            queueUsingQueueRear->queueUsingNextLink=queueUsingSwapValue;
            queueUsingQueueRear=queueUsingSwapValue;
        }
    }
}

int QueueUsingQueueModel::dequeue()
{
    int queueUsingInputValue=-1;
    QueueUsingNode *queueUsingSwapValue;
    if(queueUsingQueueFront==NULL)
        cout<<"Queue is Empty\n";
    else{
        queueUsingSwapValue=queueUsingQueueFront;
        if(queueUsingQueueFront->queueUsingNextLink)
            queueUsingQueueFront=queueUsingQueueFront->queueUsingNextLink;
        else
            queueUsingQueueFront=NULL;
        queueUsingInputValue=queueUsingSwapValue->queueUsingNodeValue;
        delete queueUsingSwapValue;
    }
    return queueUsingInputValue;
}

void  QueueUsingQueueModel::display()
{
    QueueUsingNode *queueUsingScanIndex=queueUsingQueueFront;
    while(queueUsingScanIndex)
    {
        cout<<queueUsingScanIndex->queueUsingNodeValue<<" ";
        queueUsingScanIndex=queueUsingScanIndex->queueUsingNextLink;
    }
    cout<<"\n";
}
int main()
{
    QueueUsingQueueModel queueUsingNextNode;
    queueUsingNextNode.enqueue(1);
    queueUsingNextNode.enqueue(2);
    queueUsingNextNode.enqueue(3);
    queueUsingNextNode.enqueue(4);
    queueUsingNextNode.enqueue(5);
    cout<<"Deleted "<<queueUsingNextNode.dequeue()<<endl;
    queueUsingNextNode.enqueue(14);
    queueUsingNextNode.enqueue(15);

    queueUsingNextNode.display();
}