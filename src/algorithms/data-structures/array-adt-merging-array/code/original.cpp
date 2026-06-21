#include<iostream>
using namespace std;
struct Array
{
    int firstItems[100];
    int itemCapacity;
    int textLength;
};
void Display(struct Array items)
{
    for(int scanIndex=0;scanIndex<items.textLength;scanIndex++)
    {
        std::cout<<items.firstItems[scanIndex]<<" ";
    }
}
void swap(int *inputValue,int *compareValue)
{
    int swapValue=*inputValue;
    *inputValue=*compareValue;
    *compareValue=swapValue;
}
void Merge(struct Array arrayAdtArr1,struct Array arrayAdtArr2,struct Array *arrayAdtArr3)
{
    int scanIndex=0,writeIndex=0,probeIndex=0;
    while(scanIndex<arrayAdtArr1.textLength && writeIndex<arrayAdtArr2.textLength)
    {
        if(arrayAdtArr1.firstItems[scanIndex]<arrayAdtArr2.firstItems[writeIndex])
            arrayAdtArr3->firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex++];
        else
            arrayAdtArr3->firstItems[probeIndex++]=arrayAdtArr2.firstItems[writeIndex++];
    }
    for(;scanIndex<arrayAdtArr1.textLength;scanIndex++)
        arrayAdtArr3->firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex++];
    for(;writeIndex<arrayAdtArr2.textLength;writeIndex++)
        arrayAdtArr3->firstItems[probeIndex++]=arrayAdtArr2.firstItems[writeIndex++];   
}

int main()
{
    struct Array arrayAdtArr1={{1,4,7,13,17,20,36},100,7};
    struct Array arrayAdtArr2={{6,8,9,10,11,24},100,6};
    struct Array arrayAdtArr3={{},arrayAdtArr1.itemCapacity+arrayAdtArr2.itemCapacity,arrayAdtArr1.textLength+arrayAdtArr2.textLength};    
    Merge(arrayAdtArr1,arrayAdtArr2,&arrayAdtArr3);
    std::cout<<sizeof(arrayAdtArr3)<<endl;
    Display(arrayAdtArr3);
    return 0;
}