#include<iostream>
using namespace std;
struct ArrayAdtArrayModel
{
    int arrayAdtFirstItems[100];
    int arrayAdtItemCapacity;
    int arrayAdtTextLength;
};
void Display(struct ArrayAdtArrayModel arrayAdtItems)
{
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        std::cout<<arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]<<" ";
    }
}
void swap(int *arrayAdtInputValue,int *arrayAdtCompareValue)
{
    int arrayAdtSwapValue=*arrayAdtInputValue;
    *arrayAdtInputValue=*arrayAdtCompareValue;
    *arrayAdtCompareValue=arrayAdtSwapValue;
}
void Merge(struct ArrayAdtArrayModel arrayAdtState,struct ArrayAdtArrayModel arrayAdtState2,struct ArrayAdtArrayModel *arrayAdtState3)
{
    int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0;
    while(arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength && arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength)
    {
        if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]<arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
            arrayAdtState3->arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex++];
        else
            arrayAdtState3->arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex++];
    }
    for(;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
        arrayAdtState3->arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex++];
    for(;arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength;arrayAdtWriteIndex++)
        arrayAdtState3->arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex++];   
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtState={{1,4,7,13,17,20,36},100,7};
    struct ArrayAdtArrayModel arrayAdtState2={{6,8,9,10,11,24},100,6};
    struct ArrayAdtArrayModel arrayAdtState3={{},arrayAdtState.arrayAdtItemCapacity+arrayAdtState2.arrayAdtItemCapacity,arrayAdtState.arrayAdtTextLength+arrayAdtState2.arrayAdtTextLength};    
    Merge(arrayAdtState,arrayAdtState2,&arrayAdtState3);
    std::cout<<sizeof(arrayAdtState3)<<endl;
    Display(arrayAdtState3);
    return 0;
}