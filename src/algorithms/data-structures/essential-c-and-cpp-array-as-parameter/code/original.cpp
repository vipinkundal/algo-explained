#include<iostream>
#include<stdlib.h>
using namespace std;
void funct1(int *primaryValue)
{
    int scanIndex;
    for(scanIndex=0;scanIndex<5;scanIndex++)
    {
        cout<<endl<<"funt1 "<<primaryValue[scanIndex];
    }
}  
void funct2(int primaryValue[])
{
    int scanIndex;
    for(scanIndex=0;scanIndex<5;scanIndex++)
    {
        cout<<endl<<"funt2 "<<primaryValue[scanIndex];
    }
}  
int * funct3(int itemCapacity)//returning address of an  array , created and stored in heap by function
{
    int *primaryValue,scanIndex;
    primaryValue=new int[itemCapacity];//or  a=(int *)malloc(size of array*size of data type) // creating an array in heap memory
    for(scanIndex=0;scanIndex<itemCapacity;scanIndex++)
    {
        primaryValue[scanIndex]=scanIndex+1;
    }
    return primaryValue;//returning a pointer which hold an array stored in heapmemory
}
int main()
{

    int primaryValue[]={0,1,2,3,4};
    funct1(&primaryValue[0]);//pasing array as parameter to funct function
    funct2(primaryValue);//another way to pass funct as parameter

    //returning an array from function
    int essentialCSz=6,*essentialCPtr,scanIndex;
    essentialCPtr=funct3(essentialCSz);
    for(scanIndex=0;scanIndex<essentialCSz;scanIndex++)
    {
        cout<<endl<<"funct3 "<<essentialCPtr[scanIndex];
    }
}

