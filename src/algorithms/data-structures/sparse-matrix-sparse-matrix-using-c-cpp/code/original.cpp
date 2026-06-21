#include<iostream>
using namespace std;
class Element
{
    public:
    int scanIndex;
    int writeIndex;
    int inputValue;
};
class Sparse
{
    private:
    int columnCount;
    int itemCount;
    int sparseMatrixNum;
    Element *sparseMatrixElm;
    public:
    Sparse(int columnCount,int itemCount,int sparseMatrixNum)
    {
        this->columnCount=columnCount;
        this->itemCount=itemCount;
        this->sparseMatrixNum=sparseMatrixNum;
        sparseMatrixElm=new Element[this->sparseMatrixNum];
    }
    friend sparseMatrixIstream & operator >>(sparseMatrixIstream &sparseMatrixIs,Sparse &workingText);// friend is a global function
    friend sparseMatrixOstream & operator << (sparseMatrixOstream &sparseMatrixOs,Sparse &workingText);
    Sparse operator+(Sparse &workingText);
};
Sparse Sparse::operator+(Sparse &workingText)
{
    int scanIndex=0,writeIndex=0,probeIndex=0;//i for referrring elements of array of struct Element pointed by elm  in sparse structure pointed by s1
                    // j for s2 and k for sum
    Sparse *sparseMatrixSum=new Sparse(columnCount,itemCount,sparseMatrixNum+workingText.sparseMatrixNum);
    sparseMatrixSum->sparseMatrixElm=new Element[sparseMatrixNum+workingText.sparseMatrixNum];
    while (scanIndex<sparseMatrixNum && writeIndex<workingText.sparseMatrixNum)
    {
        if(sparseMatrixElm[scanIndex].scanIndex<workingText.sparseMatrixElm[writeIndex].scanIndex)// row of s1 is less than s2
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixElm[scanIndex++];

        else if(sparseMatrixElm[scanIndex].scanIndex>workingText.sparseMatrixElm[writeIndex].scanIndex)//row of s2 is less than s1
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=workingText.sparseMatrixElm[writeIndex++];

        else
        {
            if(sparseMatrixElm[scanIndex].writeIndex<workingText.sparseMatrixElm[writeIndex].writeIndex)//row of s1 and s2 is same but column of s1 is less than s2
                sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixElm[scanIndex++];

            else if(sparseMatrixElm[scanIndex].writeIndex>workingText.sparseMatrixElm[writeIndex].writeIndex)//row of s1 and s2 is same but column of s2 is less than s1
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=workingText.sparseMatrixElm[writeIndex++];
            
            else//row and column both are same
            {
                sparseMatrixSum->sparseMatrixElm[probeIndex]=sparseMatrixElm[scanIndex];//copy comple s1 struct elm elements
                sparseMatrixSum->sparseMatrixElm[probeIndex++].inputValue=workingText.sparseMatrixElm[writeIndex++].inputValue+sparseMatrixElm[scanIndex++].inputValue;//add s1 and s2 values
            }
        }
        
    }
    //remaining elements 
    for(;scanIndex<sparseMatrixNum;scanIndex++)
        sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixElm[scanIndex];

    for(;writeIndex<this->sparseMatrixNum;writeIndex++)
        sparseMatrixSum->sparseMatrixElm[probeIndex++]=workingText.sparseMatrixElm[writeIndex];

    sparseMatrixSum->sparseMatrixNum=probeIndex;
    return *sparseMatrixSum;
}
sparseMatrixIstream & operator >> (sparseMatrixIstream &sparseMatrixIs,Sparse &workingText)
{
    cout<<"Enter non-zero element\n";
    int scanIndex;
    for(scanIndex=0;scanIndex<workingText.sparseMatrixNum;scanIndex++)
    {
        cin>>workingText.sparseMatrixElm[scanIndex].scanIndex>>workingText.sparseMatrixElm[scanIndex].writeIndex>>workingText.sparseMatrixElm[scanIndex].inputValue;
    }
    return sparseMatrixIs;
}
sparseMatrixOstream & operator << (sparseMatrixOstream &sparseMatrixOs,Sparse &workingText)
{
    int scanIndex,writeIndex;
    int primaryValue;
    primaryValue=0;
    cout<<endl;
    for(scanIndex=0;scanIndex<workingText.columnCount;scanIndex++)
    {
        for(writeIndex=0;writeIndex<workingText.itemCount;writeIndex++)
        {
            if(scanIndex==workingText.sparseMatrixElm[primaryValue].scanIndex && writeIndex==workingText.sparseMatrixElm[primaryValue].writeIndex)
            {
                cout<<workingText.sparseMatrixElm[primaryValue++].inputValue<<" ";
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
    Sparse sparseMatrixS1(3,3,3);
    cin>>sparseMatrixS1;
    cout<<sparseMatrixS1;
    Sparse sparseMatrixS2(3,3,3);
    cin>>sparseMatrixS2;
    cout<<sparseMatrixS2;
    Sparse sparseMatrixS3=sparseMatrixS1+sparseMatrixS2;
    cout<<sparseMatrixS3;
    return 0;
}