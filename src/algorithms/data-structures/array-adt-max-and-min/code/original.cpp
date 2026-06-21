#include<iostream>
using namespace std;
struct Array
{
    int firstItems2[100];
    int itemCapacity;
    int textLength;
};
void Display(struct Array items)
{
    for(int scanIndex=0;scanIndex<items.textLength;scanIndex++)
    {
        std::cout<<items.firstItems2[scanIndex]<<" ";
    }
}
int main()
{
    Array firstItems={{1,2,3,4,6,8,9,12,14,17},100,10};
    int arrayAdtMax=firstItems.firstItems2[0],arrayAdtMin=firstItems.firstItems2[0];

    for(int scanIndex=1;scanIndex<firstItems.textLength;scanIndex++)
    {
        if(firstItems.firstItems2[scanIndex]<arrayAdtMin)
            arrayAdtMin=firstItems.firstItems2[scanIndex];
        else if(firstItems.firstItems2[scanIndex]>arrayAdtMax)
            arrayAdtMax=firstItems.firstItems2[scanIndex];
    }
    cout<<arrayAdtMax<<" "<<arrayAdtMin;
    return 0;
}