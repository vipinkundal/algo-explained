#include<iostream>
using namespace std;
class SparseMatrixEntry
{
    public:
    int sparseMatrixScanIndex;
    int sparseMatrixWriteIndex;
    int sparseMatrixInputValue;
};
class SparseMatrixSparseModel
{
    private:
    int sparseMatrixColumnCount;
    int sparseMatrixItemCount;
    int sparseMatrixState3;
    SparseMatrixEntry *sparseMatrixState4;
    public:
    SparseMatrixSparseModel(int sparseMatrixColumnCount,int sparseMatrixItemCount,int sparseMatrixState3)
    {
        this->sparseMatrixColumnCount=sparseMatrixColumnCount;
        this->sparseMatrixItemCount=sparseMatrixItemCount;
        this->sparseMatrixState3=sparseMatrixState3;
        sparseMatrixState4=new SparseMatrixEntry[this->sparseMatrixState3];
    }
    friend sparseMatrixState & operator >>(sparseMatrixState &sparseMatrixState6,SparseMatrixSparseModel &sparseMatrixWorkingText);// friend is a global function
    friend sparseMatrixState2 & operator << (sparseMatrixState2 &sparseMatrixState7,SparseMatrixSparseModel &sparseMatrixWorkingText);
    SparseMatrixSparseModel operator+(SparseMatrixSparseModel &sparseMatrixWorkingText);
};
SparseMatrixSparseModel SparseMatrixSparseModel::operator+(SparseMatrixSparseModel &sparseMatrixWorkingText)
{
    int sparseMatrixScanIndex=0,sparseMatrixWriteIndex=0,sparseMatrixProbeIndex=0;//i for referrring elements of array of struct Element pointed by elm  in sparse structure pointed by s1
                    // j for s2 and k for sum
    SparseMatrixSparseModel *sparseMatrixState5=new SparseMatrixSparseModel(sparseMatrixColumnCount,sparseMatrixItemCount,sparseMatrixState3+sparseMatrixWorkingText.sparseMatrixState3);
    sparseMatrixState5->sparseMatrixState4=new SparseMatrixEntry[sparseMatrixState3+sparseMatrixWorkingText.sparseMatrixState3];
    while (sparseMatrixScanIndex<sparseMatrixState3 && sparseMatrixWriteIndex<sparseMatrixWorkingText.sparseMatrixState3)
    {
        if(sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixScanIndex<sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex].sparseMatrixScanIndex)// row of s1 is less than s2
            sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixState4[sparseMatrixScanIndex++];

        else if(sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixScanIndex>sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex].sparseMatrixScanIndex)//row of s2 is less than s1
            sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex++];

        else
        {
            if(sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixWriteIndex<sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex].sparseMatrixWriteIndex)//row of s1 and s2 is same but column of s1 is less than s2
                sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixState4[sparseMatrixScanIndex++];

            else if(sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixWriteIndex>sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex].sparseMatrixWriteIndex)//row of s1 and s2 is same but column of s2 is less than s1
            sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex++];
            
            else//row and column both are same
            {
                sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex]=sparseMatrixState4[sparseMatrixScanIndex];//copy comple s1 struct elm elements
                sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++].sparseMatrixInputValue=sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex++].sparseMatrixInputValue+sparseMatrixState4[sparseMatrixScanIndex++].sparseMatrixInputValue;//add s1 and s2 values
            }
        }
        
    }
    //remaining elements 
    for(;sparseMatrixScanIndex<sparseMatrixState3;sparseMatrixScanIndex++)
        sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixState4[sparseMatrixScanIndex];

    for(;sparseMatrixWriteIndex<this->sparseMatrixState3;sparseMatrixWriteIndex++)
        sparseMatrixState5->sparseMatrixState4[sparseMatrixProbeIndex++]=sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixWriteIndex];

    sparseMatrixState5->sparseMatrixState3=sparseMatrixProbeIndex;
    return *sparseMatrixState5;
}
sparseMatrixState & operator >> (sparseMatrixState &sparseMatrixState6,SparseMatrixSparseModel &sparseMatrixWorkingText)
{
    cout<<"Enter non-zero element\n";
    int sparseMatrixScanIndex;
    for(sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixWorkingText.sparseMatrixState3;sparseMatrixScanIndex++)
    {
        cin>>sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixScanIndex>>sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixWriteIndex>>sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixScanIndex].sparseMatrixInputValue;
    }
    return sparseMatrixState6;
}
sparseMatrixState2 & operator << (sparseMatrixState2 &sparseMatrixState7,SparseMatrixSparseModel &sparseMatrixWorkingText)
{
    int sparseMatrixScanIndex,sparseMatrixWriteIndex;
    int sparseMatrixPrimaryValue;
    sparseMatrixPrimaryValue=0;
    cout<<endl;
    for(sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixWorkingText.sparseMatrixColumnCount;sparseMatrixScanIndex++)
    {
        for(sparseMatrixWriteIndex=0;sparseMatrixWriteIndex<sparseMatrixWorkingText.sparseMatrixItemCount;sparseMatrixWriteIndex++)
        {
            if(sparseMatrixScanIndex==sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixPrimaryValue].sparseMatrixScanIndex && sparseMatrixWriteIndex==sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixPrimaryValue].sparseMatrixWriteIndex)
            {
                cout<<sparseMatrixWorkingText.sparseMatrixState4[sparseMatrixPrimaryValue++].sparseMatrixInputValue<<" ";
            }
            else{
                cout<<"0 ";
            }
        }
        cout<<endl;
    }
    cout<<"---------------------------------------------------------------\n";
}
int main()
{
    SparseMatrixSparseModel sparseMatrixState8(3,3,3);
    cin>>sparseMatrixState8;
    cout<<sparseMatrixState8;
    SparseMatrixSparseModel sparseMatrixState9(3,3,3);
    cin>>sparseMatrixState9;
    cout<<sparseMatrixState9;
    SparseMatrixSparseModel sparseMatrixState10=sparseMatrixState8+sparseMatrixState9;
    cout<<sparseMatrixState10;
    return 0;
}