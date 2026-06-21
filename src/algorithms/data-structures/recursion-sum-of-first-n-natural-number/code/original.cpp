#include<iostream>
using namespace std;
int recursionSumSum(int itemCount)
{
    if(itemCount<=0)
        return 0;
    return itemCount+recursionSumSum(itemCount-1);
    
}
int Isum(int itemCount)
{
    int scanIndex;
    int recursionSumSum=0;
    for (scanIndex=0;scanIndex<=itemCount;scanIndex++)
    {
        recursionSumSum=recursionSumSum+scanIndex;
    }
    return recursionSumSum;
}
int Isum(int itemCount)
{
    int scanIndex,recursionSumFactorial=1;
    for(scanIndex=1;scanIndex<=itemCount;scanIndex++)
        recursionSumFactorial=recursionSumFactorial*scanIndex;
    return recursionSumFactorial;

}
int main()
{
    int recursionSumSum=Isum(5);
    cout<<recursionSumSum;
}