#include<iostream>
using namespace std;
struct Array
{
    int firstItems[100];
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
int main()
{
    Array items={{1,2,3,4,5,7,8},100,7};
    int arrayAdtSum=0,workingText=0;
    for(int scanIndex=0;scanIndex<items.textLength;scanIndex++)//method 1
        arrayAdtSum=arrayAdtSum+items.firstItems[scanIndex];
    
    workingText=items.firstItems[items.textLength-1]*(items.firstItems[items.textLength-1]-1)/2;

    Array arrayAdtArr2={{6,7,10,11,13,14,15},100,7};//Menthod 2 for multiple missing element
    int arrayAdtDiff=arrayAdtArr2.firstItems[0]-0;
    for(int scanIndex=0;scanIndex<arrayAdtArr2.textLength;scanIndex++)
    {
        if(arrayAdtArr2.firstItems[scanIndex]-scanIndex!=arrayAdtDiff)
        {
            while(arrayAdtDiff<(arrayAdtArr2.firstItems[scanIndex]-scanIndex))
            {
                cout<<arrayAdtDiff+scanIndex<<endl;
                arrayAdtDiff++;
            }
        }
    }

    Array arrayAdtArr3={{1,7,5,2,3},100,5};//Menthod 3 for multiple missing element using hashing
    //here l=1 h=7
    int A1[8]={0};
    for(int scanIndex=0;scanIndex<arrayAdtArr3.textLength;scanIndex++)
        A1[arrayAdtArr3.firstItems[scanIndex]]++;
    for(int scanIndex=1;scanIndex<8;scanIndex++)
    {
        if(A1[scanIndex]==0)
            cout<<"element "<<scanIndex<< " is missing"<<endl;
    }
    return 0;
    }