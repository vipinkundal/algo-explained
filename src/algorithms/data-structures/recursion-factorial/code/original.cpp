#include<iostream>
using namespace std;
int fac(int recursionFactorialItemCount)
{
    if(recursionFactorialItemCount<=0)
        return 1;
    else 
       return recursionFactorialItemCount*fac(recursionFactorialItemCount-1);
}
int Ifac(int recursionFactorialItemCount)
{
    int recursionFactorialScanIndex,recursionFactorialState=1;
    for(recursionFactorialScanIndex=1;recursionFactorialScanIndex<=recursionFactorialItemCount;recursionFactorialScanIndex++)
        recursionFactorialState=recursionFactorialState*recursionFactorialScanIndex;
    return recursionFactorialState;

}

int main()
{
    int recursionFactorialState=Ifac(5);
    cout<<recursionFactorialState;
    return 0;
}