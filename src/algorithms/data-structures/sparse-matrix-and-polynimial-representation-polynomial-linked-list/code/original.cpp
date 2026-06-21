#include<iostream>
#include<stdlib.h>
#include<math.h>
using namespace std;
struct Node{
    int sparseMatrixCoeff;
    int sparseMatrixExp;
    struct Node *nextLink;
}*sparseMatrixPoly=NULL;

void create()
{
    struct Node *swapValue=NULL,*lastNode=NULL;
    int sparseMatrixNum;
    cout<<"Enter the number of polynomials ";
    cin>>sparseMatrixNum;
    
    cout<<"Enter the coefficient and exponent of each polynomial ";
    for(int scanIndex=0;scanIndex<sparseMatrixNum;scanIndex++)
    {
        swapValue=new Node;
        cin>>swapValue->sparseMatrixCoeff>>swapValue->sparseMatrixExp;
        if(sparseMatrixPoly==NULL)
        {
            sparseMatrixPoly=lastNode=swapValue;
        }
        else{
            lastNode->nextLink=swapValue;
            lastNode=swapValue;
        }
        lastNode->nextLink=NULL;
    }
}

void display(struct Node *currentNode)
{
    while(currentNode)
    {
        cout<<currentNode->sparseMatrixCoeff<<"x**"<<currentNode->sparseMatrixExp<<" + ";
        currentNode=currentNode->nextLink;
    }
}

long eva(struct Node *currentNode,int inputValue)
{
    long sparseMatrixVal=0;
    while(currentNode)
    {
        sparseMatrixVal+=currentNode->sparseMatrixCoeff*pow(inputValue,currentNode->sparseMatrixExp);
        currentNode=currentNode->nextLink;
    }
    return sparseMatrixVal;
}
int main()
{
    create();
    display(sparseMatrixPoly);
    cout<<"\nAnswer of Evaluation"<<eva(sparseMatrixPoly,1);
}