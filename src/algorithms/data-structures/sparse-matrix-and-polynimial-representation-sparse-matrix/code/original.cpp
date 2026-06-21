#include<iostream>
#include<stdlib.h>
using namespace std;
class SparseMatrixNode{
    public:
    int sparseMatrixRowIndex;
    int sparseMatrixState;
    int sparseMatrixStoredValue;
    SparseMatrixNode *sparseMatrixNextLink;
};
class SparseMatrixSparseMatrix{
    private:
    SparseMatrixNode *sparseMatrixFirstNode=NULL;
    int sparseMatrixColumnCount,sparseMatrixItemCount;
    public:
    SparseMatrixSparseMatrix();
    void Display();
    void Merge(SparseMatrixSparseMatrix);
    SparseMatrixNode *GetHead(){
        return sparseMatrixFirstNode;
    }
};
void SparseMatrixSparseMatrix::Merge(SparseMatrixSparseMatrix sparseMatrixSecondaryValue)
{
    SparseMatrixNode *sparseMatrixState2=sparseMatrixFirstNode,*sparseMatrixState3=sparseMatrixSecondaryValue.GetHead(),*sparseMatrixState4=NULL,*sparseMatrixCurrentNode=NULL,*sparseMatrixNextNode=NULL;
    while (sparseMatrixState2 && sparseMatrixState3)
    {
        if(sparseMatrixState2->sparseMatrixRowIndex<sparseMatrixState3->sparseMatrixRowIndex)
        {
            sparseMatrixCurrentNode=sparseMatrixState2;
            if(sparseMatrixNextNode)
                sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
            else
                sparseMatrixState4=sparseMatrixCurrentNode;
            sparseMatrixNextNode=sparseMatrixCurrentNode;
            sparseMatrixState2=sparseMatrixState2->sparseMatrixNextLink;
            sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
        }
        else if(sparseMatrixState3->sparseMatrixRowIndex<sparseMatrixState2->sparseMatrixRowIndex)
        {
            sparseMatrixCurrentNode=sparseMatrixState3;
            if(sparseMatrixNextNode)
                sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
            else
                sparseMatrixState4=sparseMatrixCurrentNode;
            sparseMatrixNextNode=sparseMatrixCurrentNode;
            sparseMatrixState3=sparseMatrixState3->sparseMatrixNextLink;
            sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
        }
        else
        {   
            if(sparseMatrixState2->sparseMatrixState<sparseMatrixState3->sparseMatrixState)
            {
                sparseMatrixCurrentNode=sparseMatrixState2;
                if(sparseMatrixNextNode)
                    sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
                else
                    sparseMatrixState4=sparseMatrixCurrentNode;
                sparseMatrixNextNode=sparseMatrixCurrentNode;
                sparseMatrixState2=sparseMatrixState2->sparseMatrixNextLink;
                sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
            }
            else if(sparseMatrixState3->sparseMatrixState<sparseMatrixState2->sparseMatrixState)
            {
                sparseMatrixCurrentNode=sparseMatrixState3;
                if(sparseMatrixNextNode)
                    sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
                else
                    sparseMatrixState4=sparseMatrixCurrentNode;
                sparseMatrixNextNode=sparseMatrixCurrentNode;
                sparseMatrixState3=sparseMatrixState3->sparseMatrixNextLink;
                sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
            }
            else{
                sparseMatrixCurrentNode=sparseMatrixState2;
                if(sparseMatrixNextNode)
                    sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
                else
                    sparseMatrixState4=sparseMatrixCurrentNode;
                sparseMatrixNextNode=sparseMatrixCurrentNode;
                sparseMatrixCurrentNode->sparseMatrixStoredValue=sparseMatrixState2->sparseMatrixStoredValue+sparseMatrixState3->sparseMatrixStoredValue;
                sparseMatrixState2=sparseMatrixState2->sparseMatrixNextLink;
                SparseMatrixNode *sparseMatrixTemporaryValue=sparseMatrixState3;
                sparseMatrixState3=sparseMatrixState3->sparseMatrixNextLink;
                sparseMatrixTemporaryValue->sparseMatrixNextLink=NULL;
                sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
            }
        }
    }
    if(sparseMatrixState2)
        sparseMatrixCurrentNode->sparseMatrixNextLink=sparseMatrixState2;
    else
        sparseMatrixCurrentNode->sparseMatrixNextLink=sparseMatrixState3;
    sparseMatrixFirstNode=sparseMatrixState4;
    
}
SparseMatrixSparseMatrix::SparseMatrixSparseMatrix()
    {

        int sparseMatrixScanIndex,sparseMatrixWriteIndex,sparseMatrixNodeValue;
        cout<<"Enter the dimension of Matrix ";
        cin>>sparseMatrixColumnCount>>sparseMatrixItemCount;
        SparseMatrixNode *sparseMatrixCurrentNode=NULL,*sparseMatrixNextNode=NULL;
        cout<<"Enter the Matrix: \n";

        for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixColumnCount;sparseMatrixScanIndex++)
        {
            for(int sparseMatrixWriteIndex=0;sparseMatrixWriteIndex<sparseMatrixItemCount;sparseMatrixWriteIndex++)
            {
                cin>>sparseMatrixNodeValue;
                if(sparseMatrixNodeValue!=0)
                {
                   
                    sparseMatrixCurrentNode=new SparseMatrixNode;
                    if(sparseMatrixNextNode!=NULL)
                        sparseMatrixNextNode->sparseMatrixNextLink=sparseMatrixCurrentNode;
                    else
                        sparseMatrixFirstNode=sparseMatrixCurrentNode;
                    sparseMatrixCurrentNode->sparseMatrixStoredValue=sparseMatrixNodeValue;
                    sparseMatrixCurrentNode->sparseMatrixRowIndex=sparseMatrixScanIndex;
                    sparseMatrixCurrentNode->sparseMatrixState=sparseMatrixWriteIndex;
                    sparseMatrixCurrentNode->sparseMatrixNextLink=NULL;
                    sparseMatrixNextNode=sparseMatrixCurrentNode;

                }
            }
        }

    }
void SparseMatrixSparseMatrix::Display()
{
    SparseMatrixNode *sparseMatrixCurrentNode=NULL;
    sparseMatrixCurrentNode=sparseMatrixFirstNode;
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixColumnCount;sparseMatrixScanIndex++)
    {
        for(int sparseMatrixWriteIndex=0;sparseMatrixWriteIndex<sparseMatrixItemCount;sparseMatrixWriteIndex++)
        {   
            if(sparseMatrixCurrentNode && sparseMatrixCurrentNode->sparseMatrixRowIndex==sparseMatrixScanIndex && sparseMatrixCurrentNode->sparseMatrixState==sparseMatrixWriteIndex)
            {
                cout<<sparseMatrixCurrentNode->sparseMatrixStoredValue<< " ";
                sparseMatrixCurrentNode=sparseMatrixCurrentNode->sparseMatrixNextLink;
            }
            else{
                cout<<"0 ";
            }
        }
        cout<<endl;
    }
}
int main()
{

    SparseMatrixSparseMatrix sparseMatrixPrimaryValue;
    SparseMatrixSparseMatrix sparseMatrixSecondaryValue;

    sparseMatrixPrimaryValue.Merge(sparseMatrixSecondaryValue);

    sparseMatrixPrimaryValue.Display();
    return 0;
}