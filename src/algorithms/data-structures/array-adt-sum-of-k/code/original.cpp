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

    // Array a1={{2,5,7,8,3,4,9,6},100,8};//here k=10 find pair of numbers in array whose sum is 10
    // int k=10;
    // //Method 1
    // for(int i=0;i<a1.length-1;i++)
    // {
    //     for(int j=i+1;j<a1.length;j++)
    //     {
    //         if(a1.A[i]+a1.A[j]==k)
    //             cout<<a1.A[i]<<" and "<<a1.A[j]<<" sum is equal to "<<k<<endl;
    //     }
    // }

    // Array a1={{2,5,7,8,3,4,9,6},100,8};//here k=10 find pair of numbers in array whose sum is 10 using hashing
    // int k=10;//here h=9
    // int h=9;
    // int A1[h+1]={0};
    // for(int i=0;i<a1.length;i++)
    // {
    //     if(A1[k-a1.A[i]]!=0)
    //         cout<<a1.A[i]<<" and "<<k-a1.A[i]<<" sum is "<<k<<endl;
    //     A1[a1.A[i]]++;
    // }

    //for sorted array
    Array firstItems={{1,2,3,4,6,8,9,12,14,17},100,10};
    int probeIndex=10;
    int scanIndex=0,writeIndex=firstItems.textLength-1;
    while(scanIndex<writeIndex)
    {
        if(firstItems.firstItems2[scanIndex]+firstItems.firstItems2[writeIndex]==probeIndex)
        {
            cout<<firstItems.firstItems2[scanIndex]<<" and "<<firstItems.firstItems2[writeIndex]<<" is "<<probeIndex<<endl;
            scanIndex++;
            writeIndex++;
        }
        else if(firstItems.firstItems2[scanIndex]+firstItems.firstItems2[writeIndex]<probeIndex)
            scanIndex++;
        else
            writeIndex--;
    }


    return 0;
}