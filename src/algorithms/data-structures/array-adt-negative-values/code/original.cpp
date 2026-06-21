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
void neg(struct ArrayAdtArrayModel *arrayAdtItems)
{   
    int arrayAdtScanIndex=0,arrayAdtWriteIndex=arrayAdtItems->arrayAdtTextLength-1;
    while(arrayAdtScanIndex<arrayAdtWriteIndex)
    {   
        while (arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex]<0)arrayAdtScanIndex++;
        while(arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex]>0)arrayAdtWriteIndex--;
        if(arrayAdtScanIndex<arrayAdtWriteIndex) swap(&arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex],&arrayAdtItems->arrayAdtFirstItems[arrayAdtWriteIndex]);       
    }
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{-1,2,-3,4,-5,8,-10},10,7};
    neg(&arrayAdtItems);
    Display(arrayAdtItems);
    return 0;
}