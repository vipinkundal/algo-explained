#include<iostream>
#include<stdlib.h>
int main()
{
    int arrayRepresentationFirstItems[2][2];//Method 1:Whole 2D array in stack
    arrayRepresentationFirstItems[0][0]=2;
    arrayRepresentationFirstItems[0][1]=3;
    arrayRepresentationFirstItems[1][0]=4;
    arrayRepresentationFirstItems[1][1]=5;
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<2;arrayRepresentationScanIndex++)
    {
        for(int arrayRepresentationWriteIndex=0;arrayRepresentationWriteIndex<2;arrayRepresentationWriteIndex++)
            std::cout<<arrayRepresentationFirstItems[arrayRepresentationScanIndex][arrayRepresentationWriteIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    int *arrayRepresentationSecondItems[2];//Method 2:Row in stack and column in heap
    arrayRepresentationSecondItems[0]=new int[2];//Return int pointer
    arrayRepresentationSecondItems[1]=new int[2];//Return int pointer
    arrayRepresentationSecondItems[0][0]=12;
    arrayRepresentationSecondItems[0][1]=13;
    arrayRepresentationSecondItems[1][0]=14;
    arrayRepresentationSecondItems[1][1]=15;
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<2;arrayRepresentationScanIndex++)
    {
        for(int arrayRepresentationWriteIndex=0;arrayRepresentationWriteIndex<2;arrayRepresentationWriteIndex++)
            std::cout<<arrayRepresentationSecondItems[arrayRepresentationScanIndex][arrayRepresentationWriteIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    int **arrayRepresentationThirdItems;//Method 3: complete 2D array in heap
    arrayRepresentationThirdItems=new int*[2];//Return int double pointer
    arrayRepresentationThirdItems[0]=new int[2];//Return int pointer
    arrayRepresentationThirdItems[1]=new int[2];//Return int pointer
    arrayRepresentationThirdItems[0][0]=112;
    arrayRepresentationThirdItems[0][1]=113;
    arrayRepresentationThirdItems[1][0]=114;
    arrayRepresentationThirdItems[1][1]=115;
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<2;arrayRepresentationScanIndex++)
    {
        for(int arrayRepresentationWriteIndex=0;arrayRepresentationWriteIndex<2;arrayRepresentationWriteIndex++)
            std::cout<<arrayRepresentationThirdItems[arrayRepresentationScanIndex][arrayRepresentationWriteIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    
    return 0;
}