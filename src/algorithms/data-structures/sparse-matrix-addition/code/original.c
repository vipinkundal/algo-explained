#include<stdio.h>
#include<stdlib.h>
struct Element{
    int scanIndex;
    int writeIndex;
    int inputValue;
};
struct sparseMatrixSparse
{
    int columnCount;
    int itemCount;
    int sparseMatrixNum;
    struct Element *sparseMatrixElm;
};
void create(struct sparseMatrixSparse *workingText)
{
    printf("Enter Dimension of sparse matrix ");
    scanf("%d%d",&workingText->columnCount,&workingText->itemCount);
    printf("\nEnter number of non-zero element ");
    scanf("%d",&workingText->sparseMatrixNum);
    workingText->sparseMatrixElm=(struct Element *)malloc(workingText->sparseMatrixNum*sizeof(struct Element));
    for(int scanIndex=0;scanIndex<workingText->sparseMatrixNum;scanIndex++)
    {
        printf("\nEnter %d non-zero elememt ",scanIndex+1);
        scanf("%d%d%d",&workingText->sparseMatrixElm[scanIndex].scanIndex,&workingText->sparseMatrixElm[scanIndex].writeIndex,&workingText->sparseMatrixElm[scanIndex].inputValue);
    }
}
void display(struct sparseMatrixSparse workingText)
{
    int probeIndex=0;
    for(int scanIndex=0;scanIndex<workingText.columnCount;scanIndex++)
    {
        for(int writeIndex=0;writeIndex<workingText.itemCount;writeIndex++)
        {
            if(scanIndex==workingText.sparseMatrixElm[probeIndex].scanIndex && writeIndex==workingText.sparseMatrixElm[probeIndex].writeIndex)
            printf("%d ",workingText.sparseMatrixElm[probeIndex++].inputValue);
            else
            printf("0 ");
        }
        printf("\n");
    }
}
struct sparseMatrixSparse *add(struct sparseMatrixSparse *sparseMatrixS1,struct sparseMatrixSparse *sparseMatrixS2)
{
    int scanIndex=0,writeIndex=0,probeIndex=0;//i for referrring elements of array of struct Element pointed by elm  in sparse structure pointed by s1
                    // j for s2 and k for sum
    if(sparseMatrixS1->columnCount!=sparseMatrixS2->columnCount || sparseMatrixS1->itemCount!=sparseMatrixS2->itemCount)
        return 0;
    struct sparseMatrixSparse *sparseMatrixSum=(struct sparseMatrixSparse *)malloc(sizeof(struct sparseMatrixSparse));
    sparseMatrixSum->columnCount=sparseMatrixS1->columnCount;
    sparseMatrixSum->itemCount=sparseMatrixS1->itemCount;
    sparseMatrixSum->sparseMatrixElm=(struct Element *)malloc(sizeof(struct Element)*sparseMatrixS1->sparseMatrixNum+sparseMatrixS2->sparseMatrixNum);
    while (scanIndex<sparseMatrixS1->sparseMatrixNum && writeIndex<sparseMatrixS2->sparseMatrixNum)
    {
        if(sparseMatrixS1->sparseMatrixElm[scanIndex].scanIndex<sparseMatrixS2->sparseMatrixElm[writeIndex].scanIndex)// row of s1 is less than s2
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS1->sparseMatrixElm[scanIndex++];

        else if(sparseMatrixS1->sparseMatrixElm[scanIndex].scanIndex>sparseMatrixS2->sparseMatrixElm[writeIndex].scanIndex)//row of s2 is less than s1
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS2->sparseMatrixElm[writeIndex++];

        else
            if(sparseMatrixS1->sparseMatrixElm[scanIndex].writeIndex<sparseMatrixS2->sparseMatrixElm[writeIndex].writeIndex)//row of s1 and s2 is same but column of s1 is less than s2
                sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS1->sparseMatrixElm[scanIndex++];

            else if(sparseMatrixS1->sparseMatrixElm[scanIndex].writeIndex>sparseMatrixS2->sparseMatrixElm[writeIndex].writeIndex)//row of s1 and s2 is same but column of s2 is less than s1
            sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS2->sparseMatrixElm[writeIndex++];
            
            else//row and column both are same
            {
                sparseMatrixSum->sparseMatrixElm[probeIndex]=sparseMatrixS1->sparseMatrixElm[scanIndex++];//copy comple s1 struct elm elements
                sparseMatrixSum->sparseMatrixElm[probeIndex++].inputValue=sparseMatrixSum->sparseMatrixElm[probeIndex].inputValue+sparseMatrixS2->sparseMatrixElm[writeIndex++].inputValue;//add s1 and s2 values
            }
    }
    //remaining elements 
    for(;scanIndex<sparseMatrixS1->sparseMatrixNum;scanIndex++)
        sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS1->sparseMatrixElm[scanIndex];

    for(;writeIndex<sparseMatrixS2->sparseMatrixNum;writeIndex++)
        sparseMatrixSum->sparseMatrixElm[probeIndex++]=sparseMatrixS2->sparseMatrixElm[writeIndex];

    sparseMatrixSum->sparseMatrixNum=probeIndex;
    return sparseMatrixSum;
    
}
int main()
{
    struct sparseMatrixSparse sparseMatrixS1;
    create(&sparseMatrixS1);
    display(sparseMatrixS1);
    struct sparseMatrixSparse sparseMatrixS2;
    create(&sparseMatrixS2);
    display(sparseMatrixS2);
    struct sparseMatrixSparse *sparseMatrixSum=add(&sparseMatrixS1,&sparseMatrixS2);
    printf("\n\n");
    display(*sparseMatrixSum);
    
    return 0;
}