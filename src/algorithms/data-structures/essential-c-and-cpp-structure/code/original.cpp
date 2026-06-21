#include<iostream>
using namespace std;
struct essentialCState
{
    char essentialCState3[20];
    int essentialCState4;
    int essentialCState2;

};

int main()
{
    int essentialCScanIndex;
    struct essentialCState essentialCRightIndex[3];//declartion
    for(essentialCScanIndex=0;essentialCScanIndex<3;essentialCScanIndex++)//initialization
    {
        cout<<"Name ";
        cin>>essentialCRightIndex[essentialCScanIndex].essentialCState3;
        cout<<"roll no ";
        cin>>essentialCRightIndex[essentialCScanIndex].essentialCState4;
        cout<<"Total Marks ";
        cin>>essentialCRightIndex[essentialCScanIndex].essentialCState2;
        cout<<endl;
    }
    for(essentialCScanIndex=0;essentialCScanIndex<3;essentialCScanIndex++)
    {
        cout<<essentialCRightIndex[essentialCScanIndex].essentialCState3<<" "<< essentialCRightIndex[essentialCScanIndex].essentialCState4 << " "<< essentialCRightIndex[essentialCScanIndex].essentialCState2 << endl;
    }

    return 0;
}