#include<iostream>
using namespace std;
struct ArrayAdtArrayModel
{
    int arrayAdtFirstItems2[100];
    int arrayAdtItemCapacity;
    int arrayAdtTextLength;
};
void Display(struct ArrayAdtArrayModel arrayAdtItems)
{
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        std::cout<<arrayAdtItems.arrayAdtFirstItems2[arrayAdtScanIndex]<<" ";
    }
}
int main()
{
    ArrayAdtArrayModel arrayAdtFirstItems={{1,2,3,4,6,8,9,12,14,17},100,10};
    int arrayAdtState=arrayAdtFirstItems.arrayAdtFirstItems2[0],arrayAdtState2=arrayAdtFirstItems.arrayAdtFirstItems2[0];

    for(int arrayAdtScanIndex=1;arrayAdtScanIndex<arrayAdtFirstItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        if(arrayAdtFirstItems.arrayAdtFirstItems2[arrayAdtScanIndex]<arrayAdtState2)
            arrayAdtState2=arrayAdtFirstItems.arrayAdtFirstItems2[arrayAdtScanIndex];
        else if(arrayAdtFirstItems.arrayAdtFirstItems2[arrayAdtScanIndex]>arrayAdtState)
            arrayAdtState=arrayAdtFirstItems.arrayAdtFirstItems2[arrayAdtScanIndex];
    }
    cout<<arrayAdtState<<" "<<arrayAdtState2;
    return 0;
}