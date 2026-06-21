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
int Get(struct ArrayAdtArrayModel arrayAdtItems,int arrayAdtTargetIndex)
{
    if(arrayAdtTargetIndex>=0 && arrayAdtTargetIndex<=arrayAdtItems.arrayAdtTextLength )
        return arrayAdtItems.arrayAdtFirstItems[arrayAdtTargetIndex];
    return -1;
}
void Set(struct ArrayAdtArrayModel *arrayAdtItems,int arrayAdtTargetIndex,int arrayAdtStoredValue)
{
    if(arrayAdtTargetIndex>=0 && arrayAdtTargetIndex<=arrayAdtItems->arrayAdtTextLength )
        arrayAdtItems->arrayAdtFirstItems[arrayAdtTargetIndex]=arrayAdtStoredValue;
}
int Max(struct ArrayAdtArrayModel arrayAdtItems)
{
    int arrayAdtState=arrayAdtItems.arrayAdtFirstItems[0];
    for(int arrayAdtScanIndex=1;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        if(arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]>arrayAdtState)
            arrayAdtState=arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    }
    return arrayAdtState;
}
int Min(struct ArrayAdtArrayModel arrayAdtItems)
{
    int arrayAdtState2=arrayAdtItems.arrayAdtFirstItems[0];
    for(int arrayAdtScanIndex=1;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        if(arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]<arrayAdtState2)
            arrayAdtState2=arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    }
    return arrayAdtState2;
}
int Sum(struct ArrayAdtArrayModel arrayAdtItems)
{
    int arrayAdtState3=0;
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        arrayAdtState3=arrayAdtState3+arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    }
    return arrayAdtState3;
}
float Avg(struct ArrayAdtArrayModel arrayAdtItems)//u can call function sum in avg and type cast it as float-> (float)Sum(arr)/arr.length
{
    float arrayAdtState3=0;
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        arrayAdtState3=arrayAdtState3+arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    }
    return arrayAdtState3/arrayAdtItems.arrayAdtTextLength;
}
int RSum(struct ArrayAdtArrayModel arrayAdtItems,int arrayAdtItemCount)//by recursion
{
    if(arrayAdtItemCount>=0)
        return RSum(arrayAdtItems,arrayAdtItemCount-1)+arrayAdtItems.arrayAdtFirstItems[arrayAdtItemCount];
    return 0;
}
int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,6,8},10,7};
    cout<<Avg(arrayAdtItems);
    return 0;
}