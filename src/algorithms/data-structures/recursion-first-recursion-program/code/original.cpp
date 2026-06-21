#include<iostream>

using namespace std;
void funct1(int itemCount)
{
    if(itemCount>0)
    {
        cout<<itemCount;
        funct1(itemCount-1);
    }
}
int main()
{
    int scanIndex=3;
    funct1(scanIndex);
    return 0;
}