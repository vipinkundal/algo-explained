#include <iostream>
using namespace std;
int main()
{
    int primaryValue[5]={1,2,3,2,1};
    for(int inputValue:primaryValue)
    {
        inputValue=inputValue*2;
        cout<<inputValue<<endl;//Length of array as each int is of 4bit therefore 4*5=20bit lenth or size 
    }
     
}