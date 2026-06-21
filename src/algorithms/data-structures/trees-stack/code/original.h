
struct Stack{
    int itemCapacity;
    int stackTop;
    long int *stackStorage;
};

void create(Stack *treesStackSt)
{
    cout<<"Enter the size of stack : ";
    cin>>treesStackSt->itemCapacity;
    treesStackSt->stackTop=-1;
    treesStackSt->stackStorage=new long int[treesStackSt->itemCapacity];
}



void push(Stack *treesStackSt,long int inputValue)
{
    if(treesStackSt->itemCapacity-treesStackSt->stackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        treesStackSt->stackTop++;
        treesStackSt->stackStorage[treesStackSt->stackTop]=inputValue;
    }
}

long int pop(Stack *treesStackSt)
{
    long int inputValue=-1;
    if(treesStackSt->stackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        inputValue=treesStackSt->stackStorage[treesStackSt->stackTop];
        treesStackSt->stackTop--;
    }
    return inputValue;
}



long int StackTop(Stack treesStackSt)
{
    long int inputValue=-1;
    if(treesStackSt.stackTop!=-1){
        inputValue=treesStackSt.stackStorage[treesStackSt.stackTop];
    }
    return inputValue;
}

int isEmpty(Stack treesStackSt)
{
    if(treesStackSt.stackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(Stack treesStackSt)
{
    if(treesStackSt.itemCapacity-treesStackSt.stackTop==1)
        return 1;
    else
        return 0;
}
