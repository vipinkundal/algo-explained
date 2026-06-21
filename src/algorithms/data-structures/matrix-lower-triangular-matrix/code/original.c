#include<stdio.h>
#include<stdlib.h>
struct matrixLowerState{ //structure of matrix
    int matrixLowerItemCount;
    int *matrixLowerFirstItems;
};
void set(struct matrixLowerState *matrixLowerPrimaryValue,int matrixLowerScanIndex,int matrixLowerWriteIndex,int matrixLowerInputValue)//set for row major mapping
{
    
    if(matrixLowerScanIndex>=matrixLowerWriteIndex)
    {
        int matrixLowerSwapValue=((matrixLowerScanIndex*(matrixLowerScanIndex-1)/2)+(matrixLowerWriteIndex-1));// it means sum of i-1 rows then   the jth element in matrix 
        matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerSwapValue]=matrixLowerInputValue;
    }

}

int get(struct matrixLowerState *matrixLowerPrimaryValue,int matrixLowerScanIndex,int matrixLowerWriteIndex)//get for row major mapping
{
    
    if(matrixLowerScanIndex>=matrixLowerWriteIndex)
    {
        int matrixLowerSwapValue=((matrixLowerScanIndex*(matrixLowerScanIndex-1)/2)+(matrixLowerWriteIndex-1));
        return matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerSwapValue];
    }
    else
        return 0;
}
void Display(struct matrixLowerState *matrixLowerPrimaryValue)//Display for row major mapping
{
    for(int matrixLowerScanIndex=1;matrixLowerScanIndex<=(matrixLowerPrimaryValue->matrixLowerItemCount);matrixLowerScanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int matrixLowerWriteIndex=1;matrixLowerWriteIndex<=(matrixLowerPrimaryValue->matrixLowerItemCount);matrixLowerWriteIndex++)
        {
            if(matrixLowerScanIndex>=matrixLowerWriteIndex)
            {
                int matrixLowerSwapValue=((matrixLowerScanIndex*(matrixLowerScanIndex-1)/2)+(matrixLowerWriteIndex-1));
                printf("%d ",matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerSwapValue]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
void cset(struct matrixLowerState *matrixLowerPrimaryValue,int matrixLowerScanIndex,int matrixLowerWriteIndex,int matrixLowerInputValue)//set for column major mapping
{   
    if(matrixLowerScanIndex>=matrixLowerWriteIndex)
    {
        if(matrixLowerScanIndex>=matrixLowerWriteIndex)
        {
            matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerPrimaryValue->matrixLowerItemCount*(matrixLowerWriteIndex-1)-(matrixLowerWriteIndex-1)*(matrixLowerWriteIndex-2)/2+(matrixLowerScanIndex-matrixLowerWriteIndex)]=matrixLowerInputValue;
        }

    }

}

int cget(struct matrixLowerState *matrixLowerPrimaryValue,int matrixLowerScanIndex,int matrixLowerWriteIndex)//get for column major mapping
{
    
    if(matrixLowerScanIndex>=matrixLowerWriteIndex)
    {
        return matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerPrimaryValue->matrixLowerItemCount*(matrixLowerWriteIndex-1)-(matrixLowerWriteIndex-1)*(matrixLowerWriteIndex-2)/2+(matrixLowerScanIndex-matrixLowerWriteIndex)];
    }
    else
        return 0;
}
void cDisplay(struct matrixLowerState *matrixLowerPrimaryValue)//Display column major mapping
{
    for(int matrixLowerScanIndex=1;matrixLowerScanIndex<=(matrixLowerPrimaryValue->matrixLowerItemCount);matrixLowerScanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int matrixLowerWriteIndex=1;matrixLowerWriteIndex<=(matrixLowerPrimaryValue->matrixLowerItemCount);matrixLowerWriteIndex++)
        {
            if(matrixLowerScanIndex>=matrixLowerWriteIndex)
            {
                printf("%d ",matrixLowerPrimaryValue->matrixLowerFirstItems[matrixLowerPrimaryValue->matrixLowerItemCount*(matrixLowerWriteIndex-1)-(matrixLowerWriteIndex-1)*(matrixLowerWriteIndex-2)/2+(matrixLowerScanIndex-matrixLowerWriteIndex)]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    int matrixLowerState2,matrixLowerInputValue;
    //using row major formula
    struct matrixLowerState matrixLowerColumnCount;
    printf("Enter number dimension of matrix ");
    scanf("%d",&matrixLowerState2);
    matrixLowerColumnCount.matrixLowerItemCount=matrixLowerState2;
    matrixLowerColumnCount.matrixLowerFirstItems=(int *)malloc((matrixLowerColumnCount.matrixLowerItemCount*(matrixLowerColumnCount.matrixLowerItemCount+1)/2)*sizeof(int));//as it contains this many number of elements
    printf("Enter the elements ");
    for(int matrixLowerScanIndex=1;matrixLowerScanIndex<=matrixLowerState2;matrixLowerScanIndex++)
    {
        for(int matrixLowerWriteIndex=1;matrixLowerWriteIndex<=matrixLowerState2;matrixLowerWriteIndex++)
        {
            scanf("%d",&matrixLowerInputValue);
            set(&matrixLowerColumnCount,matrixLowerScanIndex,matrixLowerWriteIndex,matrixLowerInputValue);
        }
    }
    
    Display(&matrixLowerColumnCount);
    printf("\n\n");


    //using column major formula
    printf("Enter number of elements ");
    scanf("%d",&matrixLowerState2);
    matrixLowerColumnCount.matrixLowerItemCount=matrixLowerState2;
    matrixLowerColumnCount.matrixLowerFirstItems=(int *)malloc((matrixLowerColumnCount.matrixLowerItemCount*(matrixLowerColumnCount.matrixLowerItemCount+1)/2)*sizeof(int));
    printf("Enter the elements ");
    for(int matrixLowerScanIndex=1;matrixLowerScanIndex<=matrixLowerState2;matrixLowerScanIndex++)
    {
        for(int matrixLowerWriteIndex=1;matrixLowerWriteIndex<=matrixLowerState2;matrixLowerWriteIndex++)
        {
            scanf("%d",&matrixLowerInputValue);
            cset(&matrixLowerColumnCount,matrixLowerScanIndex,matrixLowerWriteIndex,matrixLowerInputValue);
        }
    }
    
    cDisplay(&matrixLowerColumnCount);
    
    return 0;
}