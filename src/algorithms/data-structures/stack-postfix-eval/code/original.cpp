#include<iostream>
#include<stdlib.h>
#include <cstring>
using namespace std;
struct Stack{
    int itemCapacity;
    int stackTop;
    int *stackStorage;
};


void create(Stack *stackPostfixSt,char *workingText)
{
    int inputValue=strlen(workingText);
    stackPostfixSt->itemCapacity=inputValue;
    stackPostfixSt->stackTop=-1;
    stackPostfixSt->stackStorage=new int[stackPostfixSt->itemCapacity];
}

void push(Stack *stackPostfixSt,int inputValue)
{
    if(stackPostfixSt->itemCapacity-stackPostfixSt->stackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackPostfixSt->stackTop++;
        stackPostfixSt->stackStorage[stackPostfixSt->stackTop]=inputValue;
    }
}



int pop(Stack *stackPostfixSt)
{
    int inputValue=-1;
    if(stackPostfixSt->stackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        inputValue=stackPostfixSt->stackStorage[stackPostfixSt->stackTop];
        stackPostfixSt->stackTop--;
    }
    return inputValue;
}


int isEmpty(Stack stackPostfixSt)
{
    if(stackPostfixSt.stackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(Stack stackPostfixSt)
{
    if(stackPostfixSt.itemCapacity-stackPostfixSt.stackTop==1)
        return 1;
    else
        return 0;
}

int isOperand(char workingText)
{
    if(workingText=='*' || workingText=='/' || workingText=='+' || workingText=='-' || workingText=='^' || workingText=='(' || workingText==')')
        return 0;
    else 
        return 1;
}


int eval(char *stackPostfixPostfix)
{
    Stack stackPostfixSt;
    create(&stackPostfixSt,stackPostfixPostfix);
    int scanIndex,stackPostfixX1,stackPostfixX2,rightIndex;
    for(scanIndex=0;stackPostfixPostfix[scanIndex]!='\0';scanIndex++)
    {
        if(isOperand(stackPostfixPostfix[scanIndex]))
        {
            push(&stackPostfixSt,(stackPostfixPostfix[scanIndex]-'0'));
        }
        else{
            stackPostfixX2=pop(&stackPostfixSt);
            stackPostfixX1=pop(&stackPostfixSt);
            switch(stackPostfixPostfix[scanIndex])
            {
                case '+':
                   rightIndex=stackPostfixX1+stackPostfixX2;
                   break;
                case '-':
                   rightIndex=stackPostfixX1-stackPostfixX2;
                   break;
                case '*':
                   rightIndex=stackPostfixX1*stackPostfixX2;
                   break;
                case '/':
                   rightIndex=stackPostfixX1/stackPostfixX2;
                   break;
                default:
                    break;

            } push(&stackPostfixSt,rightIndex);
        }
    }
    return pop(&stackPostfixSt);
}
int main()
{
    char workingText[]="2362/*+";
    int stackPostfixAnswer=eval(workingText);
    cout<<stackPostfixAnswer;
    return 0;
}