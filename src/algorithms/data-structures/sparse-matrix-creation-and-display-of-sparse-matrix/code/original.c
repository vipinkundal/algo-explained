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
    printf("Enter Dimension of sparse natrix ");
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

int main()
{
    struct sparseMatrixSparse workingText;
    create(&workingText);
    display(workingText);
    return 0;
}