#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace std;

void create_heap(int firstItems[],int itemCount)
{
    int scanIndex,temporaryValue=firstItems[itemCount];
    scanIndex=itemCount;
    while(scanIndex>1 && temporaryValue>firstItems[scanIndex/2])
    {
        firstItems[scanIndex]=firstItems[scanIndex/2];
        scanIndex=scanIndex/2;
    }
    firstItems[scanIndex]=temporaryValue;
}

int delete_heap(int firstItems[],int itemCount)
{
    int scanIndex,temporaryValue,writeIndex;
    int heapCreationVal=firstItems[1];
    firstItems[1]=firstItems[itemCount];
    scanIndex=1;
    writeIndex=scanIndex*2;
    while(writeIndex<=itemCount-1)
    {
        if(firstItems[writeIndex+1]>firstItems[writeIndex] && writeIndex+1<=itemCount-1)//as it is possible that j=n i.e last element so it may cause 
            writeIndex=writeIndex+1;                 //error so j+1 need to be less than or equal to last element
        if(firstItems[scanIndex]<firstItems[writeIndex])
        {
            temporaryValue=firstItems[scanIndex];
            firstItems[scanIndex]=firstItems[writeIndex];
            firstItems[writeIndex]=temporaryValue;
            scanIndex=writeIndex;
            writeIndex=scanIndex*2;
        }
        else break;
    }
    firstItems[itemCount]=heapCreationVal;
    return heapCreationVal;


}
int main()
{
    int firstItems[]={0,10,20,30,25,5,40,35};
    create_heap(firstItems,1);
    create_heap(firstItems,2);
    create_heap(firstItems,3);
    create_heap(firstItems,4);
    create_heap(firstItems,5);
    create_heap(firstItems,6);
    create_heap(firstItems,7);
    delete_heap(firstItems,6);
    delete_heap(firstItems,5);
    delete_heap(firstItems,4);
    delete_heap(firstItems,3);
    delete_heap(firstItems,2);
    delete_heap(firstItems,1);
    for(int heapCreationNum:firstItems)
        cout<<heapCreationNum<<" ";
    return 0;
}


