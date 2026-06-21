#include<stdio.h>
struct matrixDiagonalMatrix
{
    int itemCount;
    int firstItems[10];
};
void set(struct matrixDiagonalMatrix *primaryValue,int scanIndex,int writeIndex,int inputValue)
{
    if(scanIndex==writeIndex)
    {
        primaryValue->firstItems[scanIndex-1]=inputValue;
    }

}
int get(struct matrixDiagonalMatrix *primaryValue,int scanIndex,int writeIndex)
{
    if(scanIndex==writeIndex)
        primaryValue->firstItems[scanIndex-1];
    else
        return 0;
}
void Display(struct matrixDiagonalMatrix *primaryValue)
{
    for(int scanIndex=0;scanIndex<(primaryValue->itemCount);scanIndex++)
    {
        for(int writeIndex=0;writeIndex<(primaryValue->itemCount);writeIndex++)
        {
            if(scanIndex==writeIndex)
            printf("%d ",primaryValue->firstItems[scanIndex]);
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    struct matrixDiagonalMatrix columnCount;
    columnCount.itemCount=4;
    set(&columnCount,1,1,7);
    set(&columnCount,2,2,5);
    set(&columnCount,3,3,6);
    set(&columnCount,4,4,3);
    Display(&columnCount);

    return 0;
}