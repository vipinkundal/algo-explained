
struct TreesStackStackModel{
    int treesStackItemCapacity;
    int treesStackStackTop;
    long int *treesStackStackStorage;
};

void create(TreesStackStackModel *treesStackState)
{
    cout<<"Enter the size of stack : ";
    cin>>treesStackState->treesStackItemCapacity;
    treesStackState->treesStackStackTop=-1;
    treesStackState->treesStackStackStorage=new long int[treesStackState->treesStackItemCapacity];
}



void push(TreesStackStackModel *treesStackState,long int treesStackInputValue)
{
    if(treesStackState->treesStackItemCapacity-treesStackState->treesStackStackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        treesStackState->treesStackStackTop++;
        treesStackState->treesStackStackStorage[treesStackState->treesStackStackTop]=treesStackInputValue;
    }
}

long int pop(TreesStackStackModel *treesStackState)
{
    long int treesStackInputValue=-1;
    if(treesStackState->treesStackStackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        treesStackInputValue=treesStackState->treesStackStackStorage[treesStackState->treesStackStackTop];
        treesStackState->treesStackStackTop--;
    }
    return treesStackInputValue;
}



long int StackTop(TreesStackStackModel treesStackState)
{
    long int treesStackInputValue=-1;
    if(treesStackState.treesStackStackTop!=-1){
        treesStackInputValue=treesStackState.treesStackStackStorage[treesStackState.treesStackStackTop];
    }
    return treesStackInputValue;
}

int isEmpty(TreesStackStackModel treesStackState)
{
    if(treesStackState.treesStackStackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(TreesStackStackModel treesStackState)
{
    if(treesStackState.treesStackItemCapacity-treesStackState.treesStackStackTop==1)
        return 1;
    else
        return 0;
}
