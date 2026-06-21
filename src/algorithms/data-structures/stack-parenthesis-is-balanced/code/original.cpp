#include<iostream>
#include<stdlib.h>
#include<string.h>
using namespace std;
struct StackParenthesisStackModel{
    int stackParenthesisItemCapacity;
    int stackParenthesisStackTop;
    char *stackParenthesisStackStorage;
};


void create(StackParenthesisStackModel *stackParenthesisState,char *stackParenthesisWorkingText)
{
    stackParenthesisState->stackParenthesisItemCapacity=strlen(stackParenthesisWorkingText);
    stackParenthesisState->stackParenthesisStackTop=-1;
    stackParenthesisState->stackParenthesisStackStorage=new char[stackParenthesisState->stackParenthesisItemCapacity];
} 

void push(StackParenthesisStackModel *stackParenthesisState,char stackParenthesisInputValue)
{
    if(stackParenthesisState->stackParenthesisItemCapacity-stackParenthesisState->stackParenthesisStackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackParenthesisState->stackParenthesisStackTop++;
        stackParenthesisState->stackParenthesisStackStorage[stackParenthesisState->stackParenthesisStackTop]=stackParenthesisInputValue;
    }
}

char pop(StackParenthesisStackModel *stackParenthesisState)
{
    char stackParenthesisInputValue=-1;
    if(stackParenthesisState->stackParenthesisStackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        stackParenthesisInputValue=stackParenthesisState->stackParenthesisStackStorage[stackParenthesisState->stackParenthesisStackTop];
        stackParenthesisState->stackParenthesisStackTop--;
    }
    return stackParenthesisInputValue;
}


int isEmpty(StackParenthesisStackModel stackParenthesisState)
{
    if(stackParenthesisState.stackParenthesisStackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(StackParenthesisStackModel stackParenthesisState)
{
    if(stackParenthesisState.stackParenthesisItemCapacity-stackParenthesisState.stackParenthesisStackTop==1)
        return 1;
    else
        return 0;
}

int isBalanced(char *stackParenthesisWorkingText)
{
    int stackParenthesisScanIndex;
    struct StackParenthesisStackModel stackParenthesisState;
    create(&stackParenthesisState,stackParenthesisWorkingText);

    for(stackParenthesisScanIndex=0;stackParenthesisWorkingText[stackParenthesisScanIndex]!='\0';stackParenthesisScanIndex++)
    {
        if(stackParenthesisWorkingText[stackParenthesisScanIndex]=='(')
            push(&stackParenthesisState,'(');
        else if(stackParenthesisWorkingText[stackParenthesisScanIndex]==')')
        {
            if(isEmpty(stackParenthesisState))
                return 0;
            pop(&stackParenthesisState);
        }
    }
    if(isEmpty(stackParenthesisState))
        return 1;
    else
        return 0;

}
int main()
{
    char stackParenthesisWorkingText[]="((Hello))+(World))";
    cout<<isBalanced(stackParenthesisWorkingText);

    return 0;
}