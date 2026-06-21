#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace std;
struct Term
{
    int sparseMatrixCoeff;
    int sparseMatrixExpo;
};
struct sparseMatrixPolynomial
{
    int itemCount;
    struct Term *swapValue;
};
void create(struct sparseMatrixPolynomial * currentNode)
{
    cout<<"Enter number of elements ";
    cin>>currentNode->itemCount;
    cout<<endl;
    currentNode->swapValue=new struct Term [currentNode->itemCount];
    for(int scanIndex=0;scanIndex<currentNode->itemCount;scanIndex++)
    {
        cout<<"Enter "<<scanIndex<<"th term coeff ";
        cin>>currentNode->swapValue[scanIndex].sparseMatrixCoeff;
        cout<<"Enter "<<scanIndex<<"th term expo ";
        cin>>currentNode->swapValue[scanIndex].sparseMatrixExpo;
        cout<<endl;
    }
}
void display(struct sparseMatrixPolynomial *currentNode)
{
    for(int scanIndex=0;scanIndex<currentNode->itemCount;scanIndex++)
    {
        cout<<currentNode->swapValue[scanIndex].sparseMatrixCoeff<<"x"<<currentNode->swapValue[scanIndex].sparseMatrixExpo;
        if(scanIndex!=(currentNode->itemCount)-1)
            cout<<" + ";
    }
    cout<<endl;
}
struct sparseMatrixPolynomial addition(struct sparseMatrixPolynomial *sparseMatrixP1,struct sparseMatrixPolynomial *sparseMatrixP2)
{
    int scanIndex=0,writeIndex=0,probeIndex=0;
    struct sparseMatrixPolynomial sparseMatrixSum;
    sparseMatrixSum.swapValue=new Term[sparseMatrixP1->itemCount + sparseMatrixP2->itemCount];
    while(scanIndex<sparseMatrixP1->itemCount && writeIndex<sparseMatrixP2->itemCount)
    {
        if(sparseMatrixP1->swapValue[scanIndex].sparseMatrixExpo>sparseMatrixP2->swapValue[writeIndex].sparseMatrixExpo)
            sparseMatrixSum.swapValue[probeIndex++]=sparseMatrixP1->swapValue[scanIndex++];
        else if(sparseMatrixP2->swapValue[writeIndex].sparseMatrixExpo>sparseMatrixP1->swapValue[scanIndex].sparseMatrixExpo)
            sparseMatrixSum.swapValue[probeIndex++]=sparseMatrixP2->swapValue[writeIndex++];
        else
        {
            sparseMatrixSum.swapValue[probeIndex].sparseMatrixExpo=sparseMatrixP1->swapValue[scanIndex].sparseMatrixExpo;
            sparseMatrixSum.swapValue[probeIndex++].sparseMatrixCoeff=sparseMatrixP1->swapValue[scanIndex++].sparseMatrixCoeff+sparseMatrixP2->swapValue[writeIndex++].sparseMatrixCoeff;
        }
    }
    for(;scanIndex<sparseMatrixP1->itemCount;scanIndex++)
        sparseMatrixSum.swapValue[probeIndex++]=sparseMatrixP1->swapValue[scanIndex];
    for(;writeIndex<sparseMatrixP2->itemCount;writeIndex++)
        sparseMatrixSum.swapValue[probeIndex++]=sparseMatrixP2->swapValue[writeIndex];
    sparseMatrixSum.itemCount=probeIndex;
    return sparseMatrixSum;
}
int main()
{
    struct sparseMatrixPolynomial sparseMatrixP1,sparseMatrixP2,sparseMatrixSum;
    create(&sparseMatrixP1);
    display(&sparseMatrixP1);
    create(&sparseMatrixP2);
    display(&sparseMatrixP2);
    sparseMatrixSum=addition(&sparseMatrixP1,&sparseMatrixP2);
    display(&sparseMatrixSum);
    return 0;
}