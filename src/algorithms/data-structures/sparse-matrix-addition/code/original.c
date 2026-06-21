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
    printf("Enter Dimension of sparse matrix ");
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
struct sparseMatrixState *add(struct sparseMatrixState *sparseMatrixState5,struct sparseMatrixState *sparseMatrixState6)
{
    int sparseMatrixScanIndex=0,sparseMatrixWriteIndex=0,sparseMatrixProbeIndex=0;//i for referrring elements of array of struct Element pointed by elm  in sparse structure pointed by s1
                    // j for s2 and k for sum
    if(sparseMatrixState5->sparseMatrixColumnCount!=sparseMatrixState6->sparseMatrixColumnCount || sparseMatrixState5->sparseMatrixItemCount!=sparseMatrixState6->sparseMatrixItemCount)
        return 0;
    struct sparseMatrixState *sparseMatrixState4=(struct sparseMatrixState *)malloc(sizeof(struct sparseMatrixState));
    sparseMatrixState4->sparseMatrixColumnCount=sparseMatrixState5->sparseMatrixColumnCount;
    sparseMatrixState4->sparseMatrixItemCount=sparseMatrixState5->sparseMatrixItemCount;
    sparseMatrixState4->sparseMatrixState3=(struct SparseMatrixEntry *)malloc(sizeof(struct SparseMatrixEntry)*sparseMatrixState5->sparseMatrixState2+sparseMatrixState6->sparseMatrixState2);
    while (sparseMatrixScanIndex<sparseMatrixState5->sparseMatrixState2 && sparseMatrixWriteIndex<sparseMatrixState6->sparseMatrixState2)
    {
        if(sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixScanIndex<sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex].sparseMatrixScanIndex)// row of s1 is less than s2
            sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex++];

        else if(sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixScanIndex>sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex].sparseMatrixScanIndex)//row of s2 is less than s1
            sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex++];

        else
            if(sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixWriteIndex<sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex].sparseMatrixWriteIndex)//row of s1 and s2 is same but column of s1 is less than s2
                sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex++];

            else if(sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex].sparseMatrixWriteIndex>sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex].sparseMatrixWriteIndex)//row of s1 and s2 is same but column of s2 is less than s1
            sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex++];
            
            else//row and column both are same
            {
                sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex]=sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex++];//copy comple s1 struct elm elements
                sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++].sparseMatrixInputValue=sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex].sparseMatrixInputValue+sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex++].sparseMatrixInputValue;//add s1 and s2 values
            }
    }
    //remaining elements 
    for(;sparseMatrixScanIndex<sparseMatrixState5->sparseMatrixState2;sparseMatrixScanIndex++)
        sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState5->sparseMatrixState3[sparseMatrixScanIndex];

    for(;sparseMatrixWriteIndex<sparseMatrixState6->sparseMatrixState2;sparseMatrixWriteIndex++)
        sparseMatrixState4->sparseMatrixState3[sparseMatrixProbeIndex++]=sparseMatrixState6->sparseMatrixState3[sparseMatrixWriteIndex];

    sparseMatrixState4->sparseMatrixState2=sparseMatrixProbeIndex;
    return sparseMatrixState4;
    
}
int main()
{
    struct sparseMatrixState sparseMatrixState5;
    create(&sparseMatrixState5);
    display(sparseMatrixState5);
    struct sparseMatrixState sparseMatrixState6;
    create(&sparseMatrixState6);
    display(sparseMatrixState6);
    struct sparseMatrixState *sparseMatrixState4=add(&sparseMatrixState5,&sparseMatrixState6);
    printf("\n\n");
    display(*sparseMatrixState4);
    
    return 0;
}