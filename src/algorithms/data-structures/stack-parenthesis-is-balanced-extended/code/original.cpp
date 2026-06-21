#include<iostream>
#include<stdlib.h>
#include <cstring>
using namespace std;
struct Stack{
    int itemCapacity;
    int stackTop;
    char *stackStorage;
};


void create(Stack *stackParenthesisSt,char *workingText)
{
    int inputValue=strlen(workingText);
    stackParenthesisSt->itemCapacity=inputValue;
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
        if(workingText[scanIndex]=='(' || workingText[scanIndex]=='{' || workingText[scanIndex]=='[')
            push(&stackParenthesisSt,workingText[scanIndex]);
        else if(workingText[scanIndex]==')' || workingText[scanIndex]==']' || workingText[scanIndex]=='}')
        {
            if(isEmpty(stackParenthesisSt))
                return 0;
            char inputValue=pop(&stackParenthesisSt);
            if((workingText[scanIndex]-inputValue) <=2)//working with ascii code
                continue;
            else
                return 0;

        }
    }
    if(isEmpty(stackParenthesisSt))
        return 1;
    else
        return 0;

}
int main()
{
    char workingText[]="{([hedfsdfllo])}";
    cout<<isBalanced(workingText);

    return 0;
}