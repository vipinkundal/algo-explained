#include<iostream>
int compareValue=0;//global variable
using namespace std;
int static_fun(int itemCount)
{
    static int inputValue=0;//static variable
    if(itemCount>0)
    {
        inputValue++;
        return static_fun(itemCount-1)+inputValue;
    }
    return 0;
}
int main()
{
    int primaryValue,secondaryValue=5;
    primaryValue=static_fun(secondaryValue);
    cout<<primaryValue;
    return 0;
}