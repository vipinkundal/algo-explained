#include<iostream>
using namespace std;
int fun(int recursionNestedItemCount)
{
    if(recursionNestedItemCount>100)
        return recursionNestedItemCount-10;
    else 
        return fun(fun(recursionNestedItemCount+11));
}

int main()
{

    int recursionNestedScanIndex=fun(97);
    cout<<recursionNestedScanIndex;
    return 0;
}