#include<iostream>
#include<stdlib.h>
#include<math.h>
using namespace std;
struct SparseMatrixNode{
    int sparseMatrixState;
    int sparseMatrixState3;
    struct SparseMatrixNode *sparseMatrixNextLink;
}*sparseMatrixState2=NULL;

void create()
{
    struct SparseMatrixNode *sparseMatrixSwapValue=NULL,*sparseMatrixLastNode=NULL;
    int sparseMatrixState4;
    cout<<"Enter the number of polynomials ";
    cin>>sparseMatrixState4;
    
    cout<<"Enter the coefficient and exponent of each polynomial ";
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixState4;sparseMatrixScanIndex++)
    {
        sparseMatrixSwapValue=new SparseMatrixNode;
        cin>>sparseMatrixSwapValue->sparseMatrixState>>sparseMatrixSwapValue->sparseMatrixState3;
        if(sparseMatrixState2==NULL)
        {
            sparseMatrixState2=sparseMatrixLastNode=sparseMatrixSwapValue;
        }
        else{
            sparseMatrixLastNode->sparseMatrixNextLink=sparseMatrixSwapValue;
            sparseMatrixLastNode=sparseMatrixSwapValue;
        }
        sparseMatrixLastNode->sparseMatrixNextLink=NULL;
    }
}

void display(struct SparseMatrixNode *sparseMatrixCurrentNode)
{
    while(sparseMatrixCurrentNode)
    {
        cout<<sparseMatrixCurrentNode->sparseMatrixState<<"x**"<<sparseMatrixCurrentNode->sparseMatrixState3<<" + ";
        sparseMatrixCurrentNode=sparseMatrixCurrentNode->sparseMatrixNextLink;
    }
}

long eva(struct SparseMatrixNode *sparseMatrixCurrentNode,int sparseMatrixInputValue)
{
    long sparseMatrixState5=0;
    while(sparseMatrixCurrentNode)
    {
        sparseMatrixState5+=sparseMatrixCurrentNode->sparseMatrixState*pow(sparseMatrixInputValue,sparseMatrixCurrentNode->sparseMatrixState3);
        sparseMatrixCurrentNode=sparseMatrixCurrentNode->sparseMatrixNextLink;
    }
    return sparseMatrixState5;
}
int main()
{
    create();
    display(sparseMatrixState2);
    cout<<"\nAnswer of Evaluation"<<eva(sparseMatrixState2,1);
}