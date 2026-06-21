#include<iostream>
int main()
{
    int *currentNode=new int[5];
    for(int scanIndex=0;scanIndex<5;scanIndex++)
        currentNode[scanIndex]=scanIndex;
    int *nextNode=new int [10];
    for(int scanIndex=0;scanIndex<5;scanIndex++)
        nextNode[scanIndex]=currentNode[scanIndex];
    nextNode[6]=456;
    currentNode=nextNode;//changing size of array
    nextNode=NULL;
    for(int scanIndex=0;scanIndex<10;scanIndex++)
        std::cout<<currentNode[scanIndex]<<std::endl;
    return 0;
}