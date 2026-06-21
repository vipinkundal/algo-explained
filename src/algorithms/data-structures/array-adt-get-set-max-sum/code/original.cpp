#include<iostream>
using namespace std;
struct Array
{
    int firstItems[10];
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
int Get(struct Array items,int targetIndex)
{
    if(targetIndex>=0 && targetIndex<=items.textLength )
        return items.firstItems[targetIndex];
    return -1;
}
void Set(struct Array *items,int targetIndex,int storedValue)
{
    if(targetIndex>=0 && targetIndex<=items->textLength )
        items->firstItems[targetIndex]=storedValue;
}
int Max(struct Array items)
{
    int arrayAdtMax=items.firstItems[0];
    for(int scanIndex=1;scanIndex<items.textLength;scanIndex++)
    {
        if(items.firstItems[scanIndex]>arrayAdtMax)
            arrayAdtMax=items.firstItems[scanIndex];
    }
    return arrayAdtMax;
}
int Min(struct Array items)
{
    int arrayAdtMin=items.firstItems[0];
    for(int scanIndex=1;scanIndex<items.textLength;scanIndex++)
    {
        if(items.firstItems[scanIndex]<arrayAdtMin)
            arrayAdtMin=items.firstItems[scanIndex];
    }
    return arrayAdtMin;
}
int Sum(struct Array items)
{
    int arrayAdtSum=0;
    for(int scanIndex=0;scanIndex<items.textLength;scanIndex++)
    {
        arrayAdtSum=arrayAdtSum+items.firstItems[scanIndex];
    }
    return arrayAdtSum;
}
float Avg(struct Array items)//u can call function sum in avg and type cast it as float-> (float)Sum(arr)/arr.length
{
    float arrayAdtSum=0;
    for(int scanIndex=0;scanIndex<items.textLength;scanIndex++)
    {
        arrayAdtSum=arrayAdtSum+items.firstItems[scanIndex];
    }
    return arrayAdtSum/items.textLength;
}
int RSum(struct Array items,int itemCount)//by recursion
{
    if(itemCount>=0)
        return RSum(items,itemCount-1)+items.firstItems[itemCount];
    return 0;
}
int main()
{
    struct Array items={{1,2,3,4,5,6,8},10,7};
    cout<<Avg(items);
    return 0;
}