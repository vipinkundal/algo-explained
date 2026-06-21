#include<iostream>
#include<stdlib.h>
int main()
{
    int firstItems[5]={1,2,3,4,5};//Static array in stack
    int *secondItems=new int[5];// dynamic array in heap 
    for(int scanIndex=0;scanIndex<5;scanIndex++)
        secondItems[scanIndex]=scanIndex+6;
    for(int scanIndex=0;scanIndex<5;scanIndex++)
        std::cout<<firstItems[scanIndex]<<std::endl;    
    for(int scanIndex=0;scanIndex<5;scanIndex++)
        std::cout<<secondItems[scanIndex]<<std::endl;
        delete [] secondItems;
    
}