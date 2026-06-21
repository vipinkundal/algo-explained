#include<iostream>
using namespace std;
int expo(int recursionExponentColumnCount,int recursionExponentItemCount)
{
    if(recursionExponentItemCount<=0)
        return 1;
    return recursionExponentColumnCount*expo(recursionExponentColumnCount,recursionExponentItemCount-1);
}
int expo1(int recursionExponentColumnCount,int recursionExponentItemCount)
{
    if(recursionExponentItemCount==0)
        return 1;
    if(recursionExponentItemCount%2==0)
        return expo1(recursionExponentColumnCount*recursionExponentColumnCount,recursionExponentItemCount/2);
    else 
        return recursionExponentColumnCount*expo1(recursionExponentColumnCount*recursionExponentColumnCount,(recursionExponentItemCount-1)/2);
}
int iexpo(int recursionExponentColumnCount,int recursionExponentItemCount)
{
    int recursionExponentState=1,recursionExponentScanIndex;
    for(recursionExponentScanIndex=1;recursionExponentScanIndex<=recursionExponentItemCount;recursionExponentScanIndex++)
    {
        recursionExponentState=recursionExponentState*recursionExponentColumnCount;
    }
    return recursionExponentState;
}

int main()
{
    int recursionExponentState=expo1(2,3);
    cout<<recursionExponentState;
    return 0;
}