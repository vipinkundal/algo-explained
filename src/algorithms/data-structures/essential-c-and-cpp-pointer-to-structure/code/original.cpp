#include<iostream>
#include<stdlib.h>
#include<stdio.h>
using namespace std;
struct  RECTANGLE
{
    int textLength;
    int essentialCBreath;
    /* data */
};
int main()
{
    struct RECTANGLE rightIndex={5,5};
    rightIndex.textLength=10;//editing rectangle value
    cout<<"Structure Rectangle in stack and accessed using variable "<<rightIndex.textLength<<" "<<rightIndex.essentialCBreath<<endl;


    //Now Using Pointer
    struct RECTANGLE *essentialCP1=&rightIndex;
    essentialCP1->textLength=2;//could even be (*p).length=2
    cout<<"Structure Rectangle in stack and accessed using pointer "<<essentialCP1->textLength<<" "<<essentialCP1->essentialCBreath<<endl;


    //Now creating object structure rectangle in heap memory using pointer
    RECTANGLE *essentialCP2;//struct can be skipped in c++
    essentialCP2=new RECTANGLE;//this is for c++ for c it would be p2=(return datatype *)malloc(size of object need to be created)
                    //here it would be p2=(struct RECTANGLE *)malloc(sizeof(struct RECTANGLE))
    essentialCP2->textLength=14;
    essentialCP2->essentialCBreath=15; 
    cout<<"Structure Rectangle in heap and accessed using pointer "<<essentialCP2->textLength<<" "<<essentialCP2->essentialCBreath<<endl;
}
