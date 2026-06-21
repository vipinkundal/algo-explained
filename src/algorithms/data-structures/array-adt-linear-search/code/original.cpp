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
int LinearSearch(struct ArrayAdtArrayModel *arrayAdtItems,int arrayAdtStoredValue)
{
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems->arrayAdtTextLength;arrayAdtScanIndex++)
    {
        if(arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtStoredValue)
        {
            swap(&arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex-1],&arrayAdtItems->arrayAdtFirstItems[arrayAdtScanIndex]);
            return arrayAdtScanIndex;
        }
    }
    return -1;
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,6,7},10,7};
    cout<<LinearSearch(&arrayAdtItems,4)<<endl;
    Display(arrayAdtItems);
    return 0;
}
