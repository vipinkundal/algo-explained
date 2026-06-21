#include<iostream>
#include<stdlib.h>
int main()
{
    int firstItems[2][2];//Method 1:Whole 2D array in stack
    firstItems[0][0]=2;
    firstItems[0][1]=3;
    firstItems[1][0]=4;
    firstItems[1][1]=5;
    for(int scanIndex=0;scanIndex<2;scanIndex++)
    {
        for(int writeIndex=0;writeIndex<2;writeIndex++)
            std::cout<<firstItems[scanIndex][writeIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    int *secondItems[2];//Method 2:Row in stack and column in heap
    secondItems[0]=new int[2];//Return int pointer
    secondItems[1]=new int[2];//Return int pointer
    secondItems[0][0]=12;
    secondItems[0][1]=13;
    secondItems[1][0]=14;
    secondItems[1][1]=15;
    for(int scanIndex=0;scanIndex<2;scanIndex++)
    {
        for(int writeIndex=0;writeIndex<2;writeIndex++)
            std::cout<<secondItems[scanIndex][writeIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    int **thirdItems;//Method 3: complete 2D array in heap
    thirdItems=new int*[2];//Return int double pointer
    thirdItems[0]=new int[2];//Return int pointer
    thirdItems[1]=new int[2];//Return int pointer
    thirdItems[0][0]=112;
    thirdItems[0][1]=113;
    thirdItems[1][0]=114;
    thirdItems[1][1]=115;
    for(int scanIndex=0;scanIndex<2;scanIndex++)
    {
        for(int writeIndex=0;writeIndex<2;writeIndex++)
            std::cout<<thirdItems[scanIndex][writeIndex]<<" ";
        std::cout<<"\n";
    }    
    std::cout<<"\n";

    
    return 0;
}