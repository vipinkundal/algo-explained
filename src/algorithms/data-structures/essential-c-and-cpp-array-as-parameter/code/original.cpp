#include<iostream>
#include<stdlib.h>
using namespace std;
void funct1(int *essentialCPrimaryValue)
{
    int essentialCScanIndex;
    for(essentialCScanIndex=0;essentialCScanIndex<5;essentialCScanIndex++)
    {
        cout<<endl<<"funt1 "<<essentialCPrimaryValue[essentialCScanIndex];
    }
}  
void funct2(int essentialCPrimaryValue[])
{
    int essentialCScanIndex;
    for(essentialCScanIndex=0;essentialCScanIndex<5;essentialCScanIndex++)
    {
        cout<<endl<<"funt2 "<<essentialCPrimaryValue[essentialCScanIndex];
    }
}  
int * funct3(int essentialCItemCapacity)//returning address of an  array , created and stored in heap by function
{
    int *essentialCPrimaryValue,essentialCScanIndex;
    essentialCPrimaryValue=new int[essentialCItemCapacity];//or  a=(int *)malloc(size of array*size of data type) // creating an array in heap memory
    for(essentialCScanIndex=0;essentialCScanIndex<essentialCItemCapacity;essentialCScanIndex++)
    {
        essentialCPrimaryValue[essentialCScanIndex]=essentialCScanIndex+1;
    }
    return essentialCPrimaryValue;//returning a pointer which hold an array stored in heapmemory
}
int main()
{

    int essentialCPrimaryValue[]={0,1,2,3,4};
    funct1(&essentialCPrimaryValue[0]);//pasing array as parameter to funct function
    funct2(essentialCPrimaryValue);//another way to pass funct as parameter

    //returning an array from function
    int essentialCState2=6,*essentialCState,essentialCScanIndex;
    essentialCState=funct3(essentialCState2);
    for(essentialCScanIndex=0;essentialCScanIndex<essentialCState2;essentialCScanIndex++)
    {
        cout<<endl<<"funct3 "<<essentialCState[essentialCScanIndex];
    }
}

