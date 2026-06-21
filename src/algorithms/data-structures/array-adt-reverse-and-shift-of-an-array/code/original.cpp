#include<iostream>
using namespace std;
struct ArrayAdtArrayModel
{
    int arrayAdtFirstItems[10];
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
void RUA(struct ArrayAdtArrayModel arrayAdtItems)//reversing array using auxilary array B
{
    int arrayAdtState[(arrayAdtItems.arrayAdtTextLength)];
    for(int arrayAdtScanIndex=(arrayAdtItems.arrayAdtTextLength-1),arrayAdtWriteIndex=0;arrayAdtScanIndex>=0;arrayAdtScanIndex--,arrayAdtWriteIndex++)
    {
        arrayAdtState[arrayAdtWriteIndex]=arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    }
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<(arrayAdtItems.arrayAdtTextLength);arrayAdtScanIndex++)
    {
        arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]=arrayAdtState[arrayAdtScanIndex];
    }
    Display(arrayAdtItems);
}

void INT(struct ArrayAdtArrayModel *arrayAdtItems)//reversing array using interchanging
{
    for(int arrayAdtScanIndex=0,arrayAdtWriteIndex=(arrayAdtItems->arrayAdtTextLength-1);arrayAdtScanIndex<arrayAdtWriteIndex;arrayAdtScanIndex++,arrayAdtWriteIndex--)
        swap(&arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex],&arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex]);
}
void r_shift(struct ArrayAdtArrayModel *arrayAdtItems)//right shift 
{
    for(int arrayAdtWriteIndex=(arrayAdtItems->arrayAdtTextLength-1);arrayAdtWriteIndex>0;arrayAdtWriteIndex--)
        arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex]=arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex-1];
    arrayAdtItems->arrayAdtFirstItems[0]=0;
    
}

void r_shift_r(struct ArrayAdtArrayModel *arrayAdtItems)//right shift roatation
{
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems->arrayAdtTextLength;arrayAdtScanIndex++)
    {
        int arrayAdtTemporaryValue=arrayAdtItems->arrayAdtFirstItems[arrayAdtItems->arrayAdtTextLength-1];
        for(int arrayAdtWriteIndex=(arrayAdtItems->arrayAdtTextLength-1);arrayAdtWriteIndex>0;arrayAdtWriteIndex--)
            arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex]=arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex-1];
        arrayAdtItems->arrayAdtFirstItems[0]=arrayAdtTemporaryValue;
    }
}
void l_shift(struct ArrayAdtArrayModel *arrayAdtItems)//left shift 
{
    for(int arrayAdtWriteIndex=1;arrayAdtWriteIndex<(arrayAdtItems->arrayAdtTextLength);arrayAdtWriteIndex++)
        arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex-1]=arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex];
    arrayAdtItems->arrayAdtFirstItems[arrayAdtItems->arrayAdtTextLength-1]=0;
    
}

void l_shift_r(struct ArrayAdtArrayModel *arrayAdtItems)//left shift roatation
{
    for(int arrayAdtScanIndex=1;arrayAdtScanIndex<=(arrayAdtItems->arrayAdtTextLength);arrayAdtScanIndex++)
    {
        int arrayAdtTemporaryValue=arrayAdtItems->arrayAdtFirstItems[0];
        for(int arrayAdtWriteIndex=1;arrayAdtWriteIndex<(arrayAdtItems->arrayAdtTextLength);arrayAdtWriteIndex++)
            arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex-1]=arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex];
        arrayAdtItems->arrayAdtFirstItems[(arrayAdtItems->arrayAdtTextLength)-1]=arrayAdtTemporaryValue;
    }
}
int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,6,8},10,7};
    r_shift_r(&arrayAdtItems);
    Display(arrayAdtItems);
    return 0;
}