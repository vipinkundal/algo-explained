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
struct ArrayAdtArrayModel Union(struct ArrayAdtArrayModel arrayAdtState,struct ArrayAdtArrayModel arrayAdtState2)
{
    struct ArrayAdtArrayModel arrayAdtState3;
    if(sort(arrayAdtState) && sort(arrayAdtState2))//if arr1 and arr2 are sorted
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0;
        while(arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength &&  arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength)
        {
            if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]<arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex++];
            else if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
            {
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex++];
                arrayAdtWriteIndex++;
            }
            else
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex++];
        }
        for(;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
            arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
        for(;arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength;arrayAdtWriteIndex++)
            arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex];
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
    else
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0,arrayAdtColumnCount=0;
        for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++,arrayAdtProbeIndex++)
            arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
        for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState2.arrayAdtTextLength;arrayAdtScanIndex++)
        {
            int arrayAdtLeftIndex=0,arrayAdtWriteIndex=0;
            while(arrayAdtWriteIndex<arrayAdtState.arrayAdtTextLength)
            {
                if(arrayAdtState2.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState3.arrayAdtFirstItems[arrayAdtWriteIndex])//checking for every element of array 1 if it exist in array 2
                {
                    arrayAdtLeftIndex=1;
                    break;
                }
                arrayAdtWriteIndex++;

            }
            if(arrayAdtLeftIndex==0)
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState2.arrayAdtFirstItems[arrayAdtScanIndex];
        }
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
}

struct ArrayAdtArrayModel Intersection(struct ArrayAdtArrayModel arrayAdtState,struct ArrayAdtArrayModel arrayAdtState2)
{
    struct ArrayAdtArrayModel arrayAdtState3;
    if(sort(arrayAdtState) && sort(arrayAdtState2))//if arr1 and arr2 are sorted
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0;
        while(arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength &&  arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength)
        {
            if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]<arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
                arrayAdtScanIndex++;
            else if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
            {
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
                arrayAdtScanIndex++;
                arrayAdtWriteIndex++;
            }
            else
                arrayAdtWriteIndex++;
        }
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
    else
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0;
        for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
        {
            for(arrayAdtWriteIndex=0;arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength;arrayAdtWriteIndex++)
            {
                if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
                    {
                        arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
                        break;
                    }
            }
        }
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
}

struct ArrayAdtArrayModel Difference(struct ArrayAdtArrayModel arrayAdtState,struct ArrayAdtArrayModel arrayAdtState2)
{
    struct ArrayAdtArrayModel arrayAdtState3;
    if(sort(arrayAdtState) && sort(arrayAdtState2))//if arr1 and arr2 are sorted
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0;
        while(arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength &&  arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength)
        {
            if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]<arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex++];

            else if(arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex]<arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex])
                arrayAdtWriteIndex++;
                
            else if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
            {
                arrayAdtScanIndex++;
                arrayAdtWriteIndex++;
            }
        }
        for(;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
            arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
    else
    {
        int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0,arrayAdtColumnCount=0;
        for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
        {
            arrayAdtColumnCount=0;
            for(arrayAdtWriteIndex=0;arrayAdtWriteIndex<arrayAdtState2.arrayAdtTextLength;arrayAdtWriteIndex++)
            {
                if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtState2.arrayAdtFirstItems[arrayAdtWriteIndex])
                    {
                        arrayAdtColumnCount=1;
                        break;
                    }
            }
            if(arrayAdtColumnCount==0)
                arrayAdtState3.arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
        }
        arrayAdtState3.arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState3.arrayAdtItemCapacity=100;
        return arrayAdtState3;
    }
}

int main()
{
    struct ArrayAdtArrayModel arrayAdtState={{2,6,10,15,12,25},100,6};
    struct ArrayAdtArrayModel arrayAdtState2={{3,6,7,15,20},100,5};
    struct ArrayAdtArrayModel arrayAdtState4=Difference(arrayAdtState,arrayAdtState2);
    Display(arrayAdtState4);
    return 0;
}
