#include<iostream>
#include<stdlib.h>
#include <cstring>
using namespace std;
struct StackPostfixStackModel{
    int stackPostfixItemCapacity;
    int stackPostfixStackTop;
    int *stackPostfixStackStorage;
};


void create(StackPostfixStackModel *stackPostfixState3,char *stackPostfixWorkingText)
{
    int stackPostfixInputValue=strlen(stackPostfixWorkingText);
    stackPostfixState3->stackPostfixItemCapacity=stackPostfixInputValue;
    stackPostfixState3->stackPostfixStackTop=-1;
    stackPostfixState3->stackPostfixStackStorage=new int[stackPostfixState3->stackPostfixItemCapacity];
}

void push(StackPostfixStackModel *stackPostfixState3,int stackPostfixInputValue)
{
    if(stackPostfixState3->stackPostfixItemCapacity-stackPostfixState3->stackPostfixStackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackPostfixState3->stackPostfixStackTop++;
        stackPostfixState3->stackPostfixStackStorage[stackPostfixState3->stackPostfixStackTop]=stackPostfixInputValue;
    }
}



int pop(StackPostfixStackModel *stackPostfixState3)
{
    int stackPostfixInputValue=-1;
    if(stackPostfixState3->stackPostfixStackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        stackPostfixInputValue=stackPostfixState3->stackPostfixStackStorage[stackPostfixState3->stackPostfixStackTop];
        stackPostfixState3->stackPostfixStackTop--;
    }
    return stackPostfixInputValue;
}


int isEmpty(StackPostfixStackModel stackPostfixState3)
{
    if(stackPostfixState3.stackPostfixStackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(StackPostfixStackModel stackPostfixState3)
{
    if(stackPostfixState3.stackPostfixItemCapacity-stackPostfixState3.stackPostfixStackTop==1)
        return 1;
    else
        return 0;
}

int isOperand(char stackPostfixWorkingText)
{
    if(stackPostfixWorkingText=='*' || stackPostfixWorkingText=='/' || stackPostfixWorkingText=='+' || stackPostfixWorkingText=='-' || stackPostfixWorkingText=='^' || stackPostfixWorkingText=='(' || stackPostfixWorkingText==')')
        return 0;
    else 
        return 1;
}


int eval(char *stackPostfixState)
{
    StackPostfixStackModel stackPostfixState3;
    create(&stackPostfixState3,stackPostfixState);
    int stackPostfixScanIndex,stackPostfixState4,stackPostfixState5,stackPostfixRightIndex;
    for(stackPostfixScanIndex=0;stackPostfixState[stackPostfixScanIndex]!='\0';stackPostfixScanIndex++)
    {
        if(isOperand(stackPostfixState[stackPostfixScanIndex]))
        {
            push(&stackPostfixState3,(stackPostfixState[stackPostfixScanIndex]-'0'));
        }
        else{
            stackPostfixState5=pop(&stackPostfixState3);
            stackPostfixState4=pop(&stackPostfixState3);
            switch(stackPostfixState[stackPostfixScanIndex])
            {
                case '+':
                   stackPostfixRightIndex=stackPostfixState4+stackPostfixState5;
                   break;
                case '-':
                   stackPostfixRightIndex=stackPostfixState4-stackPostfixState5;
                   break;
                case '*':
                   stackPostfixRightIndex=stackPostfixState4*stackPostfixState5;
                   break;
                case '/':
                   stackPostfixRightIndex=stackPostfixState4/stackPostfixState5;
                   break;
                default:
                    break;

            } push(&stackPostfixState3,stackPostfixRightIndex);
        }
    }
    return pop(&stackPostfixState3);
}
int main()
{
    char stackPostfixWorkingText[]="2362/*+";
    int stackPostfixState2=eval(stackPostfixWorkingText);
    cout<<stackPostfixState2;
    return 0;
}