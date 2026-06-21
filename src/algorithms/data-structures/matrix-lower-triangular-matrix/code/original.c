#include<stdio.h>
#include<stdlib.h>
struct matrixLowerMatrix{ //structure of matrix
    int itemCount;
    int *firstItems;
};
void set(struct matrixLowerMatrix *primaryValue,int scanIndex,int writeIndex,int inputValue)//set for row major mapping
{
    
    if(scanIndex>=writeIndex)
    {
        int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));// it means sum of i-1 rows then   the jth element in matrix 
        primaryValue->firstItems[swapValue]=inputValue;
    }

}

int get(struct matrixLowerMatrix *primaryValue,int scanIndex,int writeIndex)//get for row major mapping
{
    
    if(scanIndex>=writeIndex)
    {
        int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));
        return primaryValue->firstItems[swapValue];
    }
    else
        return 0;
}
void Display(struct matrixLowerMatrix *primaryValue)//Display for row major mapping
{
    for(int scanIndex=1;scanIndex<=(primaryValue->itemCount);scanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int writeIndex=1;writeIndex<=(primaryValue->itemCount);writeIndex++)
        {
            if(scanIndex>=writeIndex)
            {
                int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));
                printf("%d ",primaryValue->firstItems[swapValue]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
void cset(struct matrixLowerMatrix *primaryValue,int scanIndex,int writeIndex,int inputValue)//set for column major mapping
{   
    if(scanIndex>=writeIndex)
    {
        if(scanIndex>=writeIndex)
        {
            primaryValue->firstItems[primaryValue->itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)]=inputValue;
        }

    }

}

int cget(struct matrixLowerMatrix *primaryValue,int scanIndex,int writeIndex)//get for column major mapping
{
    
    if(scanIndex>=writeIndex)
    {
        return primaryValue->firstItems[primaryValue->itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)];
    }
    else
        return 0;
}
void cDisplay(struct matrixLowerMatrix *primaryValue)//Display column major mapping
{
    for(int scanIndex=1;scanIndex<=(primaryValue->itemCount);scanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int writeIndex=1;writeIndex<=(primaryValue->itemCount);writeIndex++)
        {
            if(scanIndex>=writeIndex)
            {
                printf("%d ",primaryValue->firstItems[primaryValue->itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    int matrixLowerNum,inputValue;
    //using row major formula
    struct matrixLowerMatrix columnCount;
    printf("Enter number dimension of matrix ");
    scanf("%d",&matrixLowerNum);
    columnCount.itemCount=matrixLowerNum;
    columnCount.firstItems=(int *)malloc((columnCount.itemCount*(columnCount.itemCount+1)/2)*sizeof(int));//as it contains this many number of elements
    printf("Enter the elements ");
    for(int scanIndex=1;scanIndex<=matrixLowerNum;scanIndex++)
    {
        for(int writeIndex=1;writeIndex<=matrixLowerNum;writeIndex++)
        {
            scanf("%d",&inputValue);
            set(&columnCount,scanIndex,writeIndex,inputValue);
        }
    }
    
    Display(&columnCount);
    printf("\n\n");


    //using column major formula
    printf("Enter number of elements ");
    scanf("%d",&matrixLowerNum);
    columnCount.itemCount=matrixLowerNum;
    columnCount.firstItems=(int *)malloc((columnCount.itemCount*(columnCount.itemCount+1)/2)*sizeof(int));
    printf("Enter the elements ");
    for(int scanIndex=1;scanIndex<=matrixLowerNum;scanIndex++)
    {
        for(int writeIndex=1;writeIndex<=matrixLowerNum;writeIndex++)
        {
            scanf("%d",&inputValue);
            cset(&columnCount,scanIndex,writeIndex,inputValue);
        }
    }
    
    cDisplay(&columnCount);
    
    return 0;
}