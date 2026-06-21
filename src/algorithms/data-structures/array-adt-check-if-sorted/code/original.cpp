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

int main()
{
    struct Array items={{1,2,3,4,5,8,10},10,7};
    std::cout<<sort(items);
    return 0;
}