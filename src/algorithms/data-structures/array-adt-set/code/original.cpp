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
bool sort(struct Array items)
{
    int scanIndex=0;
    while(scanIndex<items.textLength-1)
    {
        if(items.firstItems[scanIndex]>items.firstItems[scanIndex+1])
            return false;
        scanIndex++;

    }
    return true;
}
struct Array Union(struct Array arrayAdtArr1,struct Array arrayAdtArr2)
{
    struct Array arrayAdtArr3;
    if(sort(arrayAdtArr1) && sort(arrayAdtArr2))//if arr1 and arr2 are sorted
    {
        int scanIndex=0,writeIndex=0,probeIndex=0;
        while(scanIndex<arrayAdtArr1.textLength &&  writeIndex<arrayAdtArr2.textLength)
        {
            if(arrayAdtArr1.firstItems[scanIndex]<arrayAdtArr2.firstItems[writeIndex])
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex++];
            else if(arrayAdtArr1.firstItems[scanIndex]==arrayAdtArr2.firstItems[writeIndex])
            {
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex++];
                writeIndex++;
            }
            else
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr2.firstItems[writeIndex++];
        }
        for(;scanIndex<arrayAdtArr1.textLength;scanIndex++)
            arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex];
        for(;writeIndex<arrayAdtArr2.textLength;writeIndex++)
            arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr2.firstItems[writeIndex];
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
    else
    {
        int scanIndex=0,writeIndex=0,probeIndex=0,columnCount=0;
        for(scanIndex=0;scanIndex<arrayAdtArr1.textLength;scanIndex++,probeIndex++)
            arrayAdtArr3.firstItems[probeIndex]=arrayAdtArr1.firstItems[scanIndex];
        for(scanIndex=0;scanIndex<arrayAdtArr2.textLength;scanIndex++)
        {
            int leftIndex=0,writeIndex=0;
            while(writeIndex<arrayAdtArr1.textLength)
            {
                if(arrayAdtArr2.firstItems[scanIndex]==arrayAdtArr3.firstItems[writeIndex])//checking for every element of array 1 if it exist in array 2
                {
                    leftIndex=1;
                    break;
                }
                writeIndex++;

            }
            if(leftIndex==0)
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr2.firstItems[scanIndex];
        }
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
}

struct Array Intersection(struct Array arrayAdtArr1,struct Array arrayAdtArr2)
{
    struct Array arrayAdtArr3;
    if(sort(arrayAdtArr1) && sort(arrayAdtArr2))//if arr1 and arr2 are sorted
    {
        int scanIndex=0,writeIndex=0,probeIndex=0;
        while(scanIndex<arrayAdtArr1.textLength &&  writeIndex<arrayAdtArr2.textLength)
        {
            if(arrayAdtArr1.firstItems[scanIndex]<arrayAdtArr2.firstItems[writeIndex])
                scanIndex++;
            else if(arrayAdtArr1.firstItems[scanIndex]==arrayAdtArr2.firstItems[writeIndex])
            {
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex];
                scanIndex++;
                writeIndex++;
            }
            else
                writeIndex++;
        }
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
    else
    {
        int scanIndex=0,writeIndex=0,probeIndex=0;
        for(scanIndex=0;scanIndex<arrayAdtArr1.textLength;scanIndex++)
        {
            for(writeIndex=0;writeIndex<arrayAdtArr2.textLength;writeIndex++)
            {
                if(arrayAdtArr1.firstItems[scanIndex]==arrayAdtArr2.firstItems[writeIndex])
                    {
                        arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex];
                        break;
                    }
            }
        }
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
}

struct Array Difference(struct Array arrayAdtArr1,struct Array arrayAdtArr2)
{
    struct Array arrayAdtArr3;
    if(sort(arrayAdtArr1) && sort(arrayAdtArr2))//if arr1 and arr2 are sorted
    {
        int scanIndex=0,writeIndex=0,probeIndex=0;
        while(scanIndex<arrayAdtArr1.textLength &&  writeIndex<arrayAdtArr2.textLength)
        {
            if(arrayAdtArr1.firstItems[scanIndex]<arrayAdtArr2.firstItems[writeIndex])
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex++];

            else if(arrayAdtArr2.firstItems[writeIndex]<arrayAdtArr1.firstItems[scanIndex])
                writeIndex++;
                
            else if(arrayAdtArr1.firstItems[scanIndex]==arrayAdtArr2.firstItems[writeIndex])
            {
                scanIndex++;
                writeIndex++;
            }
        }
        for(;scanIndex<arrayAdtArr1.textLength;scanIndex++)
            arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex];
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
    else
    {
        int scanIndex=0,writeIndex=0,probeIndex=0,columnCount=0;
        for(scanIndex=0;scanIndex<arrayAdtArr1.textLength;scanIndex++)
        {
            columnCount=0;
            for(writeIndex=0;writeIndex<arrayAdtArr2.textLength;writeIndex++)
            {
                if(arrayAdtArr1.firstItems[scanIndex]==arrayAdtArr2.firstItems[writeIndex])
                    {
                        columnCount=1;
                        break;
                    }
            }
            if(columnCount==0)
                arrayAdtArr3.firstItems[probeIndex++]=arrayAdtArr1.firstItems[scanIndex];
        }
        arrayAdtArr3.textLength=probeIndex;
        arrayAdtArr3.itemCapacity=100;
        return arrayAdtArr3;
    }
}

int main()
{
    struct Array arrayAdtArr1={{2,6,10,15,12,25},100,6};
    struct Array arrayAdtArr2={{3,6,7,15,20},100,5};
    struct Array arrayAdtD=Difference(arrayAdtArr1,arrayAdtArr2);
    Display(arrayAdtD);
    return 0;
}
