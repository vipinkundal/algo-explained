//object oriented style of programing 
#include<iostream>
#include<stdio.h>
using namespace std;
class Rectangle//class rectangle
{
    private:
    int textLength;
    int essentialCBreath;
    public:
    Rectangle (int leftIndex,int secondaryValue)//constructor of rectangle class ,it gets initalize as soon as class rectangle is declared in main 
    {
        textLength=leftIndex;
        essentialCBreath=secondaryValue;
    }
    int area()
    {
        return textLength*essentialCBreath;
    }
    int peri()
    {
        return 2*(textLength+essentialCBreath);
    }      
};
int main()
{
    int leftIndex,secondaryValue;
    cout<<"Enter lenth and breath of rectangle ";
    cin>>leftIndex>>secondaryValue;
    Rectangle rightIndex(leftIndex,secondaryValue);
    int primaryValue=rightIndex.area();
    int currentNode=rightIndex.peri();
    printf("%d is area\n%d is perimeter",primaryValue,currentNode);
    return 0;
}