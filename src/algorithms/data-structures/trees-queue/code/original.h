class Queue
{
    private:
        int itemCapacity;
        int queueFront=-1;
        int queueRear=-1;
        Node  **queueStorage;
    public:
        Queue();
        void enqueue(Node* inputValue);
        Node* dequeue();
        int isEmpty();
};
Queue::Queue()
{
    itemCapacity=100;
    queueStorage=new Node*[itemCapacity];
    queueFront=queueRear=-1;
}

void Queue::enqueue(Node *inputValue)
{
    if(queueRear==itemCapacity-1)
        cout<<"Queue is full\n";
    else {
        ++queueRear;
        queueStorage[queueRear]=inputValue;

    }
}

Node *Queue::dequeue()
{
    Node *inputValue=NULL;
    if(queueFront==queueRear)
        cout<<"Queue is Empty\n";
    else{
        ++queueFront;
        inputValue=queueStorage[queueFront];
    }
    return inputValue;
}

int Queue::isEmpty()
{
    return queueFront==queueRear;
}
