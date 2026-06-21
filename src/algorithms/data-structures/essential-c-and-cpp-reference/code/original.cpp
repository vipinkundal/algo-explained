//reference only for c++
#include<iostream>
using namespace std;
int main()
{
    int essentialCPrimaryValue=10;
    int &essentialCState=essentialCPrimaryValue;//declaring and initializing reference variable
    printf("%d\n",essentialCPrimaryValue);
    cout<<essentialCState;
    return 0;
}