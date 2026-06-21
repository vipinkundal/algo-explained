#include<iostream>
#include<stdio.h>
using namespace std;
void func(int inputValue,int *compareValue,int &resultValue)
{
    inputValue++;
    (*compareValue)++;
    resultValue++;
}
int main()
{
    int primaryValue=5,secondaryValue=10,columnIndex=15;

    cout<<"\nBefore calling function "<<endl<<"a = "<<primaryValue<<"\nb = "<<secondaryValue<<"\na = "<<columnIndex;

    func(primaryValue,&secondaryValue,columnIndex);//here a is call by value ,b is call by address//c is call by refence

    cout<<endl<<"\nAfter calling function "<<endl<<"a = "<<primaryValue<<"\nb = "<<secondaryValue<<"\na = "<<columnIndex;//here a is call by value ,b is call by address//c is call by refence    
    return 0;
}