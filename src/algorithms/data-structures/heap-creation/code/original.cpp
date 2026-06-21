#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace std;

void create_heap(int heapCreationFirstItems[],int heapCreationItemCount)
{
    int heapCreationScanIndex,heapCreationTemporaryValue=heapCreationFirstItems[heapCreationItemCount];
    heapCreationScanIndex=heapCreationItemCount;
    while(heapCreationScanIndex>1 && heapCreationTemporaryValue>heapCreationFirstItems[heapCreationScanIndex/2])
    {
        heapCreationFirstItems[heapCreationScanIndex]=heapCreationFirstItems[heapCreationScanIndex/2];
        heapCreationScanIndex=heapCreationScanIndex/2;
    }
    heapCreationFirstItems[heapCreationScanIndex]=heapCreationTemporaryValue;
}

int delete_heap(int heapCreationFirstItems[],int heapCreationItemCount)
{
    int heapCreationScanIndex,heapCreationTemporaryValue,heapCreationWriteIndex;
    int heapCreationState=heapCreationFirstItems[1];
    heapCreationFirstItems[1]=heapCreationFirstItems[heapCreationItemCount];
    heapCreationScanIndex=1;
    heapCreationWriteIndex=heapCreationScanIndex*2;
    while(heapCreationWriteIndex<=heapCreationItemCount-1)
    {
        if(heapCreationFirstItems[heapCreationWriteIndex+1]>heapCreationFirstItems[heapCreationWriteIndex] && heapCreationWriteIndex+1<=heapCreationItemCount-1)//as it is possible that j=n i.e last element so it may cause 
            heapCreationWriteIndex=heapCreationWriteIndex+1;                 //error so j+1 need to be less than or equal to last element
        if(heapCreationFirstItems[heapCreationScanIndex]<heapCreationFirstItems[heapCreationWriteIndex])
        {
            heapCreationTemporaryValue=heapCreationFirstItems[heapCreationScanIndex];
            heapCreationFirstItems[heapCreationScanIndex]=heapCreationFirstItems[heapCreationWriteIndex];
            heapCreationFirstItems[heapCreationWriteIndex]=heapCreationTemporaryValue;
            heapCreationScanIndex=heapCreationWriteIndex;
            heapCreationWriteIndex=heapCreationScanIndex*2;
        }
        else break;
    }
    heapCreationFirstItems[heapCreationItemCount]=heapCreationState;
    return heapCreationState;


}
int main()
{
    int heapCreationFirstItems[]={0,10,20,30,25,5,40,35};
    create_heap(heapCreationFirstItems,1);
    create_heap(heapCreationFirstItems,2);
    create_heap(heapCreationFirstItems,3);
    create_heap(heapCreationFirstItems,4);
    create_heap(heapCreationFirstItems,5);
    create_heap(heapCreationFirstItems,6);
    create_heap(heapCreationFirstItems,7);
    delete_heap(heapCreationFirstItems,6);
    delete_heap(heapCreationFirstItems,5);
    delete_heap(heapCreationFirstItems,4);
    delete_heap(heapCreationFirstItems,3);
    delete_heap(heapCreationFirstItems,2);
    delete_heap(heapCreationFirstItems,1);
    for(int heapCreationState2:heapCreationFirstItems)
        cout<<heapCreationState2<<" ";
    return 0;
}


