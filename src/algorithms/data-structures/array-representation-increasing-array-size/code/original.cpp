#include<iostream>
int main()
{
    int *arrayRepresentationCurrentNode=new int[5];
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<5;arrayRepresentationScanIndex++)
        arrayRepresentationCurrentNode[arrayRepresentationScanIndex]=arrayRepresentationScanIndex;
    int *arrayRepresentationNextNode=new int [10];
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<5;arrayRepresentationScanIndex++)
        arrayRepresentationNextNode[arrayRepresentationScanIndex]=arrayRepresentationCurrentNode[arrayRepresentationScanIndex];
    arrayRepresentationNextNode[6]=456;
    arrayRepresentationCurrentNode=arrayRepresentationNextNode;//changing size of array
    arrayRepresentationNextNode=NULL;
    for(int arrayRepresentationScanIndex=0;arrayRepresentationScanIndex<10;arrayRepresentationScanIndex++)
        std::cout<<arrayRepresentationCurrentNode[arrayRepresentationScanIndex]<<std::endl;
    return 0;
}