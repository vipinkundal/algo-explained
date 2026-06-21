//monolytic style of programing
#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int leftIndex,secondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>leftIndex>>secondaryValue;
    int essentialCArea=leftIndex*secondaryValue;
    int essentialCPeri=2*(leftIndex+secondaryValue);
    printf("%d is area\n%d is perimeter",essentialCArea,essentialCPeri);
    return 0;
}

