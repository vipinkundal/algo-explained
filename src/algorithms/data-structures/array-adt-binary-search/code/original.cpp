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
int BinarySearch(struct Array items,int storedValue)
{
    if(items.textLength>0)
    {
        int leftIndex=0;
        int arrayAdtH=items.textLength-1;
        while(leftIndex<=arrayAdtH)
        {
            int arrayAdtMid=(leftIndex+arrayAdtH)/2;
            if(storedValue==items.firstItems[arrayAdtMid])
                return arrayAdtMid;
            else if(items.firstItems[arrayAdtMid]<storedValue)
                leftIndex=arrayAdtMid+1;
            else
                arrayAdtH=arrayAdtMid-1;
        }
    }
    return -1;
}
int RBinarySearch(struct Array items,int storedValue,int leftIndex,int arrayAdtH)
{
    if(leftIndex<=arrayAdtH)
    {
        int arrayAdtMid=(leftIndex+arrayAdtH)/2;
        if(storedValue==items.firstItems[arrayAdtMid])
            return arrayAdtMid;  
        else if(storedValue<arrayAdtAr rightIndex.firstItems[arrayAdtMid])
            return RBinarySearch(items,storedValue,leftIndex,arrayAdtMid-1);
        else 
            return RBinarySearch(items,storedValue,arrayAdtMid+1,arrayAdtH);
        } 
    return -1;
}

int main()
{
    struct Array items={{1,2,3,4,5,6,7},10,7};
    cout<<RBinarySearch(items,6,0,items.textLength-1)<<endl;
    Display(items);
    return 0;
}
