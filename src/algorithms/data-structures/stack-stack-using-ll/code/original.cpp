#include<iostream>
#include<stdlib.h>
using namespace std;
 
class Node{
    public:
        int nodeValue;
        Node *nextLink;
};

class Stack{
    private:
     Node *stackTop;
    public:
        Stack(){stackTop=NULL;}
        void push(int inputValue);
        int pop();
        void Display();
};

void Stack::push(int inputValue)
{
    Node *swapValue=new Node;
    if(swapValue==NULL) 
        cout<<"Stack overflow\n";
    else{
        swapValue->nodeValue=inputValue;
        if(stackTop)
        {
            swapValue->nextLink=stackTop;
            stackTop=swapValue;
        }
        else{
            stackTop=swapValue;
            swapValue->nextLink=NULL;
        }
    }
}

int Stack::pop()
{
    int inputValue=-1;
    if(stackTop==NULL)
        cout<<"Stack underflow\n";
    else{
        Node *swapValue=stackTop;
        stackTop=stackTop->nextLink;
        inputValue=swapValue->nodeValue;
        delete swapValue;
    }
    return inputValue;
}

void Stack::Display()
{
    
    if(stackTop==NULL)
        cout<<"Stack is Empty\n";
    else{
        Node *swapValue=stackTop;
        while(swapValue)
        {
            cout<<swapValue->nodeValue<<" ";
            swapValue=swapValue->nextLink;
        }
    }
}

int main()
{
    Stack stackStackSt;
    stackStackSt.pop();
    stackStackSt.push(5);
    stackStackSt.push(3);
    stackStackSt.push(8);
    cout<<"popped "<<stackStackSt.pop()<<endl;
    stackStackSt.Display();
    return 0;
}