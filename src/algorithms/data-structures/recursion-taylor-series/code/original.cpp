#include<iostream>
#include<stdio.h>
using namespace std;
double tay(int recursionTaylorInputValue,int recursionTaylorItemCount)
{
    static float recursionTaylorCurrentNode=1,recursionTaylorState=1;
    if(recursionTaylorItemCount==0)
        return 1;
    else 
    {
        double recursionTaylorRightIndex=tay(recursionTaylorInputValue,recursionTaylorItemCount-1);
        recursionTaylorCurrentNode=recursionTaylorCurrentNode*recursionTaylorInputValue;
        recursionTaylorState=recursionTaylorState*recursionTaylorItemCount;
        return recursionTaylorRightIndex+(recursionTaylorCurrentNode/recursionTaylorState);
    }
           
}
int main()
{
    cout<<tay(1,10)<<endl;
    return 0;
}