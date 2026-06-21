#include <iostream>
using namespace std;
int main()
{
    int essentialCPrimaryValue[5]={1,2,3,2,1};
    for(int essentialCInputValue:essentialCPrimaryValue)
    {
        essentialCInputValue=essentialCInputValue*2;
        cout<<essentialCInputValue<<endl;//Length of array as each int is of 4bit therefore 4*5=20bit lenth or size 
    }
     
}