#include<iostream>
int recursionStaticCompareValue=0;//global variable
using namespace std;
int static_fun(int recursionStaticItemCount)
{
    static int recursionStaticInputValue=0;//static variable
    if(recursionStaticItemCount>0)
    {
        recursionStaticInputValue++;
        return static_fun(recursionStaticItemCount-1)+recursionStaticInputValue;
    }
    return 0;
}
int main()
{
    int recursionStaticPrimaryValue,recursionStaticSecondaryValue=5;
    recursionStaticPrimaryValue=static_fun(recursionStaticSecondaryValue);
    cout<<recursionStaticPrimaryValue;
    return 0;
}