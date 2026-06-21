#include<iostream>
#include<stdlib.h>
using namespace std;
struct Stack{
    int itemCapacity;
    int stackTop;
    int *stackStorage;
};

void create(Stack *stackUsingSt)
{
    cout<<"Enter the size of stack : ";
    cin>>stackUsingSt->itemCapacity;
    stackUsingSt->stackTop=-1;
    stackUsingSt->stackStorage=new int[stackUsingSt->itemCapacity];
}

void display(Stack stackUsingSt)
{
    if(stackUsingSt.stackTop==-1)
        cout<<"stack is Empty";
    else{
        int scanIndex;
        for(scanIndex=stackUsingSt.stackTop;scanIndex>=0;scanIndex--)
        {
            cout<<stackUsingSt.stackStorage[scanIndex]<<" ";
        }
        cout<<endl;
    }
}

void push(Stack *stackUsingSt,int inputValue)
{
    if(stackUsingSt->itemCapacity-stackUsingSt->stackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackUsingSt->stackTop++;
        stackUsingSt->stackStorage[stackUsingSt->stackTop]=inputValue;
    }
}

int pop(Stack *stackUsingSt)
{
    int inputValue=-1;
    if(stackUsingSt->stackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        inputValue=stackUsingSt->stackStorage[stackUsingSt->stackTop];
        stackUsingSt->stackTop--;
    }
    return inputValue;
}

int peek(Stack stackUsingSt,int targetIndex)
{
    int inputValue=-1;
    if(stackUsingSt.stackTop-targetIndex+1<0)
        cout<<"Invalid Index\n";
    else{
        inputValue=stackUsingSt.stackStorage[stackUsingSt.stackTop-targetIndex+1];
    }
    return inputValue;
}

int StackTop(Stack stackUsingSt)
{
    int inputValue=-1;
    if(stackUsingSt.stackTop!=-1){
        inputValue=stackUsingSt.stackStorage[stackUsingSt.stackTop];
    }
    return inputValue;
}

int isEmpty(Stack stackUsingSt)
{
    if(stackUsingSt.stackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(Stack stackUsingSt)
{
    if(stackUsingSt.itemCapacity-stackUsingSt.stackTop==1)
        return 1;
    else
        return 0;
}
int main()
{
    struct Stack stackUsingSt;
    create(&stackUsingSt);
    display(stackUsingSt);
    return 0;
}