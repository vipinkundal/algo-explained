#include<iostream>
#include<stdlib.h>
#include<stdio.h>
using namespace std;
struct  EssentialCRECTANGLE
{
    int essentialCTextLength;
    int essentialCState;
    /* data */
};
int main()
{
    struct EssentialCRECTANGLE essentialCRightIndex={5,5};
    essentialCRightIndex.essentialCTextLength=10;//editing rectangle value
    cout<<"Structure Rectangle in stack and accessed using variable "<<essentialCRightIndex.essentialCTextLength<<" "<<essentialCRightIndex.essentialCState<<endl;


    //Now Using Pointer
    struct EssentialCRECTANGLE *essentialCState2=&essentialCRightIndex;
    essentialCState2->essentialCTextLength=2;//could even be (*p).length=2
    cout<<"Structure Rectangle in stack and accessed using pointer "<<essentialCState2->essentialCTextLength<<" "<<essentialCState2->essentialCState<<endl;


    //Now creating object structure rectangle in heap memory using pointer
    EssentialCRECTANGLE *essentialCState3;//struct can be skipped in c++
    essentialCState3=new EssentialCRECTANGLE;//this is for c++ for c it would be p2=(return datatype *)malloc(size of object need to be created)
                    //here it would be p2=(struct RECTANGLE *)malloc(sizeof(struct RECTANGLE))
    essentialCState3->essentialCTextLength=14;
    essentialCState3->essentialCState=15; 
    cout<<"Structure Rectangle in heap and accessed using pointer "<<essentialCState3->essentialCTextLength<<" "<<essentialCState3->essentialCState<<endl;
}
