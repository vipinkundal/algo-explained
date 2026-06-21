#include<iostream>
#include<stdlib.h>
#include<string.h>
using namespace std;
struct Stack{
    int itemCapacity;
    int stackTop;
    char *stackStorage;
};


void create(Stack *stackParenthesisSt,char *workingText)
{
    stackParenthesisSt->itemCapacity=strlen(workingText);
    stackParenthesisSt->stackTop=-1;
    stackParenthesisSt->stackStorage=new char[stackParenthesisSt->itemCapacity];
} 

void push(Stack *stackParenthesisSt,char inputValue)
{
    if(stackParenthesisSt->itemCapacity-stackParenthesisSt->stackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackParenthesisSt->stackTop++;
        stackParenthesisSt->stackStorage[stackParenthesisSt->stackTop]=inputValue;
    }
}

char pop(Stack *stackParenthesisSt)
{
    char inputValue=-1;
    if(stackParenthesisSt->stackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        inputValue=stackParenthesisSt->stackStorage[stackParenthesisSt->stackTop];
        stackParenthesisSt->stackTop--;
    }
    return inputValue;
}


int isEmpty(Stack stackParenthesisSt)
{
    if(stackParenthesisSt.stackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(Stack stackParenthesisSt)
{
    if(stackParenthesisSt.itemCapacity-stackParenthesisSt.stackTop==1)
        return 1;
    else
        return 0;
}

int isBalanced(char *workingText)
{
    int scanIndex;
    struct Stack stackParenthesisSt;
    create(&stackParenthesisSt,workingText);

    for(scanIndex=0;workingText[scanIndex]!='\0';scanIndex++)
    {
        if(workingText[scanIndex]=='(')
            push(&stackParenthesisSt,'(');
        else if(workingText[scanIndex]==')')
        {
            if(isEmpty(stackParenthesisSt))
                return 0;
            pop(&stackParenthesisSt);
        }
    }
    if(isEmpty(stackParenthesisSt))
        return 1;
    else
        return 0;

}
int main()
{
    char workingText[]="((Hello))+(World))";
    cout<<isBalanced(workingText);

    return 0;
}