#include<iostream>
using namespace std;
int expo(int columnCount,int itemCount)
{
    if(itemCount<=0)
        return 1;
    return columnCount*expo(columnCount,itemCount-1);
}
int expo1(int columnCount,int itemCount)
{
    if(itemCount==0)
        return 1;
    if(itemCount%2==0)
        return expo1(columnCount*columnCount,itemCount/2);
    else 
        return columnCount*expo1(columnCount*columnCount,(itemCount-1)/2);
}
int iexpo(int columnCount,int itemCount)
{
    int recursionExponentE=1,scanIndex;
    for(scanIndex=1;scanIndex<=itemCount;scanIndex++)
    {
        recursionExponentE=recursionExponentE*columnCount;
    }
    return recursionExponentE;
}

int main()
{
    int recursionExponentE=expo1(2,3);
    cout<<recursionExponentE;
    return 0;
}