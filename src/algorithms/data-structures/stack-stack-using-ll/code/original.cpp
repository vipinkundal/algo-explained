#include<iostream>
#include<stdlib.h>
using namespace std;
 
class StackStackNode{
    public:
        int stackStackNodeValue;
        StackStackNode *stackStackNextLink;
};

class StackStackStackModel{
    private:
     StackStackNode *stackStackStackTop;
    public:
        StackStackStackModel(){stackStackStackTop=NULL;}
        void push(int stackStackInputValue);
        int pop();
        void Display();
};

void StackStackStackModel::push(int stackStackInputValue)
{
    StackStackNode *stackStackSwapValue=new StackStackNode;
    if(stackStackSwapValue==NULL) 
        cout<<"Stack overflow\n";
    else{
        stackStackSwapValue->stackStackNodeValue=stackStackInputValue;
        if(stackStackStackTop)
        {
            stackStackSwapValue->stackStackNextLink=stackStackStackTop;
            stackStackStackTop=stackStackSwapValue;
        }
        else{
            stackStackStackTop=stackStackSwapValue;
            stackStackSwapValue->stackStackNextLink=NULL;
        }
    }
}

int StackStackStackModel::pop()
{
    int stackStackInputValue=-1;
    if(stackStackStackTop==NULL)
        cout<<"Stack underflow\n";
    else{
        StackStackNode *stackStackSwapValue=stackStackStackTop;
        stackStackStackTop=stackStackStackTop->stackStackNextLink;
        stackStackInputValue=stackStackSwapValue->stackStackNodeValue;
        delete stackStackSwapValue;
    }
    return stackStackInputValue;
}

void StackStackStackModel::Display()
{
    
    if(stackStackStackTop==NULL)
        cout<<"Stack is Empty\n";
    else{
        StackStackNode *stackStackSwapValue=stackStackStackTop;
        while(stackStackSwapValue)
        {
            cout<<stackStackSwapValue->stackStackNodeValue<<" ";
            stackStackSwapValue=stackStackSwapValue->stackStackNextLink;
        }
    }
}

int main()
{
    StackStackStackModel stackStackState;
    stackStackState.pop();
    stackStackState.push(5);
    stackStackState.push(3);
    stackStackState.push(8);
    cout<<"popped "<<stackStackState.pop()<<endl;
    stackStackState.Display();
    return 0;
}