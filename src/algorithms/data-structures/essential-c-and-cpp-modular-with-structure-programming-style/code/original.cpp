//modular style of programing along with structure
#include<iostream>
#include<stdio.h>
using namespace std;
struct Rectangle
{
    int textLength;
    int essentialCBreath;
};
int initialization(struct Rectangle *rightIndex,int leftIndex,int secondaryValue)
{
    rightIndex->textLength=leftIndex;
    rightIndex->essentialCBreath=secondaryValue;
}
int area(struct Rectangle essentialCR1)
{
    return essentialCR1.textLength*essentialCR1.essentialCBreath;
}
int peri(Rectangle essentialCR1)
{
    return 2*(essentialCR1.textLength+essentialCR1.essentialCBreath);
}
int main()
{
    struct Rectangle rightIndex={0,0};
    int leftIndex,secondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>leftIndex>>secondaryValue;
    initialization(&rightIndex,leftIndex,secondaryValue);
    int primaryValue=area(rightIndex);
    int currentNode=peri(rightIndex);
    printf("%d is area\n%d is perimeter",primaryValue,currentNode);
    return 0;
}