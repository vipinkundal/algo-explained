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
void neg(struct Array *items)
{   
    int scanIndex=0,writeIndex=items->textLength-1;
    while(scanIndex<writeIndex)
    {   
        while (items->firstItems[scanIndex]<0)scanIndex++;
        while(items->firstItems[writeIndex]>0)writeIndex--;
        if(scanIndex<writeIndex) swap(&items->firstItems[scanIndex],&items->firstItems[writeIndex]);       
    }
}

int main()
{
    struct Array items={{-1,2,-3,4,-5,8,-10},10,7};
    neg(&items);
    Display(items);
    return 0;
}