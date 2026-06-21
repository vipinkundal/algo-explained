#include<iostream>
#include<stdlib.h>
#include <cstring>
using namespace std;
struct Stack{
    int itemCapacity;
    int stackTop;
    char *stackStorage;
};


void create(Stack *stackInfixSt,char *workingText)
{
    int inputValue=strlen(workingText);
    stackInfixSt->itemCapacity=inputValue;
    stackInfixSt->stackTop=-1;
    stackInfixSt->stackStorage=new char[stackInfixSt->itemCapacity];
}

void push(Stack *stackInfixSt,char inputValue)
{
    if(stackInfixSt->itemCapacity-stackInfixSt->stackTop==1)
    {
        cout<<"stack is overflow\n";
    }
    else{
        stackInfixSt->stackTop++;
        stackInfixSt->stackStorage[stackInfixSt->stackTop]=inputValue;
    }
}

char TopValue(Stack stackInfixSt)
{
    if(stackInfixSt.stackTop==-1)
        return -1;
    else
        return stackInfixSt.stackStorage[stackInfixSt.stackTop];
}

char pop(Stack *stackInfixSt)
{
    char inputValue=-1;
    if(stackInfixSt->stackTop==-1)
    {
        cout<<"Stack is underflow\n";
    }
    else{
        inputValue=stackInfixSt->stackStorage[stackInfixSt->stackTop];
        stackInfixSt->stackTop--;
    }
    return inputValue;
}


int isEmpty(Stack stackInfixSt)
{
    if(stackInfixSt.stackTop==-1)
        return 1;
    else
        return 0;
}

int isFull(Stack stackInfixSt)
{
    if(stackInfixSt.itemCapacity-stackInfixSt.stackTop==1)
        return 1;
    else
        return 0;
}

int isOperand(char workingText)
{
    if(workingText=='*' || workingText=='/' || workingText=='+' || workingText=='-')
        return 0;
    else 
        return 1;
}

int pre(char workingText)
{
    if(workingText=='*' || workingText=='/')
        return 2;
    else if(workingText=='+' || workingText=='-')
        return 1;
    return 0;
}

char* ToPost(char *workingText)
{
    char *stackInfixPostfix;
    int scanIndex=0,writeIndex=0;
    stackInfixPostfix=new char[strlen(workingText+2)];
    Stack stackInfixSt;
    create(&stackInfixSt,workingText);
    push(&stackInfixSt,'#');//because of comaprison of top vale with string 1st value # is pushed
                    //so there wont be any error
    while(workingText[scanIndex]!='\0')
    {
        if(isOperand(workingText[scanIndex]))
           stackInfixPostfix[writeIndex++]=workingText[scanIndex++];
        else
        {
            if(pre(workingText[scanIndex])>pre(TopValue(stackInfixSt)))//because of this comparison stack cant be expty so # is pushed
                push(&stackInfixSt,workingText[scanIndex++]);
            else
            {
                   stackInfixPostfix[writeIndex++]=pop(&stackInfixSt);
            }
        }
    }
    while(!isEmpty(stackInfixSt))
    {
        stackInfixPostfix[writeIndex++]=pop(&stackInfixSt);
    }
    stackInfixPostfix[writeIndex]='\0';
    return stackInfixPostfix;
}

int main()
{
    char workingText[]="a+b*c/d+e";
    char *stackInfixPostfix=ToPost(workingText);
    cout<<stackInfixPostfix;
    return 0;
}