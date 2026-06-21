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
void insert(struct ArrayAdtArrayModel *arrayAdtItems,int arrayAdtInputValue)
{   
    int arrayAdtScanIndex=arrayAdtItems->arrayAdtTextLength-1;
    while(arrayAdtScanIndex>=0 && arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex]>arrayAdtInputValue)
    {   
        arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex+1]=arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex];
        arrayAdtScanIndex--;
    }
    arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex+1]=arrayAdtInputValue;
    arrayAdtItems->arrayAdtTextLength++;
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,6,8,10},10,7};
    insert(&arrayAdtItems,7);
    Display(arrayAdtItems);
    return 0;
}