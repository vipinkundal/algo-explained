#include<iostream>
#include<stdlib.h>
using namespace std;
class Node{
    public:
    int rowIndex;
    int sparseMatrixColumn;
    int storedValue;
    Node *nextLink;
};
class Sparse_Matrix{
    private:
    Node *firstNode=NULL;
    int columnCount,itemCount;
    public:
    Sparse_Matrix();
    void Display();
    void Merge(Sparse_Matrix);
    Node *GetHead(){
        return firstNode;
    }
};
void Sparse_Matrix::Merge(Sparse_Matrix secondaryValue)
{
    Node *sparseMatrixFirst1=firstNode,*sparseMatrixFirst2=secondaryValue.GetHead(),*sparseMatrixFirst3=NULL,*currentNode=NULL,*nextNode=NULL;
    while (sparseMatrixFirst1 && sparseMatrixFirst2)
    {
        if(sparseMatrixFirst1->rowIndex<sparseMatrixFirst2->rowIndex)
        {
            currentNode=sparseMatrixFirst1;
            if(nextNode)
                nextNode->nextLink=currentNode;
            else
                sparseMatrixFirst3=currentNode;
            nextNode=currentNode;
            sparseMatrixFirst1=sparseMatrixFirst1->nextLink;
            currentNode->nextLink=NULL;
        }
        else if(sparseMatrixFirst2->rowIndex<sparseMatrixFirst1->rowIndex)
        {
            currentNode=sparseMatrixFirst2;
            if(nextNode)
                nextNode->nextLink=currentNode;
            else
                sparseMatrixFirst3=currentNode;
            nextNode=currentNode;
            sparseMatrixFirst2=sparseMatrixFirst2->nextLink;
            currentNode->nextLink=NULL;
        }
        else
        {   
            if(sparseMatrixFirst1->sparseMatrixColumn<sparseMatrixFirst2->sparseMatrixColumn)
            {
                currentNode=sparseMatrixFirst1;
                if(nextNode)
                    nextNode->nextLink=currentNode;
                else
                    sparseMatrixFirst3=currentNode;
                nextNode=currentNode;
                sparseMatrixFirst1=sparseMatrixFirst1->nextLink;
                currentNode->nextLink=NULL;
            }
            else if(sparseMatrixFirst2->sparseMatrixColumn<sparseMatrixFirst1->sparseMatrixColumn)
            {
                currentNode=sparseMatrixFirst2;
                if(nextNode)
                    nextNode->nextLink=currentNode;
                else
                    sparseMatrixFirst3=currentNode;
                nextNode=currentNode;
                sparseMatrixFirst2=sparseMatrixFirst2->nextLink;
                currentNode->nextLink=NULL;
            }
            else{
                currentNode=sparseMatrixFirst1;
                if(nextNode)
                    nextNode->nextLink=currentNode;
                else
                    sparseMatrixFirst3=currentNode;
                nextNode=currentNode;
                currentNode->storedValue=sparseMatrixFirst1->storedValue+sparseMatrixFirst2->storedValue;
                sparseMatrixFirst1=sparseMatrixFirst1->nextLink;
                Node *temporaryValue=sparseMatrixFirst2;
                sparseMatrixFirst2=sparseMatrixFirst2->nextLink;
                temporaryValue->nextLink=NULL;
                currentNode->nextLink=NULL;
            }
        }
    }
    if(sparseMatrixFirst1)
        currentNode->nextLink=sparseMatrixFirst1;
    else
        currentNode->nextLink=sparseMatrixFirst2;
    firstNode=sparseMatrixFirst3;
    
}
Sparse_Matrix::Sparse_Matrix()
    {

        int scanIndex,writeIndex,nodeValue;
        cout<<"Enter the dimension of Matrix ";
        cin>>columnCount>>itemCount;
        Node *currentNode=NULL,*nextNode=NULL;
        cout<<"Enter the Matrix: \n";

        for(int scanIndex=0;scanIndex<columnCount;scanIndex++)
        {
            for(int writeIndex=0;writeIndex<itemCount;writeIndex++)
            {
                cin>>nodeValue;
                if(nodeValue!=0)
                {
                   
                    currentNode=new Node;
                    if(nextNode!=NULL)
                        nextNode->nextLink=currentNode;
                    else
                        firstNode=currentNode;
                    currentNode->storedValue=nodeValue;
                    currentNode->rowIndex=scanIndex;
                    currentNode->sparseMatrixColumn=writeIndex;
                    currentNode->nextLink=NULL;
                    nextNode=currentNode;

                }
            }
        }

    }
void Sparse_Matrix::Display()
{
    Node *currentNode=NULL;
    currentNode=firstNode;
    for(int scanIndex=0;scanIndex<columnCount;scanIndex++)
    {
        for(int writeIndex=0;writeIndex<itemCount;writeIndex++)
        {   
            if(currentNode && currentNode->rowIndex==scanIndex && currentNode->sparseMatrixColumn==writeIndex)
            {
                cout<<currentNode->storedValue<< " ";
                currentNode=currentNode->nextLink;
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

    Sparse_Matrix primaryValue;
    Sparse_Matrix secondaryValue;

    primaryValue.Merge(secondaryValue);

    primaryValue.Display();
    return 0;
}