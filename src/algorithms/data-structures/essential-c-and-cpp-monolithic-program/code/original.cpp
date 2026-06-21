//monolytic style of programing
#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int essentialCLeftIndex,essentialCSecondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>essentialCLeftIndex>>essentialCSecondaryValue;
    int essentialCState=essentialCLeftIndex*essentialCSecondaryValue;
    int essentialCState2=2*(essentialCLeftIndex+essentialCSecondaryValue);
    printf("%d is area\n%d is perimeter",essentialCState,essentialCState2);
    return 0;
}

