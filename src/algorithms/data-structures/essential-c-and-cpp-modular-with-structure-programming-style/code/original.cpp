//modular style of programing along with structure
#include<iostream>
#include<stdio.h>
using namespace std;
struct EssentialCRectangleModel
{
    int essentialCTextLength;
    int essentialCState;
};
int initialization(struct EssentialCRectangleModel *essentialCRightIndex,int essentialCLeftIndex,int essentialCSecondaryValue)
{
    essentialCRightIndex->essentialCTextLength=essentialCLeftIndex;
    essentialCRightIndex->essentialCState=essentialCSecondaryValue;
}
int area(struct EssentialCRectangleModel essentialCState2)
{
    return essentialCState2.essentialCTextLength*essentialCState2.essentialCState;
}
int peri(EssentialCRectangleModel essentialCState2)
{
    return 2*(essentialCState2.essentialCTextLength+essentialCState2.essentialCState);
}
int main()
{
    struct EssentialCRectangleModel essentialCRightIndex={0,0};
    int essentialCLeftIndex,essentialCSecondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>essentialCLeftIndex>>essentialCSecondaryValue;
    initialization(&essentialCRightIndex,essentialCLeftIndex,essentialCSecondaryValue);
    int essentialCPrimaryValue=area(essentialCRightIndex);
    int essentialCCurrentNode=peri(essentialCRightIndex);
    printf("%d is area\n%d is perimeter",essentialCPrimaryValue,essentialCCurrentNode);
    return 0;
}