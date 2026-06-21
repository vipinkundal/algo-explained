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
void RUA(struct Array items)//reversing array using auxilary array B
{
    int arrayAdtArr2[(items.textLength)];
    for(int scanIndex=(items.textLength-1),writeIndex=0;scanIndex>=0;scanIndex--,writeIndex++)
    {
        arrayAdtArr2[writeIndex]=items.firstItems[scanIndex];
    }
    for(int scanIndex=0;scanIndex<(items.textLength);scanIndex++)
    {
        items.firstItems[scanIndex]=arrayAdtArr2[scanIndex];
    }
    Display(items);
}

void INT(struct Array *items)//reversing array using interchanging
{
    for(int scanIndex=0,writeIndex=(items->textLength-1);scanIndex<writeIndex;scanIndex++,writeIndex--)
        swap(&items->firstItems[scanIndex],&items->firstItems[writeIndex]);
}
void r_shift(struct Array *items)//right shift 
{
    for(int writeIndex=(items->textLength-1);writeIndex>0;writeIndex--)
        items->firstItems[writeIndex]=items->firstItems[writeIndex-1];
    items->firstItems[0]=0;
    
}

void r_shift_r(struct Array *items)//right shift roatation
{
    for(int scanIndex=0;scanIndex<items->textLength;scanIndex++)
    {
        int temporaryValue=items->firstItems[items->textLength-1];
        for(int writeIndex=(items->textLength-1);writeIndex>0;writeIndex--)
            items->firstItems[writeIndex]=items->firstItems[writeIndex-1];
        items->firstItems[0]=temporaryValue;
    }
}
void l_shift(struct Array *items)//left shift 
{
    for(int writeIndex=1;writeIndex<(items->textLength);writeIndex++)
        items->firstItems[writeIndex-1]=items->firstItems[writeIndex];
    items->firstItems[items->textLength-1]=0;
    
}

void l_shift_r(struct Array *items)//left shift roatation
{
    for(int scanIndex=1;scanIndex<=(items->textLength);scanIndex++)
    {
        int temporaryValue=items->firstItems[0];
        for(int writeIndex=1;writeIndex<(items->textLength);writeIndex++)
            items->firstItems[writeIndex-1]=items->firstItems[writeIndex];
        items->firstItems[(items->textLength)-1]=temporaryValue;
    }
}
int main()
{
    struct Array items={{1,2,3,4,5,6,8},10,7};
    r_shift_r(&items);
    Display(items);
    return 0;
}