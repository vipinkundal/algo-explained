#include<iostream>
#include<stdlib.h>
using namespace std;
struct StackUsingStackModel{
    int stackUsingItemCapacity;
    int stackUsingStackTop;
    int *stackUsingStackStorage;
};

void create(StackUsingStackModel *stackUsingState)
{
    cout<<"Enter the size of stack : ";
    cin>>stackUsingState->stackUsingItemCapacity;
    stackUsingState->stackUsingStackTop=-1;
    stackUsingState->stackUsingStackStorage=new int[stackUsingState->stackUsingItemCapacity];
}

void display(StackUsingStackModel stackUsingState)
{
    if(stackUsingState.stackUsingStackTop==-1)
        cout<<"stack is Empty";
    else{
        int stackUsingScanIndex;
        for(stackUsingScanIndex=stackUsingState.stackUsingStackTop;stackUsingScanIndex>=0;stackUsingScanIndex--)
        {
            cout<<stackUsingState.stackUsingStackStorage[stackUsingScanIndex]<<" ";
        }
        cout<<endl;
    }
}

void push(StackUsingStackModel *stackUsingState,int stackUsingInputValue)
{
    if(stackUsingState->stackUsingItemCapacity-stackUsingState->stackUsingStackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackUsingState->stackUsingStackTop++;
        stackUsingState->stackUsingStackStorage[stackUsingState->stackUsingStackTop]=stackUsingInputValue;
    }
}

int pop(StackUsingStackModel *stackUsingState)
{
    int stackUsingInputValue=-1;
    if(stackUsingState->stackUsingStackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        stackUsingInputValue=stackUsingState->stackUsingStackStorage[stackUsingState->stackUsingStackTop];
        stackUsingState->stackUsingStackTop--;
    }
    return stackUsingInputValue;
}

int peek(StackUsingStackModel stackUsingState,int stackUsingTargetIndex)
{
    int stackUsingInputValue=-1;
    if(stackUsingState.stackUsingStackTop-stackUsingTargetIndex+1<0)
        cout<<"Invalid Index\n";
    else{
        stackUsingInputValue=stackUsingState.stackUsingStackStorage[stackUsingState.stackUsingStackTop-stackUsingTargetIndex+1];
    }
    return stackUsingInputValue;
}

int StackTop(StackUsingStackModel stackUsingState)
{
    int stackUsingInputValue=-1;
    if(stackUsingState.stackUsingStackTop!=-1){
        stackUsingInputValue=stackUsingState.stackUsingStackStorage[stackUsingState.stackUsingStackTop];
    }
    return stackUsingInputValue;
}

int isEmpty(StackUsingStackModel stackUsingState)
{
    if(stackUsingState.stackUsingStackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(StackUsingStackModel stackUsingState)
{
    if(stackUsingState.stackUsingItemCapacity-stackUsingState.stackUsingStackTop==1)
        return 1;
    else
        return 0;
}
int main()
{
    struct StackUsingStackModel stackUsingState;
    create(&stackUsingState);
    display(stackUsingState);
    return 0;
}