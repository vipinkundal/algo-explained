#include<iostream>
using namespace std;
struct ArrayAdtArrayModel
{
    int arrayAdtFirstItems[100];
    int arrayAdtItemCapacity;
    int arrayAdtTextLength;
};
void Display(struct ArrayAdtArrayModel arrayAdtItems)
{
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        std::cout<<arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex]<<" ";
    }
}
int main()
{
    ArrayAdtArrayModel arrayAdtItems={{1,2,3,4,5,7,8},100,7};
    int arrayAdtState4=0,arrayAdtWorkingText=0;
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtItems.arrayAdtTextLength;arrayAdtScanIndex++)//method 1
        arrayAdtState4=arrayAdtState4+arrayAdtItems.arrayAdtFirstItems[arrayAdtScanIndex];
    
    arrayAdtWorkingText=arrayAdtItems.arrayAdtFirstItems[arrayAdtItems.arrayAdtTextLength-1]*(arrayAdtItems.arrayAdtFirstItems[arrayAdtItems.arrayAdtTextLength-1]-1)/2;

    ArrayAdtArrayModel arrayAdtState={{6,7,10,11,13,14,15},100,7};//Menthod 2 for multiple missing element
    int arrayAdtState2=arrayAdtState.arrayAdtFirstItems[0]-0;
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
    {
        if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]-arrayAdtScanIndex!=arrayAdtState2)
        {
            while(arrayAdtState2<(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]-arrayAdtScanIndex))
            {
                cout<<arrayAdtState2+arrayAdtScanIndex<<endl;
                arrayAdtState2++;
            }
        }
    }

    ArrayAdtArrayModel arrayAdtState3={{1,7,5,2,3},100,5};//Menthod 3 for multiple missing element using hashing
    //here l=1 h=7
    int A1[8]={0};
    for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState3.arrayAdtTextLength;arrayAdtScanIndex++)
        A1[arrayAdtState3.arrayAdtFirstItems[arrayAdtScanIndex]]++;
    for(int arrayAdtScanIndex=1;arrayAdtScanIndex<8;arrayAdtScanIndex++)
    {
        if(A1[arrayAdtScanIndex]==0)
            cout<<"element "<<arrayAdtScanIndex<< " is missing"<<endl;
    }
    return 0;
    }