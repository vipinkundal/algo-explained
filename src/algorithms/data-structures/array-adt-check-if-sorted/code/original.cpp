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
bool sort(struct ArrayAdtArrayModel arrayAdtItems)
{   
    int arrayAdtScanIndex=0;
    while(arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength-1)
    {   
        if(arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]>arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex+1])
            return false;
        arrayAdtScanIndex++;
        
    }
    return true;
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,8,10},10,7};
    std::cout<<sort(arrayAdtItems);
    return 0;
}