#include<iostream>
using namespace std;
int fun(int itemCount)
{
    if(itemCount>100)
        return itemCount-10;
    else 
        return fun(fun(itemCount+11));
}

int main()
{

    int scanIndex=fun(97);
    cout<<scanIndex;
    return 0;
}