#include<stdio.h>
#include<stdlib.h>
struct SparseMatrixEntry{
    int sparseMatrixScanIndex;
    int sparseMatrixWriteIndex;
    int sparseMatrixInputValue;
};
struct sparseMatrixState
{
    int sparseMatrixColumnCount;
    int sparseMatrixItemCount;
    int sparseMatrixState2;
    struct SparseMatrixEntry *sparseMatrixState3;
};
void create(struct sparseMatrixState *sparseMatrixWorkingText)
{
    printf("Enter Dimension of sparse natrix ");
    scanf("%d%d",&sparseMatrixWorkingText->sparseMatrixColumnCount,&sparseMatrixWorkingText->sparseMatrixItemCount);
    printf("\nEnter number of non-zero element ");
    scanf("%d",&sparseMatrixWorkingText->sparseMatrixState2);
    sparseMatrixWorkingText->sparseMatrixState3=(struct SparseMatrixEntry *)malloc(sparseMatrixWorkingText->sparseMatrixState2*sizeof(struct SparseMatrixEntry));
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixWorkingText->sparseMatrixState2;sparseMatrixScanIndex++)
    {
        printf("\nEnter %d non-zero elememt ",sparseMatrixScanIndex+1);
        scanf("%d%d%d",&sparseMatrixWorkingText->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixScanIndex,&sparseMatrixWorkingText->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixWriteIndex,&sparseMatrixWorkingText->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixInputValue);
    }
}
void display(struct sparseMatrixState sparseMatrixWorkingText)
{
    int sparseMatrixProbeIndex=0;
    for(int sparseMatrixScanIndex=0;sparseMatrixScanIndex<sparseMatrixWorkingText.sparseMatrixColumnCount;sparseMatrixScanIndex++)
    {
        for(int sparseMatrixWriteIndex=0;sparseMatrixWriteIndex<sparseMatrixWorkingText.sparseMatrixItemCount;sparseMatrixWriteIndex++)
        {
            if(sparseMatrixScanIndex==sparseMatrixWorkingText.sparseMatrixState3[sparseMatrixProbeIndex].sparseMatrixScanIndex && sparseMatrixWriteIndex==sparseMatrixWorkingText.sparseMatrixState3[sparseMatrixProbeIndex].sparseMatrixWriteIndex)
            printf("%d ",sparseMatrixWorkingText.sparseMatrixState3[sparseMatrixProbeIndex++].sparseMatrixInputValue);
            else
            printf("0 ");
        }
        printf("\n");
    }
}

int main()
{
    struct sparseMatrixState sparseMatrixWorkingText;
    create(&sparseMatrixWorkingText);
    display(sparseMatrixWorkingText);
    return 0;
}