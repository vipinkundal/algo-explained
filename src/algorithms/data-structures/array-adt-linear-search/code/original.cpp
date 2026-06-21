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
int LinearSearch(struct Array *items,int storedValue)
{
    for(int scanIndex=0;scanIndex<items->textLength;scanIndex++)
    {
        if(items->firstItems[scanIndex]==storedValue)
        {
            swap(&items->firstItems[scanIndex-1],&items->firstItems[scanIndex]);
            return scanIndex;
        }
    }
    return -1;
}

int main()
{
    struct Array items={{1,2,3,4,5,6,7},10,7};
    cout<<LinearSearch(&items,4)<<endl;
    Display(items);
    return 0;
}
