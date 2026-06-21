#include<iostream>
using namespace std;
int recursionSumState2(int recursionSumItemCount)
{
    if(recursionSumItemCount<=0)
        return 0;
    return recursionSumItemCount+recursionSumState2(recursionSumItemCount-1);
    
}
int Isum(int recursionSumItemCount)
{
    int recursionSumScanIndex;
    int recursionSumState2=0;
    for (recursionSumScanIndex=0;recursionSumScanIndex<=recursionSumItemCount;recursionSumScanIndex++)
    {
        recursionSumState2=recursionSumState2+recursionSumScanIndex;
    }
    return recursionSumState2;
}
int Isum(int recursionSumItemCount)
{
    int recursionSumScanIndex,recursionSumState=1;
    for(recursionSumScanIndex=1;recursionSumScanIndex<=recursionSumItemCount;recursionSumScanIndex++)
        recursionSumState=recursionSumState*recursionSumScanIndex;
    return recursionSumState;

}
int main()
{
    int recursionSumState2=Isum(5);
    cout<<recursionSumState2;
}