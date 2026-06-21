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
int BinarySearch(struct ArrayAdtArrayModel arrayAdtItems,int arrayAdtStoredValue)
{
    if(arrayAdtItems.arrayAdtTextLength>0)
    {
        int arrayAdtLeftIndex=0;
        int arrayAdtState3=arrayAdtItems.arrayAdtTextLength-1;
        while(arrayAdtLeftIndex<=arrayAdtState3)
        {
            int arrayAdtState=(arrayAdtLeftIndex+arrayAdtState3)/2;
            if(arrayAdtStoredValue==arrayAdtItems.arrayAdtFirstItems[arrayAdtState])
                return arrayAdtState;
            else if(arrayAdtItems.arrayAdtFirstItems[arrayAdtState]<arrayAdtStoredValue)
                arrayAdtLeftIndex=arrayAdtState+1;
            else
                arrayAdtState3=arrayAdtState-1;
        }
    }
    return -1;
}
int RBinarySearch(struct ArrayAdtArrayModel arrayAdtItems,int arrayAdtStoredValue,int arrayAdtLeftIndex,int arrayAdtState3)
{
    if(arrayAdtLeftIndex<=arrayAdtState3)
    {
        int arrayAdtState=(arrayAdtLeftIndex+arrayAdtState3)/2;
        if(arrayAdtStoredValue==arrayAdtItems.arrayAdtFirstItems[arrayAdtState])
            return arrayAdtState;  
        else if(arrayAdtStoredValue<arrayAdtState2 arrayAdtRightIndex.arrayAdtFirstItems[arrayAdtState])
            return RBinarySearch(arrayAdtItems,arrayAdtStoredValue,arrayAdtLeftIndex,arrayAdtState-1);
        else 
            return RBinarySearch(arrayAdtItems,arrayAdtStoredValue,arrayAdtState+1,arrayAdtState3);
        } 
    return -1;
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,6,7},10,7};
    cout<<RBinarySearch(arrayAdtItems,6,0,arrayAdtItems.arrayAdtTextLength-1)<<endl;
    Display(arrayAdtItems);
    return 0;
}
