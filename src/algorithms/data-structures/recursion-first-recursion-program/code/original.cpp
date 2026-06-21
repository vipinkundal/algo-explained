#include<iostream>

using namespace std;
void funct1(int recursionFirstItemCount)
{
    if(recursionFirstItemCount>0)
    {
        cout<<recursionFirstItemCount;
        funct1(recursionFirstItemCount-1);
    }
}
int main()
{
    int recursionFirstScanIndex=3;
    funct1(recursionFirstScanIndex);
    return 0;
}