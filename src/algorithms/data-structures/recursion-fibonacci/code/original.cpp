#include<iostream>
using namespace std;
int ifib1(int recursionFibonacciItemCount)//fibonacci series using loops/iteration
{

    int recursionFibonacciState=0;
    int recursionFibonacciState2=1,recursionFibonacciWorkingText;
    for(int recursionFibonacciScanIndex=2;recursionFibonacciScanIndex<=recursionFibonacciItemCount;recursionFibonacciScanIndex++)
    {
        recursionFibonacciWorkingText=recursionFibonacciState2+recursionFibonacciState;
        recursionFibonacciState=recursionFibonacciState2;
        recursionFibonacciState2=recursionFibonacciWorkingText;
    }
    return recursionFibonacciWorkingText;
}
int ifib2(int recursionFibonacciItemCount)//fibonacci series using loops/iteration
{

    int recursionFibonacciState3[recursionFibonacciItemCount];
    recursionFibonacciState3[0]=0;
    recursionFibonacciState3[1]=1;
    for(int recursionFibonacciScanIndex=2;recursionFibonacciScanIndex<=recursionFibonacciItemCount;recursionFibonacciScanIndex++)
    {
       recursionFibonacciState3[recursionFibonacciScanIndex]=recursionFibonacciState3[recursionFibonacciScanIndex-2]+recursionFibonacciState3[recursionFibonacciScanIndex-1];
    }
    return recursionFibonacciState3[recursionFibonacciItemCount];
}
int rfib(int recursionFibonacciItemCount)//fibonacci series using recursion
{
    if(recursionFibonacciItemCount<=1)
        return recursionFibonacciItemCount;
    return rfib(recursionFibonacciItemCount-1)+rfib(recursionFibonacciItemCount-2);
}
int F[10];
int mfib(int recursionFibonacciItemCount)//fibonacci series using recursion using memoization
{
    if(recursionFibonacciItemCount<=1)
        return recursionFibonacciItemCount;
    else
    {
        if(F[recursionFibonacciItemCount-1]==-1)//it means no value entered till yet as it is -1
            F[recursionFibonacciItemCount-1]=mfib(recursionFibonacciItemCount-1);
        if(F[recursionFibonacciItemCount-2]==-1)
            F[recursionFibonacciItemCount-2]=mfib(recursionFibonacciItemCount-2);
        F[recursionFibonacciItemCount]=F[recursionFibonacciItemCount-1]+F[recursionFibonacciItemCount-2];
        return F[recursionFibonacciItemCount-1]+F[recursionFibonacciItemCount-2];
    }
}

int main()
{
    for(int recursionFibonacciScanIndex=0;recursionFibonacciScanIndex<=10;recursionFibonacciScanIndex++)
        F[recursionFibonacciScanIndex]=-1;
    cout<<ifib1(7)<<endl;
    cout<<ifib2(7)<<endl;
    cout<<rfib(7)<<endl;
    cout<<mfib(5);
    return 0;
}