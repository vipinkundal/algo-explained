#include<iostream>
using namespace std;
struct essentialCReportcard
{
    char essentialCName[20];
    int essentialCRoll;
    int essentialCTotMarks;

};

int main()
{
    int scanIndex;
    struct essentialCReportcard rightIndex[3];//declartion
    for(scanIndex=0;scanIndex<3;scanIndex++)//initialization
    {
        cout<<"Name ";
        cin>>rightIndex[scanIndex].essentialCName;
        cout<<"roll no ";
        cin>>rightIndex[scanIndex].essentialCRoll;
        cout<<"Total Marks ";
        cin>>rightIndex[scanIndex].essentialCTotMarks;
        cout<<endl;
    }
    for(scanIndex=0;scanIndex<3;scanIndex++)
    {
        cout<<rightIndex[scanIndex].essentialCName<<" "<< rightIndex[scanIndex].essentialCRoll << " "<< rightIndex[scanIndex].essentialCTotMarks << endl;
    }

    return 0;
}