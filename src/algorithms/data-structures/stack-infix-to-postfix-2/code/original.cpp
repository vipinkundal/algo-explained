#include<iostream>
#include<stdlib.h>
#include <cstring>
using namespace std;
struct StackInfixStackModel{
    int stackInfixItemCapacity;
    int stackInfixStackTop;
    char *stackInfixStackStorage;
};


void create(StackInfixStackModel *stackInfixState2,char *stackInfixWorkingText)
{
    int stackInfixInputValue=strlen(stackInfixWorkingText);
    stackInfixState2->stackInfixItemCapacity=stackInfixInputValue;
    stackInfixState2->stackInfixStackTop=-1;
    stackInfixState2->stackInfixStackStorage=new char[stackInfixState2->stackInfixItemCapacity];
}

void push(StackInfixStackModel *stackInfixState2,char stackInfixInputValue)
{
    if(stackInfixState2->stackInfixItemCapacity-stackInfixState2->stackInfixStackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackInfixState2->stackInfixStackTop++;
        stackInfixState2->stackInfixStackStorage[stackInfixState2->stackInfixStackTop]=stackInfixInputValue;
    }
}

char TopValue(StackInfixStackModel stackInfixState2)
{
    if(stackInfixState2.stackInfixStackTop==-1)
        return -1;
    else
        return stackInfixState2.stackInfixStackStorage[stackInfixState2.stackInfixStackTop];
}

char pop(StackInfixStackModel *stackInfixState2)
{
    char stackInfixInputValue=-1;
    if(stackInfixState2->stackInfixStackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        stackInfixInputValue=stackInfixState2->stackInfixStackStorage[stackInfixState2->stackInfixStackTop];
        stackInfixState2->stackInfixStackTop--;
    }
    return stackInfixInputValue;
}


int isEmpty(StackInfixStackModel stackInfixState2)
{
    if(stackInfixState2.stackInfixStackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(StackInfixStackModel stackInfixState2)
{
    if(stackInfixState2.stackInfixItemCapacity-stackInfixState2.stackInfixStackTop==1)
        return 1;
    else
        return 0;
}

int isOperand(char stackInfixWorkingText)
{
    if(stackInfixWorkingText=='*' || stackInfixWorkingText=='/' || stackInfixWorkingText=='+' || stackInfixWorkingText=='-' || stackInfixWorkingText=='^' || stackInfixWorkingText=='(' || stackInfixWorkingText==')')
        return 0;
    else 
        return 1;
}

int out_pre(char stackInfixWorkingText)
{
    if(stackInfixWorkingText=='+' || stackInfixWorkingText=='-')
        return 1;
    else if(stackInfixWorkingText=='*' || stackInfixWorkingText=='/')
        return 3;
    else if(stackInfixWorkingText=='^')
        return 6;
    else if(stackInfixWorkingText=='(')
        return 7;
    else if(stackInfixWorkingText==')')
        return 0;
    return 0;
}

int ins_pre(char stackInfixWorkingText)
{
    if(stackInfixWorkingText=='+' || stackInfixWorkingText=='-')
        return 2;
    else if(stackInfixWorkingText=='*' || stackInfixWorkingText=='/')
        return 4;
    else if(stackInfixWorkingText=='^')
        return 5;
    else if(stackInfixWorkingText=='(')
        return 0;
    return -1;
}

char* ToPost(char *stackInfixWorkingText)
{
    char *stackInfixState;
    int stackInfixScanIndex=0,stackInfixWriteIndex=0;
    stackInfixState=new char[strlen(stackInfixWorkingText+2)];
    StackInfixStackModel stackInfixState2;
    create(&stackInfixState2,stackInfixWorkingText);
    push(&stackInfixState2,'#');//because of comaprison of top vale with string 1st value # is pushed
                    //so there wont be any error
    while(stackInfixWorkingText[stackInfixScanIndex]!='\0')
    {
        if(isOperand(stackInfixWorkingText[stackInfixScanIndex]))
           stackInfixState[stackInfixWriteIndex++]=stackInfixWorkingText[stackInfixScanIndex++];
        else
        {
            if(out_pre(stackInfixWorkingText[stackInfixScanIndex])>ins_pre(TopValue(stackInfixState2)))//because of this comparison stack cant be expty so # is pushed
                push(&stackInfixState2,stackInfixWorkingText[stackInfixScanIndex++]);
            else if(out_pre(stackInfixWorkingText[stackInfixScanIndex])<ins_pre(TopValue(stackInfixState2)))
            {
                   stackInfixState[stackInfixWriteIndex++]=pop(&stackInfixState2);
            }
            else{
                pop(&stackInfixState2);
                stackInfixScanIndex++;
            }
        }
    }
    while(!isEmpty(stackInfixState2))
    {
        stackInfixState[stackInfixWriteIndex++]=pop(&stackInfixState2);
    }
    stackInfixState[stackInfixWriteIndex]='\0';
    return stackInfixState;
}

int main()
{
    char stackInfixWorkingText[]="((a+b)*c)-d^e^f";
    char *stackInfixState=ToPost(stackInfixWorkingText);
    cout<<stackInfixState;
    return 0;
}