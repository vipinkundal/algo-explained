#include<iostream>
#include<stdlib.h>
int main()
{
    int arrayRepresentationFirstItems[5]={1,2,3,4,5};//Static array in stack
    int *arrayRepresentationSecondItems=new int[5];// dynamic array in heap 
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<5;arrayRepresentationScanIndex++)
        arrayRepresentationSecondItems[arrayRepresentationScanIndex]=arrayRepresentationScanIndex+6;
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<5;arrayRepresentationScanIndex++)
        std::cout<<arrayRepresentationFirstItems[arrayRepresentationScanIndex]<<std::endl;    
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<5;arrayRepresentationScanIndex++)
        std::cout<<arrayRepresentationSecondItems[arrayRepresentationScanIndex]<<std::endl;
        delete [] arrayRepresentationSecondItems;
    
}