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
void insert(struct Array *items,int inputValue)
{   
    int scanIndex=items->textLength-1;
    while(scanIndex>=0 && items->firstItems[scanIndex]>inputValue)
    {   
        items->firstItems[scanIndex+1]=items->firstItems[scanIndex];
        scanIndex--;
    }
    items->firstItems[scanIndex+1]=inputValue;
    items->textLength++;
}

int main()
{
    struct Array items={{1,2,3,4,6,8,10},10,7};
    insert(&items,7);
    Display(items);
    return 0;
}