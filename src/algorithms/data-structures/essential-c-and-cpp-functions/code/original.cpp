#include<iostream>
#include<stdio.h>
using namespace std;
void func(int essentialCInputValue,int *essentialCCompareValue,int &essentialCResultValue)
{
    essentialCInputValue++;
    (*essentialCCompareValue)++;
    essentialCResultValue++;
}
int main()
{
    int essentialCPrimaryValue=5,essentialCSecondaryValue=10,essentialCColumnIndex=15;

    cout<<"\nBefore calling function "<<endl<<"a = "<<essentialCPrimaryValue<<"\nb = "<<essentialCSecondaryValue<<"\na = "<<essentialCColumnIndex;

    func(essentialCPrimaryValue,&essentialCSecondaryValue,essentialCColumnIndex);//here a is call by value ,b is call by address//c is call by refence

    cout<<endl<<"\nAfter calling function "<<endl<<"a = "<<essentialCPrimaryValue<<"\nb = "<<essentialCSecondaryValue<<"\na = "<<essentialCColumnIndex;//here a is call by value ,b is call by address//c is call by refence    
    return 0;
}