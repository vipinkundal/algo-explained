#include<iostream>
#include<stdio.h>
#include<stdlib.h>
int main()
{
    int essentialCPrimaryValue[5]={1,3,5,7,9};
    int *essentialCCurrentNode=&essentialCPrimaryValue[0],*essentialCState,*essentialCState2;//(declaration)
    printf("Stack Memory array %d\n",essentialCCurrentNode[2]);//using pointer p as array a
    essentialCState=(int *)malloc(5*sizeof(int));//accessing heap memory using pointer in c (Initialization)
    essentialCState2=new int(5);//accessing heap memory using pointer in c++
    essentialCState[0]=4;
    essentialCState2[0]=5;
    printf("Heap Memory array %d %d \n",essentialCState[0],essentialCState2[0]);//(dereferencing)
    free(essentialCState);//dealocating heap memory in c(deallocation)
    delete [ ] essentialCState2;//dealocating heap memory in c++ 
    printf("Heap Memory array %d %d ",essentialCState[0],essentialCState2[0]);
    return 0;
}