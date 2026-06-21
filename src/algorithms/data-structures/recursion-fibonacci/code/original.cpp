#include<iostream>
using namespace std;
int ifib1(int itemCount)//fibonacci series using loops/iteration
{

    int recursionFibonacciT0=0;
    int recursionFibonacciT1=1,workingText;
    for(int scanIndex=2;scanIndex<=itemCount;scanIndex++)
    {
        workingText=recursionFibonacciT1+recursionFibonacciT0;
        recursionFibonacciT0=recursionFibonacciT1;
        recursionFibonacciT1=workingText;
    }
    return workingText;
}
int ifib2(int itemCount)//fibonacci series using loops/iteration
{

    int recursionFibonacciF[itemCount];
    recursionFibonacciF[0]=0;
    recursionFibonacciF[1]=1;
    for(int scanIndex=2;scanIndex<=itemCount;scanIndex++)
    {
       recursionFibonacciF[scanIndex]=recursionFibonacciF[scanIndex-2]+recursionFibonacciF[scanIndex-1];
    }
    return recursionFibonacciF[itemCount];
}
int rfib(int itemCount)//fibonacci series using recursion
{
    if(itemCount<=1)
        return itemCount;
    return rfib(itemCount-1)+rfib(itemCount-2);
}
int F[10];
int mfib(int itemCount)//fibonacci series using recursion using memoization
{
    if(itemCount<=1)
        return itemCount;
    else
    {
        if(F[itemCount-1]==-1)//it means no value entered till yet as it is -1
            F[itemCount-1]=mfib(itemCount-1);
        if(F[itemCount-2]==-1)
            F[itemCount-2]=mfib(itemCount-2);
        F[itemCount]=F[itemCount-1]+F[itemCount-2];
        return F[itemCount-1]+F[itemCount-2];
    }
}

int main()
{
    for(int scanIndex=0;scanIndex<=10;scanIndex++)
        F[scanIndex]=-1;
    cout<<ifib1(7)<<endl;
    cout<<ifib2(7)<<endl;
    cout<<rfib(7)<<endl;
    cout<<mfib(5);
    return 0;
}