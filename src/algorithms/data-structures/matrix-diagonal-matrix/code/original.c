#include<stdio.h>
struct matrixDiagonalState
{
    int matrixDiagonalItemCount;
    int matrixDiagonalFirstItems[10];
};
void set(struct matrixDiagonalState *matrixDiagonalPrimaryValue,int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex,int matrixDiagonalInputValue)
{
    if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
    {
        matrixDiagonalPrimaryValue->matrixDiagonalFirstItems[matrixDiagonalScanIndex-1]=matrixDiagonalInputValue;
    }

}
int get(struct matrixDiagonalState *matrixDiagonalPrimaryValue,int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex)
{
    if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
        matrixDiagonalPrimaryValue->matrixDiagonalFirstItems[matrixDiagonalScanIndex-1];
    else
        return 0;
}
void Display(struct matrixDiagonalState *matrixDiagonalPrimaryValue)
{
    for(int matrixDiagonalScanIndex=0;matrixDiagonalScanIndex<(matrixDiagonalPrimaryValue->matrixDiagonalItemCount);matrixDiagonalScanIndex++)
    {
        for(int matrixDiagonalWriteIndex=0;matrixDiagonalWriteIndex<(matrixDiagonalPrimaryValue->matrixDiagonalItemCount);matrixDiagonalWriteIndex++)
        {
            if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
            printf("%d ",matrixDiagonalPrimaryValue->matrixDiagonalFirstItems[matrixDiagonalScanIndex]);
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    struct matrixDiagonalState matrixDiagonalColumnCount;
    matrixDiagonalColumnCount.matrixDiagonalItemCount=4;
    set(&matrixDiagonalColumnCount,1,1,7);
    set(&matrixDiagonalColumnCount,2,2,5);
    set(&matrixDiagonalColumnCount,3,3,6);
    set(&matrixDiagonalColumnCount,4,4,3);
    Display(&matrixDiagonalColumnCount);

    return 0;
}