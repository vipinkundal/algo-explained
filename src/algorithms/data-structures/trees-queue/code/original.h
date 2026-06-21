class TreesQueueQueueModel
{
    private:
        int treesQueueItemCapacity;
        int treesQueueQueueFront=-1;
        int treesQueueQueueRear=-1;
        Node  **treesQueueQueueStorage;
    public:
        TreesQueueQueueModel();
        void enqueue(Node* treesQueueInputValue);
        Node* dequeue();
        int isEmpty();
};
TreesQueueQueueModel::TreesQueueQueueModel()
{
    treesQueueItemCapacity=100;
    treesQueueQueueStorage=new Node*[treesQueueItemCapacity];
    treesQueueQueueFront=treesQueueQueueRear=-1;
}

void TreesQueueQueueModel::enqueue(Node *treesQueueInputValue)
{
    if(treesQueueQueueRear==treesQueueItemCapacity-1)
        cout<<"Queue is full\n";
    else {
        ++treesQueueQueueRear;
        treesQueueQueueStorage[treesQueueQueueRear]=treesQueueInputValue;

    }
}

Node *TreesQueueQueueModel::dequeue()
{
    Node *treesQueueInputValue=NULL;
    if(treesQueueQueueFront==treesQueueQueueRear)
        cout<<"Queue is Empty\n";
    else{
        ++treesQueueQueueFront;
        treesQueueInputValue=treesQueueQueueStorage[treesQueueQueueFront];
    }
    return treesQueueInputValue;
}

int TreesQueueQueueModel::isEmpty()
{
    return treesQueueQueueFront==treesQueueQueueRear;
}
