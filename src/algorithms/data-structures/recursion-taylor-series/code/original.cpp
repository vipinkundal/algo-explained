#include<iostream>
#include<stdio.h>
using namespace std;
double tay(int inputValue,int itemCount)
{
    static float currentNode=1,recursionTaylorF=1;
    if(itemCount==0)
        return 1;
    else 
    {
        double rightIndex=tay(inputValue,itemCount-1);
        currentNode=currentNode*inputValue;
        recursionTaylorF=recursionTaylorF*itemCount;
        return rightIndex+(currentNode/recursionTaylorF);
    }
           
}
int main()
{
    cout<<tay(1,10)<<endl;
    return 0;
}