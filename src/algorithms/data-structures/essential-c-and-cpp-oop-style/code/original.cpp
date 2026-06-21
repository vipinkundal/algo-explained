//object oriented style of programing 
#include<iostream>
#include<stdio.h>
using namespace std;
class EssentialCRectangleModel//class rectangle
{
    private:
    int essentialCTextLength;
    int essentialCState;
    public:
    EssentialCRectangleModel (int essentialCLeftIndex,int essentialCSecondaryValue)//constructor of rectangle class ,it gets initalize as soon as class rectangle is declared in main 
    {
        essentialCTextLength=essentialCLeftIndex;
        essentialCState=essentialCSecondaryValue;
    }
    int area()
    {
        return essentialCTextLength*essentialCState;
    }
    int peri()
    {
        return 2*(essentialCTextLength+essentialCState);
    }      
};
int main()
{
    int essentialCLeftIndex,essentialCSecondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>essentialCLeftIndex>>essentialCSecondaryValue;
    EssentialCRectangleModel essentialCRightIndex(essentialCLeftIndex,essentialCSecondaryValue);
    int essentialCPrimaryValue=essentialCRightIndex.area();
    int essentialCCurrentNode=essentialCRightIndex.peri();
    printf("%d is area\n%d is perimeter",essentialCPrimaryValue,essentialCCurrentNode);
    return 0;
}