#include<iostream>
using namespace std;
int fac(int itemCount)
{
    if(itemCount<=0)
        return 1;
    else 
       return itemCount*fac(itemCount-1);
}
int Ifac(int itemCount)
{
    int scanIndex,recursionFactorialFactorial=1;
    for(scanIndex=1;scanIndex<=itemCount;scanIndex++)
        recursionFactorialFactorial=recursionFactorialFactorial*scanIndex;
    return recursionFactorialFactorial;

}

int main()
{
    int recursionFactorialFactorial=Ifac(5);
    cout<<recursionFactorialFactorial;
    return 0;
}