//reference only for c++
#include<iostream>
using namespace std;
int main()
{
    int primaryValue=10;
    int &essentialCRef=primaryValue;//declaring and initializing reference variable
    printf("%d\n",primaryValue);
    cout<<essentialCRef;
    return 0;
}