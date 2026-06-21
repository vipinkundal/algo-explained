#include<iostream>
#include<stdio.h>
#include<stdlib.h>
int main()
{
    int primaryValue[5]={1,3,5,7,9};
    int *currentNode=&primaryValue[0],*essentialCP2,*essentialCP3;//(declaration)
    printf("Stack Memory array %d\n",currentNode[2]);//using pointer p as array a
    essentialCP2=(int *)malloc(5*sizeof(int));//accessing heap memory using pointer in c (Initialization)
    essentialCP3=new int(5);//accessing heap memory using pointer in c++
    essentialCP2[0]=4;
    essentialCP3[0]=5;
    printf("Heap Memory array %d %d \n",essentialCP2[0],essentialCP3[0]);//(dereferencing)
    free(essentialCP2);//dealocating heap memory in c(deallocation)
    delete [ ] essentialCP3;//dealocating heap memory in c++ 
    printf("Heap Memory array %d %d ",essentialCP2[0],essentialCP3[0]);
    return 0;
}