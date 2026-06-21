#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace std;
struct SparseMatrixPolynomialTerm
{
    int sparseMatrixState2;
    int sparseMatrixState3;
};
struct sparseMatrixState
{
    int sparseMatrixItemCount;
    struct SparseMatrixPolynomialTerm *sparseMatrixSwapValue;
};
void create(struct sparseMatrixState * sparseMatrixCurrentNode)
{
    cout<<"Enter number of elements ";
    cin>>sparseMatrixCurrentNode->sparseMatrixItemCount;
    cout<<endl;
    sparseMatrixCurrentNode->sparseMatrixSwapValue=new struct SparseMatrixPolynomialTerm [sparseMatrixCurrentNode->sparseMatrixItemCount];
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixCurrentNode->sparseMatrixItemCount;sparseMatrixScanIndex++)
    {
        cout<<"Enter "<<sparseMatrixScanIndex<<"th term coeff ";
        cin>>sparseMatrixCurrentNode->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState2;
        cout<<"Enter "<<sparseMatrixScanIndex<<"th term expo ";
        cin>>sparseMatrixCurrentNode->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState3;
        cout<<endl;
    }
}
void display(struct sparseMatrixState *sparseMatrixCurrentNode)
{
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixCurrentNode->sparseMatrixItemCount;sparseMatrixScanIndex++)
    {
        cout<<sparseMatrixCurrentNode->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState2<<"x"<<sparseMatrixCurrentNode->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState3;
        if(sparseMatrixScanIndex!=(sparseMatrixCurrentNode->sparseMatrixItemCount)-1)
            cout<<" + ";
    }
    cout<<endl;
}
struct sparseMatrixState addition(struct sparseMatrixState *sparseMatrixState5,struct sparseMatrixState *sparseMatrixState6)
{
    int sparseMatrixScanIndex=0,sparseMatrixWriteIndex=0,sparseMatrixProbeIndex=0;
    struct sparseMatrixState sparseMatrixState4;
    sparseMatrixState4.sparseMatrixSwapValue=new SparseMatrixPolynomialTerm[sparseMatrixState5->sparseMatrixItemCount + sparseMatrixState6->sparseMatrixItemCount];
    while(sparseMatrixScanIndex<sparseMatrixState5->sparseMatrixItemCount && sparseMatrixWriteIndex<sparseMatrixState6->sparseMatrixItemCount)
    {
        if(sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState3>sparseMatrixState6->sparseMatrixSwapValue[sparseMatrixWriteIndex].sparseMatrixState3)
            sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex++]=sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex++];
        else if(sparseMatrixState6->sparseMatrixSwapValue[sparseMatrixWriteIndex].sparseMatrixState3>sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState3)
            sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex++]=sparseMatrixState6->sparseMatrixSwapValue[sparseMatrixWriteIndex++];
        else
        {
            sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex].sparseMatrixState3=sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex].sparseMatrixState3;
            sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex++].sparseMatrixState2=sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex++].sparseMatrixState2+sparseMatrixState6->sparseMatrixSwapValue[sparseMatrixWriteIndex++].sparseMatrixState2;
        }
    }
    for(;sparseMatrixScanIndex<sparseMatrixState5->sparseMatrixItemCount;sparseMatrixScanIndex++)
        sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex++]=sparseMatrixState5->sparseMatrixSwapValue[sparseMatrixScanIndex];
    for(;sparseMatrixWriteIndex<sparseMatrixState6->sparseMatrixItemCount;sparseMatrixWriteIndex++)
        sparseMatrixState4.sparseMatrixSwapValue[sparseMatrixProbeIndex++]=sparseMatrixState6->sparseMatrixSwapValue[sparseMatrixWriteIndex];
    sparseMatrixState4.sparseMatrixItemCount=sparseMatrixProbeIndex;
    return sparseMatrixState4;
}
int main()
{
    struct sparseMatrixState sparseMatrixState5,sparseMatrixState6,sparseMatrixState4;
    create(&sparseMatrixState5);
    display(&sparseMatrixState5);
    create(&sparseMatrixState6);
    display(&sparseMatrixState6);
    sparseMatrixState4=addition(&sparseMatrixState5,&sparseMatrixState6);
    display(&sparseMatrixState4);
    return 0;
}